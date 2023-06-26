import { Hero } from "@/modules/heroes/domain/Hero";
import { Button, HeroCard, Input, RoleSelector, Textarea } from "../shared";
import { useHeroEditorForm } from "./useHeroEditorForm";
import { useHeroFormData } from "./useHeroFormData";

interface HeroEditorProps {
  hero: Hero;
  onSubmit?: () => void;
  onDelete?: () => void;
}

export const HeroEditor = ({ hero, onSubmit, onDelete }: HeroEditorProps) => {
  const { id: heroId, ...initialFormData } = hero;
  const {
    formData: { role, name, description, thumbnail, teamId },
    updateForm,
    resetForm,
  } = useHeroFormData(initialFormData);

  const { submitForm, deleteHero, resetFormStatus } = useHeroEditorForm({
    heroId,
  });

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    try {
      await submitForm({ role, name, description, thumbnail, teamId });
      resetForm();
      resetFormStatus();
      onSubmit && onSubmit();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteHero();
      resetForm();
      resetFormStatus();
      onDelete && onDelete();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-16 max-w-4xl">
      <form onSubmit={handleSubmit}>
        <RoleSelector
          className="mb-6"
          value={role}
          onChange={(newRole) => updateForm({ role: newRole })}
        />
        <Input
          className="mb-4"
          label="Name"
          placeholder="Doomfist"
          value={name}
          onChange={(e) => updateForm({ name: e.target.value })}
          required
        />
        <Textarea
          className="mb-4"
          label="Description"
          placeholder="Akande Ogundimu era el hijo de una familia adinerada de Nigeria..."
          rows={5}
          value={description}
          onChange={(e) => updateForm({ description: e.target.value })}
          required
        />
        <Input
          className="mb-4"
          label="Image"
          placeholder="https://"
          value={thumbnail}
          onChange={(e) => updateForm({ thumbnail: e.target.value })}
          required
        />
        <Button className="mr-2" variant="primary" type="submit">
          Update
        </Button>
        <Button type="button" onClick={handleDelete}>
          Delete
        </Button>
      </form>
      <div className="w-10/12">
        <HeroCard
          name={name}
          description={description}
          role={role}
          image={thumbnail}
        />
      </div>
    </div>
  );
};
