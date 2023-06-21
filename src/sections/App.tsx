import { createLocalStorageHeroRepository } from "../modules/heroes/infrastructure/LocalStorageHeroRepository";
import { Navbar } from "./Navbar";
import { HeroCreator } from "./heroes/HeroCreator";
import { TeamCreator } from "./teams/TeamCreator";
import { Button, Divider } from "./shared";
import { HeroesContextProvider } from "./heroes/HeroesContext";
import { TeamsContextProvider } from "./teams/TeamsContext";
import { createLocalStorageTeamRepository } from "../modules/teams/infrastructure/LocalStorageTeamRepository";
import { HeroesList } from "./heroes/HeroesList";

const heroesRepository = createLocalStorageHeroRepository();
const teamsRepository = createLocalStorageTeamRepository();

export const App = () => {
  return (
    <HeroesContextProvider repository={heroesRepository}>
      <TeamsContextProvider repository={teamsRepository}>
        <Navbar />
        <section className="min-h-screen flex justify-center items-center">
          <div className="text-center">
            <h1 className="text-6xl mb-2">Create the best heroes team</h1>
            <h2 className="text-2xl text-slate-300 mb-16">
              Find the best heroes for your team.
            </h2>
            <div className="flex justify-center gap-3">
              <Button variant="primary">Create new Hero</Button>
              <Button>Create new Team</Button>
            </div>
          </div>
        </section>
        <Divider />
        <section className="flex flex-col justify-center items-center py-32 px-32">
          <h3 className="mb-24 text-4xl uppercase">All your Heroes</h3>
          <HeroesList />
        </section>
        <Divider />
        <section className="flex flex-col justify-center items-center py-32 px-32">
          <h3 className="mb-24 text-4xl uppercase">Create new Hero</h3>
          <HeroCreator />
        </section>
        <Divider />
        <section className="flex flex-col justify-center items-center py-32 px-32">
          <h3 className="mb-24 text-4xl uppercase">Create new Team</h3>
          <TeamCreator />
        </section>
      </TeamsContextProvider>
    </HeroesContextProvider>
  );
};
