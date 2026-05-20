import localFont from "next/font/local";

/* ================================
   FONTE DO TÍTULO "ARTE"
   Mirage
================================ */
export const tangier = localFont({

  /* caminho da fonte dentro
     da pasta public/fonts */
  src: "../public/fonts/Mirage-thin.otf",

  /* variável CSS global
     usada no título Arte */
  variable: "--font-Mirage",

  /* evita troca brusca
     durante carregamento */
  display: "swap",
});
