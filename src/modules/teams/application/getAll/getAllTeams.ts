import { Team } from "../../domain/Team";
import { TeamRepository } from "../../domain/TeamRepository";

export const getAllTeams = async (
  teamRepository: TeamRepository
): Promise<Team[]> => {
  return teamRepository.getAll();
};
