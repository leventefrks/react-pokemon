import { FaSpinner } from 'react-icons/fa';

export const Loader = () => {
  return (
    <div className="absolute h-full w-full max-w-5xl flex items-center justify-center text-indigo-600">
      <FaSpinner className="animate-spin fill-current w-14 h-14" />
    </div>
  );
};
