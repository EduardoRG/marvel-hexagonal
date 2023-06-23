import { Hero } from "../../domain/Hero";
import { HeroesRepository } from "../../domain/HeroesRepository";

export const getHero = async (
  heroRepository: HeroesRepository,
  heroId: string
): Promise<Hero | null> => {
  return heroRepository.get(heroId);
};
