import { Team } from "@/modules/teams/domain/Team";
import { faker } from "@faker-js/faker";

export class TeamFactory {
  static create(data: Partial<Team> = {}): Team {
    return {
      id: faker.string.uuid(),
      name: faker.company.name(),
      members: [],
      ...data,
    };
  }
}
