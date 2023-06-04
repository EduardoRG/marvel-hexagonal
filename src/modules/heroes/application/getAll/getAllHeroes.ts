import { Hero } from "../../domain/Hero";
import { HeroRepository } from "../../domain/HeroRepository";

export const getAllHeroes = async (
  heroRepository: HeroRepository
): Promise<Hero[]> => {
  return heroRepository.getAll();
};
