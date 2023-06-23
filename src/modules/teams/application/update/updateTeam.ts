import { Team } from "../../domain/Team";
import { TeamsRepository } from "../../domain/TeamsRepository";

export const updateTeam = async (
  TeamRepository: TeamsRepository,
  teamId: string,
  data: Partial<Team>
) => {
  await TeamRepository.update(teamId, data);
};
