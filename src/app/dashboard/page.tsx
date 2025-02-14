// app/dashboard/page.tsx
"use client";
import { useSession } from "next-auth/react";
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
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-background">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="bg-amber-100 p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-01">Produtos</h2>
          <p className="text-3xl font-bold text-background mt-2">5 Produtos</p>
        </div>

        <div className="bg-amber-100 p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-01">Serviços</h2>
          <p className="text-3xl font-bold text-background mt-2">3 Serviços</p>
        </div>

        <div className="bg-amber-100 p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-01">Equipe</h2>
          <p className="text-3xl font-bold text-background mt-2">4 Times</p>
        </div>

        <div className="bg-amber-100 p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-01">
            Fotos na Galeria
          </h2>
          <p className="text-3xl font-bold text-background mt-2">2 Galerias</p>
        </div>

        <div className="bg-amber-100 p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-01">
            Promoções Ativas
          </h2>
          <p className="text-3xl font-bold text-background mt-2">1 Promoção</p>
        </div>
      </div>
    </div>
  );
}
