import { PrismaClient } from '@prisma/client';
import { hash } from '@node-rs/argon2';

const db = new PrismaClient();

async function bootstrap() {
  await db.user.create({
    data: {
      email: 'kainpro@foxmail.com',
      password: await hash('pass@VAN1234')
    }
  });
}

bootstrap()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
