import { Team, TeamWithoutId } from "./Team";

export interface TeamsRepository {
  get(teamId: string): Promise<Team | null>;
  getAll(): Promise<Team[]>;
  save(team: TeamWithoutId): Promise<void>;
  remove(teamId: string): Promise<void>;
  update(teamId: string, data: Partial<Team>): Promise<void>;
}
