import React, { useState, useEffect, useContext, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";
import { getAllHeroes } from "@/modules/heroes/application/getAll/getAllHeroes";
import { createHero } from "@/modules/heroes/application/create/createHero";
import { removeHero } from "@/modules/heroes/application/remove/removeHero";
import { Hero, HeroWithoutId } from "@/modules/heroes/domain/Hero";
import { HeroesRepository } from "@/modules/heroes/domain/HeroesRepository";
import { updateHero } from "@/modules/heroes/application/update/updateHero";

export interface ContextState {
  heroes: Hero[];
  createHero: (data: HeroWithoutId) => Promise<void>;
  removeHero: (heroId: string) => Promise<void>;
  updateHero: (heroId: string, data: Partial<Hero>) => Promise<void>;
}

export const HeroesContext = React.createContext<ContextState>(
  {} as ContextState
);

export const HeroesContextProvider = ({
  children,
  repository,
}: React.PropsWithChildren<{ repository: HeroesRepository }>) => {
  const [heroes, setHeroes] = useState<Hero[]>([]);

  const getHeroes = useCallback(async () => {
    const heroes = await getAllHeroes(repository);
    setHeroes(heroes);
  }, [repository]);

  const create: ContextState["createHero"] = async ({
    name,
    description,
    role,
    thumbnail,
    teamId = "default",
  }) => {
    const id = uuidv4();

    await createHero(repository, {
      id,
      name,
      description,
      role,
      thumbnail,
      teamId,
    });
    await getHeroes();
  };

  const remove: ContextState["removeHero"] = async (heroId: string) => {
    await removeHero(repository, heroId);
    await getHeroes();
  };

  const update: ContextState["updateHero"] = async (
    heroId: string,
    data: Partial<Hero>
  ) => {
    await updateHero(repository, heroId, data);
    await getHeroes();
  };

  useEffect(() => {
    getHeroes();
  }, [getHeroes]);

  return (
    <HeroesContext.Provider
      value={{
        heroes,
        createHero: create,
        removeHero: remove,
        updateHero: update,
      }}
    >
      {children}
    </HeroesContext.Provider>
  );
};

export const useHeroesContext = () => useContext(HeroesContext);
