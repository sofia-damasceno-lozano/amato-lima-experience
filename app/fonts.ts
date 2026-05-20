import localFont from "next/font/local";

/* ================================
   FONTE DO TÍTULO "ARTE"
   Tangier
================================ */
export const tangier = localFont({

  /* caminho da fonte dentro
     da pasta public/fonts */
  src: "../public/fonts/Tangier.otf",

  /* variável CSS global
     usada no título Arte */
  variable: "--font-tangier",

  /* evita troca brusca
     durante carregamento */
  display: "swap",
});
