// app/login/page.tsx
"use client"; // Marque como Client Component
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { LoginForm } from "./LoginForm";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError(result.error);
    } else {
      router.push("/dashboard"); // Redireciona para o dashboard após o login
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary">
      <div className="max-w-xl w-full p-8 mx-3 bg-white shadow-md rounded-lg">
        <div className="flex flex-col justify-center items-center gap-10">
          <div>
            <Image
              src="/img/logo.png"
              alt="Logo Barbearia"
              width={200}
              height={50}
              className="object-contain"
            />
          </div>
          <h1 className="text-2xl font-bold text-center mb-10">Login</h1>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
