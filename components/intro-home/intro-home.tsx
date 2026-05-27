"use client";

import styles from "./intro-home.module.css";

export default function IntroHome() {
  return (
    <section className={styles.intro}>
      <div className={styles.monogramWrap}>
        <svg
          className={styles.monogram}
          viewBox="0 0 220 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* moldura / grid estrutural */}
          <path
            className={styles.guide}
            d="M45 52 H175 V168 H45 Z"
          />

          {/* curva principal esquerda */}
          <path
            className={styles.logoLine}
            d="M78 154 
               C58 140 58 92 82 72
               C102 56 130 63 139 87
               C150 117 129 151 98 154"
          />

          {/* haste interna esquerda */}
          <path
            className={styles.logoLine}
            d="M82 150 
               L97 72"
          />

          {/* arco central */}
          <path
            className={styles.logoLine}
            d="M96 154
               C118 146 129 124 125 101
               C122 82 110 70 95 68"
          />

          {/* forma direita */}
          <path
            className={styles.logoLine}
            d="M132 67
               H166
               V151
               H145
               V94
               C145 78 140 70 132 67"
          />

          {/* detalhe inferior direito */}
          <path
            className={styles.logoLine}
            d="M145 151
               C155 151 164 148 172 142"
          />
        </svg>
      </div>
    </section>
  );
}
