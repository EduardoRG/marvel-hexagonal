import { Team } from "../../domain/Team";
import { TeamRepository } from "../../domain/TeamRepository";

export const updateTeam = async (
  TeamRepository: TeamRepository,
  teamId: string,
  data: Partial<Team>
) => {
  await TeamRepository.update(teamId, data);
};
