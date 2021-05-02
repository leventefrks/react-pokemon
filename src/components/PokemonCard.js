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
      className="flex flex-col items-center justify-center bg-white rounded-md shadow-md py-4 text-xl text-center hover:shadow-xl hover:scale-105 duration-200 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
    >
      {currentPokemon.image ? (
        <img
          src={currentPokemon.image}
          alt={currentPokemon.name}
          loading="lazy"
          decoding="async"
          height="96"
          width="96"
        />
      ) : (
        <div className="w-24 h-24 bg-gray-100 rounded-md" />
      )}
      <h2 className="font-bold capitalize text-gray-600">{pokemon.name}</h2>
    </a>
  );
};

export default PokemonCard;
