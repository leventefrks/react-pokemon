import { useState, useEffect } from 'react';
import axios from './axios';
import PokemonList from './components/PokemonList';

function App() {
  const [list, setPokemonList] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
      setPokemonList(response.data.results);
    };

    setLoading(true);

    fetchData();

    setLoading(false);
  }, []);

  return (
    <div className="App bg-gray-100 py-6">
      <h1 className="capitalize text-2xl text-center mb-4 font-bold">
        Pokemons
      </h1>
      <div className="min-h-screen space-y-3 px-4 md:grid gap-10 md:grid-cols-3 lg:grid-cols-4 grid-flow-row">
        {isLoading ? '...Loading' : <PokemonList list={list} />}
      </div>
    </div>
  );
}

export default App;
