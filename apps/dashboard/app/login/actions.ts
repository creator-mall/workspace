"use server";

import { getConfig } from "@bootstrap";
import { db } from "@creator/common";
import { verify } from "@node-rs/argon2";
import { sign } from "@node-rs/jsonwebtoken";
import { nanoid } from "nanoid";
import { cookies } from "next/headers";

export type LoginBody = {
  email: string;
  password: string;
};

export type LoginResult = {
  tokenValue: string;
};

export async function login(body: LoginBody): Promise<boolean> {
  const data = await db.user.findUnique({
    where: {
      email: body.email,
      status: true,
    },
  });
  if (!data) {
    return false;
  }
  if (!(await verify(data.password, body.password))) {
    return false;
  }
  const jti = nanoid();
  const config = await getConfig();
  const token = await sign(
    {
      jti,
      email: body.email,
    },
    config.key,
  );
  cookies().set("access_token", token, {
    secure: true,
    path: "/",
    httpOnly: true,
    sameSite: "strict",
  });
  return true;
}
