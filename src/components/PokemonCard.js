import { PokemonImage } from './PokemonImage';
import { Badge } from './Badge';
import { CardTitle } from './CardTitle';
import { PokemonType } from './PokemonType';
import ReactPlaceholder from 'react-placeholder';
import 'react-placeholder/lib/reactPlaceholder.css';

const PokemonCard = ({ pokemon, onSelected, isLoading }) => {
  const isReady = isLoading => (!isLoading ? true : false);

  return (
    <button onClick={() => onSelected(pokemon.id)} className="card-btn">
      {/* <CardId id={`#${pokemon.id}`} /> */}
      <Badge text={`${pokemon.weight}kg`} left="true" isLoading={isLoading} />
      <Badge text={`${pokemon.height}m`} isLoading={isLoading} />
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
        style={{ width: 80, height: 28, marginTop: '8px' }}
      >
        <CardTitle name={pokemon.name} />
      </ReactPlaceholder>
      <ReactPlaceholder
        type="text"
        ready={isReady(isLoading)}
        showLoadingAnimation={true}
        rows={1}
        style={{ width: 120, height: 28, marginTop: '8px' }}
      >
        <PokemonType types={pokemon.types} />
      </ReactPlaceholder>
    </button>
  );
};

export default PokemonCard;
