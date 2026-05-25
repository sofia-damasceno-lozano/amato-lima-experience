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
            {Array.from({ length: 16 }).map((_, i) => (
              <path
                key={`v-${i}`}
                d={`M${140 + i * 45} 90 V785`}
              />
            ))}

            {Array.from({ length: 15 }).map((_, i) => (
              <path
                key={`h-${i}`}
                d={`M120 ${110 + i * 45} H825`}
              />
            ))}
          </g>

          {/* PROFUNDIDADE 3D */}
          <g className={styles.depth}>
            <path d="M120 90 H640 V210 H825 V715 H575 V785 H120 Z" />
            <path d="M120 405 H575 V785" />
            <path d="M575 210 V715" />

            <path d="M120 555 H575" />
            <path d="M345 90 V405" />
            <path d="M345 250 H640" />
            <path d="M575 415 H825" />
            <path d="M710 415 V715" />
            <path d="M575 590 H825" />
          </g>

          {/* PAREDES */}
          <path
            className={styles.wall}
            d="M120 90 H640 V210 H825 V715 H575 V785 H120 Z"
          />
          <path className={styles.wall} d="M120 405 H575 V785" />
          <path className={styles.wall} d="M575 210 V715" />

          <path className={styles.wall} d="M120 555 H575" />
          <path className={styles.wall} d="M345 90 V405" />
          <path className={styles.wall} d="M345 250 H640" />
          <path className={styles.wall} d="M575 415 H825" />
          <path className={styles.wall} d="M710 415 V715" />
          <path className={styles.wall} d="M575 590 H825" />

          {/* LINHAS FINAS */}
          <path className={styles.thin} d="M145 115 H615 V190" />
          <path className={styles.thin} d="M150 430 H545" />
          <path className={styles.thin} d="M150 580 H545" />
          <path className={styles.thin} d="M600 235 H800 V390 H600 Z" />
          <path className={styles.thin} d="M735 435 H805 V565 H735 Z" />
          <path className={styles.thin} d="M735 610 H805 V695 H735 Z" />

          {/* MOBÍLIA */}
          <rect
            className={styles.furniture}
            x="395"
            y="130"
            width="185"
            height="82"
            rx="8"
          />

          <rect
            className={styles.furniture}
            x="165"
            y="445"
            width="165"
            height="92"
            rx="8"
          />

          <rect
            className={styles.furniture}
            x="745"
            y="455"
            width="72"
            height="92"
            rx="7"
          />

          <rect
            className={styles.furniture}
            x="180"
            y="655"
            width="245"
            height="52"
            rx="8"
          />

          <rect
            className={styles.furniture}
            x="275"
            y="610"
            width="92"
            height="42"
            rx="5"
          />

          <circle
            className={styles.furniture}
            cx="170"
            cy="610"
            r="28"
          />

          <circle
            className={styles.furniture}
            cx="170"
            cy="675"
            r="22"
          />

          <rect
            className={styles.furniture}
            x="610"
            y="270"
            width="58"
            height="270"
            rx="4"
          />

          <rect
            className={styles.furniture}
            x="680"
            y="470"
            width="92"
            height="170"
            rx="5"
          />

          {/* DETALHES */}
          <circle className={styles.detail} cx="640" cy="320" r="10" />
          <circle className={styles.detail} cx="640" cy="350" r="10" />
          <circle className={styles.detail} cx="640" cy="380" r="10" />
          <circle className={styles.detail} cx="640" cy="410" r="10" />

          <rect
            className={styles.furniture}
            x="155"
            y="135"
            width="74"
            height="96"
            rx="4"
          />

          <circle className={styles.detail} cx="192" cy="190" r="17" />

          <rect
            className={styles.detail}
            x="245"
            y="135"
            width="58"
            height="42"
            rx="4"
          />

          <rect
            className={styles.furniture}
            x="735"
            y="615"
            width="78"
            height="78"
            rx="4"
          />

          <circle className={styles.detail} cx="774" cy="655" r="16" />

          {/* PORTAS */}
          <path className={styles.door} d="M575 365 Q650 365 650 440" />
          <path className={styles.door} d="M345 360 Q420 360 420 405" />
          <path className={styles.door} d="M575 715 Q640 715 640 780" />
          <path className={styles.door} d="M710 590 Q770 590 770 650" />
          <path className={styles.door} d="M120 555 Q185 555 185 620" />

          {/* GUIAS */}
          <path className={styles.dashed} d="M120 725 H575" />
          <path className={styles.dashed} d="M575 210 H825" />
          <path className={styles.dashed} d="M100 90 H860" />
          <path className={styles.dashed} d="M90 785 H610" />

          {/* PONTOS */}
          <circle className={styles.dot} cx="120" cy="90" r="4" />
          <circle className={styles.dot} cx="640" cy="90" r="4" />
          <circle className={styles.dot} cx="825" cy="715" r="4" />
          <circle className={styles.dot} cx="120" cy="785" r="4" />
          <circle className={styles.dot} cx="575" cy="415" r="3.5" />
          <circle className={styles.dot} cx="575" cy="715" r="3.5" />
        </svg>
      </div>

      <div className={styles.copy}>
        <span>SELEÇÃO E ENGENHARIA</span>

        <h2>
          Projetos que
          <br />
          transformam espaços
          <br />
          em experiências
        </h2>

        <i />
      </div>
    </section>
  );
}
