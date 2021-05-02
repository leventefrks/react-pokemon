import PokemonCard from './PokemonCard';

const PokemonList = ({ pokemonList }) =>
  pokemonList.map(pokemon => (
    <PokemonCard key={pokemon.name} pokemon={pokemon} />
  ));

export default PokemonList;
