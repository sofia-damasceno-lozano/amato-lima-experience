"use client";

import styles from "./editorial-assets-section.module.css";

export function EditorialAssetsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.backgroundImage} />

      <div className={styles.content}>
        <span className={styles.since}>DESDE 2010</span>

        <h2 className={styles.amato}>Amato</h2>

        <div className={styles.copyBlock}>
          <p>
  engenharia,
  <br />
  território
  <br />
  e visão
  <br />
  transformados
  <br />
  em ativos
  <br />
  imobiliários
  <br />
  duradouros.
</p>

          <span className={styles.line} />

          <strong>+10 ativos</strong>
        </div>

        <h2 className={styles.lima}>lima</h2>
      </div>
    </section>
  );
}
