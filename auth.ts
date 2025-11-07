import { prisma } from "@/db/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { compareSync } from "bcrypt-ts-edge";
import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const config = {
  pages: {
    signIn: "/sign-in",
    error: "/sign-in",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      credentials: {
        email: { type: "email" },
        password: { type: "password" },
      },
      async authorize(credentials) {
        if (credentials === null) return null;

        // Find user in db
        const user = await prisma.user.findFirst({
          where: {
            email: credentials.email as string,
          },
        });
        // Check if user exister and if the password matches
        if (user && user.password) {
          const isMatch = compareSync(
            credentials.password as string,
            user.password,
          );

          // If password is correct, return user
          if (isMatch) {
            return {
              id: user.id,
              name: user.name,
              email: user.email,
              role: user.role,
            };
          }
        }
        // If user does not existe or password does not match return null
        return null;
      },
    }),
  ],
  callbacks: {
    async session({ session, user, trigger, token }: any) {
      // Set the user id from the token
      session.user.id = token.sub;
      session.user.role = token.role;
      session.user.name = token.name;

      console.log(token);

      // If there is an update, set the user name
      if (trigger === "update") {
        session.user.name = user.name;
      }

      return session;
    },
    async jwt({ token, user, trigger, session }: any) {
      // Assign user field to token
      if (user) {
        token.role = user.role;

        // If user has no name use the email
        if (user.name === "NO_NAME") {
          token.name = user.email!.split("@")[0];

          // Update db to reflect the token
          await prisma.user.update({
            where: { id: user.id },
            data: { name: token.name },
          });
        }
      }
      return token;
    },
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
