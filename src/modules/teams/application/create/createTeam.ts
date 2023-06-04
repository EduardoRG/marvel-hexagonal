import { Team, ensureTeamIsValid } from "../../domain/Team";
import { TeamRepository } from "../../domain/TeamRepository";

export const createTeam = async (
  teamRepository: TeamRepository,
  team: Team
) => {
  ensureTeamIsValid(team);
  await teamRepository.save(team);
};
