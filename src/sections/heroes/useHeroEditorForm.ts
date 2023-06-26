import { useState } from "react";
import { useHeroesContext } from "./HeroesContext";
import { HeroWithoutId } from "@/modules/heroes/domain/Hero";

enum FormStatus {
  Success,
  Error,
  Loading,
  Initial,
}

interface UseHeroEditorFormProps {
  heroId: string;
}

export const useHeroEditorForm = ({
  heroId,
}: UseHeroEditorFormProps): {
  formStatus: FormStatus;
  submitForm: (formData: HeroWithoutId) => Promise<void>;
  deleteHero: () => Promise<void>;
  resetFormStatus: () => void;
} => {
  const [formStatus, setFormStatus] = useState(FormStatus.Initial);
  const { updateHero, removeHero } = useHeroesContext();

  const submitForm = async ({
    name,
    description,
    role,
    thumbnail,
    teamId,
  }: HeroWithoutId) => {
    setFormStatus(FormStatus.Loading);

    try {
      await updateHero(heroId, { name, description, role, thumbnail, teamId });
      setFormStatus(FormStatus.Success);
    } catch (e) {
      setFormStatus(FormStatus.Error);
    }
  };

  const deleteHero = async () => {
    setFormStatus(FormStatus.Loading);

    try {
      await removeHero(heroId);
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
    deleteHero,
    resetFormStatus,
  };
};
