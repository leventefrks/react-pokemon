import { GET_COLOR_TYPES } from './../constants';

export const PokemonType = ({ types }) => {
  return (
    <div className="flex items-center space-x-3 mt-2">
      {types.map(type => (
        <h5
          key={`${type.slot}-${type.name}`}
          className={`uppercase text-xxs text-white px-1 rounded-md ${GET_COLOR_TYPES.get(
            type.type.name
          )} `}
        >
          {type.type.name}
        </h5>
      ))}
    </div>
  );
};
