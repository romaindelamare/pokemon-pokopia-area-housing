export type Specialty =
  | 'burn'
  | 'water'
  | 'plant'
  | 'electric'
  | 'cool'
  | 'craft'
  | 'mine'
  | 'gather'
  | 'litter'
  | 'transport';

export const SPECIALTY_META: Record<
  Specialty,
  { label: string; icon: string; color: string; bg: string }
> = {
  burn:      { label: 'Burn',      icon: '🔥', color: '#9d2b06', bg: '#fde8df' },
  water:     { label: 'Water',     icon: '💧', color: '#0a5694', bg: '#dff1fc' },
  plant:     { label: 'Plant',     icon: '🌿', color: '#1a6b2f', bg: '#dff5e6' },
  electric:  { label: 'Electric',  icon: '⚡', color: '#8b6d00', bg: '#fff8d6' },
  cool:      { label: 'Cool',      icon: '❄️', color: '#0b6b8a', bg: '#d6f5ff' },
  craft:     { label: 'Craft',     icon: '🔨', color: '#6b3e2c', bg: '#f5e6df' },
  mine:      { label: 'Mine',      icon: '⛏️', color: '#4a5568', bg: '#edf2f7' },
  gather:    { label: 'Gather',    icon: '🌾', color: '#7b4f00', bg: '#fff3d6' },
  litter:    { label: 'Litter',    icon: '🧹', color: '#6b2b7e', bg: '#f5dfff' },
  transport: { label: 'Transport', icon: '📦', color: '#2d5016', bg: '#e6f0d6' },
};

export const ALL_SPECIALTIES: Specialty[] = [
  'burn', 'water', 'plant', 'electric', 'cool',
  'craft', 'mine', 'gather', 'litter', 'transport',
];

export const TYPE_COLORS: Record<string, string> = {
  fire:     '#FF6D00',
  water:    '#0091EA',
  grass:    '#00C853',
  electric: '#FFD600',
  rock:     '#795548',
  ground:   '#FFA000',
  ghost:    '#6A1B9A',
  normal:   '#9E9E9E',
  fighting: '#D32F2F',
  ice:      '#00BCD4',
  poison:   '#7B1FA2',
  psychic:  '#E91E63',
  dragon:   '#0D47A1',
  steel:    '#607D8B',
  fairy:    '#F48FB1',
  dark:     '#37474F',
  bug:      '#558B2F',
  flying:   '#1565C0',
};

export interface Pokemon {
  id: string;
  name: string;
  family: string;
  dexNumber: number;
  type: string;
  specialties: Specialty[];
  favoriteItems: string[];
}

export const MAX_HOUSE_SIZE = 4;

export interface House {
  id: string;
  pokemonIds: string[];
}

export interface PokopiaArea {
  id: string;
  name: string;
  color: string;
  bgColor: string;
  icon: string;
  houses: House[];
}
