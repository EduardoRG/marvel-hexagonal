import { useState } from "react";
import { Button, Dialog, DialogContent } from "../shared";
import { HeroCreator } from "../heroes/HeroCreator";

export const Intro = () => {
  const [newHeroOpen, setNewHeroOpen] = useState(false);

  const openNewHero = () => setNewHeroOpen(true);
  const handleCloseNewHero = () => setNewHeroOpen(false);

  return (
    <>
      <div className="text-center">
        <h1 className="text-6xl mb-2">Create the best heroes team</h1>
        <h2 className="text-2xl text-slate-300 mb-16">
          Find the best heroes for your team.
        </h2>
        <div className="flex justify-center gap-3">
          <Button variant="primary" onClick={openNewHero}>
            Create new Hero
          </Button>
          <Button>Create new Team</Button>
        </div>
      </div>
      <Dialog open={newHeroOpen} setOpen={setNewHeroOpen}>
        <DialogContent>
          <HeroCreator onSubmit={handleCloseNewHero} />
        </DialogContent>
      </Dialog>
    </>
  );
};
