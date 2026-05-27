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
    });

    function updateDrawing() {
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const scrollTotal = window.innerHeight * 2.4;
      const progress = Math.min(Math.max(-rect.top / scrollTotal, 0), 1);

      drawItems.forEach((item, index) => {
        const length = item.getTotalLength();

        const start = index * 0.018;
        const end = start + 0.42;

        const itemProgress = Math.min(
          Math.max((progress - start) / (end - start), 0),
          1
        );

        item.style.strokeDashoffset = `${length * (1 - itemProgress)}`;
        item.style.opacity = itemProgress > 0 ? "1" : "0";
      });

      svg.style.setProperty("--progress", `${progress}`);
    }

    updateDrawing();
    window.addEventListener("scroll", updateDrawing, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateDrawing);
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.intro}>
      <div className={styles.sticky}>
        <svg
          ref={svgRef}
          className={styles.blueprint}
          viewBox="0 0 240 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* grid */}
          {Array.from({ length: 25 }).map((_, i) => (
            <line
              key={`v-${i}`}
              className={styles.gridLine}
              x1={i * 10}
              y1="0"
              x2={i * 10}
              y2="240"
            />
          ))}

          {Array.from({ length: 25 }).map((_, i) => (
            <line
              key={`h-${i}`}
              className={styles.gridLine}
              x1="0"
              y1={i * 10}
              x2="240"
              y2={i * 10}
            />
          ))}

          {/* moldura */}
          <rect className="draw" x="28" y="24" width="184" height="190" />

          {/* cotas */}
          <line className="draw" x1="28" y1="14" x2="212" y2="14" />
          <line className="draw" x1="16" y1="24" x2="16" y2="214" />
          <line className="draw" x1="42" y1="224" x2="198" y2="224" />

          {/* monograma aproximado técnico */}
          <path
            className="draw"
            d="M72 157 C51 142 50 90 75 63 C94 43 127 47 142 72 C162 105 145 153 103 163"
          />

          <path
            className="draw"
            d="M75 158 C89 153 93 139 93 120 L93 61"
          />

          <path
            className="draw"
            d="M95 64 C120 74 135 94 135 119 C135 145 119 163 96 169"
          />

          <path
            className="draw"
            d="M116 67 H168 C178 67 185 75 185 85 V157"
          />

          <path
            className="draw"
            d="M158 83 V157 H187"
          />

          {/* detalhes técnicos */}
          <path className="draw" d="M82 62 L52 30" />
          <path className="draw" d="M151 67 L179 36" />
          <path className="draw" d="M158 157 L185 184" />
          <path className="draw" d="M104 48 H178" />
          <path className="draw" d="M105 180 H188" />

          <text className={styles.text} x="84" y="11">
            Overall: 200 x 200
          </text>

          <text className={styles.text} x="35" y="233">
            Depth: 15.0
          </text>

          <text className={styles.smallText} x="73" y="49">
            R 25.4
          </text>

          <text className={styles.smallText} x="102" y="190">
            AS-IS PROFILE
          </text>

          <text className={styles.smallText} x="102" y="198">
            SURFACE ROUGHNESS N7
          </text>
        </svg>
      </div>
    </section>
  );
}
