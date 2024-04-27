import { PrismaClient } from '@prisma/client';

export const config = {
  production: process.env.NODE_ENV === 'production',
  name: process.env.NAME as string,
  key: process.env.KEY as string,
  public_url: process.env.PUBLIC_URL as string,
  admin: {
    user: process.env.ADMIN_USER as string,
    token: Buffer.from(process.env.ADMIN_TOKEN as string, 'base64')
  }
};

export const db = new PrismaClient();
