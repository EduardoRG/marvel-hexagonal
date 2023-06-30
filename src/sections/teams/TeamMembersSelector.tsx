import { Member } from "@/modules/teams/domain/Member";
import {
  MiniHeroCard,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../shared";
import classNames from "classnames";
import { useHeroesContext } from "../heroes/HeroesContext";
import { HeroRoleType } from "@/modules/heroes/domain/Hero";
import { v4 as uuidv4 } from "uuid";

interface TeamMembersSelectorProps {
  className?: string;
  members: (Member | null)[];
  onChange: (members: (Member | null)[]) => void;
}

const rolesByPosition: HeroRoleType[] = [
  "Tank",
  "Damage",
  "Damage",
  "Support",
  "Support",
];

export const TeamMembersSelector = ({
  className,
  members,
  onChange,
}: TeamMembersSelectorProps) => {
  const { heroes } = useHeroesContext();

  const heroMembers = members.map((member, index) => {
    const hero = heroes.find((hero) => hero.id === member?.heroId);
    return {
      id: member?.id || index,
      heroId: member?.heroId,
      name: hero?.name,
      thumbnail: hero?.thumbnail,
      role: rolesByPosition[index],
    };
  });

  return (
    <div className={classNames("flex gap-2", className)}>
      {heroMembers.map(({ id, name, thumbnail, role }, index) => (
        <Popover key={id || index} placement="top-start">
          <PopoverTrigger>
            <div>
              <MiniHeroCard
                className="w-20 h-20"
                name={name}
                thumbnail={thumbnail}
                role={role}
              />
            </div>
          </PopoverTrigger>
          <PopoverContent>
            <div className="max-w-96 max-h-80 px-4 py-3 rounded-xl bg-indigo-950 overflow-y-auto border border-indigo-500">
              <h3 className="text-white mb-2">Select a hero</h3>
              <div className="grid grid-cols-6 gap-2">
                {heroes
                  .filter((hero) => hero.role === role)
                  .map((hero) => (
                    <MiniHeroCard
                      key={hero.id}
                      className="w-16 h-16"
                      name={hero.name}
                      thumbnail={hero.thumbnail}
                      disabled={members
                        .map((member) => member?.heroId)
                        .includes(hero.id)}
                      onClick={() => {
                        const newMembers = [...members];
                        newMembers[index] = {
                          id: uuidv4(),
                          heroId: hero.id,
                        };
                        onChange(newMembers);
                      }}
                    />
                  ))}
              </div>
            </div>
          </PopoverContent>
        </Popover>
      ))}
    </div>
  );
};
