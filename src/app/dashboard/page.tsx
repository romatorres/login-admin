// app/dashboard/page.tsx
"use client";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const { data: session } = useSession();
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    if (session?.user?.name) {
      setUserName(session.user.name);
    }
  }, [session]);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">
        Bem vindo, {userName || "Carregando..."}!
      </h1>

      <button
        onClick={() => signOut({ callbackUrl: "/" })}
        className="bg-primary hover:bg-primary_hover text-white font-bold py-2 px-4 rounded"
      >
        Sair
      </button>
    </div>
  );
}
