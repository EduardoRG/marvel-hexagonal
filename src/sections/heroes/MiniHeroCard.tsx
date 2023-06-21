interface MiniHeroCardProps {
  thumbnail: string;
  name: string;
}

export const MiniHeroCard = ({ thumbnail, name }: MiniHeroCardProps) => (
  <div className="overflow-hidden border border-gray-600 rounded-md hover:outline-none hover:ring-2 hover:ring-purple-500 cursor-pointer">
    <img
      className="w-full aspect-square bg-indigo-400"
      src={thumbnail}
      alt={name}
    />
  </div>
);
