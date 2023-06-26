import { useState } from "react";
import { HeroWithoutId } from "@/modules/heroes/domain/Hero";

const initialFormData: HeroWithoutId = {
  role: "Tank",
  name: "",
  description: "",
  thumbnail: "",
  teamId: "default",
};

export const useHeroFormData = (
  initialState: HeroWithoutId = initialFormData
): {
  formData: HeroWithoutId;
  updateForm: (value: Partial<HeroWithoutId>) => void;
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
