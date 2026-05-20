import localFont from "next/font/local";

/* ================================
   FONTE PRINCIPAL DO PROJETO
   Celine Sans
================================ */
export const celineSans = localFont({

  /* caminho da fonte dentro
     da pasta public/fonts */
  src: "../public/fonts/celine-sans.otf",

  /* variável CSS global
     usada no projeto */
  variable: "--font-celine",

  /* evita flash visual
     estranho no carregamento */
  display: "swap",
});
