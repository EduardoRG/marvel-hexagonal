import { HeroesRepository } from "../../domain/HeroesRepository";

export const removeHero = async (
  heroRepository: HeroesRepository,
  heroId: string
): Promise<void> => {
  await heroRepository.remove(heroId);
};
