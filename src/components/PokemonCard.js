import { PokemonImage } from './PokemonImage';
import { Badge } from './Badge';
import { CardTitle } from './CardTitle';
import { PokemonType } from './PokemonType';

const PokemonCard = ({ pokemon, onSelected }) => {
  return (
    <button onClick={() => onSelected(pokemon.id)} className="card-btn">
      <h3 className="card-id">{`#${pokemon.id}`}</h3>
      <Badge text={`${pokemon.weight}kg`} left="true" />
      <Badge text={`${pokemon.height}m`} />
      <PokemonImage name={pokemon.name} image={pokemon.image} />
      <CardTitle name={pokemon.name} />
      <PokemonType types={pokemon.types} />
    </button>
  );
};

export default PokemonCard;
