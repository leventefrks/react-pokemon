import { useState, useEffect } from 'react';
import axios from 'axios';
import { Loader } from './components/Loader';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import PokemonList from './components/PokemonList';

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=15');
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [, setSelectedItem] = useState();

  useEffect(() => {
    const source = axios.CancelToken.source();

    const fetchItem = async url => {
      try {
        return await axios(url, { cancelToken: source.token });
      } catch (error) {
        throw error;
      }
    };

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios(url, { cancelToken: source.token });
        setNextUrl(response.data.next);
        setPrevUrl(response.data.previous);

        const results = await Promise.all(
          (response.data.results || []).map(key => fetchItem(key.url))
        );

        const singleItem = results.map(result => {
          const { id, name, weight, height, types } = result.data;
          const image = result.data.sprites.front_default;
          return {
            id,
            name,
            weight,
            height,
            image,
            types,
          };
        });

        setPokemonList(singleItem);
      } catch (error) {
        throw error;
      }
      setLoading(false);
    };

    fetchData();

    return () => {
      source.cancel();
    };
  }, [url]);

  const onSelected = id => setSelectedItem(id);

  const onClickNext = () => setUrl(nextUrl);

  const onClickPrevious = () => setUrl(prevUrl);

  return (
    <div className="App bg-gray-100 p-4 md:p-6">
      <nav className="flex justify-between capitalize text-2xl text-center mb-6 font-bold">
        <button
          className={`flex items-center justify-between px-2 md:px-4 md:py-2 text-sm font-semibold text-indigo-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 ${
            prevUrl ? 'block' : 'hidden'
          }`}
          onClick={onClickPrevious}
        >
          <FaChevronLeft className="w-3 h-3 mr-2 fill-current" />
          Previous
        </button>
        <h1 className="mx-auto text-lg md:text-3xl text-gray-600">
          Get your Pokemon
        </h1>
        <button
          className={`flex items-center px-2 md:px-4 md:py-2 text-sm font-semibold text-indigo-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 ${
            nextUrl ? 'block' : 'hidden'
          }`}
          onClick={onClickNext}
        >
          Next
          <FaChevronRight className="w-3 h-3 ml-2 fill-current" />
        </button>
      </nav>
      <div className="min-h-screen max-w-5xl mx-auto space-y-4 md:space-y-0 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-row">
        {isLoading ? (
          <Loader />
        ) : (
          <PokemonList pokemonList={pokemonList} onSelected={onSelected} />
        )}
      </div>
    </div>
  );
}

export default App;
