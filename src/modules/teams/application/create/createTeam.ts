import { Team, ensureTeamIsValid } from "../../domain/Team";
import { TeamsRepository } from "../../domain/TeamsRepository";

export const createTeam = async (
  teamRepository: TeamsRepository,
  team: Team
) => {
  ensureTeamIsValid(team);
  await teamRepository.save(team);
};
