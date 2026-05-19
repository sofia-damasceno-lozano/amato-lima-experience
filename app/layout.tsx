import type { ReactNode } from "react";

export const metadata = {
  title: "Amato Lima Experience",
  description: "Crafting a cinematic digital experience for Amato Lima.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
