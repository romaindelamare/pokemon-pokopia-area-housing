export type Specialty =
  | 'burn'
  | 'water'
  | 'plant'
  | 'grow'
  | 'fly'
  | 'electric'
  | 'cool'
  | 'craft'
  | 'mine'
  | 'gather'
  | 'litter'
  | 'transport'
  | 'search'
  | 'chop'
  | 'trade'
  | 'build'
  | 'hype'
  | 'recycle'
  | 'storage'
  | 'bulldoze'
  | 'crush'
  | 'explode'
  | 'teleport'
  | 'transform'
  | 'yawn'
  | 'island'
  | 'generate'
  | 'illuminate'
  | 'appraise'
  | 'honey'
  | 'paint'
  | 'dj'
  | 'party'
  | 'collect'
  | 'engineer'
  | 'rarify'
  | 'dream'
  | 'eat';

export const SPECIALTY_META: Record<
  Specialty,
  { label: string; icon: string; color: string; bg: string }
> = {
  burn:      { label: 'Burn',      icon: 'local_fire_department', color: '#9d2b06', bg: '#fde8df' },
  water:     { label: 'Water',     icon: 'water_drop',            color: '#0a5694', bg: '#dff1fc' },
  plant:     { label: 'Plant',     icon: 'nature',                color: '#1a6b2f', bg: '#dff5e6' },
  grow:      { label: 'Grow',      icon: 'eco',                   color: '#2d5a1b', bg: '#e6f5de' },
  fly:       { label: 'Fly',       icon: 'air',                   color: '#1565c0', bg: '#e3f2fd' },
  electric:  { label: 'Electric',  icon: 'bolt',                  color: '#8b6d00', bg: '#fff8d6' },
  cool:      { label: 'Cool',      icon: 'ac_unit',               color: '#0b6b8a', bg: '#d6f5ff' },
  craft:     { label: 'Craft',     icon: 'handyman',              color: '#6b3e2c', bg: '#f5e6df' },
  mine:      { label: 'Mine',      icon: 'hardware',              color: '#4a5568', bg: '#edf2f7' },
  gather:    { label: 'Gather',    icon: 'agriculture',           color: '#7b4f00', bg: '#fff3d6' },
  litter:    { label: 'Litter',    icon: 'cleaning_services',     color: '#6b2b7e', bg: '#f5dfff' },
  transport: { label: 'Transport', icon: 'local_shipping',        color: '#2d5016', bg: '#e6f0d6' },
  search:    { label: 'Search',    icon: 'search',                color: '#1d4ed8', bg: '#dbeafe' },
  chop:      { label: 'Chop',      icon: 'forest',                color: '#7c2d12', bg: '#fef9c3' },
  trade:     { label: 'Trade',     icon: 'swap_horiz',            color: '#065f46', bg: '#d1fae5' },
  build:     { label: 'Build',     icon: 'build',                 color: '#78350f', bg: '#fef3c7' },
  hype:      { label: 'Hype',      icon: 'celebration',           color: '#9d174d', bg: '#fce7f3' },
  recycle:   { label: 'Recycle',   icon: 'recycling',             color: '#065f46', bg: '#d1fae5' },
  storage:   { label: 'Storage',   icon: 'inventory_2',           color: '#374151', bg: '#f3f4f6' },
  bulldoze:  { label: 'Bulldoze',  icon: 'construction',          color: '#92400e', bg: '#fef3c7' },
  crush:     { label: 'Crush',     icon: 'compress',              color: '#7f1d1d', bg: '#fee2e2' },
  explode:   { label: 'Explode',   icon: 'flash_on',              color: '#991b1b', bg: '#ffe4e6' },
  teleport:  { label: 'Teleport',  icon: 'transit_enterexit',     color: '#5b21b6', bg: '#ede9fe' },
  transform: { label: 'Transform', icon: 'transform',             color: '#0f766e', bg: '#ccfbf1' },
  yawn:      { label: 'Yawn',      icon: 'bedtime',               color: '#6b7280', bg: '#f3f4f6' },
  island:    { label: 'Island',    icon: 'beach_access',          color: '#0369a1', bg: '#e0f2fe' },
  generate:  { label: 'Generate',  icon: 'electric_bolt',         color: '#8b6d00', bg: '#fff8d6' },
  illuminate:{ label: 'Illuminate',icon: 'lightbulb',             color: '#f59e0b', bg: '#fef3c7' },
  appraise:  { label: 'Appraise',  icon: 'fact_check',            color: '#374151', bg: '#f3f4f6' },
  honey:     { label: 'Honey',     icon: 'hive',                  color: '#b45309', bg: '#fef3c7' },
  paint:     { label: 'Paint',     icon: 'palette',               color: '#7c3aed', bg: '#ede9fe' },
  dj:        { label: 'DJ',        icon: 'headphones',            color: '#1d4ed8', bg: '#dbeafe' },
  party:     { label: 'Party',     icon: 'celebration',           color: '#db2777', bg: '#fce7f3' },
  collect:   { label: 'Collect',   icon: 'monetization_on',       color: '#b45309', bg: '#fef3c7' },
  engineer:  { label: 'Engineer',  icon: 'engineering',           color: '#374151', bg: '#f3f4f6' },
  rarify:    { label: 'Rarify',    icon: 'auto_awesome',          color: '#7c3aed', bg: '#ede9fe' },
  dream:     { label: 'Dream',     icon: 'nights_stay',           color: '#6b7280', bg: '#f3f4f6' },
  eat:       { label: 'Eat',       icon: 'restaurant',            color: '#b45309', bg: '#fef3c7' },
};

