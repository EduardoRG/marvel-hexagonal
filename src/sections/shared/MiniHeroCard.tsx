import { HeroRoleType } from "@/modules/heroes/domain/Hero";
import { RoleIcon } from ".";
import classNames from "classnames";

interface MiniHeroCard {
  className?: string;
  disabled?: boolean;
  readOnly?: boolean;
  onClick?: () => void;
  name?: string;
  thumbnail?: string;
  role?: HeroRoleType;
}

export const MiniHeroCard = ({
  className,
  disabled,
  readOnly,
  onClick,
  name,
  thumbnail,
  role,
}: MiniHeroCard) => (
  <div
    className={classNames(
      "overflow-hidden border border-gray-600 rounded-md",
      disabled && "opacity-50",
      !readOnly &&
        "hover:outline-none hover:ring-2 hover:ring-purple-500 cursor-pointer",
      className
    )}
    onClick={disabled ? undefined : onClick}
  >
    {thumbnail && (
      <img
        className="w-full h-full aspect-square bg-indigo-400 object-cover"
        src={thumbnail}
        alt={name}
      />
    )}
    {!thumbnail && role && (
      <div className="grid place-items-center w-full h-full">
        <RoleIcon role={role} className="w-6 h-6" />
      </div>
    )}
  </div>
);
