import ReactPlaceholder from 'react-placeholder';
import 'react-placeholder/lib/reactPlaceholder.css';

export const Badge = ({ text, left, isLoading }) => {
  return (
    <h2 className={`card-badge ${left ? '-left-4' : '-right-4'}`}>
      <ReactPlaceholder
        type="text"
        ready={!isLoading ? true : false}
        showLoadingAnimation={true}
        rows={1}
        style={{ width: 20, height: 10 }}
      >
        {text}
      </ReactPlaceholder>
    </h2>
  );
};
