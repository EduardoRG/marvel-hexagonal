import { Heroe } from "./Heroe";

export interface HeroeRepository {
  get(heroeId: number): Promise<Heroe | null>;
  save(heroe: Heroe): Promise<void>;
  remove(heroeId: number): Promise<void>;
  update(heroeId: number, data: Partial<Heroe>): Promise<void>;
}
