"use client";

import styles from "./sections-home-after-hero.module.css";

export default function SectionsHomeAfterHero() {
  // Quantidade de camadas para dar a altura da parede (ajuste se quiser mais alto)
  const wallLayers = 20; 
  // Distância entre cada camada em pixels
  const layerSpacing = 1.5; 

  return (
    <section className={styles.section}>
      <div className={styles.bg} />

      <div className={styles.planWrap}>
        
        {/* 1. CAMADA BASE (CHÃO): Móveis, grid, portas e textos */}
        <svg
          className={`${styles.plan} ${styles.baseLayer}`}
          viewBox="0 0 1000 850"
          aria-hidden="true"
          style={{ transform: `translateZ(0px)` }}
        >
          {/* GRID */}
          <g className={styles.grid}>
            <path d="M150 120 H810" />
            <path d="M150 170 H810" />
            {/* ... COLOQUE O RESTO DO SEU GRID AQUI ... */}
          </g>

          {/* MÓVEIS E DETALHES INTERNOS */}
          <rect className={styles.furniture} x="395" y="130" width="185" height="82" rx="8" />
          <rect className={styles.furniture} x="165" y="445" width="165" height="92" rx="8" />
          {/* ... COLOQUE TODO O RESTO DOS MÓVEIS E LINHAS FINAS AQUI ... */}
          
          {/* LINHAS AUXILIARES E PORTAS */}
          <path className={styles.dashed} d="M120 725 H575" />
          <path className={styles.door} d="M575 365 Q650 365 650 440" />
          {/* ... COLOQUE O RESTO AQUI ... */}
        </svg>

        {/* 2. CAMADAS DE VOLUME (O CORPO DO ACRÍLICO) */}
        {[...Array(wallLayers)].map((_, index) => (
          <svg
            key={index}
            className={`${styles.plan} ${styles.volumeLayer}`}
            viewBox="0 0 1000 850"
            aria-hidden="true"
            style={{ 
              transform: `translateZ(${(index + 1) * layerSpacing}px)`,
            }}
          >
            {/* APENAS AS PAREDES */}
            <path className={styles.wallVolume} d="M120 90 H640 V210 H825 V715 H575 V785 H120 Z" />
            <path className={styles.wallVolume} d="M120 405 H575 V785" />
            <path className={styles.wallVolume} d="M575 210 V715" />
            <path className={styles.wallVolume} d="M120 555 H575" />
            <path className={styles.wallVolume} d="M345 90 V405" />
            <path className={styles.wallVolume} d="M345 250 H640" />
            <path className={styles.wallVolume} d="M575 415 H825" />
            <path className={styles.wallVolume} d="M710 415 V715" />
            <path className={styles.wallVolume} d="M575 590 H825" />
          </svg>
        ))}

        {/* 3. CAMADA DO TOPO (O BRILHO) */}
        <svg
          className={`${styles.plan} ${styles.topLayer}`}
          viewBox="0 0 1000 850"
          aria-hidden="true"
          style={{ transform: `translateZ(${(wallLayers + 1) * layerSpacing}px)` }}
        >
          {/* APENAS AS PAREDES NOVAMENTE, MAS COM A CLASSE DE BRILHO */}
          <path className={styles.wallTop} d="M120 90 H640 V210 H825 V715 H575 V785 H120 Z" />
          <path className={styles.wallTop} d="M120 405 H575 V785" />
          <path className={styles.wallTop} d="M575 210 V715" />
          <path className={styles.wallTop} d="M120 555 H575" />
          <path className={styles.wallTop} d="M345 90 V405" />
          <path className={styles.wallTop} d="M345 250 H640" />
          <path className={styles.wallTop} d="M575 415 H825" />
          <path className={styles.wallTop} d="M710 415 V715" />
          <path className={styles.wallTop} d="M575 590 H825" />
          
          {/* PONTOS DE DESTAQUE NO TOPO (bolinhas) */}
          <circle className={styles.dot} cx="120" cy="90" r="4" />
          <circle className={styles.dot} cx="640" cy="90" r="4" />
          <circle className={styles.dot} cx="825" cy="715" r="4" />
          <circle className={styles.dot} cx="120" cy="785" r="4" />
          <circle className={styles.dot} cx="575" cy="415" r="3.5" />
          <circle className={styles.dot} cx="575" cy="715" r="3.5" />
        </svg>

      </div>

      <div className={styles.copy}>
        {/* SEU TEXTO MANTIDO IGUAL */}
        <span>SELEÇÃO E ENGENHARIA</span>
        <h2>Projetos que<br />transformam espaços<br />em experiências.</h2>
        <i />
      </div>
    </section>
  );
}
