import { useState, useEffect } from 'react';
import axios from './axios';
import { Loader } from './components/Loader';
import PokemonList from './components/PokemonList';

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon');
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios(url);
        setPokemonList(response.data.results);
        setNextUrl(response.data.next);
        setPrevUrl(response.data.previous);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [url]);

  const onClickNext = () => setUrl(nextUrl);

  const onClickPrevious = () => setUrl(prevUrl);

  return (
    <div className="App bg-gray-100 p-6">
      <nav className="flex justify-between capitalize text-2xl text-center mb-4 font-bold">
        <button
          className={`px-4 py-2 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 ${
            prevUrl ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={onClickPrevious}
        >
          Previous
        </button>
        <h1 className="self-center text-3xl">Pokemon</h1>
        <button
          className={`px-4 py-2 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 ${
            nextUrl ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={onClickNext}
        >
          Next
        </button>
      </nav>
      <div className="min-h-screen space-y-4 md:space-y-0 md:grid gap-10 md:grid-cols-3 lg:grid-cols-4 grid-flow-row">
        {isLoading ? <Loader /> : <PokemonList pokemonList={pokemonList} />}
      </div>
    </div>
  );
}

export default App;
