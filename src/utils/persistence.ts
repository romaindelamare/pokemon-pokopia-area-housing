import type { PokopiaArea, House } from '../types';
import { POKEMON_ORDER } from '../data';
import { INITIAL_AREAS } from '../data';

const LS_KEY = 'pokopia-distribution';

export interface AppState {
  poolIds: string[];
  areas: PokopiaArea[];
}

interface SerializedHouse {
  pokemonIds: string[];
}

interface SerializedArea {
  id: string;
  houses: SerializedHouse[];
}

interface SerializedStateV1 {
  v: 1;
  poolIds: string[];
  areas: SerializedArea[];
}

// v2: pool is omitted — it is derived as POKEMON_ORDER minus all assigned ids.
// Houses are stored as plain string arrays to cut down JSON key overhead.
interface SerializedAreaV2 {
  id: string;
  houses: string[][];
}

interface SerializedStateV2 {
  v: 2;
  areas: SerializedAreaV2[];
}

let _houseCounter = 1;
export function nextHouseId(): string {
  return `house-${_houseCounter++}`;
}

export function makeHouse(pokemonIds: string[] = []): House {
  return { id: nextHouseId(), pokemonIds };
}

function sanitizeState(state: AppState): AppState {
  const knownIds = new Set(POKEMON_ORDER);
  const seenIds = new Set<string>();
  const normalizedAreas = INITIAL_AREAS.map((baseArea) => {
    const sourceArea = state.areas.find((area) => area.id === baseArea.id);
    const houses = (sourceArea?.houses ?? [])
      .map((house) => {
        const pokemonIds = house.pokemonIds.filter((pokemonId) => {
          if (!knownIds.has(pokemonId) || seenIds.has(pokemonId)) return false;
          seenIds.add(pokemonId);
          return true;
        });
        return makeHouse(pokemonIds);
      })
      .filter((house) => house.pokemonIds.length > 0);

    return {
      ...baseArea,
      houses,
    };
  });

  const normalizedPoolIds = [
    ...state.poolIds.filter((pokemonId) => {
      if (!knownIds.has(pokemonId) || seenIds.has(pokemonId)) return false;
      seenIds.add(pokemonId);
      return true;
    }),
    ...POKEMON_ORDER.filter((pokemonId) => !seenIds.has(pokemonId)),
  ];

  return {
    poolIds: normalizedPoolIds,
    areas: normalizedAreas,
  };
}

export function encodeState(state: AppState): string {
  const serialized: SerializedStateV2 = {
    v: 2,
    areas: state.areas
      .filter((a) => a.houses.length > 0)
      .map((a) => ({
        id: a.id,
        houses: a.houses
          .filter((h) => h.pokemonIds.length > 0)
          .map((h) => h.pokemonIds),
      })),
  };
  return btoa(JSON.stringify(serialized));
}

export function decodeState(code: string): AppState | null {
  try {
    const json = atob(code.trim());
    const data = JSON.parse(json) as SerializedStateV1 | SerializedStateV2;
    if (!data.v || !Array.isArray(data.areas)) return null;

    const areaBase = new Map(INITIAL_AREAS.map((a) => [a.id, a]));

    if (data.v === 2) {
      const areas: PokopiaArea[] = (data as SerializedStateV2).areas.map((sa) => {
        const base = areaBase.get(sa.id);
        if (!base) return null;
        return {
          ...base,
          houses: sa.houses.map((ids) => makeHouse(ids)),
        };
      }).filter(Boolean) as PokopiaArea[];

      // Derive pool from all Pokémon not assigned to any area
      const assigned = new Set(areas.flatMap((a) => a.houses.flatMap((h) => h.pokemonIds)));
      const poolIds = POKEMON_ORDER.filter((id) => !assigned.has(id));

      // Fill in areas that weren't serialised (they are empty)
      const serialisedAreaIds = new Set(areas.map((a) => a.id));
      for (const base of INITIAL_AREAS) {
        if (!serialisedAreaIds.has(base.id)) areas.push({ ...base, houses: [] });
      }

      return sanitizeState({ poolIds, areas });
    }

    // v1 fallback
    if (data.v === 1) {
      const d = data as SerializedStateV1;
      if (!Array.isArray(d.poolIds)) return null;
      const areas: PokopiaArea[] = d.areas.map((sa) => {
        const base = areaBase.get(sa.id);
        if (!base) return null;
        return {
          ...base,
          houses: sa.houses.map((sh) => makeHouse(sh.pokemonIds)),
        };
      }).filter(Boolean) as PokopiaArea[];
      return sanitizeState({ poolIds: d.poolIds, areas });
    }

    return null;
  } catch {
    return null;
  }
}

export function saveToLocalStorage(state: AppState): void {
  try {
    localStorage.setItem(LS_KEY, encodeState(state));
  } catch {
    // storage might be full or unavailable
  }
}

export function loadFromLocalStorage(): AppState | null {
  try {
    const code = localStorage.getItem(LS_KEY);
    if (!code) return null;
    return decodeState(code);
  } catch {
    return null;
  }
}
