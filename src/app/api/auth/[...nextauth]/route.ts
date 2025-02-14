import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { Session } from "next-auth"; // Importe apenas Session

const prisma = new PrismaClient();

// Defina o tipo do token manualmente
interface Token {
  sub?: string; // O ID do usuário
  email?: string | null;
  name?: string | null;
}

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          console.log("1. Starting authentication");

          if (!credentials?.email || !credentials?.password) {
            console.log("2. Missing credentials");
            return null;
          }

          const user = await prisma.user.findUnique({
            where: { email: credentials.email },
          });

          console.log("3. User found:", !!user);

          if (user && credentials.password) {
            console.log("4. Comparing passwords");
            const isValid = await bcrypt.compare(
              credentials.password,
              user.password
            );
            console.log("5. Password valid:", isValid);

            if (isValid) {
              return {
                id: user.id.toString(),
                email: user.email,
                name: user.name,
              };
            }
          }
          return null;
        } catch (error) {
          console.log("Error in auth:", error);
          return null;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session, token }: { session: Session; token: Token }) {
      if (token.sub && session.user) {
        session.user.id = token.sub; // Adicione o ID do usuário à sessão
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
