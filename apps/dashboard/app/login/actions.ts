"use server";

import db from "@creator/common/db";
import { verify } from "@node-rs/argon2";

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
  // cookies().set("access_token", token, {
  //   secure: true,
  //   path: "/",
  //   httpOnly: true,
  //   sameSite: "strict",
  // });
  return true;
}
