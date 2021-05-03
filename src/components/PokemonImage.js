export const PokemonImage = ({ image, name }) => {
  return (
    <img
      src={image}
      alt={name}
      loading="lazy"
      decoding="async"
      height="96"
      width="96"
      className="relative z-20"
    />
  );
};
