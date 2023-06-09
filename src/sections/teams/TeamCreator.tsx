import { Button, Input } from "../shared";
import { useTeamFormData } from "./useTeamFormData";
import { useTeamCreatorForm } from "./useTeamCreatorForm";
import { TeamMembersSelector } from "./TeamMembersSelector";

interface TeamCreatorProps {
  onSubmit?: () => void;
}

export const TeamCreator = ({ onSubmit }: TeamCreatorProps) => {
  const {
    formData: { name, members },
    updateForm,
    resetForm,
  } = useTeamFormData();

  const { submitForm, resetFormStatus } = useTeamCreatorForm();

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    try {
      await submitForm({ name, members });
      resetForm();
      resetFormStatus();
      onSubmit && onSubmit();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        className="mb-4"
        placeholder="Team name"
        value={name}
        onChange={(e) => updateForm({ name: e.target.value })}
        required
      />
      <TeamMembersSelector
        className="mb-4"
        members={members}
        onChange={(members) => updateForm({ members })}
      />
      <Button variant="primary" type="submit">
        Create
      </Button>
    </form>
  );
};
