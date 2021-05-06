import { useState, useEffect } from 'react';
import axios from 'axios';
import { Loader } from './components/Loader';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Modal from './components/Modal';
import PokemonList from './components/PokemonList';
import { AppTitle } from './components/AppTitle';

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=15');
  const [nextUrl, setNextUrl] = useState(null);
  const [prevUrl, setPrevUrl] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalVisible, setModalVisibility] = useState(false);

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
      }
      setLoading(false);
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

  return (
    <div
      className={`bg-gray-100 p-4 md:p-6 w-full min-h-screen ${
        selectedItem ? 'fixed' : 'relative'
      }`}
    >
      <nav className="flex justify-between capitalize text-2xl text-center mb-10">
        <button
          className={`flex items-center justify-between px-2 md:px-4 md:py-2 text-sm font-semibold text-indigo-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 ${
            prevUrl ? 'block' : 'hidden'
          }`}
          onClick={onClickPrevious}
        >
          <FaChevronLeft className="w-3 h-3 mr-2 fill-current" />
          Previous
        </button>
        <AppTitle />
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
      <div className="min-h-screen max-w-5xl mx-auto space-y-4 md:space-y-0 grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 grid-flow-row">
        <PokemonList
          pokemonList={pokemonList}
          onSelected={onSelected}
          isLoading={isLoading}
        />
      </div>
      {selectedItem && (
        <Modal isVisible={isModalVisible} onHideModal={onHideModal} />
      )}
    </div>
  );
}

export default App;
