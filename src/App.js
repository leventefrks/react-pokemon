import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { ERROR } from './constants';
import Modal from './components/Modal';
import PokemonList from './components/PokemonList';

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=15');
  const [nextUrl, setNextUrl] = useState(null);
  const [prevUrl, setPrevUrl] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalVisible, setModalVisibility] = useState(false);
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');

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
      setLoading(true);
      try {
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
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      source.cancel();
    };
  }, [url]);

  const onSelected = id => {
    setModalVisibility(true);
    setSelectedItem(id);
  };

  const onHideModal = () => {
    setSelectedItem(null);
    setModalVisibility(false);
  };

  const onClickNext = () => setUrl(nextUrl);

  const onClickPrevious = () => setUrl(prevUrl);

  const onFetchData = async () => {
    if (!query) return;
    setLoading(true);
    setError('');

    try {
      const response = await axios(
        `https://pokeapi.co/api/v2/pokemon/${query}`
      );

      setNextUrl('https://pokeapi.co/api/v2/pokemon?offset=30');

      const {
        id = 'n/a',
        name = 'n/a',
        weight = 'n/a',
        height = 'n/a',
        types = [],
      } = response.data;

      const image = response.data.sprites.front_default;
      const singleItem = {
        id,
        name,
        weight,
        height,
        image,
        types,
      };

      setPokemonList([singleItem]);
    } catch (error) {
      console.log(error);
      setError(error.response.data);
    } finally {
      setLoading(false);
      setQuery('');
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    if (e.key !== 'Enter') return;
    onFetchData();
  };

  return (
    <div
      className={`bg-gray-100 p-4 md:p-6 w-full min-h-screen ${
        selectedItem ? 'fixed' : 'relative'
      }`}
    >
      <nav className="flex justify-end capitalize text-2xl text-center mb-10">
        <button
          className={`flex items-center justify-between px-2 md:px-4 md:py-2 text-sm font-semibold text-purple-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 ${
            prevUrl ? 'block' : 'hidden'
          }`}
          onClick={onClickPrevious}
        >
          <FaChevronLeft className="w-3 h-3 mr-2 fill-current" />
          Previous
        </button>
        {/* <AppTitle /> */}
        <button
          className={`flex items-center px-2 md:px-4 md:py-2 text-sm font-semibold text-purple-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 ${
            nextUrl ? 'block' : 'hidden'
          }`}
          onClick={onClickNext}
        >
          Next
          <FaChevronRight className="w-3 h-3 ml-2 fill-current" />
        </button>
      </nav>
      <div className="w-full flex justify-center mb-12">
        <form
          className="flex items-center justify-center space-x-3"
          onSubmit={onSubmit}
        >
          <input
            type="text"
            name="query"
            id="query"
            placeholder="Find your Pokemon"
            className="search-input"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <button
            className="bg-purple-500 hover:bg-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 px-3 py-2 text-white rounded-md"
            onClick={onFetchData}
          >
            Search
          </button>
        </form>
      </div>
      {error ? (
        <h2 className="text-lg text-center text-purple-600">
          {ERROR.get(error)}
        </h2>
      ) : (
        <div className="min-h-screen max-w-5xl mx-auto space-y-4 md:space-y-0 grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 auto-rows-auto">
          <PokemonList
            pokemonList={pokemonList}
            onSelected={onSelected}
            isLoading={isLoading}
          />
        </div>
      )}
      {selectedItem && (
        <Modal isVisible={isModalVisible} onHideModal={onHideModal} />
      )}
    </div>
  );
}

export default App;
