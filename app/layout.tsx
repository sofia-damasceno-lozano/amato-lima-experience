import "./globals.css";

/* fonte usada no título principal */
import { mirage } from "./fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">

      {/* aplica variável global da fonte */}
      <body className={mirage.variable}>

        {/* renderiza o site */}
        {children}

      </body>

    </html>
  );
}
