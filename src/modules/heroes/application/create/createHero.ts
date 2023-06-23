import { Hero, ensureHeroIsValid } from "../../domain/Hero";
import { HeroesRepository } from "../../domain/HeroesRepository";

export const createHero = async (
  heroRepository: HeroesRepository,
  hero: Hero
): Promise<void> => {
  ensureHeroIsValid(hero);
  await heroRepository.save(hero);
};
