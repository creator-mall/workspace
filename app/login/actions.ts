'use server';

import { cookies } from 'next/headers';

export type LoginDto = {
  email: string;
  password: string;
};

export async function login(dto: LoginDto): Promise<boolean> {
  // const check = await verify(config.admin.token, dto.password);
  // if (check) {
  //   const session = JSON.stringify({ user: config.admin.user });
  //   const encrypted = AES.encrypt(session, config.key).toString();
  //   cookies().set('session', encrypted, {
  //     secure: config.production,
  //     path: '/',
  //     httpOnly: true,
  //     sameSite: 'strict'
  //   });
  // }
  return false;
}
