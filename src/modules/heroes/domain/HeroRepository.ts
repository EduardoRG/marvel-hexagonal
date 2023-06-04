import { Hero, HeroWithoutId } from "./Hero";

export interface HeroRepository {
  get(heroId: string): Promise<Hero | null>;
  getAll(): Promise<Hero[]>;
  save(hero: HeroWithoutId): Promise<void>;
  remove(heroId: string): Promise<void>;
  update(heroId: string, data: Partial<Hero>): Promise<void>;
}
