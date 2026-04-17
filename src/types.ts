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
  | 'dream';

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
  search:    { label: 'Search',    icon: '🔍', color: '#1d4ed8', bg: '#dbeafe' },
  chop:      { label: 'Chop',      icon: '🪓', color: '#7c2d12', bg: '#fef9c3' },
  trade:     { label: 'Trade',     icon: '🤝', color: '#065f46', bg: '#d1fae5' },
  build:     { label: 'Build',     icon: '🏗️', color: '#78350f', bg: '#fef3c7' },
  hype:      { label: 'Hype',      icon: '🎉', color: '#9d174d', bg: '#fce7f3' },
  recycle:   { label: 'Recycle',   icon: '♻️', color: '#065f46', bg: '#d1fae5' },
  storage:   { label: 'Storage',   icon: '🗄️', color: '#374151', bg: '#f3f4f6' },
  bulldoze:  { label: 'Bulldoze',  icon: '💪', color: '#92400e', bg: '#fef3c7' },
  crush:     { label: 'Crush',     icon: '💥', color: '#7f1d1d', bg: '#fee2e2' },
  explode:   { label: 'Explode',   icon: '🧨', color: '#991b1b', bg: '#ffe4e6' },
  teleport:  { label: 'Teleport',  icon: '🔮', color: '#5b21b6', bg: '#ede9fe' },
  transform: { label: 'Transform', icon: '🌀', color: '#0f766e', bg: '#ccfbf1' },
  yawn:      { label: 'Yawn',      icon: '😴', color: '#6b7280', bg: '#f3f4f6' },
  island:    { label: 'Island',    icon: '🏝️', color: '#0369a1', bg: '#e0f2fe' },
  generate:  { label: 'Generate',  icon: '⚡', color: '#8b6d00', bg: '#fff8d6' },
  illuminate:{ label: 'Illuminate',icon: '💡', color: '#f59e0b', bg: '#fef3c7' },
  appraise:  { label: 'Appraise',  icon: '🔎', color: '#374151', bg: '#f3f4f6' },
  honey:     { label: 'Honey',     icon: '🍯', color: '#b45309', bg: '#fef3c7' },
  paint:     { label: 'Paint',     icon: '🎨', color: '#7c3aed', bg: '#ede9fe' },
  dj:        { label: 'DJ',        icon: '🎧', color: '#1d4ed8', bg: '#dbeafe' },
  party:     { label: 'Party',     icon: '🥳', color: '#db2777', bg: '#fce7f3' },
  collect:   { label: 'Collect',   icon: '💰', color: '#b45309', bg: '#fef3c7' },
  engineer:  { label: 'Engineer',  icon: '⚙️', color: '#374151', bg: '#f3f4f6' },
  rarify:    { label: 'Rarify',    icon: '🌟', color: '#7c3aed', bg: '#ede9fe' },
  dream:     { label: 'Dream',     icon: '💤', color: '#6b7280', bg: '#f3f4f6' },
};

export const ALL_SPECIALTIES: Specialty[] = [
  'burn', 'water', 'plant', 'electric', 'cool', 'craft', 'mine',
  'gather', 'litter', 'transport', 'search', 'chop', 'trade', 'build',
  'hype', 'recycle', 'storage', 'bulldoze', 'crush', 'explode',
  'teleport', 'transform', 'yawn', 'island',
  'generate', 'illuminate', 'appraise', 'honey', 'paint', 'dj',
  'party', 'collect', 'engineer', 'rarify', 'dream',
];

export const LITTER_RESOURCE_META: Record<string, { label: string; icon: string; color: string; bg: string }> = {
  'plant':               { label: 'Plant',             icon: '🌿', color: '#1a6b2f', bg: '#dff5e6' },
  'leaf':                { label: 'Leaf',              icon: '🍃', color: '#1a6b2f', bg: '#dff5e6' },
  'vine rope':           { label: 'Vine Rope',         icon: '🌱', color: '#2d5a1b', bg: '#e6f5de' },
  'honey':               { label: 'Honey',             icon: '🍯', color: '#8b6d00', bg: '#fff8d6' },
  'sturdy stick':        { label: 'Sturdy Stick',      icon: '🪵', color: '#6b3e2c', bg: '#f5e6df' },
  'twine':               { label: 'Twine',             icon: '🧵', color: '#7b4f00', bg: '#fff3d6' },
  'fluff':               { label: 'Fluff',             icon: '☁️', color: '#6b7280', bg: '#f3f4f6' },
  'nonburnable garbage': { label: 'Garbage',           icon: '🗑️', color: '#4a5568', bg: '#edf2f7' },
  'squishy clay':        { label: 'Squishy Clay',      icon: '🫙', color: '#92400e', bg: '#fef3c7' },
  'stone':               { label: 'Stone',             icon: '🪨', color: '#4a5568', bg: '#edf2f7' },
  'iron ore':            { label: 'Iron Ore',          icon: '🔩', color: '#374151', bg: '#f1f5f9' },
  'small log':           { label: 'Small Log',         icon: '🪵', color: '#78350f', bg: '#fef3c7' },
};

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
