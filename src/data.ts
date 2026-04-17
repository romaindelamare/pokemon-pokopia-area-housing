import type { Pokemon, PokopiaArea } from './types';
import type { Specialty } from './types';
import pokemonJson from './assets/pokemon_pokedex.json';

type JsonEntry = {
  id: string;
  name: string;
  family: string;
  specialties: string[];
  litter_resource: string | null;
};

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
    specialties: raw.specialties as Specialty[],
    favoriteItems: [],
    ...(raw.litter_resource ? { litterResources: [raw.litter_resource] } : {}),
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
    icon: '🏜️',
    houses: [],
  },
  {
    id: 'area-2',
    name: 'Bleak Beach',
    color: '#0e7490',
    bgColor: '#cffafe',
    icon: '🏖️',
    houses: [],
  },
  {
    id: 'area-3',
    name: 'Rocky Ridges',
    color: '#374151',
    bgColor: '#f3f4f6',
    icon: '⛰️',
    houses: [],
  },
  {
    id: 'area-4',
    name: 'Sparkling Skylands',
    color: '#5b21b6',
    bgColor: '#ede9fe',
    icon: '✨',
    houses: [],
  },
  {
    id: 'area-5',
    name: 'Palette Town',
    color: '#be185d',
    bgColor: '#fce7f3',
    icon: '🎨',
    houses: [],
  },
];
