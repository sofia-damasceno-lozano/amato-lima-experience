
import "./globals.css";
import { classyVogue } from "./fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={classyVogue.variable}>
        {children}
      </body>
    </html>
  );
}
