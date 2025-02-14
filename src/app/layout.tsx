import { Providers } from "./providers";
import type { Metadata } from "next";
import { Poller_One, Ubuntu, Nunito, Bebas_Neue } from "next/font/google";
import "./globals.css";

const pollerOne = Poller_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-poller-one",
});

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-ubuntu",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
});

export const metadata: Metadata = {
  title: "Barbearia Adriano Alves",
  description: "Corte perfeito, estilo único!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${pollerOne.variable} ${ubuntu.variable} ${nunito.variable} ${bebasNeue.variable}`}
    >
      <body className="antialiased" suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
