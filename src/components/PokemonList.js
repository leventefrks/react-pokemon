import PokemonCard from './PokemonCard';

const PokemonList = ({ pokemonList }) =>
  pokemonList.map(pokemon => (
    <PokemonCard key={pokemon.id} pokemon={pokemon} />
  ));

export default PokemonList;
