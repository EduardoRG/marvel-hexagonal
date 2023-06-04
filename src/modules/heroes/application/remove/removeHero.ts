import { HeroRepository } from "../../domain/HeroRepository";

export const removeHero = async (
  heroRepository: HeroRepository,
  heroId: string
): Promise<void> => {
  await heroRepository.remove(heroId);
};
