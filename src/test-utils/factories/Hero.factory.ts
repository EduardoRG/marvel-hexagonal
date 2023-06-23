import { faker } from "@faker-js/faker";
import { Hero } from "@/modules/heroes/domain/Hero";

export class HeroFactory {
  static create(data: Partial<Hero> = {}): Hero {
    return {
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      description: faker.person.bio(),
      role: faker.helpers.arrayElement(["Tank", "Support", "Damage"]),
      thumbnail: faker.image.url(),
      teamId: faker.string.uuid(),
      ...data,
    };
  }
}
