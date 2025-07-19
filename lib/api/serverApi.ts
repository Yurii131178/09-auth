// — для функцій, які викликаються у серверних компонентах (до params потрібно додавати cookeis у headers.).
// lib/api/serverApi.ts

import { cookies } from 'next/headers';
import { nextServer } from './api';
import { FetchNotesParams, FetchNotesResponse } from './clientApi';
import { Note } from '@/types/note';
import { User } from '@/types/user';

export const checkServerSession = async () => {
  // Дістаємо поточні cookie
  const cookieStore = await cookies();
  const res = await nextServer.get('/auth/session', {
    headers: {
      // передаємо кукі далі
      Cookie: cookieStore.toString(),
    },
  });
  // Повертаємо повний респонс, щоб middleware мав доступ до нових cookie
  return res;
};

export async function fetchNotesServer(
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
  const cookieStore = await cookies();
  const response = await nextServer.get<FetchNotesResponse>('/notes', {
    params,
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  return response.data;
}

export async function fetchNoteByIdServer(noteId: string): Promise<Note> {
  const cookieStore = await cookies();
  const response = await nextServer.get<Note>(`/notes/${noteId}`, {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  return response.data;
}

export const getServerUser = async () => {
  const cookieStore = await cookies();
  const responce = await nextServer.get<User>('/users/me', {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  return responce.data;
};
