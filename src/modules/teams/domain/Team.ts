export interface Team {
  id: string;
  name: string;
}

export type TeamWithoutId = Omit<Team, "id">;

export const ensureTeamIsValid = (team: TeamWithoutId) => {
  if (!team.name) {
    throw new Error("Team name is required");
  }
};
