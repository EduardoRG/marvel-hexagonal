export type HeroRoleType = "Tank" | "Support" | "Damage";

export interface Hero {
  id: string;
  name: string;
  description: string;
  role: HeroRoleType;
  thumbnail: string;
  teamId: number | "default";
}

export type HeroWithoutId = Omit<Hero, "id">;

export const ensureHeroIsValid = (hero: HeroWithoutId) => {
  if (!hero.name) {
    throw new Error("Hero name is required");
  }
  if (!hero.description) {
    throw new Error("Hero description is required");
  }
  if (!hero.role) {
    throw new Error("Hero role is required");
  }
  if (!hero.thumbnail) {
    throw new Error("Hero thumbnail is required");
  }
};
