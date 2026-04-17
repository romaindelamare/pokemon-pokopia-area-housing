import type { Pokemon, PokopiaArea } from './types';

export const POKEMON_DB: Record<string, Pokemon> = {
  // ── Bulbasaur family ────────────────────────────────────────────────────
  bulbasaur: {
    id: 'bulbasaur', name: 'Bulbasaur', family: 'Bulbasaur', dexNumber: 1,
    type: 'grass', specialties: ['plant', 'gather'],
    favoriteItems: ['Oran Berry', 'Miracle Seed', 'Big Root'],
  },
  ivysaur: {
    id: 'ivysaur', name: 'Ivysaur', family: 'Bulbasaur', dexNumber: 2,
    type: 'grass', specialties: ['plant', 'gather'],
    favoriteItems: ['Sitrus Berry', 'Miracle Seed', 'Big Root'],
  },
  venusaur: {
    id: 'venusaur', name: 'Venusaur', family: 'Bulbasaur', dexNumber: 3,
    type: 'grass', specialties: ['plant', 'gather', 'litter'],
    favoriteItems: ['Lum Berry', 'Miracle Seed', 'Big Root', 'Leaf Stone'],
    litterResources: ['leaf'],
  },

  // ── Charmander family ────────────────────────────────────────────────────
  charmander: {
    id: 'charmander', name: 'Charmander', family: 'Charmander', dexNumber: 4,
    type: 'fire', specialties: ['burn', 'craft'],
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

  // ── Squirtle family ──────────────────────────────────────────────────────
  squirtle: {
    id: 'squirtle', name: 'Squirtle', family: 'Squirtle', dexNumber: 7,
    type: 'water', specialties: ['water'],
    favoriteItems: ['Oran Berry', 'Mystic Water'],
  },
  wartortle: {
    id: 'wartortle', name: 'Wartortle', family: 'Squirtle', dexNumber: 8,
    type: 'water', specialties: ['water'],
    favoriteItems: ['Sitrus Berry', 'Mystic Water', 'Water Stone'],
  },
  blastoise: {
    id: 'blastoise', name: 'Blastoise', family: 'Squirtle', dexNumber: 9,
    type: 'water', specialties: ['water', 'trade'],
    favoriteItems: ['Lum Berry', 'Mystic Water', 'Water Stone', 'Shell Bell'],
  },

  // ── Pidgey family ────────────────────────────────────────────────────────
  pidgey: {
    id: 'pidgey', name: 'Pidgey', family: 'Pidgey', dexNumber: 16,
    type: 'flying', specialties: ['transport', 'search'],
    favoriteItems: ['Yache Berry', 'Sharp Beak'],
  },
  pidgeotto: {
    id: 'pidgeotto', name: 'Pidgeotto', family: 'Pidgey', dexNumber: 17,
    type: 'flying', specialties: ['transport', 'search'],
    favoriteItems: ['Yache Berry', 'Sharp Beak'],
  },
  pidgeot: {
    id: 'pidgeot', name: 'Pidgeot', family: 'Pidgey', dexNumber: 18,
    type: 'flying', specialties: ['transport', 'chop'],
    favoriteItems: ['Yache Berry', 'Sharp Beak', 'Wing'],
  },

  // ── Oddish family ────────────────────────────────────────────────────────
  oddish: {
    id: 'oddish', name: 'Oddish', family: 'Oddish', dexNumber: 43,
    type: 'grass', specialties: ['plant', 'gather'],
    favoriteItems: ['Poison Barb', 'Miracle Seed', 'Oran Berry'],
  },
  gloom: {
    id: 'gloom', name: 'Gloom', family: 'Oddish', dexNumber: 44,
    type: 'grass', specialties: ['plant', 'gather'],
    favoriteItems: ['Poison Barb', 'Miracle Seed', 'Sitrus Berry'],
  },
  vileplume: {
    id: 'vileplume', name: 'Vileplume', family: 'Oddish', dexNumber: 45,
    type: 'grass', specialties: ['plant', 'gather', 'litter'],
    favoriteItems: ['Poison Barb', 'Miracle Seed', 'Leaf Stone', 'Big Root'],
    litterResources: ['leaf'],
  },
  bellossom: {
    id: 'bellossom', name: 'Bellossom', family: 'Oddish', dexNumber: 182,
    type: 'grass', specialties: ['plant', 'gather', 'hype'],
    favoriteItems: ['Miracle Seed', 'Sun Stone', 'Oran Berry'],
  },

  // ── Paras family ─────────────────────────────────────────────────────────
  paras: {
    id: 'paras', name: 'Paras', family: 'Paras', dexNumber: 46,
    type: 'bug', specialties: ['search'],
    favoriteItems: ['Tiny Mushroom', 'Poison Barb'],
  },
  parasect: {
    id: 'parasect', name: 'Parasect', family: 'Paras', dexNumber: 47,
    type: 'bug', specialties: ['search'],
    favoriteItems: ['Big Mushroom', 'Tiny Mushroom', 'Poison Barb'],
  },

  // ── Venonat family ───────────────────────────────────────────────────────
  venonat: {
    id: 'venonat', name: 'Venonat', family: 'Venonat', dexNumber: 48,
    type: 'bug', specialties: ['search'],
    favoriteItems: ['Poison Barb', 'Oran Berry'],
  },
  venomoth: {
    id: 'venomoth', name: 'Venomoth', family: 'Venonat', dexNumber: 49,
    type: 'bug', specialties: ['search'],
    favoriteItems: ['Poison Barb', 'Silver Powder'],
  },

  // ── Bellsprout family ────────────────────────────────────────────────────
  bellsprout: {
    id: 'bellsprout', name: 'Bellsprout', family: 'Bellsprout', dexNumber: 69,
    type: 'grass', specialties: ['plant', 'gather', 'litter'],
    favoriteItems: ['Miracle Seed', 'Poison Barb', 'Oran Berry'],
    litterResources: ['vine rope'],
  },
  weepinbell: {
    id: 'weepinbell', name: 'Weepinbell', family: 'Bellsprout', dexNumber: 70,
    type: 'grass', specialties: ['plant', 'gather', 'litter'],
    favoriteItems: ['Miracle Seed', 'Poison Barb', 'Sitrus Berry'],
    litterResources: ['vine rope'],
  },
  victreebel: {
    id: 'victreebel', name: 'Victreebel', family: 'Bellsprout', dexNumber: 71,
    type: 'grass', specialties: ['plant', 'gather', 'chop'],
    favoriteItems: ['Miracle Seed', 'Poison Barb', 'Leaf Stone'],
  },

  // ── Slowpoke family ──────────────────────────────────────────────────────
  slowpoke: {
    id: 'slowpoke', name: 'Slowpoke', family: 'Slowpoke', dexNumber: 79,
    type: 'water', specialties: ['water', 'yawn'],
    favoriteItems: ["King's Rock", 'Sitrus Berry'],
  },
  slowbro: {
    id: 'slowbro', name: 'Slowbro', family: 'Slowpoke', dexNumber: 80,
    type: 'water', specialties: ['water', 'trade'],
    favoriteItems: ["King's Rock", 'Lum Berry', 'Water Stone', 'Shell Bell'],
  },
  slowking: {
    id: 'slowking', name: 'Slowking', family: 'Slowpoke', dexNumber: 199,
    type: 'water', specialties: ['water', 'teleport'],
    favoriteItems: ["King's Rock", 'Twisted Spoon', 'Shell Bell'],
  },

  // ── Magnemite family ─────────────────────────────────────────────────────
  magnemite: {
    id: 'magnemite', name: 'Magnemite', family: 'Magnemite', dexNumber: 81,
    type: 'electric', specialties: ['electric'],
    favoriteItems: ['Magnet', 'Metal Coat'],
  },
  magneton: {
    id: 'magneton', name: 'Magneton', family: 'Magnemite', dexNumber: 82,
    type: 'electric', specialties: ['electric'],
    favoriteItems: ['Magnet', 'Metal Coat', 'Thunder Stone'],
  },
  magnezone: {
    id: 'magnezone', name: 'Magnezone', family: 'Magnemite', dexNumber: 462,
    type: 'electric', specialties: ['electric', 'recycle'],
    favoriteItems: ['Magnet', 'Metal Coat', 'Thunder Stone', 'Cell Battery'],
  },

  // ── Onix family ──────────────────────────────────────────────────────────
  onix: {
    id: 'onix', name: 'Onix', family: 'Onix', dexNumber: 95,
    type: 'rock', specialties: ['crush', 'bulldoze'],
    favoriteItems: ['Hard Stone', 'Everstone', 'Rock Incense'],
  },
  steelix: {
    id: 'steelix', name: 'Steelix', family: 'Onix', dexNumber: 208,
    type: 'steel', specialties: ['crush', 'bulldoze'],
    favoriteItems: ['Metal Coat', 'Hard Stone', 'Iron Plate'],
  },

  // ── Cubone family ────────────────────────────────────────────────────────
  cubone: {
    id: 'cubone', name: 'Cubone', family: 'Cubone', dexNumber: 104,
    type: 'ground', specialties: ['build'],
    favoriteItems: ['Thick Club', 'Soft Sand'],
  },
  marowak: {
    id: 'marowak', name: 'Marowak', family: 'Cubone', dexNumber: 105,
    type: 'ground', specialties: ['build'],
    favoriteItems: ['Thick Club', 'Soft Sand', 'Earth Plate'],
  },

  // ── Tyrogue family ───────────────────────────────────────────────────────
  tyrogue: {
    id: 'tyrogue', name: 'Tyrogue', family: 'Tyrogue', dexNumber: 236,
    type: 'fighting', specialties: ['trade'],
    favoriteItems: ['Black Belt', 'Muscle Band'],
  },
  hitmonlee: {
    id: 'hitmonlee', name: 'Hitmonlee', family: 'Tyrogue', dexNumber: 106,
    type: 'fighting', specialties: ['trade'],
    favoriteItems: ['Black Belt', 'Muscle Band', 'Salac Berry'],
  },
  hitmonchan: {
    id: 'hitmonchan', name: 'Hitmonchan', family: 'Tyrogue', dexNumber: 107,
    type: 'fighting', specialties: ['trade'],
    favoriteItems: ['Black Belt', 'Muscle Band', 'Liechi Berry'],
  },
  hitmontop: {
    id: 'hitmontop', name: 'Hitmontop', family: 'Tyrogue', dexNumber: 237,
    type: 'fighting', specialties: ['trade'],
    favoriteItems: ['Black Belt', 'Muscle Band', 'Ganlon Berry'],
  },

  // ── Koffing family ───────────────────────────────────────────────────────
  koffing: {
    id: 'koffing', name: 'Koffing', family: 'Koffing', dexNumber: 109,
    type: 'poison', specialties: ['recycle'],
    favoriteItems: ['Poison Barb', 'Black Sludge'],
  },
  weezing: {
    id: 'weezing', name: 'Weezing', family: 'Koffing', dexNumber: 110,
    type: 'poison', specialties: ['recycle'],
    favoriteItems: ['Poison Barb', 'Black Sludge', 'Smoke Ball'],
  },

  // ── Tangela family ───────────────────────────────────────────────────────
  tangela: {
    id: 'tangela', name: 'Tangela', family: 'Tangela', dexNumber: 114,
    type: 'grass', specialties: ['plant', 'gather', 'litter'],
    favoriteItems: ['Miracle Seed', 'Big Root', 'Oran Berry'],
    litterResources: ['vine rope'],
  },
  tangrowth: {
    id: 'tangrowth', name: 'Tangrowth', family: 'Tangela', dexNumber: 465,
    type: 'grass', specialties: ['plant', 'gather', 'litter'],
    favoriteItems: ['Miracle Seed', 'Big Root', 'Sitrus Berry'],
    litterResources: ['vine rope'],
  },

  // ── Scyther family ───────────────────────────────────────────────────────
  scyther: {
    id: 'scyther', name: 'Scyther', family: 'Scyther', dexNumber: 123,
    type: 'bug', specialties: ['chop'],
    favoriteItems: ['Sharp Beak', 'Metal Coat'],
  },
  scizor: {
    id: 'scizor', name: 'Scizor', family: 'Scyther', dexNumber: 212,
    type: 'bug', specialties: ['chop'],
    favoriteItems: ['Metal Coat', 'Sharp Beak', 'Occa Berry'],
  },

  // ── Pinsir ───────────────────────────────────────────────────────────────
  pinsir: {
    id: 'pinsir', name: 'Pinsir', family: 'Pinsir', dexNumber: 127,
    type: 'bug', specialties: ['chop', 'build'],
    favoriteItems: ['Hard Stone', 'Sharp Beak'],
  },

  // ── Magikarp family ──────────────────────────────────────────────────────
  magikarp: {
    id: 'magikarp', name: 'Magikarp', family: 'Magikarp', dexNumber: 129,
    type: 'water', specialties: [],
    favoriteItems: ['Sitrus Berry'],
  },
  gyarados: {
    id: 'gyarados', name: 'Gyarados', family: 'Magikarp', dexNumber: 130,
    type: 'water', specialties: ['water'],
    favoriteItems: ['Mystic Water', 'Dragon Scale', 'Wacan Berry'],
  },

  // ── Ditto ────────────────────────────────────────────────────────────────
  ditto: {
    id: 'ditto', name: 'Ditto', family: 'Ditto', dexNumber: 132,
    type: 'normal', specialties: ['transform'],
    favoriteItems: ['Quick Powder', 'Metal Powder'],
  },

  // ── Hoothoot family ──────────────────────────────────────────────────────
  hoothoot: {
    id: 'hoothoot', name: 'Hoothoot', family: 'Hoothoot', dexNumber: 163,
    type: 'normal', specialties: ['trade', 'transport'],
    favoriteItems: ['Twisted Spoon', 'Sharp Beak'],
  },
  noctowl: {
    id: 'noctowl', name: 'Noctowl', family: 'Hoothoot', dexNumber: 164,
    type: 'normal', specialties: ['trade', 'transport'],
    favoriteItems: ['Twisted Spoon', 'Sharp Beak', 'Lax Incense'],
  },

  // ── Heracross ────────────────────────────────────────────────────────────
  heracross: {
    id: 'heracross', name: 'Heracross', family: 'Heracross', dexNumber: 214,
    type: 'bug', specialties: ['chop', 'build'],
    favoriteItems: ['Salac Berry', 'Hard Stone', 'Black Belt'],
  },

  // ── Volbeat ──────────────────────────────────────────────────────────────
  volbeat: {
    id: 'volbeat', name: 'Volbeat', family: 'Volbeat', dexNumber: 313,
    type: 'bug', specialties: ['hype'],
    favoriteItems: ['Lum Berry', 'Bright Powder'],
  },

  // ── Illumise ─────────────────────────────────────────────────────────────
  illumise: {
    id: 'illumise', name: 'Illumise', family: 'Illumise', dexNumber: 314,
    type: 'bug', specialties: ['hype'],
    favoriteItems: ['Lum Berry', 'Bright Powder'],
  },

  // ── Gulpin family ────────────────────────────────────────────────────────
  gulpin: {
    id: 'gulpin', name: 'Gulpin', family: 'Gulpin', dexNumber: 316,
    type: 'poison', specialties: ['storage'],
    favoriteItems: ['Big Pearl', 'Black Sludge'],
  },
  swalot: {
    id: 'swalot', name: 'Swalot', family: 'Gulpin', dexNumber: 317,
    type: 'poison', specialties: ['storage'],
    favoriteItems: ['Big Pearl', 'Black Sludge', 'Sticky Barb'],
  },

  // ── Cacnea family ────────────────────────────────────────────────────────
  cacnea: {
    id: 'cacnea', name: 'Cacnea', family: 'Cacnea', dexNumber: 331,
    type: 'grass', specialties: ['plant', 'gather'],
    favoriteItems: ['Poison Barb', 'Miracle Seed'],
  },
  cacturne: {
    id: 'cacturne', name: 'Cacturne', family: 'Cacnea', dexNumber: 332,
    type: 'grass', specialties: ['plant', 'gather', 'litter'],
    favoriteItems: ['Poison Barb', 'Miracle Seed', 'Dusk Stone'],
    litterResources: ['sturdy stick'],
  },

  // ── Swablu family ────────────────────────────────────────────────────────
  swablu: {
    id: 'swablu', name: 'Swablu', family: 'Swablu', dexNumber: 333,
    type: 'normal', specialties: ['litter'],
    favoriteItems: ['Cloud Nine', 'Silk Scarf'],
    litterResources: ['fluff'],
  },
  altaria: {
    id: 'altaria', name: 'Altaria', family: 'Swablu', dexNumber: 334,
    type: 'dragon', specialties: ['litter', 'transport'],
    favoriteItems: ['Dragon Scale', 'Silk Scarf', 'Dragon Fang'],
    litterResources: ['fluff'],
  },

  // ── Combee family ────────────────────────────────────────────────────────
  combee: {
    id: 'combee', name: 'Combee', family: 'Combee', dexNumber: 415,
    type: 'bug', specialties: ['litter'],
    favoriteItems: ['Honey', 'Oran Berry'],
    litterResources: ['honey'],
  },
  vespiquen: {
    id: 'vespiquen', name: 'Vespiquen', family: 'Combee', dexNumber: 416,
    type: 'bug', specialties: ['gather', 'search'],
    favoriteItems: ['Honey', 'Silver Powder'],
  },

  // ── Shellos family ───────────────────────────────────────────────────────
  shellos: {
    id: 'shellos', name: 'Shellos', family: 'Shellos', dexNumber: 422,
    type: 'water', specialties: ['water'],
    favoriteItems: ['Mystic Water', 'Sitrus Berry'],
  },
  gastrodon: {
    id: 'gastrodon', name: 'Gastrodon', family: 'Shellos', dexNumber: 423,
    type: 'water', specialties: ['water', 'trade'],
    favoriteItems: ['Mystic Water', 'Big Pearl', 'Shell Bell'],
  },

  // ── Drifloon family ──────────────────────────────────────────────────────
  drifloon: {
    id: 'drifloon', name: 'Drifloon', family: 'Drifloon', dexNumber: 425,
    type: 'ghost', specialties: ['island'],
    favoriteItems: ['Spell Tag', 'Float Stone'],
  },
  drifblim: {
    id: 'drifblim', name: 'Drifblim', family: 'Drifloon', dexNumber: 426,
    type: 'ghost', specialties: ['transport', 'gather'],
    favoriteItems: ['Spell Tag', 'Float Stone', 'Dusk Stone'],
  },

  // ── Drilbur family ───────────────────────────────────────────────────────
  drilbur: {
    id: 'drilbur', name: 'Drilbur', family: 'Drilbur', dexNumber: 529,
    type: 'ground', specialties: ['search'],
    favoriteItems: ['Soft Sand', 'Metal Coat'],
  },
  excadrill: {
    id: 'excadrill', name: 'Excadrill', family: 'Drilbur', dexNumber: 530,
    type: 'ground', specialties: ['search', 'chop'],
    favoriteItems: ['Soft Sand', 'Metal Coat', 'Hard Stone'],
  },

  // ── Timburr family ───────────────────────────────────────────────────────
  timburr: {
    id: 'timburr', name: 'Timburr', family: 'Timburr', dexNumber: 532,
    type: 'fighting', specialties: ['build'],
    favoriteItems: ['Black Belt', 'Muscle Band'],
  },
  gurdurr: {
    id: 'gurdurr', name: 'Gurdurr', family: 'Timburr', dexNumber: 533,
    type: 'fighting', specialties: ['build'],
    favoriteItems: ['Black Belt', 'Muscle Band', 'Link Cable'],
  },
  conkeldurr: {
    id: 'conkeldurr', name: 'Conkeldurr', family: 'Timburr', dexNumber: 534,
    type: 'fighting', specialties: ['build', 'crush'],
    favoriteItems: ['Black Belt', 'Muscle Band', 'Flame Orb'],
  },

  // ── Litwick family ───────────────────────────────────────────────────────
  litwick: {
    id: 'litwick', name: 'Litwick', family: 'Litwick', dexNumber: 607,
    type: 'ghost', specialties: ['burn', 'craft'],
    favoriteItems: ['Charcoal', 'Spell Tag'],
  },
  lampent: {
    id: 'lampent', name: 'Lampent', family: 'Litwick', dexNumber: 608,
    type: 'ghost', specialties: ['burn', 'craft'],
    favoriteItems: ['Charcoal', 'Spell Tag', 'Dusk Stone'],
  },
  chandelure: {
    id: 'chandelure', name: 'Chandelure', family: 'Litwick', dexNumber: 609,
    type: 'ghost', specialties: ['burn', 'craft'],
    favoriteItems: ['Charcoal', 'Spell Tag', 'Dusk Stone', 'Fire Gem'],
  },

  // ── Axew family ──────────────────────────────────────────────────────────
  axew: {
    id: 'axew', name: 'Axew', family: 'Axew', dexNumber: 610,
    type: 'dragon', specialties: ['chop'],
    favoriteItems: ['Dragon Fang', 'Dragon Scale'],
  },
  fraxure: {
    id: 'fraxure', name: 'Fraxure', family: 'Axew', dexNumber: 611,
    type: 'dragon', specialties: ['chop'],
    favoriteItems: ['Dragon Fang', 'Dragon Scale'],
  },
  haxorus: {
    id: 'haxorus', name: 'Haxorus', family: 'Axew', dexNumber: 612,
    type: 'dragon', specialties: ['chop', 'litter'],
    favoriteItems: ['Dragon Fang', 'Dragon Scale', 'Haban Berry'],
    litterResources: ['small log'],
  },

  // ── Goomy family ─────────────────────────────────────────────────────────
  goomy: {
    id: 'goomy', name: 'Goomy', family: 'Goomy', dexNumber: 704,
    type: 'dragon', specialties: ['water'],
    favoriteItems: ['Mystic Water', 'Dragon Scale'],
  },
  sliggoo: {
    id: 'sliggoo', name: 'Sliggoo', family: 'Goomy', dexNumber: 705,
    type: 'dragon', specialties: ['water'],
    favoriteItems: ['Mystic Water', 'Dragon Scale'],
  },
  goodra: {
    id: 'goodra', name: 'Goodra', family: 'Goomy', dexNumber: 706,
    type: 'dragon', specialties: ['water', 'trade'],
    favoriteItems: ['Mystic Water', 'Dragon Scale', 'Dragon Fang'],
  },

  // ── Cramorant ────────────────────────────────────────────────────────────
  cramorant: {
    id: 'cramorant', name: 'Cramorant', family: 'Cramorant', dexNumber: 845,
    type: 'flying', specialties: ['transport', 'water'],
    favoriteItems: ['Mystic Water', 'Sharp Beak'],
  },

  // ── Pikachu family ───────────────────────────────────────────────────────
  pichu: {
    id: 'pichu', name: 'Pichu', family: 'Pikachu', dexNumber: 172,
    type: 'electric', specialties: ['electric'],
    favoriteItems: ['Oran Berry', 'Magnet'],
  },
  pikachu: {
    id: 'pikachu', name: 'Pikachu', family: 'Pikachu', dexNumber: 25,
    type: 'electric', specialties: ['electric'],
    favoriteItems: ['Oran Berry', 'Magnet', 'Thunder Stone'],
  },
  raichu: {
    id: 'raichu', name: 'Raichu', family: 'Pikachu', dexNumber: 26,
    type: 'electric', specialties: ['electric', 'hype'],
    favoriteItems: ['Sitrus Berry', 'Magnet', 'Thunder Stone', 'Zap Plate'],
  },

  // ── Meowth family ────────────────────────────────────────────────────────
  meowth: {
    id: 'meowth', name: 'Meowth', family: 'Meowth', dexNumber: 52,
    type: 'normal', specialties: ['trade'],
    favoriteItems: ['Amulet Coin', 'Silk Scarf'],
  },
  persian: {
    id: 'persian', name: 'Persian', family: 'Meowth', dexNumber: 53,
    type: 'normal', specialties: ['trade', 'search'],
    favoriteItems: ['Amulet Coin', 'Silk Scarf', 'Moon Stone', 'Nugget'],
  },

  // ── Psyduck family ───────────────────────────────────────────────────────
  psyduck: {
    id: 'psyduck', name: 'Psyduck', family: 'Psyduck', dexNumber: 54,
    type: 'water', specialties: ['search'],
    favoriteItems: ['Mystic Water', 'Twisted Spoon'],
  },
  golduck: {
    id: 'golduck', name: 'Golduck', family: 'Psyduck', dexNumber: 55,
    type: 'water', specialties: ['search'],
    favoriteItems: ['Mystic Water', 'Twisted Spoon', 'Water Stone'],
  },

  // ── Growlithe family ─────────────────────────────────────────────────────
  growlithe: {
    id: 'growlithe', name: 'Growlithe', family: 'Growlithe', dexNumber: 58,
    type: 'fire', specialties: ['burn', 'craft', 'search'],
    favoriteItems: ['Rawst Berry', 'Charcoal'],
  },
  arcanine: {
    id: 'arcanine', name: 'Arcanine', family: 'Growlithe', dexNumber: 59,
    type: 'fire', specialties: ['burn', 'craft', 'search'],
    favoriteItems: ['Rawst Berry', 'Charcoal', 'Fire Stone', 'Wide Lens'],
  },

  // ── Grimer family ────────────────────────────────────────────────────────
  grimer: {
    id: 'grimer', name: 'Grimer', family: 'Grimer', dexNumber: 88,
    type: 'poison', specialties: ['litter'],
    favoriteItems: ['Black Sludge', 'Poison Barb'],
    litterResources: ['nonburnable garbage'],
  },
  muk: {
    id: 'muk', name: 'Muk', family: 'Grimer', dexNumber: 89,
    type: 'poison', specialties: ['litter'],
    favoriteItems: ['Black Sludge', 'Poison Barb', 'Sticky Barb'],
    litterResources: ['nonburnable garbage'],
  },

  // ── Gastly family ────────────────────────────────────────────────────────
  gastly: {
    id: 'gastly', name: 'Gastly', family: 'Gastly', dexNumber: 92,
    type: 'ghost', specialties: ['gather', 'trade'],
    favoriteItems: ['Spell Tag', 'Dusk Stone'],
  },
  haunter: {
    id: 'haunter', name: 'Haunter', family: 'Gastly', dexNumber: 93,
    type: 'ghost', specialties: ['gather', 'trade'],
    favoriteItems: ['Spell Tag', 'Dusk Stone', 'Twisted Spoon'],
  },
  gengar: {
    id: 'gengar', name: 'Gengar', family: 'Gastly', dexNumber: 94,
    type: 'ghost', specialties: ['gather', 'trade'],
    favoriteItems: ['Spell Tag', 'Dusk Stone', 'Twisted Spoon', 'Shadow Ball'],
  },

  // ── Voltorb family ───────────────────────────────────────────────────────
  voltorb: {
    id: 'voltorb', name: 'Voltorb', family: 'Voltorb', dexNumber: 100,
    type: 'electric', specialties: ['electric', 'explode'],
    favoriteItems: ['Magnet', 'Cell Battery'],
  },
  electrode: {
    id: 'electrode', name: 'Electrode', family: 'Voltorb', dexNumber: 101,
    type: 'electric', specialties: ['electric', 'explode'],
    favoriteItems: ['Magnet', 'Cell Battery', 'Thunder Stone'],
  },

  // ── Exeggcute family ─────────────────────────────────────────────────────
  exeggcute: {
    id: 'exeggcute', name: 'Exeggcute', family: 'Exeggcute', dexNumber: 102,
    type: 'grass', specialties: ['plant', 'gather', 'teleport'],
    favoriteItems: ['Miracle Seed', 'Twisted Spoon'],
  },
  exeggutor: {
    id: 'exeggutor', name: 'Exeggutor', family: 'Exeggcute', dexNumber: 103,
    type: 'grass', specialties: ['plant', 'gather', 'teleport'],
    favoriteItems: ['Miracle Seed', 'Twisted Spoon', 'Leaf Stone'],
  },

  // ── Chansey family ───────────────────────────────────────────────────────
  chansey: {
    id: 'chansey', name: 'Chansey', family: 'Chansey', dexNumber: 113,
    type: 'normal', specialties: ['trade'],
    favoriteItems: ['Oval Stone', 'Lucky Egg', 'Sitrus Berry'],
  },
  blissey: {
    id: 'blissey', name: 'Blissey', family: 'Chansey', dexNumber: 242,
    type: 'normal', specialties: ['trade', 'litter'],
    favoriteItems: ['Oval Stone', 'Lucky Egg', 'Lum Berry'],
    litterResources: ['stone'],
  },

  // ── Elekid family ────────────────────────────────────────────────────────
  elekid: {
    id: 'elekid', name: 'Elekid', family: 'Elekid', dexNumber: 239,
    type: 'electric', specialties: ['electric'],
    favoriteItems: ['Magnet', 'Electirizer'],
  },
  electabuzz: {
    id: 'electabuzz', name: 'Electabuzz', family: 'Elekid', dexNumber: 125,
    type: 'electric', specialties: ['electric'],
    favoriteItems: ['Magnet', 'Electirizer', 'Sitrus Berry'],
  },
  electivire: {
    id: 'electivire', name: 'Electivire', family: 'Elekid', dexNumber: 466,
    type: 'electric', specialties: ['electric', 'crush'],
    favoriteItems: ['Magnet', 'Electirizer', 'Muscle Band'],
  },

  // ── Lapras ───────────────────────────────────────────────────────────────
  lapras: {
    id: 'lapras', name: 'Lapras', family: 'Lapras', dexNumber: 131,
    type: 'water', specialties: ['water'],
    favoriteItems: ['Mystic Water', 'Never-Melt Ice', 'Shell Bell'],
  },

  // ── Munchlax family ──────────────────────────────────────────────────────
  munchlax: {
    id: 'munchlax', name: 'Munchlax', family: 'Munchlax', dexNumber: 446,
    type: 'normal', specialties: ['bulldoze'],
    favoriteItems: ['Leftovers', 'Full Incense', 'Big Root'],
  },
  snorlax: {
    id: 'snorlax', name: 'Snorlax', family: 'Munchlax', dexNumber: 143,
    type: 'normal', specialties: ['trade', 'bulldoze'],
    favoriteItems: ['Leftovers', 'Full Restore', 'Big Root', 'Chesto Berry'],
  },

  // ── Spinarak family ──────────────────────────────────────────────────────
  spinarak: {
    id: 'spinarak', name: 'Spinarak', family: 'Spinarak', dexNumber: 167,
    type: 'bug', specialties: ['litter'],
    favoriteItems: ['Poison Barb', 'Silk Scarf'],
    litterResources: ['twine'],
  },
  ariados: {
    id: 'ariados', name: 'Ariados', family: 'Spinarak', dexNumber: 168,
    type: 'bug', specialties: ['litter'],
    favoriteItems: ['Poison Barb', 'Silk Scarf', 'Red Card'],
    litterResources: ['twine'],
  },

  // ── Mareep family ────────────────────────────────────────────────────────
  mareep: {
    id: 'mareep', name: 'Mareep', family: 'Mareep', dexNumber: 179,
    type: 'electric', specialties: ['electric', 'litter'],
    favoriteItems: ['Magnet', 'Soft Sand'],
    litterResources: ['fluff'],
  },
  flaaffy: {
    id: 'flaaffy', name: 'Flaaffy', family: 'Mareep', dexNumber: 180,
    type: 'electric', specialties: ['electric', 'litter'],
    favoriteItems: ['Magnet', 'Soft Sand', 'Thunder Stone'],
    litterResources: ['fluff'],
  },
  ampharos: {
    id: 'ampharos', name: 'Ampharos', family: 'Mareep', dexNumber: 181,
    type: 'electric', specialties: ['electric', 'trade'],
    favoriteItems: ['Magnet', 'Thunder Stone', 'Zap Plate'],
  },

  // ── Azurill family ───────────────────────────────────────────────────────
  azurill: {
    id: 'azurill', name: 'Azurill', family: 'Azurill', dexNumber: 298,
    type: 'normal', specialties: ['water', 'hype'],
    favoriteItems: ['Mystic Water', 'Oran Berry'],
  },
  marill: {
    id: 'marill', name: 'Marill', family: 'Azurill', dexNumber: 183,
    type: 'water', specialties: ['water', 'hype'],
    favoriteItems: ['Mystic Water', 'Sitrus Berry'],
  },
  azumarill: {
    id: 'azumarill', name: 'Azumarill', family: 'Azurill', dexNumber: 184,
    type: 'water', specialties: ['water', 'build'],
    favoriteItems: ['Mystic Water', 'Water Stone', 'Shell Bell'],
  },

  // ── Paldean Wooper family ────────────────────────────────────────────────
  palwoop: {
    id: 'palwoop', name: 'Paldean Wooper', family: 'Paldean Wooper', dexNumber: 194,
    type: 'poison', specialties: ['litter'],
    favoriteItems: ['Poison Barb', 'Black Sludge'],
    litterResources: ['squishy clay'],
  },
  clodsire: {
    id: 'clodsire', name: 'Clodsire', family: 'Paldean Wooper', dexNumber: 980,
    type: 'poison', specialties: ['litter', 'bulldoze'],
    favoriteItems: ['Poison Barb', 'Black Sludge', 'Earth Plate'],
    litterResources: ['squishy clay'],
  },

  // ── Garbodor ─────────────────────────────────────────────────────────────
  garbodor: {
    id: 'garbodor', name: 'Garbodor', family: 'Garbodor', dexNumber: 569,
    type: 'poison', specialties: ['recycle', 'litter'],
    favoriteItems: ['Black Sludge', 'Poison Barb', 'Sticky Barb'],
    litterResources: ['nonburnable garbage'],
  },

  // ── Larvesta family ──────────────────────────────────────────────────────
  larvesta: {
    id: 'larvesta', name: 'Larvesta', family: 'Larvesta', dexNumber: 636,
    type: 'bug', specialties: ['burn', 'craft', 'litter'],
    favoriteItems: ['Charcoal', 'Fire Stone', 'Rawst Berry'],
    litterResources: ['twine'],
  },
  volcarona: {
    id: 'volcarona', name: 'Volcarona', family: 'Larvesta', dexNumber: 637,
    type: 'bug', specialties: ['burn', 'craft', 'litter'],
    favoriteItems: ['Charcoal', 'Fire Stone', 'Fire Gem'],
    litterResources: ['twine'],
  },

  // ── Glimmet family ───────────────────────────────────────────────────────
  glimmet: {
    id: 'glimmet', name: 'Glimmet', family: 'Glimmet', dexNumber: 969,
    type: 'rock', specialties: ['litter'],
    favoriteItems: ['Hard Stone', 'Poison Barb'],
    litterResources: ['iron ore'],
  },
  glimmora: {
    id: 'glimmora', name: 'Glimmora', family: 'Glimmet', dexNumber: 970,
    type: 'rock', specialties: ['litter'],
    favoriteItems: ['Hard Stone', 'Poison Barb', 'Rock Incense'],
    litterResources: ['iron ore'],
  },

  // ── Trapinch ─────────────────────────────────────────────────────────────
  trapinch: {
    id: 'trapinch', name: 'Trapinch', family: 'Trapinch', dexNumber: 328,
    type: 'ground', specialties: ['bulldoze', 'litter'],
    favoriteItems: ['Soft Sand', 'Dragon Scale'],
    litterResources: ['squishy clay'],
  },

  // ── Snivy family ─────────────────────────────────────────────────────────
  snivy: {
    id: 'snivy', name: 'Snivy', family: 'Snivy', dexNumber: 495,
    type: 'grass', specialties: ['plant', 'gather', 'litter'],
    favoriteItems: ['Miracle Seed', 'Big Root'],
    litterResources: ['vine rope'],
  },
  servine: {
    id: 'servine', name: 'Servine', family: 'Snivy', dexNumber: 496,
    type: 'grass', specialties: ['plant', 'gather', 'litter'],
    favoriteItems: ['Miracle Seed', 'Big Root', 'Leaf Stone'],
    litterResources: ['vine rope'],
  },
  serperior: {
    id: 'serperior', name: 'Serperior', family: 'Snivy', dexNumber: 497,
    type: 'grass', specialties: ['plant', 'gather', 'litter'],
    favoriteItems: ['Miracle Seed', 'Big Root', 'Leaf Stone', 'Dragon Scale'],
    litterResources: ['vine rope'],
  },

  // ── Rampardos ────────────────────────────────────────────────────────────
  rampardos: {
    id: 'rampardos', name: 'Rampardos', family: 'Rampardos', dexNumber: 409,
    type: 'rock', specialties: ['crush', 'litter'],
    favoriteItems: ['Hard Stone', 'Skull Fossil'],
    litterResources: ['stone'],
  },

  // ── Bastiodon ────────────────────────────────────────────────────────────
  bastiodon: {
    id: 'bastiodon', name: 'Bastiodon', family: 'Bastiodon', dexNumber: 411,
    type: 'rock', specialties: ['crush', 'litter'],
    favoriteItems: ['Hard Stone', 'Armor Fossil'],
    litterResources: ['stone'],
  },

  // ── Tyrantrum ────────────────────────────────────────────────────────────
  tyrantrum: {
    id: 'tyrantrum', name: 'Tyrantrum', family: 'Tyrantrum', dexNumber: 697,
    type: 'dragon', specialties: ['crush', 'litter'],
    favoriteItems: ['Dragon Fang', 'Hard Stone'],
    litterResources: ['stone'],
  },

  // ── Aurorus ──────────────────────────────────────────────────────────────
  aurorus: {
    id: 'aurorus', name: 'Aurorus', family: 'Aurorus', dexNumber: 699,
    type: 'rock', specialties: ['crush', 'litter'],
    favoriteItems: ['Hard Stone', 'Never-Melt Ice'],
    litterResources: ['stone'],
  },

  // ── Jumpluff ─────────────────────────────────────────────────────────────
  jumpluff: {
    id: 'jumpluff', name: 'Jumpluff', family: 'Jumpluff', dexNumber: 189,
    type: 'grass', specialties: ['plant', 'gather', 'litter'],
    favoriteItems: ['Miracle Seed', 'Big Root', 'Sharp Beak'],
    litterResources: ['fluff'],
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
