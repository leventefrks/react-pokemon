export const Badge = ({ text, left }) => {
  return (
    <h5 className={`card-badge ${left ? '-left-4' : '-right-4'}`}>{text}</h5>
  );
};
