import { Hero } from "../../domain/Hero";
import { HeroRepository } from "../../domain/HeroRepository";

export const updateHero = async (
  heroRepository: HeroRepository,
  heroId: string,
  data: Partial<Hero>
): Promise<void> => {
  await heroRepository.update(heroId, data);
};
