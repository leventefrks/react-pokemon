import { ERROR } from '../constants';

const NotFound = ({ error }) => {
  return (
    <h2 className="text-lg text-center text-purple-600">{ERROR.get(error)}</h2>
  );
};

export default NotFound;
