// middleware.ts
import { NextResponse, NextRequest } from "next/server"; // Importe NextRequest
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  // Defina o tipo de req como NextRequest
  const token = await getToken({ req });

  // Rotas protegidas
  const protectedRoutes = ["/dashboard"]; // Adicione outras rotas protegidas aqui

  // Verifica se a rota atual é protegida
  const isProtectedRoute = protectedRoutes.some((route) =>
    req.nextUrl.pathname.startsWith(route)
  );

  // Se a rota for protegida e o usuário não estiver autenticado, redirecione para /login
  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Permite o acesso a rotas públicas
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
