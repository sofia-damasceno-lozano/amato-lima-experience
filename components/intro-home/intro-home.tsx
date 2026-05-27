"use client";

import { useEffect, useRef } from "react";
import styles from "./intro-home.module.css";

export default function IntroHome() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const svg = svgRef.current;

    if (!section || !svg) return;

    const drawItems = svg.querySelectorAll<SVGGeometryElement>(".draw");

    drawItems.forEach((item) => {
      const length = item.getTotalLength();
      item.style.strokeDasharray = `${length}`;
      item.style.strokeDashoffset = `${length}`;
      item.style.opacity = "0";
    });

    function updateDrawing() {
      const rect = section.getBoundingClientRect();
      const progress = Math.min(
        Math.max(-rect.top / (window.innerHeight * 2.8), 0),
        1
      );

      svg.style.setProperty("--progress", `${progress}`);

      drawItems.forEach((item, index) => {
        const length = item.getTotalLength();

        const start = index * 0.01;
        const end = start + 0.48;

        const itemProgress = Math.min(
          Math.max((progress - start) / (end - start), 0),
          1
        );

        item.style.strokeDashoffset = `${length * (1 - itemProgress)}`;
        item.style.opacity = itemProgress > 0 ? "1" : "0";
      });
    }

    updateDrawing();

    window.addEventListener("scroll", updateDrawing, { passive: true });
    window.addEventListener("resize", updateDrawing);

    return () => {
      window.removeEventListener("scroll", updateDrawing);
      window.removeEventListener("resize", updateDrawing);
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.intro}>
      <div className={styles.fixedLayer}>
        <svg
          ref={svgRef}
          className={styles.blueprint}
          viewBox="0 0 240 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Moldura técnica */}
          <rect className="draw frame" x="34" y="34" width="172" height="172" />

          {/* Cotas */}
          <line className="draw measure" x1="34" y1="22" x2="206" y2="22" />
          <line className="draw measure" x1="34" y1="18" x2="34" y2="26" />
          <line className="draw measure" x1="206" y1="18" x2="206" y2="26" />

          <line className="draw measure" x1="22" y1="34" x2="22" y2="206" />
          <line className="draw measure" x1="18" y1="34" x2="26" y2="34" />
          <line className="draw measure" x1="18" y1="206" x2="26" y2="206" />

          <line className="draw measure" x1="70" y1="218" x2="206" y2="218" />
          <line className="draw measure" x1="70" y1="214" x2="70" y2="222" />
          <line className="draw measure" x1="206" y1="214" x2="206" y2="222" />

          {/* =======================
              MONOGRAMA REAL APROXIMADO
              U + D + L
          ======================= */}

          {/* U externo */}
          <path
            className="draw logo"
            d="M72 54
               L64 145
               C61 178 80 197 111 198
               C141 199 162 178 164 148
               L166 74"
          />

          {/* U interno */}
          <path
            className="draw logo"
            d="M91 60
               L84 143
               C82 163 94 176 112 176
               C130 176 144 162 145 143
               L147 83"
          />

          {/* Corte lateral esquerdo do U */}
          <path
            className="draw construction"
            d="M72 54 L91 60"
          />

          {/* D externo */}
          <path
            className="draw logo"
            d="M105 72
               C136 71 166 95 167 133
               C168 171 141 197 107 198"
          />

          {/* D interno */}
          <path
            className="draw logo"
            d="M119 88
               C141 92 153 110 153 134
               C153 157 140 172 120 176"
          />

          {/* Curva interna diagonal do D */}
          <path
            className="draw logo"
            d="M92 74
               C119 82 141 103 148 130"
          />

          {/* L externo */}
          <path
            className="draw logo"
            d="M151 55
               H187
               C196 55 201 61 201 70
               V179
               H169"
          />

          {/* L interno */}
          <path
            className="draw logo"
            d="M166 70
               H184
               V164
               H169"
          />

          {/* Base inferior do L */}
          <path
            className="draw logo"
            d="M169 179
               L201 179"
          />

          {/* Chanfros do L */}
          <line className="draw bevel" x1="151" y1="55" x2="166" y2="70" />
          <line className="draw bevel" x1="187" y1="55" x2="201" y2="70" />
          <line className="draw bevel" x1="184" y1="164" x2="201" y2="179" />

          {/* Linhas técnicas de cálculo */}
          <line className="draw construction" x1="72" y1="54" x2="52" y2="38" />
          <line className="draw construction" x1="105" y1="72" x2="137" y2="48" />
          <line className="draw construction" x1="166" y1="74" x2="198" y2="44" />
          <line className="draw construction" x1="164" y1="148" x2="198" y2="148" />
          <line className="draw construction" x1="107" y1="198" x2="190" y2="198" />
          <line className="draw construction" x1="148" y1="130" x2="190" y2="92" />

          {/* Setas técnicas */}
          <path className="draw construction" d="M198 148 L191 144 M198 148 L191 152" />
          <path className="draw construction" d="M190 92 L184 90 M190 92 L188 98" />

          {/* Textos */}
          <text className={styles.text} x="88" y="18">
            Overall: 200 x 200
          </text>

          <text className={styles.text} x="-166" y="16" transform="rotate(-90)">
            Overall: 200 x 200
          </text>

          <text className={styles.text} x="92" y="228">
            Depth: 15.0
          </text>

          <text className={styles.smallText} x="76" y="48">
            R 25.4
          </text>

          <text className={styles.smallText} x="165" y="90">
            R 25.4
          </text>

          <text className={styles.smallText} x="200" y="144">
            8.0
          </text>

          <text className={styles.smallText} x="130" y="190">
            AS-IS PROFILE
          </text>

          <text className={styles.smallText} x="130" y="198">
            SURFACE ROUGHNESS N7
          </text>
        </svg>
      </div>
    </section>
  );
}
