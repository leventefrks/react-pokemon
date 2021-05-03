import { GET_COLOR_TYPES } from './../constants';
import { PokemonImage } from './PokemonImage';
import { Badge } from './Badge';

const PokemonCard = ({ pokemon, onSelected }) => {
  return (
    <button onClick={() => onSelected(pokemon.id)} className="card-btn">
      <h3 className="card-id">{`#${pokemon.id}`}</h3>

      <Badge text={`${pokemon.weight}kg`} left="true" />

      <Badge text={`${pokemon.height}m`} />

      <PokemonImage name={pokemon.name} image={pokemon.image} />

      <h2 className="font-bold capitalize text-gray-600">{pokemon.name}</h2>
      <div className="flex items-center space-x-3">
        {pokemon.types.map(type => (
          <h4
            key={`${type.slot}-${type.name}`}
            className={`uppercase text-xs font-bold ${GET_COLOR_TYPES.get(
              type.type.name
            )} `}
          >
            {type.type.name}
          </h4>
        ))}
      </div>
    </button>
  );
};

export default PokemonCard;
