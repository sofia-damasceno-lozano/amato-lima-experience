import localFont from "next/font/local";

/* ================================
   FONTE PRINCIPAL DA HERO
   Bile Demo
================================ */
export const bileDemo = localFont({
  
  /* caminho da fonte dentro do public */
  src: "../public/fonts/celine-sans.otf",

  /* variável CSS global */
  variable: "--font-celine",

  /* evita flash estranho no carregamento */
  display: "swap",
});
