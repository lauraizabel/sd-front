import { faker } from "@faker-js/faker";

export interface Note {
  id?: string;
  text: string;
  path: string;
  updatedAt?: Date;
  createdAt?: Date;
}

export const FakeNote = {
  id: faker.random.words(6),
  path: faker.random.words(6),
  text: faker.random.words(100),
  updatedAt: faker.date.recent(),
  createdAt: faker.date.recent(),
};

export const FakeNotes = Array.from({ length: 10 }, () => FakeNote);
