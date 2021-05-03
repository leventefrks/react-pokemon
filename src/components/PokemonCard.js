const PokemonCard = ({ pokemon }) => {
  return (
    <button className="relative flex flex-col items-center justify-center space-y-4 bg-white rounded-xl shadow-md py-4 text-xl text-center hover:shadow-xl focus:shadow-xl hover:scale-105 duration-200 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
      {pokemon.id && (
        <h3 className="absolute z-0 text-gray-200 text-7xl font-extrabold">{`#${pokemon.id}`}</h3>
      )}
      {pokemon.weight && (
        <div className="absolute -top-6 -right-4 w-14 h-14 shadow-md rounded-full text-xs font-bold text-gray-600 bg-white flex items-center justify-center">
          {`${pokemon.weight}kg`}
        </div>
      )}
      {pokemon.height && (
        <div className="absolute -top-6 -left-4 w-14 h-14 shadow-md rounded-full text-xs font-bold text-gray-600 bg-white flex items-center justify-center">
          {`${pokemon.height}m`}
        </div>
      )}
      {pokemon.name && (
        <img
          src={pokemon.image}
          alt={pokemon.name}
          loading="lazy"
          decoding="async"
          height="96"
          width="96"
          className="relative z-20"
        />
      )}
      {pokemon.name && (
        <h2 className="font-bold capitalize text-gray-600">{pokemon.name}</h2>
      )}
    </button>
  );
};

export default PokemonCard;
