import { PokemonImage } from './PokemonImage';
import { Badge } from './Badge';
import { CardTitle } from './CardTitle';
import { CardId } from './CardId';
import { PokemonType } from './PokemonType';

const PokemonCard = ({ pokemon, onSelected }) => {
  return (
    <button onClick={() => onSelected(pokemon.id)} className="card-btn">
      <CardId id={`#${pokemon.id}`} />
      <Badge text={`${pokemon.weight}kg`} left="true" />
      <Badge text={`${pokemon.height}m`} />
      <PokemonImage name={pokemon.name} image={pokemon.image} />
      <CardTitle name={pokemon.name} />
      <PokemonType types={pokemon.types} />
    </button>
  );
};

export default PokemonCard;
