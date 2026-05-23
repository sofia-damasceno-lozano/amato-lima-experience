import type { Metadata } from "next";
import "./globals.css";

import {
  classyVogue,
  westwoodStudio,
} from "./fonts";

export const metadata: Metadata = {
  title: "Amato Lima",
  description: "Ativos Imobiliários",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`
          ${classyVogue.variable}
          ${westwoodStudio.variable}
        `}
      >
        {children}
      </body>
    </html>
  );
}
