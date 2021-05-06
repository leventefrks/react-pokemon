import { PokemonImage } from './PokemonImage';
import { Badge } from './Badge';
import { CardTitle } from './CardTitle';
import { CardId } from './CardId';
import { PokemonType } from './PokemonType';
import ReactPlaceholder from 'react-placeholder';
import 'react-placeholder/lib/reactPlaceholder.css';

const PokemonCard = ({ pokemon, onSelected, isLoading }) => {
  const isReady = isLoading => (!isLoading ? true : false);

  return (
    <button onClick={() => onSelected(pokemon.id)} className="card-btn">
      {/* <CardId id={`#${pokemon.id}`} /> */}
      <Badge text={`${pokemon.weight}kg`} left="true" />
      <Badge text={`${pokemon.height}m`} />
      <ReactPlaceholder
        type="round"
        ready={isReady(isLoading)}
        showLoadingAnimation={true}
        style={{ width: 96, height: 96 }}
      >
        <PokemonImage name={pokemon.name} image={pokemon.image} />
      </ReactPlaceholder>
      <ReactPlaceholder
        type="text"
        ready={isReady(isLoading)}
        showLoadingAnimation={true}
        rows={1}
        style={{ width: 80, marginTop: '10px' }}
      >
        <CardTitle name={pokemon.name} />
      </ReactPlaceholder>
      <ReactPlaceholder
        type="text"
        ready={isReady(isLoading)}
        showLoadingAnimation={true}
        rows={1}
        style={{ width: 120, marginTop: '10px' }}
      >
        <PokemonType types={pokemon.types} />
      </ReactPlaceholder>
    </button>
  );
};

export default PokemonCard;
