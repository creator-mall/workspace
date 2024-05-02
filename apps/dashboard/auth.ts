import { PrismaAdapter } from "@auth/prisma-adapter";
import db from "@creator/common/db";
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const { handlers, signIn, signOut, auth } = NextAuth({
  debug: true,
  // adapter: PrismaAdapter(db),
  providers: [GitHub],
});
