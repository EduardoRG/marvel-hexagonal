import { v4 as uuidv4 } from "uuid";
import { Hero } from "../domain/Hero";
import { HeroRepository } from "../domain/HeroRepository";

export const createLocalStorageHeroRepository = (): HeroRepository => {
  return {
    get: async (heroId) => {
      const heroes = JSON.parse(localStorage.getItem("heroes") || "{}");
      return heroes[heroId] || null;
    },
    getAll: async () => {
      const heroes = JSON.parse(localStorage.getItem("heroes") || "{}");
      return Object.values(heroes);
    },
    save: async ({ id = uuidv4(), teamId = "default", ...hero }: Hero) => {
      const heroes = JSON.parse(localStorage.getItem("heroes") || "{}");
      heroes[id] = {
        id,
        teamId,
        ...hero,
      };
      localStorage.setItem("heroes", JSON.stringify(heroes));
    },
    remove: async (heroId) => {
      const heroes = JSON.parse(localStorage.getItem("heroes") || "{}");
      delete heroes[heroId];
      localStorage.setItem("heroes", JSON.stringify(heroes));
    },
    update: async (heroId, data) => {
      const heroes = JSON.parse(localStorage.getItem("heroes") || "{}");
      const hero = heroes[heroId];
      heroes[heroId] = { ...hero, ...data };
      localStorage.setItem("heroes", JSON.stringify(heroes));
    },
  };
};
