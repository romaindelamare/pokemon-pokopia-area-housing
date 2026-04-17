import type { Pokemon, PokopiaArea } from './types';

export const POKEMON_DB: Record<string, Pokemon> = {
  bulbasaur: {
    id: 'bulbasaur', name: 'Bulbasaur', family: 'Bulbasaur', dexNumber: 1,
    type: 'grass', specialties: ['plant', 'gather'],
    favoriteItems: ['Oran Berry', 'Miracle Seed', 'Big Root'],
  },
  ivysaur: {
    id: 'ivysaur', name: 'Ivysaur', family: 'Bulbasaur', dexNumber: 2,
    type: 'grass', specialties: ['plant', 'gather', 'litter'],
    favoriteItems: ['Sitrus Berry', 'Miracle Seed', 'Big Root'],
    litterResources: ['plant'],
  },
  venusaur: {
    id: 'venusaur', name: 'Venusaur', family: 'Bulbasaur', dexNumber: 3,
    type: 'grass', specialties: ['plant', 'gather', 'litter'],
    favoriteItems: ['Lum Berry', 'Miracle Seed', 'Big Root', 'Leaf Stone'],
    litterResources: ['plant'],
  },
  charmander: {
    id: 'charmander', name: 'Charmander', family: 'Charmander', dexNumber: 4,
    type: 'fire', specialties: ['burn'],
    favoriteItems: ['Rawst Berry', 'Charcoal'],
  },
  charmeleon: {
    id: 'charmeleon', name: 'Charmeleon', family: 'Charmander', dexNumber: 5,
    type: 'fire', specialties: ['burn', 'craft'],
    favoriteItems: ['Rawst Berry', 'Charcoal', 'Fire Stone'],
  },
  charizard: {
    id: 'charizard', name: 'Charizard', family: 'Charmander', dexNumber: 6,
    type: 'fire', specialties: ['burn', 'craft', 'transport'],
    favoriteItems: ['Rawst Berry', 'Charcoal', 'Dragon Scale', 'Fire Stone'],
  },
  squirtle: {
    id: 'squirtle', name: 'Squirtle', family: 'Squirtle', dexNumber: 7,
    type: 'water', specialties: ['water'],
    favoriteItems: ['Oran Berry', 'Mystic Water'],
  },
  wartortle: {
    id: 'wartortle', name: 'Wartortle', family: 'Squirtle', dexNumber: 8,
    type: 'water', specialties: ['water', 'transport'],
    favoriteItems: ['Sitrus Berry', 'Mystic Water', 'Water Stone'],
  },
  blastoise: {
    id: 'blastoise', name: 'Blastoise', family: 'Squirtle', dexNumber: 9,
    type: 'water', specialties: ['water', 'transport', 'mine'],
    favoriteItems: ['Lum Berry', 'Mystic Water', 'Water Stone', 'Shell Bell'],
  },
  pichu: {
    id: 'pichu', name: 'Pichu', family: 'Pikachu', dexNumber: 172,
    type: 'electric', specialties: ['electric'],
    favoriteItems: ['Oran Berry', 'Magnet'],
  },
  pikachu: {
    id: 'pikachu', name: 'Pikachu', family: 'Pikachu', dexNumber: 25,
    type: 'electric', specialties: ['electric', 'gather'],
    favoriteItems: ['Oran Berry', 'Magnet', 'Thunder Stone'],
  },
  raichu: {
    id: 'raichu', name: 'Raichu', family: 'Pikachu', dexNumber: 26,
    type: 'electric', specialties: ['electric', 'gather', 'craft'],
    favoriteItems: ['Sitrus Berry', 'Magnet', 'Thunder Stone', 'Zap Plate'],
  },
  geodude: {
    id: 'geodude', name: 'Geodude', family: 'Geodude', dexNumber: 74,
    type: 'rock', specialties: ['mine'],
    favoriteItems: ['Hard Stone', 'Everstone'],
  },
  graveler: {
    id: 'graveler', name: 'Graveler', family: 'Geodude', dexNumber: 75,
    type: 'rock', specialties: ['mine', 'transport'],
    favoriteItems: ['Hard Stone', 'Everstone', 'Rock Incense'],
  },
  golem: {
    id: 'golem', name: 'Golem', family: 'Geodude', dexNumber: 76,
    type: 'rock', specialties: ['mine', 'transport', 'craft'],
    favoriteItems: ['Hard Stone', 'Everstone', 'Rock Incense', 'Link Cable'],
  },
  oddish: {
    id: 'oddish', name: 'Oddish', family: 'Oddish', dexNumber: 43,
    type: 'grass', specialties: ['plant', 'litter'],
    favoriteItems: ['Poison Barb', 'Miracle Seed', 'Oran Berry'],
    litterResources: ['plant'],
  },
  gloom: {
    id: 'gloom', name: 'Gloom', family: 'Oddish', dexNumber: 44,
    type: 'grass', specialties: ['plant', 'litter', 'gather'],
    favoriteItems: ['Poison Barb', 'Miracle Seed', 'Sitrus Berry'],
    litterResources: ['plant'],
  },
  vileplume: {
    id: 'vileplume', name: 'Vileplume', family: 'Oddish', dexNumber: 45,
    type: 'grass', specialties: ['plant', 'litter', 'gather'],
    favoriteItems: ['Poison Barb', 'Miracle Seed', 'Leaf Stone', 'Big Root'],
    litterResources: ['plant'],
  },
  diglett: {
    id: 'diglett', name: 'Diglett', family: 'Diglett', dexNumber: 50,
    type: 'ground', specialties: ['mine', 'plant'],
    favoriteItems: ['Soft Sand', 'Shovel'],
  },
  dugtrio: {
    id: 'dugtrio', name: 'Dugtrio', family: 'Diglett', dexNumber: 51,
    type: 'ground', specialties: ['mine', 'plant', 'transport'],
    favoriteItems: ['Soft Sand', 'Shovel', 'Binding Band'],
  },
  meowth: {
    id: 'meowth', name: 'Meowth', family: 'Meowth', dexNumber: 52,
    type: 'normal', specialties: ['gather', 'litter'],
    favoriteItems: ['Amulet Coin', 'Silk Scarf'],
    litterResources: ['craft'],
  },
  persian: {
    id: 'persian', name: 'Persian', family: 'Meowth', dexNumber: 53,
    type: 'normal', specialties: ['gather', 'litter', 'craft'],
    favoriteItems: ['Amulet Coin', 'Silk Scarf', 'Moon Stone', 'Nugget'],
    litterResources: ['craft'],
  },
  growlithe: {
    id: 'growlithe', name: 'Growlithe', family: 'Growlithe', dexNumber: 58,
    type: 'fire', specialties: ['burn', 'transport'],
    favoriteItems: ['Rawst Berry', 'Charcoal'],
  },
  arcanine: {
    id: 'arcanine', name: 'Arcanine', family: 'Growlithe', dexNumber: 59,
    type: 'fire', specialties: ['burn', 'transport', 'craft'],
    favoriteItems: ['Rawst Berry', 'Charcoal', 'Fire Stone', 'Wide Lens'],
  },
  slowpoke: {
    id: 'slowpoke', name: 'Slowpoke', family: 'Slowpoke', dexNumber: 79,
    type: 'water', specialties: ['water', 'cool'],
    favoriteItems: ["King's Rock", 'Sitrus Berry'],
  },
  slowbro: {
    id: 'slowbro', name: 'Slowbro', family: 'Slowpoke', dexNumber: 80,
    type: 'water', specialties: ['water', 'cool', 'litter'],
    favoriteItems: ["King's Rock", 'Lum Berry', 'Water Stone', 'Shell Bell'],
    litterResources: ['water', 'cool'],
  },
  gastly: {
    id: 'gastly', name: 'Gastly', family: 'Gastly', dexNumber: 92,
    type: 'ghost', specialties: ['litter'],
    favoriteItems: ['Spell Tag', 'Dusk Stone'],
    litterResources: ['cool'],
  },
  haunter: {
    id: 'haunter', name: 'Haunter', family: 'Gastly', dexNumber: 93,
    type: 'ghost', specialties: ['litter', 'gather'],
    favoriteItems: ['Spell Tag', 'Dusk Stone', 'Twisted Spoon'],
    litterResources: ['cool'],
  },
  gengar: {
    id: 'gengar', name: 'Gengar', family: 'Gastly', dexNumber: 94,
    type: 'ghost', specialties: ['litter', 'gather', 'cool'],
    favoriteItems: ['Spell Tag', 'Dusk Stone', 'Twisted Spoon', 'Shadow Ball'],
    litterResources: ['cool'],
  },
  snorlax: {
    id: 'snorlax', name: 'Snorlax', family: 'Snorlax', dexNumber: 143,
    type: 'normal', specialties: ['litter', 'transport'],
    favoriteItems: ['Leftovers', 'Full Restore', 'Big Root', 'Chesto Berry'],
    litterResources: ['transport'],
  },
  eevee: {
    id: 'eevee', name: 'Eevee', family: 'Eevee', dexNumber: 133,
    type: 'normal', specialties: ['gather', 'craft'],
    favoriteItems: ['Eevee Candy', 'Oran Berry', 'Silk Scarf'],
  },
  vaporeon: {
    id: 'vaporeon', name: 'Vaporeon', family: 'Eevee', dexNumber: 134,
    type: 'water', specialties: ['water', 'cool'],
    favoriteItems: ['Mystic Water', 'Water Stone', 'Water Gem'],
  },
  jolteon: {
    id: 'jolteon', name: 'Jolteon', family: 'Eevee', dexNumber: 135,
    type: 'electric', specialties: ['electric', 'gather'],
    favoriteItems: ['Magnet', 'Thunder Stone', 'Electric Gem'],
  },
  flareon: {
    id: 'flareon', name: 'Flareon', family: 'Eevee', dexNumber: 136,
    type: 'fire', specialties: ['burn', 'craft'],
    favoriteItems: ['Charcoal', 'Fire Stone', 'Fire Gem'],
  },
  machop: {
    id: 'machop', name: 'Machop', family: 'Machop', dexNumber: 66,
    type: 'fighting', specialties: ['craft', 'mine'],
    favoriteItems: ['Black Belt', 'Muscle Band'],
  },
  machoke: {
    id: 'machoke', name: 'Machoke', family: 'Machop', dexNumber: 67,
    type: 'fighting', specialties: ['craft', 'mine', 'transport'],
    favoriteItems: ['Black Belt', 'Muscle Band', 'Link Cable'],
  },
  lapras: {
    id: 'lapras', name: 'Lapras', family: 'Lapras', dexNumber: 131,
    type: 'water', specialties: ['water', 'cool', 'transport'],
    favoriteItems: ['Mystic Water', 'Never-Melt Ice', 'Shell Bell'],
  },
  magmar: {
    id: 'magmar', name: 'Magmar', family: 'Magmar', dexNumber: 126,
    type: 'fire', specialties: ['burn', 'craft'],
    favoriteItems: ['Charcoal', 'Magmarizer', 'Rawst Berry'],
  },
  electabuzz: {
    id: 'electabuzz', name: 'Electabuzz', family: 'Electabuzz', dexNumber: 125,
    type: 'electric', specialties: ['electric', 'craft'],
    favoriteItems: ['Magnet', 'Electirizer', 'Sitrus Berry'],
  },
};

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
