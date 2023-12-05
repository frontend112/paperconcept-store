import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import prisma from "@/prisma";

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "creds",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password) {
          return null;
        }
        try {
          const user = await prisma.user.findFirst({
            where: {
              email: credentials.email,
            },
          });
          if (!user) {
            return null;
          }
          const isPassCorrect = await bcrypt.compare(
            credentials.password,
            user.hashedPassword
          );
          return isPassCorrect ? user : null;
        } catch (error) {
          console.log(error);
          return null;
        } finally {
          prisma.$disconnect();
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: `${process.env.VERCEL_URL}/sign-in`,
  },
};
const handler = NextAuth(authOptions);

export { handler as POST, handler as GET };
