import { HeroRoleType } from "../../modules/heroes/domain/Hero";
import { RoleIcon } from "./RoleIcon";

interface HeroCardProps {
  name: string;
  description: string;
  image: string;
  role: HeroRoleType;
}

const defaultThumbnail = "https://fakeimg.pl/400x400/818cf8/ffffff";

export const HeroCard = ({ name, description, image, role }: HeroCardProps) => {
  return (
    <div className="rounded-2xl overflow-hidden bg-slate-800">
      <div className="relative">
        <img
          className="w-full aspect-square bg-indigo-400 object-cover"
          src={image || defaultThumbnail}
        />
        <div className="absolute bottom-4 right-4 rounded-full bg-slate-700 w-16 h-16 flex justify-center items-center">
          <RoleIcon role={role} />
        </div>
      </div>
      <div className="py-4 px-6">
        <p className="text-xl mb-2">{name}</p>
        <p className="text-md text-slate-300">{description}</p>
      </div>
    </div>
  );
};
