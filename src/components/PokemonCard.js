import axios from 'axios';
import { useEffect, useState } from 'react';

const PokemonCard = ({ pokemon }) => {
  const [currentPokemon, setCurrentPokemon] = useState({});

  useEffect(() => {
    const source = axios.CancelToken.source();

    const fetchCurrentPokemon = async () => {
      try {
        const response = await axios(pokemon.url);
        const { id, name, weight, height } = response.data;
        const image = response.data.sprites.front_default;
        setCurrentPokemon({
          id,
          name,
          image,
          weight,
          height,
        });
      } catch (error) {
        throw error;
      }
    };

    fetchCurrentPokemon();

    return () => {
      source.cancel();
    };
  }, [pokemon.url]);

  return (
    <button className="relative flex flex-col items-center justify-center space-y-4 bg-white rounded-xl shadow-md py-4 text-xl text-center hover:shadow-xl focus:shadow-xl hover:scale-105 duration-200 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
      {currentPokemon.id && (
        <h3 className="absolute z-0 text-gray-200 text-7xl font-extrabold">{`#${currentPokemon.id}`}</h3>
      )}
      <div className="absolute -top-6 -right-4 w-14 h-14 shadow-md rounded-full text-xs font-bold text-gray-600 bg-white flex items-center justify-center">
        {currentPokemon.weight && `${currentPokemon.weight}kg`}
      </div>
      <div className="absolute -top-6 -left-4 w-14 h-14 shadow-md rounded-full text-xs font-bold text-gray-600 bg-white flex items-center justify-center">
        {currentPokemon.height && `${currentPokemon.height}m`}
      </div>
      {currentPokemon.image ? (
        <img
          src={currentPokemon.image}
          alt={currentPokemon.name}
          loading="lazy"
          decoding="async"
          height="96"
          width="96"
          className="relative z-20"
        />
      ) : (
        <div className="w-24 h-24 bg-gray-100 rounded-md" />
      )}
      {currentPokemon.name ? (
        <h2 className="font-bold capitalize text-gray-600">{pokemon.name}</h2>
      ) : (
        <div className="w-24 h-6 bg-gray-100" />
      )}
    </button>
  );
};

export default PokemonCard;
