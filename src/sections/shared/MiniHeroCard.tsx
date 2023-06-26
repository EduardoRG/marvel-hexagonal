interface MiniHeroCard {
  onClick: () => void;
  name: string;
  thumbnail: string;
}

export const MiniHeroCard = ({ onClick, name, thumbnail }: MiniHeroCard) => (
  <div
    className="overflow-hidden border border-gray-600 rounded-md hover:outline-none hover:ring-2 hover:ring-purple-500 cursor-pointer"
    onClick={onClick}
  >
    <img
      className="w-full aspect-square bg-indigo-400 object-cover"
      src={thumbnail}
      alt={name}
    />
  </div>
);
