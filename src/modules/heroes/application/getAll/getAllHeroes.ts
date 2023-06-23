import { Hero } from "../../domain/Hero";
import { HeroesRepository } from "../../domain/HeroesRepository";

export const getAllHeroes = async (
  heroRepository: HeroesRepository
): Promise<Hero[]> => {
  return heroRepository.getAll();
};
