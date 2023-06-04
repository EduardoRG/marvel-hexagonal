import { useState } from "react";
import { useTeamsContext } from "./TeamsContext";
import { TeamWithoutId } from "../../modules/teams/domain/Team";

enum FormStatus {
  Success,
  Error,
  Loading,
  Initial,
}

export const useTeamForm = (): {
  formStatus: FormStatus;
  submitForm: (formData: TeamWithoutId) => Promise<void>;
  resetFormStatus: () => void;
} => {
  const [formStatus, setFormStatus] = useState(FormStatus.Initial);
  const { createTeam } = useTeamsContext();

  const submitForm = async ({ name }: TeamWithoutId) => {
    setFormStatus(FormStatus.Loading);

    try {
      await createTeam({ name });
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
    resetFormStatus,
  };
};
