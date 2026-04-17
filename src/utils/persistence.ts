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

interface SerializedState {
  v: 1;
  poolIds: string[];
  areas: SerializedArea[];
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
  const serialized: SerializedState = {
    v: 1,
    poolIds: state.poolIds,
    areas: state.areas.map((a) => ({
      id: a.id,
      houses: a.houses.map((h) => ({ pokemonIds: h.pokemonIds })),
    })),
  };
  return btoa(JSON.stringify(serialized));
}

export function decodeState(code: string): AppState | null {
  try {
    const json = atob(code.trim());
    const data = JSON.parse(json) as SerializedState;
    if (data.v !== 1 || !Array.isArray(data.poolIds) || !Array.isArray(data.areas)) return null;
    const areaBase = new Map(INITIAL_AREAS.map((a) => [a.id, a]));
    const areas: PokopiaArea[] = data.areas.map((sa) => {
      const base = areaBase.get(sa.id);
      if (!base) return null;
      return {
        ...base,
        houses: sa.houses.map((sh) => makeHouse(sh.pokemonIds)),
      };
    }).filter(Boolean) as PokopiaArea[];
    return sanitizeState({ poolIds: data.poolIds, areas });
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
