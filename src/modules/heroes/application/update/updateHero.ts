import { Hero } from "../../domain/Hero";
import { HeroesRepository } from "../../domain/HeroesRepository";

export const updateHero = async (
  heroRepository: HeroesRepository,
  heroId: string,
  data: Partial<Hero>
): Promise<void> => {
  await heroRepository.update(heroId, data);
};
