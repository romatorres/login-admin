// next-auth.d.ts
import "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
  }

  interface Session {
    user: User;
  }
}
