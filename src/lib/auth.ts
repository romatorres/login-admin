import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

// Função para obter a sessão do usuário no lado do servidor
export async function getCurrentUser() {
  const session = await getServerSession(authOptions);
  return session?.user;
}

// Função para verificar se o usuário está autenticado
export async function isAuthenticated() {
  const session = await getServerSession(authOptions);
  return !!session;
}

// Função para proteger rotas no lado do servidor
export async function protectRoute() {
  const session = await getServerSession(authOptions);

  if (!session) {
    throw new Error("Acesso negado. Faça login para continuar.");
  }

  return session.user;
}
