import { useState } from "react";
import { useTeamsContext } from "./TeamsContext";
import { TeamWithoutId } from "../../modules/teams/domain/Team";

enum FormStatus {
  Success,
  Error,
  Loading,
  Initial,
}

interface UseTeamEditorFormProps {
  teamId: string;
}

export const useTeamEditorForm = ({
  teamId,
}: UseTeamEditorFormProps): {
  formStatus: FormStatus;
  submitForm: (formData: TeamWithoutId) => Promise<void>;
  deleteTeam: () => Promise<void>;
  resetFormStatus: () => void;
} => {
  const [formStatus, setFormStatus] = useState(FormStatus.Initial);
  const { updateTeam, removeTeam } = useTeamsContext();

  const submitForm = async ({ name, members }: TeamWithoutId) => {
    setFormStatus(FormStatus.Loading);

    try {
      await updateTeam(teamId, { name, members });
      setFormStatus(FormStatus.Success);
    } catch (e) {
      setFormStatus(FormStatus.Error);
    }
  };

  const deleteTeam = async () => {
    setFormStatus(FormStatus.Loading);

    try {
      await removeTeam(teamId);
      setFormStatus(FormStatus.Success);
    } catch (e) {
      setFormStatus(FormStatus.Error);
    }
  };

  const resetFormStatus = (): void => {
    setFormStatus(FormStatus.Initial);
  };

  return {
    formStatus,
    submitForm,
    deleteTeam,
    resetFormStatus,
  };
};
