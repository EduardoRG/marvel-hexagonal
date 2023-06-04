import { v4 as uuidv4 } from "uuid";
import { TeamRepository } from "../domain/TeamRepository";
import { Team } from "../domain/Team";

export const createLocalStorageTeamRepository = (): TeamRepository => {
  return {
    get: async (teamId) => {
      const teams = JSON.parse(localStorage.getItem("teams") || "{}");
      return teams[teamId] || null;
    },
    getAll: async () => {
      const teams = JSON.parse(localStorage.getItem("teams") || "{}");
      return Object.values(teams);
    },
    save: async ({ id = uuidv4(), ...team }: Team) => {
      const teams = JSON.parse(localStorage.getItem("teams") || "{}");
      teams[id] = {
        id,
        ...team,
      };
      localStorage.setItem("teams", JSON.stringify(teams));
    },
    remove: async (teamId) => {
      const teams = JSON.parse(localStorage.getItem("teams") || "{}");
      delete teams[teamId];
      localStorage.setItem("teams", JSON.stringify(teams));
    },
    update: async (teamId, data) => {
      const teams = JSON.parse(localStorage.getItem("teams") || "{}");
      const team = teams[teamId];
      teams[teamId] = { ...team, ...data };
      localStorage.setItem("teams", JSON.stringify(teams));
    },
  };
};
