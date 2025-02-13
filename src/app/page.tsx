import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md text-center">
        <h1 className="text-2xl font-bold mb-4">Bem-vindo ao Sistema</h1>
        <Link href="/login">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Fazer Login
          </button>
        </Link>
      </div>
    </div>
  );
}
