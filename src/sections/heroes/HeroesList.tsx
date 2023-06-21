import { Hero, HeroRoleType } from "../../modules/heroes/domain/Hero";
import { RoleIcon } from "../shared";
import { useHeroesContext } from "./HeroesContext";
import { MiniHeroCard } from "./MiniHeroCard";

export const HeroesList = () => {
  const { heroes } = useHeroesContext();

  const tankHeroes = heroes.filter((hero) => hero.role === "Tank");
  const damageHeroes = heroes.filter((hero) => hero.role === "Damage");
  const supportHeroes = heroes.filter((hero) => hero.role === "Support");

  const heroesByRole: Record<HeroRoleType, Hero[]> = {
    Tank: tankHeroes,
    Damage: damageHeroes,
    Support: supportHeroes,
  };

  return (
    <div className="grid grid-cols-3 gap-16 max-w-4xl">
      {Object.entries(heroesByRole).map(([role, heroes]) => (
        <div key={role} className="">
          <div className="rounded-full bg-slate-700 w-16 h-16 flex justify-center items-center mb-8">
            <RoleIcon role={role as HeroRoleType} />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {heroes.map((hero) => (
              <MiniHeroCard
                key={hero.id}
                thumbnail={hero.thumbnail}
                name={hero.name}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
