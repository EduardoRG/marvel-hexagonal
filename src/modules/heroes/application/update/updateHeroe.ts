import { Heroe } from "../../domain/Heroe";
import { HeroeRepository } from "../../domain/HeroeRepository";

export const updateHeroe =
  (heroeRepository: HeroeRepository) =>
  async (heroeId: number, data: Partial<Heroe>) => {
    await heroeRepository.update(heroeId, data);
  };
