import axios from 'axios';
import { useEffect, useState } from 'react';

const PokemonCard = ({ list }) => {
  const [currentPokemon, setCurrentPokemon] = useState({});

  useEffect(() => {
    const fetchCurrentPokemon = async () => {
      const response = await axios(list.url);
      setCurrentPokemon({
        id: response.data.id,
        name: response.data.name,
        image: response.data.sprites.front_default,
      });
    };

    fetchCurrentPokemon();
  }, [list.url]);
  return (
    <div className="flex flex-col items-center justify-center bg-white rounded-md shadow-md py-4 text-xl text-center hover:shadow-xl hover:scale-105 duration-200">
      <img
        src={currentPokemon.image}
        alt={currentPokemon.name}
        loading="lazy"
        decoding="async"
      />
      <h2 className="font-bold capitalize text-gray-600">{list.name}</h2>
    </div>
  );
};

export default PokemonCard;
