import { Team } from "../../domain/Team";
import { TeamsRepository } from "../../domain/TeamsRepository";

export const getAllTeams = async (
  teamRepository: TeamsRepository
): Promise<Team[]> => {
  return teamRepository.getAll();
};
