import { Button, Input } from "../shared";
import { useTeamFormData } from "./useTeamFormData";
import { useTeamEditorForm } from "./useTeamEditorForm";
import { TeamMembersSelector } from "./TeamMembersSelector";
import { Team } from "@/modules/teams/domain/Team";

interface TeamEditorProps {
  team: Team;
  onSubmit?: () => void;
  onDelete?: () => void;
}

export const TeamEditor = ({ team, onSubmit, onDelete }: TeamEditorProps) => {
  const { id: teamId, ...initialFormData } = team;
  const {
    formData: { name, members },
    updateForm,
    resetForm,
  } = useTeamFormData(initialFormData);

  const { submitForm, deleteTeam, resetFormStatus } = useTeamEditorForm({
    teamId,
  });

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

  const handleDelete = async () => {
    try {
      await deleteTeam();
      resetForm();
      resetFormStatus();
      onDelete && onDelete();
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
      <Button className="mr-2" variant="primary" type="submit">
        Update
      </Button>
      <Button type="button" onClick={handleDelete}>
        Delete
      </Button>
    </form>
  );
};
