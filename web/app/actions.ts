'use server';

import { hash } from '@node-rs/argon2';
import { sign } from '@node-rs/jsonwebtoken';

export async function makeToken() {
  return sign(
    {
      id: '123456'
    },
    'n05WrZZwVLuBzlz'
  );
}

export async function makeHash() {
  return hash('123456');
}
