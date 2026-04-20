import type { Pokemon, PokopiaArea } from './types';
import type { Specialty } from './types';
import pokemonJson from './assets/pokemon_pokedex.json';

type JsonEntry = {
  id: string;
  name: string;
  family: string;
  specialties: string[];
  litter_resource: string | null;
  favorites?: string[];
};

function parseDexNumber(id: string): number | undefined {
  return /^\d+$/.test(id) ? Number(id) : undefined;
}

function normalizeLitterResource(resource: string): string {
  return resource.trim().toLowerCase();
}

function normalizeFavorites(favorites: string[] | undefined): string[] {
  if (!favorites || favorites.length === 0) return [];
  return Array.from(
    new Set(favorites.map((favorite) => favorite.trim()).filter(Boolean))
  );
}

/**
 * POKEMON_DB — keyed by the JSON id (e.g. "001", "006", "S001").
 * Built at module load time from pokemon_pokedex.json.
 */
export const POKEMON_DB: Record<string, Pokemon> = {};

for (const raw of pokemonJson as JsonEntry[]) {
  const pokemon: Pokemon = {
    id: raw.id,
    name: raw.name,
    family: raw.family,
    dexNumber: parseDexNumber(raw.id),
    specialties: raw.specialties as Specialty[],
    favoriteItems: normalizeFavorites(raw.favorites),
    ...(raw.litter_resource
      ? { litterResources: [normalizeLitterResource(raw.litter_resource)] }
      : {}),
  };
  POKEMON_DB[raw.id] = pokemon;
}

/** Ordered list of all Pokémon IDs as they appear in the JSON source. */
export const POKEMON_ORDER: string[] = (pokemonJson as JsonEntry[]).map((e) => e.id);

export const INITIAL_AREAS: PokopiaArea[] = [
  {
    id: 'area-1',
    name: 'Withered Wasteland',
    color: '#92400e',
    bgColor: '#fef3c7',
    icon: 'nature',
    houses: [],
  },
  {
    id: 'area-2',
    name: 'Bleak Beach',
    color: '#0e7490',
    bgColor: '#cffafe',
    icon: 'beach_access',
    houses: [],
  },
  {
    id: 'area-3',
    name: 'Rocky Ridges',
    color: '#374151',
    bgColor: '#f3f4f6',
    icon: 'landscape',
    houses: [],
  },
  {
    id: 'area-4',
    name: 'Sparkling Skylands',
    color: '#5b21b6',
    bgColor: '#ede9fe',
    icon: 'auto_awesome',
    houses: [],
  },
  {
    id: 'area-5',
    name: 'Palette Town',
    color: '#be185d',
    bgColor: '#fce7f3',
    icon: 'palette',
    houses: [],
  },
];
