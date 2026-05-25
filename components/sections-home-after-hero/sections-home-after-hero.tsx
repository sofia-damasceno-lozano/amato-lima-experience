"use client";

import styles from "./sections-home-after-hero.module.css";

export default function SectionsHomeAfterHero() {
  return (
    <section className={styles.section}>
      <div className={styles.backgroundGlow} />

      <div className={styles.blueprintWrapper}>
        <img
          src="/amato-lima-experience/sections-home-after-hero/planta-baixa.svg"
          alt="Planta Baixa"
          className={styles.planImage}
        />
      </div>

      <div className={styles.textContent}>
        <span className={styles.eyebrow}>
          SELEÇÃO E ENGENHARIA
        </span>

        <h2 className={styles.title}>
          Projetos que
          <br />
          transformam espaços
          <br />
          em experiências.
        </h2>

        <div className={styles.line} />
      </div>
    </section>
  );
}
