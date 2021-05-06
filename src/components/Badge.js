export const Badge = ({ text, left }) => {
  return (
    <h2 className={`card-badge ${left ? '-left-4' : '-right-4'}`}>{text}</h2>
  );
};
