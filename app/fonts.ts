import localFont from "next/font/local";

/* ================================
   FONTE PRINCIPAL DA HERO
   Bile Demo
================================ */
export const bileDemo = localFont({
  
  /* caminho da fonte dentro do public */
  src: "../public/fonts/bile-demo.ttf",

  /* variável CSS global */
  variable: "--font-bile",

  /* evita flash estranho no carregamento */
  display: "swap",
});
