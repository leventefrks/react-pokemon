import { PokemonImage } from './PokemonImage';
import { Badge } from './Badge';
import { CardTitle } from './CardTitle';
import { CardId } from './CardId';
import { PokemonType } from './PokemonType';
import ReactPlaceholder from 'react-placeholder';
import 'react-placeholder/lib/reactPlaceholder.css';

const PokemonCard = ({ pokemon, onSelected, isLoading }) => {
  return (
    <button onClick={() => onSelected(pokemon.id)} className="card-btn">
      {/* <CardId id={`#${pokemon.id}`} /> */}
      <Badge text={`${pokemon.weight}kg`} left="true" />
      <Badge text={`${pokemon.height}m`} />
      <ReactPlaceholder
        type="round"
        ready={!isLoading ? true : false}
        showLoadingAnimation={true}
        color="#E0E0E0"
        style={{ width: 96, height: 96 }}
      >
        <PokemonImage name={pokemon.name} image={pokemon.image} />
      </ReactPlaceholder>
      <CardTitle name={pokemon.name} />
      <PokemonType types={pokemon.types} />
    </button>
  );
};

export default PokemonCard;
