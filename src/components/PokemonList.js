import PokemonCard from './PokemonCard';

const PokemonList = ({ pokemonList, onSelected }) =>
  pokemonList.map(pokemon => (
    <PokemonCard key={pokemon.id} pokemon={pokemon} onSelected={onSelected} />
  ));

export default PokemonList;
