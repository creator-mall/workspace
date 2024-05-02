/* eslint-disable turbo/no-undeclared-env-vars */
import Joi from "joi";

interface Config {
  production: string;
  name: string;
  key: string;
}

export default async function getConfig(): Promise<Config> {
  const schema = Joi.object({
    production: Joi.boolean(),
    name: Joi.string().required(),
    key: Joi.string().required().length(32),
  });
  return await schema.validateAsync({
    production: process.env.NODE_ENV === "production",
    name: process.env.NAME as string,
    key: process.env.KEY as string,
  });
}
