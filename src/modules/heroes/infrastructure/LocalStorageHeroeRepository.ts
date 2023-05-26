import { Heroe } from "../domain/Heroe";
import { HeroeRepository } from "../domain/HeroeRepository";

export const createLocalStorageHeroeRepository = (): HeroeRepository => {
  return {
    get: async (heroeId: number) => {
      const heroes = JSON.parse(localStorage.getItem("heroes") || "{}");
      return heroes[heroeId] || null;
    },
    save: async (heroe: Heroe) => {
      const heroes = JSON.parse(localStorage.getItem("heroes") || "{}");
      heroes[heroe.id] = heroe;
      localStorage.setItem("heroes", JSON.stringify(heroes));
    },
    remove: async (heroeId: number) => {
      const heroes = JSON.parse(localStorage.getItem("heroes") || "{}");
      delete heroes[heroeId];
      localStorage.setItem("heroes", JSON.stringify(heroes));
    },
    update: async (heroeId, data) => {
      const heroes = JSON.parse(localStorage.getItem("heroes") || "{}");
      const heroe = heroes[heroeId];
      heroes[heroeId] = { ...heroe, ...data };
      localStorage.setItem("heroes", JSON.stringify(heroes));
    },
  };
};
