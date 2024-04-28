import { PrismaClient } from '@prisma/client';
import Joi from 'joi';

let config!: {
  production: string;
  name: string;
  key: string;
};
let db!: PrismaClient;

async function bootstrap(): Promise<void> {
  const schema = Joi.object({
    production: Joi.boolean(),
    name: Joi.string().required(),
    key: Joi.string().required().length(32)
  });
  config = await schema.validateAsync({
    production: process.env.NODE_ENV === 'production',
    name: process.env.NAME as string,
    key: process.env.KEY as string
  });
  db = new PrismaClient();
  console.log('ok');
}

export { bootstrap, config, db };
