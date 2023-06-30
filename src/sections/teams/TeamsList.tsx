import { useState } from "react";
import { useTeamsContext } from "./TeamsContext";
import { TeamCard } from "./TeamCard";
import { Button, Dialog, DialogContent } from "../shared";
import { TeamCreator } from "./TeamCreator";

export const TeamsList = () => {
  const { teams } = useTeamsContext();
  const [open, setOpen] = useState(false);

  const handleCreateTeam = () => setOpen(true);
  const onSubmit = () => setOpen(false);

  return (
    <>
      <h3 id="teams" className="mb-24 text-4xl uppercase">
        Teams
      </h3>
      <div className="max-w-2xl">
        {teams.map((team) => (
          <TeamCard key={team.id} className="mb-4" team={team} />
        ))}
        <Button variant="primary" onClick={handleCreateTeam}>
          Create new team
        </Button>
      </div>

      <Dialog open={open} setOpen={setOpen}>
        <DialogContent>
          <TeamCreator onSubmit={onSubmit} />
        </DialogContent>
      </Dialog>
    </>
  );
};
