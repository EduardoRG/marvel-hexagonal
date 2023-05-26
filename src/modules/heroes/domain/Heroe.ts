export interface Heroe {
  id: number;
  name: string;
  description: string;
  thumbnail: string;
}

export const ensureHeroeIsValid = (heroe: Heroe) => {
  if (!heroe.name) {
    throw new Error("Heroe name is required");
  }
  if (!heroe.description) {
    throw new Error("Heroe description is required");
  }
  if (!heroe.thumbnail) {
    throw new Error("Heroe thumbnail is required");
  }
};
