'use server';

import { cookies } from 'next/headers';

import { api } from '@shared/clients';

export type LoginBody = {
  email: string;
  password: string;
};

export type LoginResult = {
  tokenValue: string;
};

export async function login(dto: LoginBody): Promise<boolean> {
  const response = await api.post<LoginResult>('/login', dto);
  cookies().set('session', response.data.tokenValue, {
    secure: true,
    path: '/',
    httpOnly: true,
    sameSite: 'strict'
  });
  return response.status === 200;
}
