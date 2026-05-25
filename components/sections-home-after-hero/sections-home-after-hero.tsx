"use client";

import styles from "./sections-home-after-hero.module.css";

export default function SectionsHomeAfterHero() {
  return (
    <section className={styles.section}>
      {/* fundo */}
      <div className={styles.background} />

      {/* glow */}
      <div className={styles.overlay} />

      {/* planta */}
      <div className={styles.floorplan}>
        <div className={styles.line1} />
        <div className={styles.line2} />
        <div className={styles.line3} />
        <div className={styles.line4} />
        <div className={styles.line5} />
        <div className={styles.line6} />
        <div className={styles.line7} />
        <div className={styles.line8} />
      </div>

      {/* texto */}
      <div className={styles.content}>
        <span className={styles.label}>
          SELEÇÃO E ENGENHARIA
        </span>

        <h2 className={styles.title}>
          Cada projeto nasce
          <br />
          como um ativo.
        </h2>
      </div>
    </section>
  );
}
