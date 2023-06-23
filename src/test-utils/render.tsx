import { ReactNode } from "react";
import { render as rtlRender } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { HeroesRepository } from "@/modules/heroes/domain/HeroesRepository";
import { TeamsRepository } from "@/modules/teams/domain/TeamsRepository";
import { HeroesContextProvider } from "@/sections/heroes/HeroesContext";
import { TeamsContextProvider } from "@/sections/teams/TeamsContext";

type RenderComponentOptions = Parameters<typeof rtlRender>[1] & {
  heroesRepositoryProps?: Partial<HeroesRepository>;
  teamsRepositoryProps?: Partial<TeamsRepository>;
};

export const render = (
  ui: Parameters<typeof rtlRender>[0],
  {
    heroesRepositoryProps,
    teamsRepositoryProps,
    ...renderOptions
  }: RenderComponentOptions = {}
) => {
  const heroesRepository: HeroesRepository = {
    get: vi.fn(),
    getAll: vi.fn(),
    save: vi.fn(),
    remove: vi.fn(),
    update: vi.fn(),
    ...heroesRepositoryProps,
  };
  const teamsRepository: TeamsRepository = {
    get: vi.fn(),
    getAll: vi.fn(),
    save: vi.fn(),
    remove: vi.fn(),
    update: vi.fn(),
    ...teamsRepositoryProps,
  };

  function Wrapper({ children }: { children: ReactNode }) {
    return (
      <HeroesContextProvider repository={heroesRepository}>
        <TeamsContextProvider repository={teamsRepository}>
          {children}
        </TeamsContextProvider>
      </HeroesContextProvider>
    );
  }

  return {
    user: userEvent.setup(),
    ...rtlRender(ui, { wrapper: Wrapper, ...renderOptions }),
  };
};
