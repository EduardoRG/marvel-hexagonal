import { createLocalStorageHeroRepository } from "../modules/heroes/infrastructure/LocalStorageHeroRepository";
import { Navbar } from "./navbar/Navbar";
import { HeroCreator } from "./heroes/HeroCreator";
import { TeamCreator } from "./teams/TeamCreator";
import { Divider } from "./shared";
import { HeroesContextProvider } from "./heroes/HeroesContext";
import { TeamsContextProvider } from "./teams/TeamsContext";
import { createLocalStorageTeamRepository } from "../modules/teams/infrastructure/LocalStorageTeamRepository";
import { HeroesList } from "./heroes/HeroesList";
import { Intro } from "./intro/Intro";

const heroesRepository = createLocalStorageHeroRepository();
const teamsRepository = createLocalStorageTeamRepository();

export const App = () => {
  return (
    <HeroesContextProvider repository={heroesRepository}>
      <TeamsContextProvider repository={teamsRepository}>
        <Navbar />
        <section className="min-h-screen flex justify-center items-center">
          <Intro />
        </section>
        <Divider />
        <section className="flex flex-col justify-center items-center py-32 px-32">
          <HeroesList />
        </section>
        <Divider />
        <section className="flex flex-col justify-center items-center py-32 px-32">
          <h3 className="mb-24 text-4xl uppercase">Create new Hero</h3>
          <HeroCreator />
        </section>
        <Divider />
        <section className="flex flex-col justify-center items-center py-32 px-32">
          <TeamCreator />
        </section>
      </TeamsContextProvider>
    </HeroesContextProvider>
  );
};
