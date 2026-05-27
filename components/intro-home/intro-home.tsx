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
        const start = index * 0.018;
        const end = start + 0.5;

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
          {/* linhas técnicas suaves */}
          <rect className="draw guide" x="52" y="58" width="136" height="124" />
          <line className="draw guide" x1="52" y1="48" x2="188" y2="48" />
          <line className="draw guide" x1="52" y1="192" x2="188" y2="192" />

          {/* letra T / coluna esquerda inclinada */}
          <path
            className="draw logo thick"
            d="M88 73
               L77 146
               C74 168 86 183 106 184"
          />

          {/* base curva inferior esquerda */}
          <path
            className="draw logo thick"
            d="M106 184
               C122 184 134 173 137 155"
          />

          {/* R / curva central externa */}
          <path
            className="draw logo thick"
            d="M105 91
               C131 87 153 105 154 132
               C155 160 135 182 108 184"
          />

          {/* R / curva central interna */}
          <path
            className="draw logo medium"
            d="M112 106
               C130 107 142 119 142 136
               C142 153 130 165 113 166"
          />

          {/* corte diagonal interno do R */}
          <path
            className="draw logo medium"
            d="M95 99
               C119 108 136 126 143 149"
          />

          {/* M / arco superior direito */}
          <path
            className="draw logo thick"
            d="M137 76
               H174
               C184 76 190 83 190 94
               V169"
          />

          {/* M / perna interna direita */}
          <path
            className="draw logo thick"
            d="M159 94
               V169"
          />

          {/* base inferior direita */}
          <path
            className="draw logo thick"
            d="M159 169
               H190"
          />

          {/* ligação superior entre R e M */}
          <path
            className="draw logo medium"
            d="M123 91
               C133 82 143 77 158 76"
          />

          {/* detalhes técnicos */}
          <line className="draw tech" x1="88" y1="73" x2="72" y2="58" />
          <line className="draw tech" x1="137" y1="76" x2="154" y2="58" />
          <line className="draw tech" x1="190" y1="169" x2="174" y2="184" />
          <line className="draw tech" x1="137" y1="155" x2="162" y2="180" />

          <text className={styles.text} x="83" y="43">
            Overall: 200 x 200
          </text>
          <text className={styles.smallText} x="68" y="56">
            R 25.4
          </text>
          <text className={styles.smallText} x="158" y="70">
            R 3
          </text>
          <text className={styles.smallText} x="136" y="194">
            AS-IS PROFILE
          </text>
        </svg>
      </div>
    </section>
  );
}
