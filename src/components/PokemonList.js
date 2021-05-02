import PokemonCard from './PokemonCard';

const PokemonList = ({ pokemonList }) =>
  pokemonList.map(pokemon => <PokemonCard key={pokemon.name} list={pokemon} />);

export default PokemonList;
