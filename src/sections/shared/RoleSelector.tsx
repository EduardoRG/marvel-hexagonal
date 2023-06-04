import classNames from "classnames";
import { Button } from "./Button";
import { RoleIcon } from "./RoleIcon";
import { HeroRoleType } from "../../modules/heroes/domain/Hero";

interface RoleSelectorProps {
  className?: string;
  value: HeroRoleType;
  onChange: (role: HeroRoleType) => void;
}

const roleButtons: { id: HeroRoleType; icon: JSX.Element }[] = [
  {
    id: "Tank",
    icon: <RoleIcon role="Tank" />,
  },
  {
    id: "Damage",
    icon: <RoleIcon role="Damage" />,
  },
  {
    id: "Support",
    icon: <RoleIcon role="Support" />,
  },
];

export const RoleSelector = ({
  className,
  value,
  onChange,
}: RoleSelectorProps) => {
  return (
    <div className={classNames(className, "flex justify-center gap-3")}>
      {roleButtons.map((roleButton) => (
        <Button
          key={roleButton.id}
          className="rounded-full w-16 h-16 flex justify-center items-center"
          onClick={() => onChange(roleButton.id)}
          variant={value === roleButton.id ? "primary" : "default"}
        >
          {roleButton.icon}
        </Button>
      ))}
    </div>
  );
};
