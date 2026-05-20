import localFont from "next/font/local";

/* ================================
   FONTE PRINCIPAL
   Mirage Thin
================================ */
export const mirage = localFont({

  /* caminho da fonte */
  src: "../public/fonts/Mirage-thin.otf",

  /* variável CSS global */
  variable: "--font-mirage",

  /* evita flicker */
  display: "swap",
});
