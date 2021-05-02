import { useState, useEffect } from 'react';
import axios from './axios';
import PokemonList from './components/PokemonList';

function App() {
  const [list, setPokemonList] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon');
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(url);
      setPokemonList(response.data.results);
      setNextUrl(response.data.next);
      setPrevUrl(response.data.previous);
    };

    setLoading(true);

    fetchData();

    setLoading(false);
  }, [url]);

  const onClickNext = () => {
    console.log('next');
    setUrl(nextUrl);
  };

  const onClickPrevious = () => {
    console.log('prev');
    setUrl(prevUrl);
  };

  return (
    <div className="App bg-gray-100 p-6">
      <nav className="flex justify-between capitalize text-2xl text-center mb-4 font-bold">
        <button
          className={`px-4 py-2 text-sm ${
            prevUrl ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={onClickPrevious}
        >
          Previous
        </button>
        <h1 className="self-center">Pokemon</h1>
        <button
          className={`px-4 py-2 text-sm ${
            nextUrl ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={onClickNext}
        >
          Next
        </button>
      </nav>
      <div className="min-h-screen space-y-3 md:grid gap-10 md:grid-cols-3 lg:grid-cols-4 grid-flow-row">
        {isLoading ? '...Loading' : <PokemonList list={list} />}
      </div>
    </div>
  );
}

export default App;
