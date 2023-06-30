import { Member } from "./Member";

export interface Team {
  id: string;
  name: string;
  members: (Member | null)[];
}

export type TeamWithoutId = Omit<Team, "id">;

export const ensureTeamIsValid = (team: TeamWithoutId) => {
  if (!team.name) {
    throw new Error("Team name is required");
  }
  if (!team.members) {
    throw new Error("Team members are required");
  }
  const members = team.members.filter((member) => member);
  if (!members.length) {
    throw new Error("Team must have at least one member");
  }
  if (members.length > 5) {
    throw new Error("Team can have up to 5 members");
  }
};
