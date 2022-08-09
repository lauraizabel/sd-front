import { Log } from "../models/log-model";
import { Note } from "../models/note-model";
import httpClient from "./api";

export const getNotes = async () => {
  const { data } = await httpClient.get<Note[]>("/");

  return data;
};

export const getNote = async (path: string) => {
  const { data } = await httpClient.get<{ note: Note; logs: Log[] }>(
    `/${path}`
  );

  return data;
};

export const putNote = async (text: string, path: string) => {
  try {
    const { data } = await httpClient.put<Note[]>(`/${path}`, { text });

    return data;
  } catch (error) {
    return error;
  }
};
