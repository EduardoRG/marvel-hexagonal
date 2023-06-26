import { useState } from "react";
import { Dialog, DialogContent, MiniHeroCard } from "../shared";
import { HeroEditor } from "./HeroEditor";
import { Hero } from "@/modules/heroes/domain/Hero";

interface MiniHeroCardProps {
  hero: Hero;
}

export const MiniHeroEditorCard = ({ hero }: MiniHeroCardProps) => {
  const [editorOpen, setEditorOpen] = useState(false);
  const { thumbnail, name } = hero;

  const handleOpenEditor = () => setEditorOpen(true);
  const handleCloseEditor = () => setEditorOpen(false);

  return (
    <>
      <MiniHeroCard
        onClick={handleOpenEditor}
        name={name}
        thumbnail={thumbnail}
      />
      <Dialog open={editorOpen} setOpen={setEditorOpen}>
        <DialogContent>
          <HeroEditor
            hero={hero}
            onSubmit={handleCloseEditor}
            onDelete={handleCloseEditor}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};
