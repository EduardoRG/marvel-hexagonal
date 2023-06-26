import { useState } from "react";
import { useHeroesContext } from "./HeroesContext";
import { HeroWithoutId } from "@/modules/heroes/domain/Hero";

enum FormStatus {
  Success,
  Error,
  Loading,
  Initial,
}

export const useHeroCreatorForm = (): {
  formStatus: FormStatus;
  submitForm: (formData: HeroWithoutId) => Promise<void>;
  resetFormStatus: () => void;
} => {
  const [formStatus, setFormStatus] = useState(FormStatus.Initial);
  const { createHero } = useHeroesContext();

  const submitForm = async ({
    name,
    description,
    role,
    thumbnail,
    teamId,
  }: HeroWithoutId) => {
    setFormStatus(FormStatus.Loading);

    try {
      await createHero({ name, description, role, thumbnail, teamId });
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
