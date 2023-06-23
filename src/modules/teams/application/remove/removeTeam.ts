import { TeamsRepository } from "../../domain/TeamsRepository";

export const removeTeam = async (
  teamRepository: TeamsRepository,
  teamId: string
) => {
  await teamRepository.remove(teamId);
};
