import { Button, Input } from "../shared";
import { useTeamFormData } from "./useTeamFormData";
import { useTeamForm } from "./useTeamForm";

export const TeamCreator = () => {
  const {
    formData: { name },
    updateForm,
    resetForm,
  } = useTeamFormData();

  const { submitForm, resetFormStatus } = useTeamForm();

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    try {
      await submitForm({ name });
      resetForm();
      resetFormStatus();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-16 max-w-4xl">
      <form className="w-full" onSubmit={handleSubmit}>
        <Input
          className="mb-4"
          label="Name"
          placeholder="Team name"
          value={name}
          onChange={(e) => updateForm({ name: e.target.value })}
        />
        <Button variant="primary" type="submit">
          Create
        </Button>
      </form>
      <div className="w-10/12"></div>
    </div>
  );
};
