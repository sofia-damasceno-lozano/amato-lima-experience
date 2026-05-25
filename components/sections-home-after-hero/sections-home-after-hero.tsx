"use client";

import styles from "./sections-home-after-hero.module.css";

export default function SectionsHomeAfterHero() {
  return (
    <section className={styles.section}>
      <div className={styles.bg} />

      <div className={styles.planWrap}>
        <svg
          className={styles.plan}
          viewBox="0 0 1000 850"
          aria-hidden="true"
        >
          {/* GRID */}
          <g className={styles.grid}>
            {/* Linhas horizontais */}
            {Array.from({ length: 13 }).map((_, i) => (
              <path key={`h-${i}`} d={`M150 ${120 + i * 50} H810`} />
            ))}
            {/* Linhas verticais */}
            {Array.from({ length: 13 }).map((_, i) => (
              <path key={`v-${i}`} d={`M${170 + i * 50} 100 V780`} />
            ))}
          </g>

          {/* PAREDES (Simulando espessura com linhas paralelas) */}
          <g className={styles.wallGroup}>
            {/* Parede Externa */}
            <path className={styles.wall} d="M120 90 H640 V210 H825 V715 H575 V785 H120 Z" />
            <path className={styles.wall} d="M120 405 H575 V785" />
            <path className={styles.wall} d="M575 210 V715" />
            {/* Paredes Internas */}
            <path className={styles.wall} d="M120 555 H575" />
            <path className={styles.wall} d="M345 90 V405" />
            <path className={styles.wall} d="M345 250 H640" />
            <path className={styles.wall} d="M575 415 H825" />
            <path className={styles.wall} d="M710 415 V715" />
            <path className={styles.wall} d="M575 590 H825" />
          </g>

          {/* LINHAS INTERNAS E GUIAS */}
          <path className={styles.thin} d="M145 115 H615 V190" />
          <path className={styles.thin} d="M150 430 H545" />
          <path className={styles.thin} d="M150 580 H545" />
          <path className={styles.thin} d="M600 235 H800 V390 H600 Z" />
          <path className={styles.thin} d="M735 435 H805 V565 H735 Z" />
          <path className={styles.thin} d="M735 610 H805 V695 H735 Z" />

          {/* MÓVEIS DETALHADOS */}
          <g className={styles.furniture}>
            {/* Cama Casal + Travesseiros */}
            <rect x="395" y="130" width="185" height="140" rx="4" />
            <rect x="410" y="145" width="60" height="35" rx="3" />
            <rect x="500" y="145" width="60" height="35" rx="3" />
            <path d="M395 195 H580" /> {/* Linha do edredom */}

            {/* Sofá L com almofadas */}
            <path d="M165 445 H380 V580 H320 V495 H165 Z" strokeLinejoin="round" />
            <rect x="230" y="520" width="60" height="35" rx="2" /> {/* Mesa de centro */}

            {/* Mesa de Jantar (Ilha) + Cadeiras */}
            <rect x="610" y="270" width="58" height="270" rx="4" />
            {/* Cadeiras Esquerda */}
            <rect x="590" y="300" width="15" height="35" rx="2" />
            <rect x="590" y="370" width="15" height="35" rx="2" />
            <rect x="590" y="440" width="15" height="35" rx="2" />
            {/* Cadeiras Direita */}
            <rect x="673" y="300" width="15" height="35" rx="2" />
            <rect x="673" y="370" width="15" height="35" rx="2" />
            <rect x="673" y="440" width="15" height="35" rx="2" />

            {/* Balcão TV */}
            <rect x="180" y="655" width="245" height="52" rx="4" />

            {/* Planta detalhada (Sobreposição de formas) */}
            <g transform="translate(170, 610)">
              <circle cx="0" cy="0" r="18" />
              <path d="M0 -22 L4 -10 L16 -16 L8 -4 L22 0 L8 4 L16 16 L4 10 L0 22 L-4 10 L-16 16 L-8 4 L-22 0 L-8 -4 L-16 -16 L-4 -10 Z" />
            </g>
          </g>

          {/* COOKTOP */}
          <g className={styles.detail}>
            <circle cx="640" cy="320" r="8" />
            <circle cx="640" cy="350" r="8" />
            <circle cx="640" cy="380" r="8" />
            <circle cx="640" cy="410" r="8" />
          </g>

          {/* BANHEIROS */}
          <g className={styles.furniture}>
            {/* Box e Pia */}
            <rect x="155" y="135" width="74" height="96" rx="4" />
            <circle cx="192" cy="190" r="14" />
            <rect x="245" y="135" width="58" height="42" rx="4" />
            {/* Lavabo */}
            <rect x="735" y="615" width="78" height="78" rx="4" />
            <circle cx="774" cy="655" r="14" />
          </g>

          {/* PORTAS */}
          <g className={styles.door}>
            <path d="M575 365 Q650 365 650 440" />
            <path d="M345 360 Q420 360 420 405" />
            <path d="M575 715 Q640 715 640 780" />
            <path d="M710 590 Q770 590 770 650" />
            <path d="M120 555 Q185 555 185 620" />
          </g>

          {/* PONTOS DE DESTAQUE */}
          <circle className={styles.dot} cx="120" cy="90" r="5" />
          <circle className={styles.dot} cx="640" cy="90" r="5" />
          <circle className={styles.dot} cx="825" cy="715" r="5" />
          <circle className={styles.dot} cx="120" cy="785" r="5" />
        </svg>
      </div>

      <div className={styles.copy}>
        <span>SELEÇÃO E ENGENHARIA</span>
        <h2>
          Projetos que<br />transformam espaços<br />em experiências
        </h2>
        <i />
      </div>
    </section>
  );
}
