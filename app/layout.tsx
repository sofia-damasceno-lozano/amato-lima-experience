import "./globals.css";
import { bileDemo } from "./fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      
      {/* aplica variável da fonte */}
      <body className={bileDemo.variable}>
        {children}
      </body>

    </html>
  );
}
