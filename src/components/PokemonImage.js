export const PokemonImage = ({ image, name }) => {
  return image ? (
    <img
      src={image}
      alt={name}
      loading="lazy"
      decoding="async"
      height="96"
      width="96"
      className="relative z-20"
    />
  ) : (
    <div className="w-24 h-24 flex items-center justify-center">
      <h4 className="text-3xl text-gray-600">N/A</h4>
    </div>
  );
};
