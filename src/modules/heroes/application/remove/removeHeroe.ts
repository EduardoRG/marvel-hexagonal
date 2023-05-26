import { HeroeRepository } from "../../domain/HeroeRepository";

export const removeHeroe =
  (heroeRepository: HeroeRepository) => async (heroeId: number) => {
    await heroeRepository.remove(heroeId);
  };
