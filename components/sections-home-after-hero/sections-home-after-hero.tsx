"use client";

import styles from "./sections-home-after-hero.module.css";

export default function SectionsHomeAfterHero() {
  return (
    <section className={styles.section}>
      <div className={styles.bg} />
      <div className={styles.planWrap}>
        <svg className={styles.plan} viewBox="0 0 1000 850">
          <path className={styles.wall} d="M120 95 H650 V230 H835 V720 H560 V785 H120 Z" />
          <path className={styles.wall} d="M120 405 H560 V785" />
          <path className={styles.wall} d="M560 230 V720" />
          <path className={styles.wall} d="M120 560 H560" />
          <path className={styles.wall} d="M350 95 V405" />
          <path className={styles.wall} d="M350 250 H650" />
          <path className={styles.wall} d="M560 410 H835" />

          <path className={styles.thin} d="M610 300 H700 V620 H610 Z" />
          <path className={styles.thin} d="M190 610 H485 V715 H190 Z" />
          <path className={styles.thin} d="M180 170 H310 V315 H180 Z" />
          <path className={styles.thin} d="M410 135 H610 V220 H410 Z" />
          <path className={styles.thin} d="M645 455 H800 V610 H645 Z" />

          <path className={styles.thin} d="M560 375 Q630 375 630 445" />
          <path className={styles.thin} d="M350 360 Q420 360 420 405" />
          <path className={styles.thin} d="M560 720 Q625 720 625 785" />

          <circle className={styles.dot} cx="120" cy="95" r="4" />
          <circle className={styles.dot} cx="650" cy="95" r="4" />
          <circle className={styles.dot} cx="835" cy="720" r="4" />
          <circle className={styles.dot} cx="120" cy="785" r="4" />
        </svg>
      </div>

      <div className={styles.copy}>
        <span>SELEÇÃO E ENGENHARIA</span>
        <h2>
          Projetos que
          <br />
          transformam espaços
          <br />
          em experiências.
        </h2>
        <i />
      </div>
    </section>
  );
}
