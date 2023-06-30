import { Team } from "@/modules/teams/domain/Team";
import { Dialog, DialogContent, MiniHeroCard } from "../shared";
import classNames from "classnames";
import { useHeroesContext } from "../heroes/HeroesContext";
import { TeamEditor } from "./TeamEditor";
import { useState } from "react";

interface TeamCardProps {
  className?: string;
  team: Team;
}

export const TeamCard = ({ className, team }: TeamCardProps) => {
  const { name, members } = team;
  const { heroes } = useHeroesContext();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const heroMembers = members.map((member, index) => {
    const hero = heroes.find((hero) => hero.id === member?.heroId);
    return {
      id: member?.id || index,
      heroId: member?.heroId,
      name: hero?.name,
      thumbnail: hero?.thumbnail,
    };
  });

  return (
    <>
      <div
        className={classNames(
          "px-6 py-5 border border-indigo-500 rounded-xl hover:bg-indigo-950 cursor-pointer",
          className
        )}
        onClick={handleOpen}
      >
        <p className="text-white text-xl mb-3">{name}</p>
        <div className="flex gap-2">
          {heroMembers.map((member) => (
            <MiniHeroCard
              key={member.id}
              className="w-20 h-20"
              name={name}
              thumbnail={member.thumbnail}
              readOnly
            />
          ))}
        </div>
      </div>

      <Dialog open={open} setOpen={setOpen}>
        <DialogContent>
          <TeamEditor
            team={team}
            onSubmit={handleClose}
            onDelete={handleClose}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};
