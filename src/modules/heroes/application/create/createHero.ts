import { Hero, ensureHeroIsValid } from "../../domain/Hero";
import { HeroRepository } from "../../domain/HeroRepository";

export const createHero = async (
  heroRepository: HeroRepository,
  hero: Hero
): Promise<void> => {
  ensureHeroIsValid(hero);
  await heroRepository.save(hero);
};
