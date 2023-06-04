import { Hero } from "../../domain/Hero";
import { HeroRepository } from "../../domain/HeroRepository";

export const getHero = async (
  heroRepository: HeroRepository,
  heroId: string
): Promise<Hero | null> => {
  return heroRepository.get(heroId);
};
