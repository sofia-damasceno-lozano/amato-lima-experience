import "./globals.css";

/* importa a fonte */
import { mirage } from "./fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">

      {/* aplica variável global */}
      <body className={mirage.variable}>
        {children}
      </body>

    </html>
  );
}
