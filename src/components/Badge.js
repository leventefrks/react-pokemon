export const Badge = ({ text, left }) => {
  return (
    <h3 className={`card-badge ${left ? '-left-4' : '-right-4'}`}>{text}</h3>
  );
};
