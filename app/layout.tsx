import "./globals.css";
import { classyVogue } from "./fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
      <body className={classyVogue.variable}>
    </html>
  );
}
