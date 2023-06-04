import { useState } from "react";
import { TeamWithoutId } from "../../modules/teams/domain/Team";

const initialFormData: TeamWithoutId = {
  name: "Team name",
};

export const useTeamFormData = (
  initialState: TeamWithoutId = initialFormData
): {
  formData: TeamWithoutId;
  updateForm: (value: Partial<TeamWithoutId>) => void;
  resetForm: () => void;
} => {
  const [formData, setFormData] = useState(initialState);

  const updateForm = (value: Partial<typeof initialState>) => {
    setFormData((oldState) => {
      return { ...oldState, ...value };
    });
  };

  const resetForm = () => {
    setFormData(initialState);
  };

  return {
    formData,
    updateForm,
    resetForm,
  };
};
