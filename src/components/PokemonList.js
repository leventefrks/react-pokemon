import PokemonCard from './PokemonCard';

const PokemonList = ({ pokemonList, onSelected, isLoading }) =>
  pokemonList.map(pokemon => (
    <PokemonCard
      key={pokemon.id}
      pokemon={pokemon}
      onSelected={onSelected}
      isLoading={isLoading}
    />
  ));

export default PokemonList;
