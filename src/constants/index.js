export const GET_COLOR_TYPES = new Map()
  .set('fire', 'bg-red-500')
  .set('grass', 'bg-green-500')
  .set('water', 'bg-blue-600')
  .set('flying', 'bg-indigo-500')
  .set('steel', 'bg-gray-500')
  .set('ice', 'bg-blue-300')
  .set('ghost', 'bg-indigo-500')
  .set('bug', 'bg-yellow-900')
  .set('poison', 'bg-indigo-500')
  .set('psychic', 'bg-pink-500')
  .set('dragon', 'bg-red-500')
  .set('fairy', 'bg-green-500')
  .set('dark', 'bg-gray-500')
  .set('fighting', 'bg-yellow-500')
  .set('ground', 'bg-yellow-500')
  .set('normal', 'bg-gray-800')
  .set('rock', 'bg-blue-800')
  .set('electric', 'bg-pink-700')
  .set('undefined', 'bg-gray-500');

const POKEMON_ERROR_MESSAGE = 'Not Found';
const CUSTOM_ERROR_MESSAGE = 'There is no such Pokemon...';

export const ERROR = new Map().set(POKEMON_ERROR_MESSAGE, CUSTOM_ERROR_MESSAGE);

export const NA = 'n/a';

export const ENTER_KEY = 'Enter';
