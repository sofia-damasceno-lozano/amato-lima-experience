"use client";

import Image from "next/image";
import styles from "./intro-home.module.css";

export default function IntroHome() {
  return (
    <section className={styles.intro} aria-hidden="true">
      <div className={styles.travertineBg} />

      <div className={styles.monogramStage}>
        <svg
          className={styles.monogramLines}
          viewBox="0 0 300 300"
          aria-hidden="true"
        >
          <path
            className={styles.carveLine}
            d="M68 238 C82 202 92 166 98 122 C103 85 116 57 145 48"
          />

          <path
            className={styles.carveLine}
            d="M145 48 C190 38 226 70 229 116 C232 164 201 202 158 214"
          />

          <path
            className={styles.carveLine}
            d="M158 214 C198 186 207 126 174 94 C153 74 124 77 105 102"
          />

          <path
            className={styles.carveLine}
            d="M87 236 C113 228 134 218 154 198"
          />

          <path
            className={styles.carveLine}
            d="M229 116 L244 96 L244 226 L207 226"
          />

          <path
            className={styles.carveLine}
            d="M58 246 L76 74"
          />
        </svg>

        <div className={styles.logoReveal}>
          <Image
            src="/amato-lima-experience/logo/logo.png"
            alt="Amato Lima"
            width={220}
            height={72}
            priority
            className={styles.logo}
          />
        </div>
      </div>

      <div className={styles.exploreWrapper}>
        <span className={styles.explore}>EXPLORAR</span>
        <div className={styles.line} />
      </div>
    </section>
  );
}
