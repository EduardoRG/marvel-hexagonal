import classNames from "classnames";
import { HeroRoleType } from "../../modules/heroes/domain/Hero";

const roleTankImage =
  "https://images.blz-contentstack.com/v3/assets/blt9c12f249ac15c7ec/blt29de38a72c3ea6e5/63055efed3da0846f3f4a347/Tank.svg";
const roleDamageImage =
  "https://images.blz-contentstack.com/v3/assets/blt9c12f249ac15c7ec/blt99f5a322d8ebb7d2/63055efe765dbe3289348da2/Damage.svg";
const roleSupportImage =
  "https://images.blz-contentstack.com/v3/assets/blt9c12f249ac15c7ec/blt28a65b324269d06b/63055efe1872995d912945be/Support.svg";

const mapRoleToImage: Record<HeroRoleType, string> = {
  Tank: roleTankImage,
  Damage: roleDamageImage,
  Support: roleSupportImage,
};

interface RoleIconProps {
  className?: string;
  role: HeroRoleType;
}

export const RoleIcon = ({ className, role }: RoleIconProps) => {
  return (
    <img
      className={classNames("w-8 h-8", className)}
      src={mapRoleToImage[role]}
    />
  );
};
