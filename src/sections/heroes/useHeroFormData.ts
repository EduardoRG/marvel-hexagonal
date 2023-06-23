import { useState } from "react";
import { HeroWithoutId } from "@/modules/heroes/domain/Hero";

const initialFormData: HeroWithoutId = {
  role: "Tank",
  name: "Doomfist",
  description:
    "Doomfist es el calculador líder de Talon, una organización terrorista y fuerza paramilitar que opera en contraposición a Overwatch.",
  thumbnail:
    "https://d15f34w2p8l1cc.cloudfront.net/overwatch/13750471c693c1a360eb19d5ace229c8599a729cd961d72ebee0e157657b7d18.png",
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
