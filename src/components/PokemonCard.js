import axios from 'axios';
import { useEffect, useState } from 'react';

const PokemonCard = ({ pokemon }) => {
  const [currentPokemon, setCurrentPokemon] = useState({});

  useEffect(() => {
    const fetchCurrentPokemon = async () => {
      const response = await axios(pokemon.url);
      setCurrentPokemon({
        id: response.data.id,
        name: response.data.name,
        image: response.data.sprites.front_default,
      });
    };

    fetchCurrentPokemon();
  }, [pokemon.url]);

  return (
    <a
      href="#"
      className="relative flex flex-col items-center justify-center space-y-4 bg-white rounded-md shadow-md py-4 text-xl text-center hover:shadow-xl focus:shadow-xl hover:scale-105 duration-200 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
    >
      <h3 className="absolute z-0 text-gray-200 text-9xl font-extrabold">{`#${currentPokemon.id}`}</h3>
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
    </a>
  );
};

export default PokemonCard;
