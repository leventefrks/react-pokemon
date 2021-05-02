import { FaSpinner } from 'react-icons/fa';

export const Loader = () => {
  return (
    <div className="absolute h-full w-full flex items-center justify-center text-gray-600">
      <FaSpinner className="animate-spin fill-current w-10 h-10" />
    </div>
  );
};
