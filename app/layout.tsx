import "./globals.css";
import { classyVogue, westwood } from "./fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${classyVogue.variable} ${westwood.variable}`}>
        {children}
      </body>
    </html>
  );
}