export const ALL_SPECIALTIES: Specialty[] = [
  'burn', 'water', 'plant', 'grow', 'fly', 'electric', 'cool', 'craft', 'mine',
  'gather', 'litter', 'transport', 'search', 'chop', 'trade', 'build',
  'hype', 'recycle', 'storage', 'bulldoze', 'crush', 'explode',
  'teleport', 'transform', 'yawn', 'island',
  'generate', 'illuminate', 'appraise', 'honey', 'paint', 'dj',
  'party', 'collect', 'engineer', 'rarify', 'dream', 'eat',
];

export const LITTER_RESOURCE_META: Record<string, { label: string; icon: string; color: string; bg: string }> = {
  'plant':               { label: 'Plant',             icon: 'nature',        color: '#1a6b2f', bg: '#dff5e6' },
  'leaf':                { label: 'Leaf',              icon: 'eco',           color: '#1a6b2f', bg: '#dff5e6' },
  'vine rope':           { label: 'Vine Rope',         icon: 'link',          color: '#2d5a1b', bg: '#e6f5de' },
  'honey':               { label: 'Honey',             icon: 'hive',          color: '#8b6d00', bg: '#fff8d6' },
  'sturdy stick':        { label: 'Sturdy Stick',      icon: 'straighten',    color: '#6b3e2c', bg: '#f5e6df' },
  'twine':               { label: 'Twine',             icon: 'workspaces',    color: '#7b4f00', bg: '#fff3d6' },
  'fluff':               { label: 'Fluff',             icon: 'cloud',         color: '#6b7280', bg: '#f3f4f6' },
  'nonburnable garbage': { label: 'Garbage',           icon: 'delete_forever',color: '#4a5568', bg: '#edf2f7' },
  'squishy clay':        { label: 'Squishy Clay',      icon: 'layers',        color: '#92400e', bg: '#fef3c7' },
  'stone':               { label: 'Stone',             icon: 'terrain',       color: '#4a5568', bg: '#edf2f7' },
  'iron ore':            { label: 'Iron Ore',          icon: 'hardware',      color: '#374151', bg: '#f1f5f9' },
  'small log':           { label: 'Small Log',         icon: 'park',          color: '#78350f', bg: '#fef3c7' },
};

export interface Pokemon {
  id: string;
  name: string;
  family: string;
  dexNumber?: number;
  specialties: Specialty[];
  favoriteItems: string[];
  /** Resources produced when this Pokémon litters (only set for litter Pokémon) */
  litterResources?: string[];
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
