import axios from 'axios';
import type { Note, NewNoteData } from '../../types/note';

export const nextServer = axios.create({
  baseURL: 'https://notehub-api.goit.study',
  withCredentials: true,
});

//TYPES

export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

interface FetchNotesParams {
  search?: string;
  page?: number;
  perPage?: number;
  tag?: string;
}

//TOKEN CHECK
const NOTEHUB_TOKEN = process.env.NEXT_PUBLIC_API_URL + '/api';
if (!NOTEHUB_TOKEN) {
  throw new Error('TOKEN IS MISSING');
}

//GET
export async function fetchNotes(
  query: string,
  page: number,
  tag: string | undefined = undefined,
): Promise<FetchNotesResponse> {
  const params: FetchNotesParams = {
    ...(query.trim() !== '' && { search: query.trim() }),
    page: page,
    perPage: 12,
    tag,
  };

  const response = await nextServer.get<FetchNotesResponse>('/notes', {
    params,
  });
  return response.data;
}

//POST
export async function createNote(newNote: NewNoteData): Promise<Note> {
  const response = await nextServer.post<Note>('/notes', newNote);
  return response.data;
}

//DELETE
export async function deleteNote(noteId: number): Promise<Note> {
  const response = await nextServer.delete<Note>(`/notes/${noteId}`);
  return response.data;
}

//GET NOTE BY ID
export async function fetchNoteById(noteId: number): Promise<Note> {
  const response = await nextServer.get<Note>(`/notes/${noteId}`);
  return response.data;
}
