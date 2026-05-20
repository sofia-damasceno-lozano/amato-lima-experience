import "./globals.css";

/* fonte usada no título principal */
import { tangier } from "./fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">

      {/* aplica variável global da fonte */}
      <body className={tangier.variable}>

        {/* renderiza o site */}
        {children}

      </body>

    </html>
  );
}
