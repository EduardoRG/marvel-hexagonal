import { Button, HeroCard, Input, RoleSelector, Textarea } from "../shared";
import { useHeroCreatorForm } from "./useHeroCreatorForm";
import { useHeroFormData } from "./useHeroFormData";

interface HeroCreatorProps {
  onSubmit?: () => void;
}

export const HeroCreator = ({ onSubmit }: HeroCreatorProps) => {
  const {
    formData: { role, name, description, thumbnail, teamId },
    updateForm,
    resetForm,
  } = useHeroFormData();

  const { submitForm, resetFormStatus } = useHeroCreatorForm();

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
        <Button variant="primary" type="submit">
          Create
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
