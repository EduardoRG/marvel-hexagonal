import { Heroe, ensureHeroeIsValid } from "../../domain/Heroe";
import { HeroeRepository } from "../../domain/HeroeRepository";

export const createHeroe =
  (heroeRepository: HeroeRepository) => async (heroe: Heroe) => {
    ensureHeroeIsValid(heroe);
    await heroeRepository.save(heroe);
  };
