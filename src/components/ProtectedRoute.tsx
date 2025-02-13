"use client";
import { useSession } from "next-auth/react";

export default function ProtectedPage() {
  const { data: session } = useSession();

  if (!session) {
    return <p>Acesso negado. Faça login para continuar.</p>;
  }

  return <p>Bem-vindo, {session.user?.name}!</p>;
}
