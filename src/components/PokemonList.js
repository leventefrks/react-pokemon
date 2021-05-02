import PokemonCard from './PokemonCard';

const PokemonList = ({ list }) =>
  list.map(listItem => <PokemonCard key={listItem.name} list={listItem} />);

export default PokemonList;
