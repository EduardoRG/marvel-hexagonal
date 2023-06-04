import { TeamRepository } from "../../domain/TeamRepository";

export const removeTeam = async (
  teamRepository: TeamRepository,
  teamId: string
) => {
  await teamRepository.remove(teamId);
};
