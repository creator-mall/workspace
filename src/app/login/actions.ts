'use server';

import { User } from '@prisma/client';
import { verify } from 'argon2';
import { AES } from 'crypto-js';
import { cookies } from 'next/headers';

import { db } from '@/lib/bootstrap';

export type BasicDto = {
  email: string;
  password: string;
};

export async function basicSubmit(dto: BasicDto): Promise<boolean> {
  const data: User = await db.user.findFirst({
    where: {
      email: dto.email,
      status: true
    }
  });
  if (!data) {
    return false;
  }
  const check = await verify(data.password, dto.password);
  if (check) {
    const encrypted = AES.encrypt(JSON.stringify({ id: data.id }), process.env.KEY as string).toString();
    cookies().set('session', encrypted, {
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7,
      sameSite: 'strict'
    });
  }
  return check;
}

export type SmsDto = {
  area: string;
  phone: string;
  captcha: string;
};

export async function smsSubmit(dto: SmsDto): Promise<boolean> {
  return false;
}
