import type { Pokemon, PokopiaArea } from './types';

export const POKEMON_DB: Record<string, Pokemon> = {

  // ── Bulbasaur ─────────────────────────────────────────
  bulbasaur: {
    id: 'bulbasaur', name: 'Bulbasaur', family: 'Bulbasaur', dexNumber: 1,
    type: 'grass', specialties: ['grow'],
    favoriteItems: [],
  },
  ivysaur: {
    id: 'ivysaur', name: 'Ivysaur', family: 'Bulbasaur', dexNumber: 2,
    type: 'grass', specialties: ['grow'],
    favoriteItems: [],
  },
  venusaur: {
    id: 'venusaur', name: 'Venusaur', family: 'Bulbasaur', dexNumber: 3,
    type: 'grass', specialties: ['litter'],
    litterResources: ['plant'],
    favoriteItems: [],
  },

  // ── Charmander ────────────────────────────────────────
  charmander: {
    id: 'charmander', name: 'Charmander', family: 'Charmander', dexNumber: 4,
    type: 'fire', specialties: ['burn'],
    favoriteItems: [],
  },
  charmeleon: {
    id: 'charmeleon', name: 'Charmeleon', family: 'Charmander', dexNumber: 5,
    type: 'fire', specialties: ['burn'],
    favoriteItems: [],
  },
  charizard: {
    id: 'charizard', name: 'Charizard', family: 'Charmander', dexNumber: 6,
    type: 'fire', specialties: ['burn', 'fly'],
    favoriteItems: [],
  },

  // ── Squirtle ──────────────────────────────────────────
  squirtle: {
    id: 'squirtle', name: 'Squirtle', family: 'Squirtle', dexNumber: 7,
    type: 'water', specialties: ['water'],
    favoriteItems: [],
  },
  wartortle: {
    id: 'wartortle', name: 'Wartortle', family: 'Squirtle', dexNumber: 8,
    type: 'water', specialties: ['water'],
    favoriteItems: [],
  },
  blastoise: {
    id: 'blastoise', name: 'Blastoise', family: 'Squirtle', dexNumber: 9,
    type: 'water', specialties: ['water', 'trade'],
    favoriteItems: [],
  },

  // ── Pidgey ────────────────────────────────────────────
  pidgey: {
    id: 'pidgey', name: 'Pidgey', family: 'Pidgey', dexNumber: 16,
    type: 'flying', specialties: ['fly', 'search'],
    favoriteItems: [],
  },
  pidgeotto: {
    id: 'pidgeotto', name: 'Pidgeotto', family: 'Pidgey', dexNumber: 17,
    type: 'flying', specialties: ['fly', 'search'],
    favoriteItems: [],
  },
  pidgeot: {
    id: 'pidgeot', name: 'Pidgeot', family: 'Pidgey', dexNumber: 18,
    type: 'flying', specialties: ['fly', 'chop'],
    favoriteItems: [],
  },

  // ── Oddish ────────────────────────────────────────────
  oddish: {
    id: 'oddish', name: 'Oddish', family: 'Oddish', dexNumber: 43,
    type: 'grass', specialties: ['grow'],
    favoriteItems: [],
  },
  gloom: {
    id: 'gloom', name: 'Gloom', family: 'Oddish', dexNumber: 44,
    type: 'grass', specialties: ['grow'],
    favoriteItems: [],
  },
  vileplume: {
    id: 'vileplume', name: 'Vileplume', family: 'Oddish', dexNumber: 45,
    type: 'grass', specialties: ['litter'],
    litterResources: ['plant'],
    favoriteItems: [],
  },
  bellossom: {
    id: 'bellossom', name: 'Bellossom', family: 'Oddish', dexNumber: 182,
    type: 'grass', specialties: ['grow', 'hype'],
    favoriteItems: [],
  },

  // ── Paras ─────────────────────────────────────────────
  paras: {
    id: 'paras', name: 'Paras', family: 'Paras', dexNumber: 46,
    type: 'bug', specialties: ['search'],
    favoriteItems: [],
  },
  parasect: {
    id: 'parasect', name: 'Parasect', family: 'Paras', dexNumber: 47,
    type: 'bug', specialties: ['search'],
    favoriteItems: [],
  },

  // ── Venonat ───────────────────────────────────────────
  venonat: {
    id: 'venonat', name: 'Venonat', family: 'Venonat', dexNumber: 48,
    type: 'bug', specialties: ['search'],
    favoriteItems: [],
  },
  venomoth: {
    id: 'venomoth', name: 'Venomoth', family: 'Venonat', dexNumber: 49,
    type: 'bug', specialties: ['search'],
    favoriteItems: [],
  },

  // ── Bellsprout ────────────────────────────────────────
  bellsprout: {
    id: 'bellsprout', name: 'Bellsprout', family: 'Bellsprout', dexNumber: 69,
    type: 'grass', specialties: ['litter'],
    litterResources: ['plant'],
    favoriteItems: [],
  },
  weepinbell: {
    id: 'weepinbell', name: 'Weepinbell', family: 'Bellsprout', dexNumber: 70,
    type: 'grass', specialties: ['litter'],
    litterResources: ['plant'],
    favoriteItems: [],
  },
  victreebel: {
    id: 'victreebel', name: 'Victreebel', family: 'Bellsprout', dexNumber: 71,
    type: 'grass', specialties: ['grow', 'chop'],
    favoriteItems: [],
  },

  // ── Slowpoke ──────────────────────────────────────────
  slowpoke: {
    id: 'slowpoke', name: 'Slowpoke', family: 'Slowpoke', dexNumber: 79,
    type: 'water', specialties: ['water', 'yawn'],
    favoriteItems: [],
  },
  slowbro: {
    id: 'slowbro', name: 'Slowbro', family: 'Slowpoke', dexNumber: 80,
    type: 'water', specialties: ['water', 'trade'],
    favoriteItems: [],
  },
  slowking: {
    id: 'slowking', name: 'Slowking', family: 'Slowpoke', dexNumber: 199,
    type: 'water', specialties: ['water', 'teleport'],
    favoriteItems: [],
  },

  // ── Magnemite ─────────────────────────────────────────
  magnemite: {
    id: 'magnemite', name: 'Magnemite', family: 'Magnemite', dexNumber: 81,
    type: 'electric', specialties: ['generate'],
    favoriteItems: [],
  },
  magneton: {
    id: 'magneton', name: 'Magneton', family: 'Magnemite', dexNumber: 82,
    type: 'electric', specialties: ['generate'],
    favoriteItems: [],
  },
  magnezone: {
    id: 'magnezone', name: 'Magnezone', family: 'Magnemite', dexNumber: 462,
    type: 'electric', specialties: ['generate', 'recycle'],
    favoriteItems: [],
  },

  // ── Onix ──────────────────────────────────────────────
  onix: {
    id: 'onix', name: 'Onix', family: 'Onix', dexNumber: 95,
    type: 'rock', specialties: ['crush', 'bulldoze'],
    favoriteItems: [],
  },
  steelix: {
    id: 'steelix', name: 'Steelix', family: 'Onix', dexNumber: 208,
    type: 'steel', specialties: ['crush', 'bulldoze'],
    favoriteItems: [],
  },

  // ── Cubone ────────────────────────────────────────────
  cubone: {
    id: 'cubone', name: 'Cubone', family: 'Cubone', dexNumber: 104,
    type: 'ground', specialties: ['build'],
    favoriteItems: [],
  },
  marowak: {
    id: 'marowak', name: 'Marowak', family: 'Cubone', dexNumber: 105,
    type: 'ground', specialties: ['build'],
    favoriteItems: [],
  },

  // ── Tyrogue ───────────────────────────────────────────
  tyrogue: {
    id: 'tyrogue', name: 'Tyrogue', family: 'Tyrogue', dexNumber: 236,
    type: 'fighting', specialties: ['trade'],
    favoriteItems: [],
  },
  hitmonlee: {
    id: 'hitmonlee', name: 'Hitmonlee', family: 'Tyrogue', dexNumber: 106,
    type: 'fighting', specialties: ['trade'],
    favoriteItems: [],
  },
  hitmonchan: {
    id: 'hitmonchan', name: 'Hitmonchan', family: 'Tyrogue', dexNumber: 107,
    type: 'fighting', specialties: ['trade'],
    favoriteItems: [],
  },
  hitmontop: {
    id: 'hitmontop', name: 'Hitmontop', family: 'Tyrogue', dexNumber: 237,
    type: 'fighting', specialties: ['trade'],
    favoriteItems: [],
  },

  // ── Koffing ───────────────────────────────────────────
  koffing: {
    id: 'koffing', name: 'Koffing', family: 'Koffing', dexNumber: 109,
    type: 'poison', specialties: ['recycle'],
    favoriteItems: [],
  },
  weezing: {
    id: 'weezing', name: 'Weezing', family: 'Koffing', dexNumber: 110,
    type: 'poison', specialties: ['recycle'],
    favoriteItems: [],
  },

  // ── Tangela ───────────────────────────────────────────
  tangela: {
    id: 'tangela', name: 'Tangela', family: 'Tangela', dexNumber: 114,
    type: 'grass', specialties: ['litter'],
    litterResources: ['plant'],
    favoriteItems: [],
  },
  tangrowth: {
    id: 'tangrowth', name: 'Tangrowth', family: 'Tangela', dexNumber: 465,
    type: 'grass', specialties: ['appraise'],
    favoriteItems: [],
  },

  // ── Scyther ───────────────────────────────────────────
  scyther: {
    id: 'scyther', name: 'Scyther', family: 'Scyther', dexNumber: 123,
    type: 'bug', specialties: ['chop'],
    favoriteItems: [],
  },
  scizor: {
    id: 'scizor', name: 'Scizor', family: 'Scyther', dexNumber: 212,
    type: 'bug', specialties: ['chop'],
    favoriteItems: [],
  },

  // ── Pinsir ────────────────────────────────────────────
  pinsir: {
    id: 'pinsir', name: 'Pinsir', family: 'Pinsir', dexNumber: 127,
    type: 'bug', specialties: ['chop', 'build'],
    favoriteItems: [],
  },

  // ── Magikarp ──────────────────────────────────────────
  magikarp: {
    id: 'magikarp', name: 'Magikarp', family: 'Magikarp', dexNumber: 129,
    type: 'water', specialties: [],
    favoriteItems: [],
  },
  gyarados: {
    id: 'gyarados', name: 'Gyarados', family: 'Magikarp', dexNumber: 130,
    type: 'water', specialties: ['water'],
    favoriteItems: [],
  },

  // ── Ditto ─────────────────────────────────────────────
  ditto: {
    id: 'ditto', name: 'Ditto', family: 'Ditto', dexNumber: 132,
    type: 'normal', specialties: ['transform'],
    favoriteItems: [],
  },

  // ── Hoothoot ──────────────────────────────────────────
  hoothoot: {
    id: 'hoothoot', name: 'Hoothoot', family: 'Hoothoot', dexNumber: 163,
    type: 'normal', specialties: ['trade', 'fly'],
    favoriteItems: [],
  },
  noctowl: {
    id: 'noctowl', name: 'Noctowl', family: 'Hoothoot', dexNumber: 164,
    type: 'normal', specialties: ['trade', 'fly'],
    favoriteItems: [],
  },

  // ── Heracross ─────────────────────────────────────────
  heracross: {
    id: 'heracross', name: 'Heracross', family: 'Heracross', dexNumber: 214,
    type: 'bug', specialties: ['chop', 'build'],
    favoriteItems: [],
  },

  // ── Volbeat ───────────────────────────────────────────
  volbeat: {
    id: 'volbeat', name: 'Volbeat', family: 'Volbeat', dexNumber: 313,
    type: 'bug', specialties: ['hype'],
    favoriteItems: [],
  },

  // ── Illumise ──────────────────────────────────────────
  illumise: {
    id: 'illumise', name: 'Illumise', family: 'Illumise', dexNumber: 314,
    type: 'bug', specialties: ['hype'],
    favoriteItems: [],
  },

  // ── Gulpin ────────────────────────────────────────────
  gulpin: {
    id: 'gulpin', name: 'Gulpin', family: 'Gulpin', dexNumber: 316,
    type: 'poison', specialties: ['storage'],
    favoriteItems: [],
  },
  swalot: {
    id: 'swalot', name: 'Swalot', family: 'Gulpin', dexNumber: 317,
    type: 'poison', specialties: ['storage'],
    favoriteItems: [],
  },

  // ── Cacnea ────────────────────────────────────────────
  cacnea: {
    id: 'cacnea', name: 'Cacnea', family: 'Cacnea', dexNumber: 331,
    type: 'grass', specialties: ['grow'],
    favoriteItems: [],
  },
  cacturne: {
    id: 'cacturne', name: 'Cacturne', family: 'Cacnea', dexNumber: 332,
    type: 'grass', specialties: ['litter'],
    litterResources: ['plant'],
    favoriteItems: [],
  },

  // ── Combee ────────────────────────────────────────────
  combee: {
    id: 'combee', name: 'Combee', family: 'Combee', dexNumber: 415,
    type: 'bug', specialties: ['litter'],
    litterResources: ['plant'],
    favoriteItems: [],
  },
  vespiquen: {
    id: 'vespiquen', name: 'Vespiquen', family: 'Combee', dexNumber: 416,
    type: 'bug', specialties: ['gather', 'honey', 'search'],
    favoriteItems: [],
  },

  // ── Shellos ───────────────────────────────────────────
  shellos: {
    id: 'shellos', name: 'Shellos', family: 'Shellos', dexNumber: 422,
    type: 'water', specialties: ['water'],
    favoriteItems: [],
  },
  gastrodon: {
    id: 'gastrodon', name: 'Gastrodon', family: 'Shellos', dexNumber: 423,
    type: 'water', specialties: ['water', 'trade'],
    favoriteItems: [],
  },

  // ── Drifloon ──────────────────────────────────────────
  drifloon: {
    id: 'drifloon', name: 'Drifloon', family: 'Drifloon', dexNumber: 425,
    type: 'ghost', specialties: ['dream', 'island'],
    favoriteItems: [],
  },
  drifblim: {
    id: 'drifblim', name: 'Drifblim', family: 'Drifloon', dexNumber: 426,
    type: 'ghost', specialties: ['fly', 'gather'],
    favoriteItems: [],
  },

  // ── Drilbur ───────────────────────────────────────────
  drilbur: {
    id: 'drilbur', name: 'Drilbur', family: 'Drilbur', dexNumber: 529,
    type: 'ground', specialties: ['search'],
    favoriteItems: [],
  },
  excadrill: {
    id: 'excadrill', name: 'Excadrill', family: 'Drilbur', dexNumber: 530,
    type: 'ground', specialties: ['chop', 'search'],
    favoriteItems: [],
  },

  // ── Timburr ───────────────────────────────────────────
  timburr: {
    id: 'timburr', name: 'Timburr', family: 'Timburr', dexNumber: 532,
    type: 'fighting', specialties: ['build'],
    favoriteItems: [],
  },
  gurdurr: {
    id: 'gurdurr', name: 'Gurdurr', family: 'Timburr', dexNumber: 533,
    type: 'fighting', specialties: ['build'],
    favoriteItems: [],
  },
  conkeldurr: {
    id: 'conkeldurr', name: 'Conkeldurr', family: 'Timburr', dexNumber: 534,
    type: 'fighting', specialties: ['build', 'crush'],
    favoriteItems: [],
  },

  // ── Litwick ───────────────────────────────────────────
  litwick: {
    id: 'litwick', name: 'Litwick', family: 'Litwick', dexNumber: 607,
    type: 'ghost', specialties: ['burn'],
    favoriteItems: [],
  },
  lampent: {
    id: 'lampent', name: 'Lampent', family: 'Litwick', dexNumber: 608,
    type: 'ghost', specialties: ['burn'],
    favoriteItems: [],
  },
  chandelure: {
    id: 'chandelure', name: 'Chandelure', family: 'Litwick', dexNumber: 609,
    type: 'ghost', specialties: ['burn'],
    favoriteItems: [],
  },

  // ── Axew ──────────────────────────────────────────────
  axew: {
    id: 'axew', name: 'Axew', family: 'Axew', dexNumber: 610,
    type: 'dragon', specialties: ['chop'],
    favoriteItems: [],
  },
  fraxure: {
    id: 'fraxure', name: 'Fraxure', family: 'Axew', dexNumber: 611,
    type: 'dragon', specialties: ['chop'],
    favoriteItems: [],
  },
  haxorus: {
    id: 'haxorus', name: 'Haxorus', family: 'Axew', dexNumber: 612,
    type: 'dragon', specialties: ['chop', 'litter'],
    litterResources: ['plant'],
    favoriteItems: [],
  },

  // ── Goomy ─────────────────────────────────────────────
  goomy: {
    id: 'goomy', name: 'Goomy', family: 'Goomy', dexNumber: 704,
    type: 'dragon', specialties: ['water'],
    favoriteItems: [],
  },
  sliggoo: {
    id: 'sliggoo', name: 'Sliggoo', family: 'Goomy', dexNumber: 705,
    type: 'dragon', specialties: ['water'],
    favoriteItems: [],
  },
  goodra: {
    id: 'goodra', name: 'Goodra', family: 'Goomy', dexNumber: 706,
    type: 'dragon', specialties: ['water'],
    favoriteItems: [],
  },

  // ── Cramorant ─────────────────────────────────────────
  cramorant: {
    id: 'cramorant', name: 'Cramorant', family: 'Cramorant', dexNumber: 845,
    type: 'flying', specialties: ['transport', 'water'],
    favoriteItems: [],
  },

  // ── Pikachu ───────────────────────────────────────────
  pichu: {
    id: 'pichu', name: 'Pichu', family: 'Pikachu', dexNumber: 172,
    type: 'electric', specialties: ['generate'],
    favoriteItems: [],
  },
  pikachu: {
    id: 'pikachu', name: 'Pikachu', family: 'Pikachu', dexNumber: 25,
    type: 'electric', specialties: ['illuminate'],
    favoriteItems: [],
  },
  raichu: {
    id: 'raichu', name: 'Raichu', family: 'Pikachu', dexNumber: 26,
    type: 'electric', specialties: ['generate', 'hype'],
    favoriteItems: [],
  },

  // ── Zubat ─────────────────────────────────────────────
  zubat: {
    id: 'zubat', name: 'Zubat', family: 'Zubat', dexNumber: 41,
    type: 'poison', specialties: ['search'],
    favoriteItems: [],
  },
  golbat: {
    id: 'golbat', name: 'Golbat', family: 'Zubat', dexNumber: 42,
    type: 'poison', specialties: ['search'],
    favoriteItems: [],
  },
  crobat: {
    id: 'crobat', name: 'Crobat', family: 'Zubat', dexNumber: 169,
    type: 'poison', specialties: ['chop'],
    favoriteItems: [],
  },

  // ── Meowth ────────────────────────────────────────────
  meowth: {
    id: 'meowth', name: 'Meowth', family: 'Meowth', dexNumber: 52,
    type: 'normal', specialties: ['trade'],
    favoriteItems: [],
  },
  persian: {
    id: 'persian', name: 'Persian', family: 'Meowth', dexNumber: 53,
    type: 'normal', specialties: ['trade', 'search'],
    favoriteItems: [],
  },

  // ── Psyduck ───────────────────────────────────────────
  psyduck: {
    id: 'psyduck', name: 'Psyduck', family: 'Psyduck', dexNumber: 54,
    type: 'water', specialties: ['search'],
    favoriteItems: [],
  },
  golduck: {
    id: 'golduck', name: 'Golduck', family: 'Psyduck', dexNumber: 55,
    type: 'water', specialties: ['search'],
    favoriteItems: [],
  },

  // ── Growlithe ─────────────────────────────────────────
  growlithe: {
    id: 'growlithe', name: 'Growlithe', family: 'Growlithe', dexNumber: 58,
    type: 'fire', specialties: ['burn', 'craft'],
    favoriteItems: [],
  },
  arcanine: {
    id: 'arcanine', name: 'Arcanine', family: 'Growlithe', dexNumber: 59,
    type: 'fire', specialties: ['burn', 'craft'],
    favoriteItems: [],
  },

  // ── Farfetch'd ────────────────────────────────────────
  farfetchd: {
    id: 'farfetchd', name: 'Farfetch\'d', family: 'Farfetch\'d', dexNumber: 83,
    type: 'normal', specialties: ['chop', 'build'],
    favoriteItems: [],
  },

  // ── Grimer ────────────────────────────────────────────
  grimer: {
    id: 'grimer', name: 'Grimer', family: 'Grimer', dexNumber: 88,
    type: 'poison', specialties: ['litter'],
    litterResources: ['plant'],
    favoriteItems: [],
  },
  muk: {
    id: 'muk', name: 'Muk', family: 'Grimer', dexNumber: 89,
    type: 'poison', specialties: ['litter'],
    litterResources: ['plant'],
    favoriteItems: [],
  },

  // ── Gastly ────────────────────────────────────────────
  gastly: {
    id: 'gastly', name: 'Gastly', family: 'Gastly', dexNumber: 92,
    type: 'ghost', specialties: ['gather', 'trade'],
    favoriteItems: [],
  },
  haunter: {
    id: 'haunter', name: 'Haunter', family: 'Gastly', dexNumber: 93,
    type: 'ghost', specialties: ['gather', 'trade'],
    favoriteItems: [],
  },
  gengar: {
    id: 'gengar', name: 'Gengar', family: 'Gastly', dexNumber: 94,
    type: 'ghost', specialties: ['gather', 'trade'],
    favoriteItems: [],
  },

  // ── Voltorb ───────────────────────────────────────────
  voltorb: {
    id: 'voltorb', name: 'Voltorb', family: 'Voltorb', dexNumber: 100,
    type: 'electric', specialties: ['generate', 'explode'],
    favoriteItems: [],
  },
  electrode: {
    id: 'electrode', name: 'Electrode', family: 'Voltorb', dexNumber: 101,
    type: 'electric', specialties: ['generate', 'explode'],
    favoriteItems: [],
  },

  // ── Exeggcute ─────────────────────────────────────────
  exeggcute: {
    id: 'exeggcute', name: 'Exeggcute', family: 'Exeggcute', dexNumber: 102,
    type: 'grass', specialties: ['plant', 'gather'],
    favoriteItems: [],
  },
  exeggutor: {
    id: 'exeggutor', name: 'Exeggutor', family: 'Exeggcute', dexNumber: 103,
    type: 'grass', specialties: ['plant', 'gather'],
    favoriteItems: [],
  },

  // ── Chansey ───────────────────────────────────────────
  happiny: {
    id: 'happiny', name: 'Happiny', family: 'Chansey', dexNumber: 440,
    type: 'normal', specialties: ['trade'],
    favoriteItems: [],
  },
  chansey: {
    id: 'chansey', name: 'Chansey', family: 'Chansey', dexNumber: 113,
    type: 'normal', specialties: ['trade'],
    favoriteItems: [],
  },
  blissey: {
    id: 'blissey', name: 'Blissey', family: 'Chansey', dexNumber: 242,
    type: 'normal', specialties: ['litter'],
    litterResources: ['plant'],
    favoriteItems: [],
  },

  // ── Elekid ────────────────────────────────────────────
  elekid: {
    id: 'elekid', name: 'Elekid', family: 'Elekid', dexNumber: 239,
    type: 'electric', specialties: ['generate'],
    favoriteItems: [],
  },
  electabuzz: {
    id: 'electabuzz', name: 'Electabuzz', family: 'Elekid', dexNumber: 125,
    type: 'electric', specialties: ['generate'],
    favoriteItems: [],
  },
  electivire: {
    id: 'electivire', name: 'Electivire', family: 'Elekid', dexNumber: 466,
    type: 'electric', specialties: ['generate', 'crush'],
    favoriteItems: [],
  },

  // ── Lapras ────────────────────────────────────────────
  lapras: {
    id: 'lapras', name: 'Lapras', family: 'Lapras', dexNumber: 131,
    type: 'water', specialties: ['water'],
    favoriteItems: [],
  },

  // ── Munchlax ──────────────────────────────────────────
  munchlax: {
    id: 'munchlax', name: 'Munchlax', family: 'Munchlax', dexNumber: 446,
    type: 'normal', specialties: ['bulldoze'],
    favoriteItems: [],
  },
  snorlax: {
    id: 'snorlax', name: 'Snorlax', family: 'Munchlax', dexNumber: 143,
    type: 'normal', specialties: ['trade', 'bulldoze'],
    favoriteItems: [],
  },

  // ── Spinarak ──────────────────────────────────────────
  spinarak: {
    id: 'spinarak', name: 'Spinarak', family: 'Spinarak', dexNumber: 167,
    type: 'bug', specialties: ['litter'],
    litterResources: ['plant'],
    favoriteItems: [],
  },
  ariados: {
    id: 'ariados', name: 'Ariados', family: 'Spinarak', dexNumber: 168,
    type: 'bug', specialties: ['litter'],
    litterResources: ['plant'],
    favoriteItems: [],
  },

  // ── Mareep ────────────────────────────────────────────
  mareep: {
    id: 'mareep', name: 'Mareep', family: 'Mareep', dexNumber: 179,
    type: 'electric', specialties: ['litter'],
    litterResources: ['plant'],
    favoriteItems: [],
  },
  flaaffy: {
    id: 'flaaffy', name: 'Flaaffy', family: 'Mareep', dexNumber: 180,
    type: 'electric', specialties: ['litter'],
    litterResources: ['plant'],
    favoriteItems: [],
  },
  ampharos: {
    id: 'ampharos', name: 'Ampharos', family: 'Mareep', dexNumber: 181,
    type: 'electric', specialties: ['generate', 'trade'],
    favoriteItems: [],
  },

  // ── Azurill ───────────────────────────────────────────
  azurill: {
    id: 'azurill', name: 'Azurill', family: 'Azurill', dexNumber: 298,
    type: 'normal', specialties: ['water'],
    favoriteItems: [],
  },
  marill: {
    id: 'marill', name: 'Marill', family: 'Azurill', dexNumber: 183,
    type: 'water', specialties: ['water'],
    favoriteItems: [],
  },
  azumarill: {
    id: 'azumarill', name: 'Azumarill', family: 'Azurill', dexNumber: 184,
    type: 'water', specialties: ['water', 'build'],
    favoriteItems: [],
  },

  // ── Paldean Wooper ────────────────────────────────────
  palwoop: {
    id: 'palwoop', name: 'Paldean Wooper', family: 'Paldean Wooper', dexNumber: 194,
    type: 'poison', specialties: ['litter'],
    litterResources: ['plant'],
    favoriteItems: [],
  },
  clodsire: {
    id: 'clodsire', name: 'Clodsire', family: 'Paldean Wooper', dexNumber: 980,
    type: 'poison', specialties: ['litter'],
    litterResources: ['plant'],
    favoriteItems: [],
  },

  // ── Smeargle ──────────────────────────────────────────
  smeargle: {
    id: 'smeargle', name: 'Smeargle', family: 'Smeargle', dexNumber: 235,
    type: 'normal', specialties: ['paint'],
    favoriteItems: [],
  },

  // ── Torchic ───────────────────────────────────────────
  torchic: {
    id: 'torchic', name: 'Torchic', family: 'Torchic', dexNumber: 255,
    type: 'fire', specialties: ['burn', 'craft'],
    favoriteItems: [],
  },
  combusken: {
    id: 'combusken', name: 'Combusken', family: 'Torchic', dexNumber: 256,
    type: 'fire', specialties: ['burn', 'craft', 'build'],
    favoriteItems: [],
  },
  blaziken: {
    id: 'blaziken', name: 'Blaziken', family: 'Torchic', dexNumber: 257,
    type: 'fire', specialties: ['burn', 'craft', 'build'],
    favoriteItems: [],
  },

  // ── Wingull ───────────────────────────────────────────
  wingull: {
    id: 'wingull', name: 'Wingull', family: 'Wingull', dexNumber: 278,
    type: 'water', specialties: ['transport', 'water'],
    favoriteItems: [],
  },
  pelipper: {
    id: 'pelipper', name: 'Pelipper', family: 'Wingull', dexNumber: 279,
    type: 'water', specialties: ['transport', 'water'],
    favoriteItems: [],
  },

  // ── Makuhita ──────────────────────────────────────────
  makuhita: {
    id: 'makuhita', name: 'Makuhita', family: 'Makuhita', dexNumber: 296,
    type: 'fighting', specialties: ['build'],
    favoriteItems: [],
  },
  hariyama: {
    id: 'hariyama', name: 'Hariyama', family: 'Makuhita', dexNumber: 297,
    type: 'fighting', specialties: ['build'],
    favoriteItems: [],
  },

  // ── Absol ─────────────────────────────────────────────
  absol: {
    id: 'absol', name: 'Absol', family: 'Absol', dexNumber: 359,
    type: 'dark', specialties: ['chop'],
    favoriteItems: [],
  },

  // ── Piplup ────────────────────────────────────────────
  piplup: {
    id: 'piplup', name: 'Piplup', family: 'Piplup', dexNumber: 393,
    type: 'water', specialties: ['water'],
    favoriteItems: [],
  },
  prinplup: {
    id: 'prinplup', name: 'Prinplup', family: 'Piplup', dexNumber: 394,
    type: 'water', specialties: ['water'],
    favoriteItems: [],
  },
  empoleon: {
    id: 'empoleon', name: 'Empoleon', family: 'Piplup', dexNumber: 395,
    type: 'water', specialties: ['water'],
    favoriteItems: [],
  },

  // ── Audino ────────────────────────────────────────────
  audino: {
    id: 'audino', name: 'Audino', family: 'Audino', dexNumber: 531,
    type: 'normal', specialties: ['trade'],
    favoriteItems: [],
  },

  // ── Trubbish ──────────────────────────────────────────
  trubbish: {
    id: 'trubbish', name: 'Trubbish', family: 'Trubbish', dexNumber: 568,
    type: 'poison', specialties: ['recycle'],
    favoriteItems: [],
  },
  garbodor: {
    id: 'garbodor', name: 'Garbodor', family: 'Trubbish', dexNumber: 569,
    type: 'poison', specialties: ['litter'],
    litterResources: ['plant'],
    favoriteItems: [],
  },

  // ── Zorua ─────────────────────────────────────────────
  zorua: {
    id: 'zorua', name: 'Zorua', family: 'Zorua', dexNumber: 570,
    type: 'dark', specialties: ['trade'],
    favoriteItems: [],
  },
  zoroark: {
    id: 'zoroark', name: 'Zoroark', family: 'Zorua', dexNumber: 571,
    type: 'dark', specialties: ['chop'],
    favoriteItems: [],
  },

  // ── Minccino ──────────────────────────────────────────
  minccino: {
    id: 'minccino', name: 'Minccino', family: 'Minccino', dexNumber: 572,
    type: 'normal', specialties: ['gather'],
    favoriteItems: [],
  },
  cinccino: {
    id: 'cinccino', name: 'Cinccino', family: 'Minccino', dexNumber: 573,
    type: 'normal', specialties: ['gather', 'recycle'],
    favoriteItems: [],
  },

  // ── Grubbin ───────────────────────────────────────────
  grubbin: {
    id: 'grubbin', name: 'Grubbin', family: 'Grubbin', dexNumber: 736,
    type: 'bug', specialties: ['chop'],
    favoriteItems: [],
  },
  charjabug: {
    id: 'charjabug', name: 'Charjabug', family: 'Grubbin', dexNumber: 737,
    type: 'bug', specialties: ['chop'],
    favoriteItems: [],
  },
  vikavolt: {
    id: 'vikavolt', name: 'Vikavolt', family: 'Grubbin', dexNumber: 738,
    type: 'bug', specialties: ['chop'],
    favoriteItems: [],
  },

  // ── Mimikyu ───────────────────────────────────────────
  mimikyu: {
    id: 'mimikyu', name: 'Mimikyu', family: 'Mimikyu', dexNumber: 778,
    type: 'ghost', specialties: ['trade'],
    favoriteItems: [],
  },

  // ── Pawmi ─────────────────────────────────────────────
  pawmi: {
    id: 'pawmi', name: 'Pawmi', family: 'Pawmi', dexNumber: 921,
    type: 'electric', specialties: ['generate'],
    favoriteItems: [],
  },
  pawmo: {
    id: 'pawmo', name: 'Pawmo', family: 'Pawmi', dexNumber: 922,
    type: 'electric', specialties: ['generate', 'crush'],
    favoriteItems: [],
  },
  pawmot: {
    id: 'pawmot', name: 'Pawmot', family: 'Pawmi', dexNumber: 923,
    type: 'electric', specialties: ['generate', 'crush'],
    favoriteItems: [],
  },

  // ── Tatsugiri ─────────────────────────────────────────
  tatsugiri: {
    id: 'tatsugiri', name: 'Tatsugiri', family: 'Tatsugiri', dexNumber: 978,
    type: 'dragon', specialties: ['trade'],
    favoriteItems: [],
  },

  // ── Ekans ─────────────────────────────────────────────
  ekans: {
    id: 'ekans', name: 'Ekans', family: 'Ekans', dexNumber: 23,
    type: 'poison', specialties: ['search'],
    favoriteItems: [],
  },
  arbok: {
    id: 'arbok', name: 'Arbok', family: 'Ekans', dexNumber: 24,
    type: 'poison', specialties: ['search'],
    favoriteItems: [],
  },

  // ── Cleffa ────────────────────────────────────────────
  cleffa: {
    id: 'cleffa', name: 'Cleffa', family: 'Cleffa', dexNumber: 173,
    type: 'fairy', specialties: ['hype'],
    favoriteItems: [],
  },
  clefairy: {
    id: 'clefairy', name: 'Clefairy', family: 'Cleffa', dexNumber: 35,
    type: 'fairy', specialties: ['hype'],
    favoriteItems: [],
  },
  clefable: {
    id: 'clefable', name: 'Clefable', family: 'Cleffa', dexNumber: 36,
    type: 'fairy', specialties: ['hype', 'trade'],
    favoriteItems: [],
  },

  // ── Igglybuff ─────────────────────────────────────────
  igglybuff: {
    id: 'igglybuff', name: 'Igglybuff', family: 'Igglybuff', dexNumber: 174,
    type: 'normal', specialties: ['hype'],
    favoriteItems: [],
  },
  jigglypuff: {
    id: 'jigglypuff', name: 'Jigglypuff', family: 'Igglybuff', dexNumber: 39,
    type: 'normal', specialties: ['hype'],
    favoriteItems: [],
  },
  wigglytuff: {
    id: 'wigglytuff', name: 'Wigglytuff', family: 'Igglybuff', dexNumber: 40,
    type: 'normal', specialties: ['hype', 'trade'],
    favoriteItems: [],
  },

  // ── Diglett ───────────────────────────────────────────
  diglett: {
    id: 'diglett', name: 'Diglett', family: 'Diglett', dexNumber: 50,
    type: 'ground', specialties: ['hype'],
    favoriteItems: [],
  },
  dugtrio: {
    id: 'dugtrio', name: 'Dugtrio', family: 'Diglett', dexNumber: 51,
    type: 'ground', specialties: ['hype', 'crush'],
    favoriteItems: [],
  },

  // ── Machop ────────────────────────────────────────────
  machop: {
    id: 'machop', name: 'Machop', family: 'Machop', dexNumber: 66,
    type: 'fighting', specialties: ['build'],
    favoriteItems: [],
  },
  machoke: {
    id: 'machoke', name: 'Machoke', family: 'Machop', dexNumber: 67,
    type: 'fighting', specialties: ['build'],
    favoriteItems: [],
  },
  machamp: {
    id: 'machamp', name: 'Machamp', family: 'Machop', dexNumber: 68,
    type: 'fighting', specialties: ['build'],
    favoriteItems: [],
  },

  // ── Geodude ───────────────────────────────────────────
  geodude: {
    id: 'geodude', name: 'Geodude', family: 'Geodude', dexNumber: 74,
    type: 'rock', specialties: ['crush'],
    favoriteItems: [],
  },
  graveler: {
    id: 'graveler', name: 'Graveler', family: 'Geodude', dexNumber: 75,
    type: 'rock', specialties: ['crush'],
    favoriteItems: [],
  },
  golem: {
    id: 'golem', name: 'Golem', family: 'Geodude', dexNumber: 76,
    type: 'rock', specialties: ['crush', 'trade'],
    favoriteItems: [],
  },

  // ── Magby ─────────────────────────────────────────────
  magby: {
    id: 'magby', name: 'Magby', family: 'Magby', dexNumber: 240,
    type: 'fire', specialties: ['burn', 'craft'],
    favoriteItems: [],
  },
  magmar: {
    id: 'magmar', name: 'Magmar', family: 'Magby', dexNumber: 126,
    type: 'fire', specialties: ['burn', 'craft'],
    favoriteItems: [],
  },
  magmortar: {
    id: 'magmortar', name: 'Magmortar', family: 'Magby', dexNumber: 467,
    type: 'fire', specialties: ['burn', 'craft'],
    favoriteItems: [],
  },

  // ── Bonsly ────────────────────────────────────────────
  bonsly: {
    id: 'bonsly', name: 'Bonsly', family: 'Bonsly', dexNumber: 438,
    type: 'rock', specialties: ['bulldoze'],
    favoriteItems: [],
  },
  sudowoodo: {
    id: 'sudowoodo', name: 'Sudowoodo', family: 'Bonsly', dexNumber: 185,
    type: 'rock', specialties: ['trade'],
    favoriteItems: [],
  },

  // ── Murkrow ───────────────────────────────────────────
  murkrow: {
    id: 'murkrow', name: 'Murkrow', family: 'Murkrow', dexNumber: 198,
    type: 'dark', specialties: ['transport'],
    favoriteItems: [],
  },
  honchkrow: {
    id: 'honchkrow', name: 'Honchkrow', family: 'Murkrow', dexNumber: 430,
    type: 'dark', specialties: ['transport'],
    favoriteItems: [],
  },

  // ── Larvitar ──────────────────────────────────────────
  larvitar: {
    id: 'larvitar', name: 'Larvitar', family: 'Larvitar', dexNumber: 246,
    type: 'rock', specialties: ['crush', 'bulldoze'],
    favoriteItems: [],
  },
  pupitar: {
    id: 'pupitar', name: 'Pupitar', family: 'Larvitar', dexNumber: 247,
    type: 'rock', specialties: ['crush', 'bulldoze'],
    favoriteItems: [],
  },
  tyranitar: {
    id: 'tyranitar', name: 'Tyranitar', family: 'Larvitar', dexNumber: 248,
    type: 'rock', specialties: ['crush', 'bulldoze'],
    favoriteItems: [],
  },

  // ── Lotad ─────────────────────────────────────────────
  lotad: {
    id: 'lotad', name: 'Lotad', family: 'Lotad', dexNumber: 270,
    type: 'water', specialties: ['water'],
    favoriteItems: [],
  },
  lombre: {
    id: 'lombre', name: 'Lombre', family: 'Lotad', dexNumber: 271,
    type: 'water', specialties: ['water'],
    favoriteItems: [],
  },
  ludicolo: {
    id: 'ludicolo', name: 'Ludicolo', family: 'Lotad', dexNumber: 272,
    type: 'water', specialties: ['water'],
    favoriteItems: [],
  },

  // ── Mawile ────────────────────────────────────────────
  mawile: {
    id: 'mawile', name: 'Mawile', family: 'Mawile', dexNumber: 303,
    type: 'steel', specialties: ['build'],
    favoriteItems: [],
  },

  // ── Torkoal ───────────────────────────────────────────
  torkoal: {
    id: 'torkoal', name: 'Torkoal', family: 'Torkoal', dexNumber: 324,
    type: 'fire', specialties: ['burn', 'craft'],
    favoriteItems: [],
  },

  // ── Kricketot ─────────────────────────────────────────
  kricketot: {
    id: 'kricketot', name: 'Kricketot', family: 'Kricketot', dexNumber: 401,
    type: 'bug', specialties: ['hype'],
    favoriteItems: [],
  },
  kricketune: {
    id: 'kricketune', name: 'Kricketune', family: 'Kricketot', dexNumber: 402,
    type: 'bug', specialties: ['hype'],
    favoriteItems: [],
  },

  // ── Chatot ────────────────────────────────────────────
  chatot: {
    id: 'chatot', name: 'Chatot', family: 'Chatot', dexNumber: 441,
    type: 'normal', specialties: ['transport'],
    favoriteItems: [],
  },

  // ── Riolu ─────────────────────────────────────────────
  riolu: {
    id: 'riolu', name: 'Riolu', family: 'Riolu', dexNumber: 447,
    type: 'fighting', specialties: ['build'],
    favoriteItems: [],
  },
  lucario: {
    id: 'lucario', name: 'Lucario', family: 'Riolu', dexNumber: 448,
    type: 'fighting', specialties: ['build'],
    favoriteItems: [],
  },

  // ── Rotom ─────────────────────────────────────────────
  rotom: {
    id: 'rotom', name: 'Rotom', family: 'Rotom', dexNumber: 479,
    type: 'electric', specialties: ['dj'],
    favoriteItems: [],
  },

  // ── Larvesta ──────────────────────────────────────────
  larvesta: {
    id: 'larvesta', name: 'Larvesta', family: 'Larvesta', dexNumber: 636,
    type: 'bug', specialties: ['burn', 'craft', 'litter'],
    litterResources: ['plant'],
    favoriteItems: [],
  },
  volcarona: {
    id: 'volcarona', name: 'Volcarona', family: 'Larvesta', dexNumber: 637,
    type: 'bug', specialties: ['burn', 'craft', 'litter'],
    litterResources: ['plant'],
    favoriteItems: [],
  },

  // ── Rowlet ────────────────────────────────────────────
  rowlet: {
    id: 'rowlet', name: 'Rowlet', family: 'Rowlet', dexNumber: 722,
    type: 'grass', specialties: ['plant', 'gather'],
    favoriteItems: [],
  },
  dartrix: {
    id: 'dartrix', name: 'Dartrix', family: 'Rowlet', dexNumber: 723,
    type: 'grass', specialties: ['plant', 'gather', 'chop'],
    favoriteItems: [],
  },
  decidueye: {
    id: 'decidueye', name: 'Decidueye', family: 'Rowlet', dexNumber: 724,
    type: 'grass', specialties: ['plant', 'gather', 'chop'],
    favoriteItems: [],
  },

  // ── Scorbunny ─────────────────────────────────────────
  scorbunny: {
    id: 'scorbunny', name: 'Scorbunny', family: 'Scorbunny', dexNumber: 813,
    type: 'fire', specialties: ['burn', 'craft'],
    favoriteItems: [],
  },
  raboot: {
    id: 'raboot', name: 'Raboot', family: 'Scorbunny', dexNumber: 814,
    type: 'fire', specialties: ['burn', 'craft'],
    favoriteItems: [],
  },
  cinderace: {
    id: 'cinderace', name: 'Cinderace', family: 'Scorbunny', dexNumber: 815,
    type: 'fire', specialties: ['burn', 'craft'],
    favoriteItems: [],
  },

  // ── Skwovet ───────────────────────────────────────────
  skwovet: {
    id: 'skwovet', name: 'Skwovet', family: 'Skwovet', dexNumber: 819,
    type: 'normal', specialties: ['search', 'hype'],
    favoriteItems: [],
  },
  greedent: {
    id: 'greedent', name: 'Greedent', family: 'Skwovet', dexNumber: 820,
    type: 'normal', specialties: ['party'],
    favoriteItems: [],
  },

  // ── Rolycoly ──────────────────────────────────────────
  rolycoly: {
    id: 'rolycoly', name: 'Rolycoly', family: 'Rolycoly', dexNumber: 844,
    type: 'rock', specialties: ['burn', 'craft'],
    favoriteItems: [],
  },
  carkol: {
    id: 'carkol', name: 'Carkol', family: 'Rolycoly', dexNumber: 845,
    type: 'rock', specialties: ['burn', 'craft'],
    favoriteItems: [],
  },
  coalossal: {
    id: 'coalossal', name: 'Coalossal', family: 'Rolycoly', dexNumber: 879,
    type: 'rock', specialties: ['burn', 'craft'],
    favoriteItems: [],
  },

  // ── Toxel ─────────────────────────────────────────────
  toxel: {
    id: 'toxel', name: 'Toxel', family: 'Toxel', dexNumber: 848,
    type: 'electric', specialties: ['generate'],
    favoriteItems: [],
  },
  toxtricity: {
    id: 'toxtricity', name: 'Toxtricity', family: 'Toxel', dexNumber: 849,
    type: 'electric', specialties: ['generate', 'hype'],
    favoriteItems: [],
  },

  // ── Fidough ───────────────────────────────────────────
  fidough: {
    id: 'fidough', name: 'Fidough', family: 'Fidough', dexNumber: 926,
    type: 'fairy', specialties: ['search'],
    favoriteItems: [],
  },
  dachsbun: {
    id: 'dachsbun', name: 'Dachsbun', family: 'Fidough', dexNumber: 927,
    type: 'fairy', specialties: ['search', 'trade'],
    favoriteItems: [],
  },

  // ── Charcadet ─────────────────────────────────────────
  charcadet: {
    id: 'charcadet', name: 'Charcadet', family: 'Charcadet', dexNumber: 935,
    type: 'fire', specialties: ['burn', 'craft'],
    favoriteItems: [],
  },
  armarouge: {
    id: 'armarouge', name: 'Armarouge', family: 'Charcadet', dexNumber: 936,
    type: 'fire', specialties: ['burn', 'craft'],
    favoriteItems: [],
  },
  ceruledge: {
    id: 'ceruledge', name: 'Ceruledge', family: 'Charcadet', dexNumber: 937,
    type: 'fire', specialties: ['burn', 'craft'],
    favoriteItems: [],
  },

  // ── Glimmet ───────────────────────────────────────────
  glimmet: {
    id: 'glimmet', name: 'Glimmet', family: 'Glimmet', dexNumber: 969,
    type: 'rock', specialties: ['litter'],
    litterResources: ['plant'],
    favoriteItems: [],
  },
  glimmora: {
    id: 'glimmora', name: 'Glimmora', family: 'Glimmet', dexNumber: 970,
    type: 'rock', specialties: ['litter'],
    litterResources: ['plant'],
    favoriteItems: [],
  },

  // ── Gimmighoul ────────────────────────────────────────
  gimmighoul: {
    id: 'gimmighoul', name: 'Gimmighoul', family: 'Gimmighoul', dexNumber: 999,
    type: 'ghost', specialties: ['collect'],
    favoriteItems: [],
  },
  gholdengo: {
    id: 'gholdengo', name: 'Gholdengo', family: 'Gimmighoul', dexNumber: 1000,
    type: 'steel', specialties: ['collect'],
    favoriteItems: [],
  },

  // ── Vulpix ────────────────────────────────────────────
  vulpix: {
    id: 'vulpix', name: 'Vulpix', family: 'Vulpix', dexNumber: 37,
    type: 'fire', specialties: ['burn', 'craft'],
    favoriteItems: [],
  },
  ninetales: {
    id: 'ninetales', name: 'Ninetales', family: 'Vulpix', dexNumber: 38,
    type: 'fire', specialties: ['burn', 'craft'],
    favoriteItems: [],
  },

  // ── Poliwag ───────────────────────────────────────────
  poliwag: {
    id: 'poliwag', name: 'Poliwag', family: 'Poliwag', dexNumber: 60,
    type: 'water', specialties: ['water'],
    favoriteItems: [],
  },
  poliwhirl: {
    id: 'poliwhirl', name: 'Poliwhirl', family: 'Poliwag', dexNumber: 61,
    type: 'water', specialties: ['water'],
    favoriteItems: [],
  },
  poliwrath: {
    id: 'poliwrath', name: 'Poliwrath', family: 'Poliwag', dexNumber: 62,
    type: 'water', specialties: ['water', 'build'],
    favoriteItems: [],
  },
  politoed: {
    id: 'politoed', name: 'Politoed', family: 'Poliwag', dexNumber: 186,
    type: 'water', specialties: ['water'],
    favoriteItems: [],
  },

  // ── Abra ──────────────────────────────────────────────
  abra: {
    id: 'abra', name: 'Abra', family: 'Abra', dexNumber: 63,
    type: 'psychic', specialties: ['teleport'],
    favoriteItems: [],
  },
  kadabra: {
    id: 'kadabra', name: 'Kadabra', family: 'Abra', dexNumber: 64,
    type: 'psychic', specialties: ['teleport'],
    favoriteItems: [],
  },
  alakazam: {
    id: 'alakazam', name: 'Alakazam', family: 'Abra', dexNumber: 65,
    type: 'psychic', specialties: ['teleport', 'trade'],
    favoriteItems: [],
  },

  // ── Mime Jr. ──────────────────────────────────────────
  mime_jr: {
    id: 'mime_jr', name: 'Mime Jr.', family: 'Mime Jr.', dexNumber: 439,
    type: 'psychic', specialties: ['gather'],
    favoriteItems: [],
  },
  mr_mime: {
    id: 'mr_mime', name: 'Mr. Mime', family: 'Mime Jr.', dexNumber: 122,
    type: 'psychic', specialties: ['build'],
    favoriteItems: [],
  },

  // ── Porygon ───────────────────────────────────────────
  porygon: {
    id: 'porygon', name: 'Porygon', family: 'Porygon', dexNumber: 137,
    type: 'normal', specialties: ['recycle'],
    favoriteItems: [],
  },
  porygon2: {
    id: 'porygon2', name: 'Porygon2', family: 'Porygon', dexNumber: 233,
    type: 'normal', specialties: ['recycle'],
    favoriteItems: [],
  },
  porygon_z: {
    id: 'porygon_z', name: 'Porygon-Z', family: 'Porygon', dexNumber: 474,
    type: 'normal', specialties: ['rarify'],
    favoriteItems: [],
  },

  // ── Dratini ───────────────────────────────────────────
  dratini: {
    id: 'dratini', name: 'Dratini', family: 'Dratini', dexNumber: 147,
    type: 'dragon', specialties: ['water'],
    favoriteItems: [],
  },
  dragonair: {
    id: 'dragonair', name: 'Dragonair', family: 'Dratini', dexNumber: 148,
    type: 'dragon', specialties: ['water'],
    favoriteItems: [],
  },
  dragonite: {
    id: 'dragonite', name: 'Dragonite', family: 'Dratini', dexNumber: 149,
    type: 'dragon', specialties: ['transport', 'water'],
    favoriteItems: [],
  },

  // ── Cyndaquil ─────────────────────────────────────────
  cyndaquil: {
    id: 'cyndaquil', name: 'Cyndaquil', family: 'Cyndaquil', dexNumber: 155,
    type: 'fire', specialties: ['burn', 'craft'],
    favoriteItems: [],
  },
  quilava: {
    id: 'quilava', name: 'Quilava', family: 'Cyndaquil', dexNumber: 156,
    type: 'fire', specialties: ['burn', 'craft'],
    favoriteItems: [],
  },
  typhlosion: {
    id: 'typhlosion', name: 'Typhlosion', family: 'Cyndaquil', dexNumber: 157,
    type: 'fire', specialties: ['burn', 'craft'],
    favoriteItems: [],
  },

  // ── Misdreavus ────────────────────────────────────────
  misdreavus: {
    id: 'misdreavus', name: 'Misdreavus', family: 'Misdreavus', dexNumber: 200,
    type: 'ghost', specialties: ['trade'],
    favoriteItems: [],
  },
  mismagius: {
    id: 'mismagius', name: 'Mismagius', family: 'Misdreavus', dexNumber: 429,
    type: 'ghost', specialties: ['gather', 'trade'],
    favoriteItems: [],
  },

  // ── Girafarig ─────────────────────────────────────────
  girafarig: {
    id: 'girafarig', name: 'Girafarig', family: 'Girafarig', dexNumber: 203,
    type: 'normal', specialties: ['gather'],
    favoriteItems: [],
  },
  farigiraf: {
    id: 'farigiraf', name: 'Farigiraf', family: 'Girafarig', dexNumber: 981,
    type: 'normal', specialties: ['gather', 'search'],
    favoriteItems: [],
  },

  // ── Ralts ─────────────────────────────────────────────
  ralts: {
    id: 'ralts', name: 'Ralts', family: 'Ralts', dexNumber: 280,
    type: 'psychic', specialties: ['teleport'],
    favoriteItems: [],
  },
  kirlia: {
    id: 'kirlia', name: 'Kirlia', family: 'Ralts', dexNumber: 281,
    type: 'psychic', specialties: ['teleport'],
    favoriteItems: [],
  },
  gardevoir: {
    id: 'gardevoir', name: 'Gardevoir', family: 'Ralts', dexNumber: 282,
    type: 'psychic', specialties: ['teleport', 'trade'],
    favoriteItems: [],
  },
  gallade: {
    id: 'gallade', name: 'Gallade', family: 'Ralts', dexNumber: 475,
    type: 'psychic', specialties: ['build'],
    favoriteItems: [],
  },

  // ── Plusle ────────────────────────────────────────────
  plusle: {
    id: 'plusle', name: 'Plusle', family: 'Plusle', dexNumber: 311,
    type: 'electric', specialties: ['generate'],
    favoriteItems: [],
  },

  // ── Minun ─────────────────────────────────────────────
  minun: {
    id: 'minun', name: 'Minun', family: 'Minun', dexNumber: 312,
    type: 'electric', specialties: ['generate'],
    favoriteItems: [],
  },

  // ── Trapinch ──────────────────────────────────────────
  trapinch: {
    id: 'trapinch', name: 'Trapinch', family: 'Trapinch', dexNumber: 328,
    type: 'ground', specialties: ['litter'],
    litterResources: ['plant'],
    favoriteItems: [],
  },
  vibrava: {
    id: 'vibrava', name: 'Vibrava', family: 'Trapinch', dexNumber: 329,
    type: 'dragon', specialties: ['transport'],
    favoriteItems: [],
  },
  flygon: {
    id: 'flygon', name: 'Flygon', family: 'Trapinch', dexNumber: 330,
    type: 'dragon', specialties: ['transport'],
    favoriteItems: [],
  },

  // ── Swablu ────────────────────────────────────────────
  swablu: {
    id: 'swablu', name: 'Swablu', family: 'Swablu', dexNumber: 333,
    type: 'normal', specialties: ['litter'],
    litterResources: ['plant'],
    favoriteItems: [],
  },
  altaria: {
    id: 'altaria', name: 'Altaria', family: 'Swablu', dexNumber: 334,
    type: 'dragon', specialties: ['transport', 'litter'],
    litterResources: ['plant'],
    favoriteItems: [],
  },

  // ── Duskull ───────────────────────────────────────────
  duskull: {
    id: 'duskull', name: 'Duskull', family: 'Duskull', dexNumber: 355,
    type: 'ghost', specialties: ['gather'],
    favoriteItems: [],
  },
  dusclops: {
    id: 'dusclops', name: 'Dusclops', family: 'Duskull', dexNumber: 356,
    type: 'ghost', specialties: ['gather'],
    favoriteItems: [],
  },
  dusknoir: {
    id: 'dusknoir', name: 'Dusknoir', family: 'Duskull', dexNumber: 477,
    type: 'ghost', specialties: ['gather', 'trade'],
    favoriteItems: [],
  },

  // ── Beldum ────────────────────────────────────────────
  beldum: {
    id: 'beldum', name: 'Beldum', family: 'Beldum', dexNumber: 374,
    type: 'steel', specialties: ['recycle'],
    favoriteItems: [],
  },
  metang: {
    id: 'metang', name: 'Metang', family: 'Beldum', dexNumber: 375,
    type: 'steel', specialties: ['recycle'],
    favoriteItems: [],
  },
  metagross: {
    id: 'metagross', name: 'Metagross', family: 'Beldum', dexNumber: 376,
    type: 'steel', specialties: ['recycle', 'crush'],
    favoriteItems: [],
  },

  // ── Snivy ─────────────────────────────────────────────
  snivy: {
    id: 'snivy', name: 'Snivy', family: 'Snivy', dexNumber: 495,
    type: 'grass', specialties: ['plant', 'gather', 'litter'],
    litterResources: ['plant'],
    favoriteItems: [],
  },
  servine: {
    id: 'servine', name: 'Servine', family: 'Snivy', dexNumber: 496,
    type: 'grass', specialties: ['plant', 'gather', 'litter'],
    litterResources: ['plant'],
    favoriteItems: [],
  },
  serperior: {
    id: 'serperior', name: 'Serperior', family: 'Snivy', dexNumber: 497,
    type: 'grass', specialties: ['plant', 'gather', 'litter'],
    litterResources: ['plant'],
    favoriteItems: [],
  },

  // ── Froakie ───────────────────────────────────────────
  froakie: {
    id: 'froakie', name: 'Froakie', family: 'Froakie', dexNumber: 656,
    type: 'water', specialties: ['water'],
    favoriteItems: [],
  },
  frogadier: {
    id: 'frogadier', name: 'Frogadier', family: 'Froakie', dexNumber: 657,
    type: 'water', specialties: ['water'],
    favoriteItems: [],
  },
  greninja: {
    id: 'greninja', name: 'Greninja', family: 'Froakie', dexNumber: 658,
    type: 'water', specialties: ['chop', 'water'],
    favoriteItems: [],
  },

  // ── Dedenne ───────────────────────────────────────────
  dedenne: {
    id: 'dedenne', name: 'Dedenne', family: 'Dedenne', dexNumber: 702,
    type: 'fairy', specialties: ['search'],
    favoriteItems: [],
  },

  // ── Noibat ────────────────────────────────────────────
  noibat: {
    id: 'noibat', name: 'Noibat', family: 'Noibat', dexNumber: 714,
    type: 'flying', specialties: ['search'],
    favoriteItems: [],
  },
  noivern: {
    id: 'noivern', name: 'Noivern', family: 'Noibat', dexNumber: 715,
    type: 'flying', specialties: ['transport'],
    favoriteItems: [],
  },

  // ── Rookidee ──────────────────────────────────────────
  rookidee: {
    id: 'rookidee', name: 'Rookidee', family: 'Rookidee', dexNumber: 821,
    type: 'flying', specialties: ['chop'],
    favoriteItems: [],
  },
  corvisquire: {
    id: 'corvisquire', name: 'Corvisquire', family: 'Rookidee', dexNumber: 822,
    type: 'flying', specialties: ['chop'],
    favoriteItems: [],
  },
  corviknight: {
    id: 'corviknight', name: 'Corviknight', family: 'Rookidee', dexNumber: 823,
    type: 'flying', specialties: ['transport', 'chop'],
    favoriteItems: [],
  },

  // ── Dreepy ────────────────────────────────────────────
  dreepy: {
    id: 'dreepy', name: 'Dreepy', family: 'Dreepy', dexNumber: 886,
    type: 'dragon', specialties: ['gather', 'search'],
    favoriteItems: [],
  },
  drakloak: {
    id: 'drakloak', name: 'Drakloak', family: 'Dreepy', dexNumber: 887,
    type: 'dragon', specialties: ['gather', 'search'],
    favoriteItems: [],
  },
  dragapult: {
    id: 'dragapult', name: 'Dragapult', family: 'Dreepy', dexNumber: 888,
    type: 'dragon', specialties: ['gather', 'trade'],
    favoriteItems: [],
  },

  // ── Sprigatito ────────────────────────────────────────
  sprigatito: {
    id: 'sprigatito', name: 'Sprigatito', family: 'Sprigatito', dexNumber: 906,
    type: 'grass', specialties: ['plant', 'gather'],
    favoriteItems: [],
  },
  floragato: {
    id: 'floragato', name: 'Floragato', family: 'Sprigatito', dexNumber: 907,
    type: 'grass', specialties: ['plant', 'gather'],
    favoriteItems: [],
  },
  meowscarada: {
    id: 'meowscarada', name: 'Meowscarada', family: 'Sprigatito', dexNumber: 908,
    type: 'grass', specialties: ['plant', 'gather'],
    favoriteItems: [],
  },

  // ── Wattrel ───────────────────────────────────────────
  wattrel: {
    id: 'wattrel', name: 'Wattrel', family: 'Wattrel', dexNumber: 940,
    type: 'flying', specialties: ['generate'],
    favoriteItems: [],
  },
  kilowattrel: {
    id: 'kilowattrel', name: 'Kilowattrel', family: 'Wattrel', dexNumber: 941,
    type: 'flying', specialties: ['transport'],
    favoriteItems: [],
  },

  // ── Tinkatink ─────────────────────────────────────────
  tinkatink: {
    id: 'tinkatink', name: 'Tinkatink', family: 'Tinkatink', dexNumber: 957,
    type: 'fairy', specialties: ['build'],
    favoriteItems: [],
  },
  tinkatuff: {
    id: 'tinkatuff', name: 'Tinkatuff', family: 'Tinkatink', dexNumber: 958,
    type: 'fairy', specialties: ['build'],
    favoriteItems: [],
  },
  tinkaton: {
    id: 'tinkaton', name: 'Tinkaton', family: 'Tinkatink', dexNumber: 959,
    type: 'fairy', specialties: ['engineer'],
    favoriteItems: [],
  },

  // ── Aerodactyl ────────────────────────────────────────
  aerodactyl: {
    id: 'aerodactyl', name: 'Aerodactyl', family: 'Aerodactyl', dexNumber: 142,
    type: 'rock', specialties: ['transport'],
    favoriteItems: [],
  },

  // ── Cranidos ──────────────────────────────────────────
  cranidos: {
    id: 'cranidos', name: 'Cranidos', family: 'Cranidos', dexNumber: 408,
    type: 'rock', specialties: ['crush'],
    favoriteItems: [],
  },
  rampardos: {
    id: 'rampardos', name: 'Rampardos', family: 'Cranidos', dexNumber: 409,
    type: 'rock', specialties: ['litter'],
    litterResources: ['plant'],
    favoriteItems: [],
  },

  // ── Shieldon ──────────────────────────────────────────
  shieldon: {
    id: 'shieldon', name: 'Shieldon', family: 'Shieldon', dexNumber: 410,
    type: 'rock', specialties: ['crush'],
    favoriteItems: [],
  },
  bastiodon: {
    id: 'bastiodon', name: 'Bastiodon', family: 'Shieldon', dexNumber: 411,
    type: 'rock', specialties: ['litter'],
    litterResources: ['plant'],
    favoriteItems: [],
  },

  // ── Tyrunt ────────────────────────────────────────────
  tyrunt: {
    id: 'tyrunt', name: 'Tyrunt', family: 'Tyrunt', dexNumber: 696,
    type: 'dragon', specialties: ['crush'],
    favoriteItems: [],
  },
  tyrantrum: {
    id: 'tyrantrum', name: 'Tyrantrum', family: 'Tyrunt', dexNumber: 697,
    type: 'dragon', specialties: ['litter'],
    litterResources: ['plant'],
    favoriteItems: [],
  },

  // ── Amaura ────────────────────────────────────────────
  amaura: {
    id: 'amaura', name: 'Amaura', family: 'Amaura', dexNumber: 698,
    type: 'rock', specialties: ['crush'],
    favoriteItems: [],
  },
  aurorus: {
    id: 'aurorus', name: 'Aurorus', family: 'Amaura', dexNumber: 699,
    type: 'rock', specialties: ['litter'],
    litterResources: ['plant'],
    favoriteItems: [],
  },

  // ── Eevee ─────────────────────────────────────────────
  eevee: {
    id: 'eevee', name: 'Eevee', family: 'Eevee', dexNumber: 133,
    type: 'normal', specialties: ['trade'],
    favoriteItems: [],
  },
  vaporeon: {
    id: 'vaporeon', name: 'Vaporeon', family: 'Eevee', dexNumber: 134,
    type: 'water', specialties: ['water'],
    favoriteItems: [],
  },
  jolteon: {
    id: 'jolteon', name: 'Jolteon', family: 'Eevee', dexNumber: 135,
    type: 'electric', specialties: ['generate'],
    favoriteItems: [],
  },
  flareon: {
    id: 'flareon', name: 'Flareon', family: 'Eevee', dexNumber: 136,
    type: 'fire', specialties: ['burn', 'craft'],
    favoriteItems: [],
  },
  espeon: {
    id: 'espeon', name: 'Espeon', family: 'Eevee', dexNumber: 196,
    type: 'psychic', specialties: ['gather'],
    favoriteItems: [],
  },
  umbreon: {
    id: 'umbreon', name: 'Umbreon', family: 'Eevee', dexNumber: 197,
    type: 'dark', specialties: ['search'],
    favoriteItems: [],
  },
  leafeon: {
    id: 'leafeon', name: 'Leafeon', family: 'Eevee', dexNumber: 470,
    type: 'grass', specialties: ['plant', 'gather'],
    favoriteItems: [],
  },
  glaceon: {
    id: 'glaceon', name: 'Glaceon', family: 'Eevee', dexNumber: 471,
    type: 'ice', specialties: ['trade'],
    favoriteItems: [],
  },
  sylveon: {
    id: 'sylveon', name: 'Sylveon', family: 'Eevee', dexNumber: 700,
    type: 'fairy', specialties: ['hype'],
    favoriteItems: [],
  },

  // ── Kyogre ────────────────────────────────────────────
  kyogre: {
    id: 'kyogre', name: 'Kyogre', family: 'Kyogre', dexNumber: 382,
    type: 'water', specialties: [],
    favoriteItems: [],
  },

  // ── Raikou ────────────────────────────────────────────
  raikou: {
    id: 'raikou', name: 'Raikou', family: 'Raikou', dexNumber: 243,
    type: 'electric', specialties: ['generate'],
    favoriteItems: [],
  },

  // ── Entei ─────────────────────────────────────────────
  entei: {
    id: 'entei', name: 'Entei', family: 'Entei', dexNumber: 244,
    type: 'fire', specialties: ['burn', 'craft'],
    favoriteItems: [],
  },

  // ── Suicune ───────────────────────────────────────────
  suicune: {
    id: 'suicune', name: 'Suicune', family: 'Suicune', dexNumber: 245,
    type: 'water', specialties: ['water'],
    favoriteItems: [],
  },

  // ── Volcanion ─────────────────────────────────────────
  volcanion: {
    id: 'volcanion', name: 'Volcanion', family: 'Volcanion', dexNumber: 721,
    type: 'fire', specialties: ['burn', 'craft'],
    favoriteItems: [],
  },

  // ── Articuno ──────────────────────────────────────────
  articuno: {
    id: 'articuno', name: 'Articuno', family: 'Articuno', dexNumber: 144,
    type: 'ice', specialties: ['transport'],
    favoriteItems: [],
  },

  // ── Zapdos ────────────────────────────────────────────
  zapdos: {
    id: 'zapdos', name: 'Zapdos', family: 'Zapdos', dexNumber: 145,
    type: 'electric', specialties: ['transport'],
    favoriteItems: [],
  },

  // ── Moltres ───────────────────────────────────────────
  moltres: {
    id: 'moltres', name: 'Moltres', family: 'Moltres', dexNumber: 146,
    type: 'fire', specialties: ['transport'],
    favoriteItems: [],
  },

  // ── Lugia ─────────────────────────────────────────────
  lugia: {
    id: 'lugia', name: 'Lugia', family: 'Lugia', dexNumber: 249,
    type: 'psychic', specialties: [],
    favoriteItems: [],
  },

  // ── Ho-Oh ─────────────────────────────────────────────
  ho_oh: {
    id: 'ho_oh', name: 'Ho-Oh', family: 'Ho-Oh', dexNumber: 250,
    type: 'fire', specialties: [],
    favoriteItems: [],
  },

  // ── Mewtwo ────────────────────────────────────────────
  mewtwo: {
    id: 'mewtwo', name: 'Mewtwo', family: 'Mewtwo', dexNumber: 150,
    type: 'psychic', specialties: ['teleport'],
    favoriteItems: [],
  },

  // ── Mew ───────────────────────────────────────────────
  mew: {
    id: 'mew', name: 'Mew', family: 'Mew', dexNumber: 151,
    type: 'psychic', specialties: ['teleport'],
    favoriteItems: [],
  },

  // ── Hoppip ────────────────────────────────────────────
  hoppip: {
    id: 'hoppip', name: 'Hoppip', family: 'Hoppip', dexNumber: 187,
    type: 'grass', specialties: ['plant', 'gather'],
    favoriteItems: [],
  },
  skiploom: {
    id: 'skiploom', name: 'Skiploom', family: 'Hoppip', dexNumber: 188,
    type: 'grass', specialties: ['plant', 'gather'],
    favoriteItems: [],
  },
  jumpluff: {
    id: 'jumpluff', name: 'Jumpluff', family: 'Hoppip', dexNumber: 189,
    type: 'grass', specialties: ['plant', 'gather', 'litter'],
    litterResources: ['plant'],
    favoriteItems: [],
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
