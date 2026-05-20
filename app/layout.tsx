import "./globals.css";

/* fonte principal do projeto */
import { celineSans } from "./fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    /* idioma principal */
    <html lang="pt-BR">

      {/* aplica variável global da fonte */}
      <body className={celineSans.variable}>

        {/* renderiza páginas */}
        {children}

      </body>

    </html>
  );
}
