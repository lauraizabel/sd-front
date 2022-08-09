import { faker } from "@faker-js/faker";

export interface Log {
  id?: string;
  noteId?: string;
  text: string;
  method: "GET" | "PUT" | "DELETE";
  createdAt?: Date;
  updatedAt?: Date;
}

export const FakeLog: Log = {
  id: faker.random.words(),
  noteId: faker.random.words(),
  text: faker.lorem.paragraph(2),
  method: "GET",
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const FakeLogs: Log[] = Array.from({ length: 10 }, () => FakeLog);
