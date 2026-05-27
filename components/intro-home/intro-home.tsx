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
      const progress = Math.min(Math.max(-rect.top / (window.innerHeight * 2.8), 0), 1);

      svg.style.setProperty("--progress", `${progress}`);

      drawItems.forEach((item, index) => {
        const length = item.getTotalLength();
        const start = index * 0.012;
        const end = start + 0.45;

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
          <rect className="draw frame" x="32" y="30" width="176" height="178" />

          {/* Cotas principais */}
          <line className="draw measure" x1="32" y1="18" x2="208" y2="18" />
          <line className="draw measure" x1="32" y1="14" x2="32" y2="24" />
          <line className="draw measure" x1="208" y1="14" x2="208" y2="24" />

          <line className="draw measure" x1="20" y1="30" x2="20" y2="208" />
          <line className="draw measure" x1="16" y1="30" x2="26" y2="30" />
          <line className="draw measure" x1="16" y1="208" x2="26" y2="208" />

          <line className="draw measure" x1="70" y1="222" x2="208" y2="222" />
          <line className="draw measure" x1="70" y1="217" x2="70" y2="227" />
          <line className="draw measure" x1="208" y1="217" x2="208" y2="227" />

          {/* Monograma técnico: U / D / L */}
          <path
            className="draw main"
            d="M70 48
               L70 151
               C70 177 88 192 113 192
               C138 192 154 176 154 151
               L154 84
               C154 63 141 48 122 48"
          />

          <path
            className="draw main"
            d="M84 56
               L84 150
               C84 165 95 176 111 176
               C127 176 140 164 140 148
               L140 86
               C140 72 133 62 122 58"
          />

          <path
            className="draw main"
            d="M104 52
               C137 52 164 79 164 120
               C164 162 137 190 103 190"
          />

          <path
            className="draw main"
            d="M116 66
               C138 74 151 95 151 121
               C151 149 135 169 112 176"
          />

          <path
            className="draw main"
            d="M148 50
               H188
               V176
               H164"
          />

          <path
            className="draw main"
            d="M162 64
               H176
               V164
               H164"
          />

          {/* Chanfros / profundidade */}
          <line className="draw bevel" x1="70" y1="48" x2="52" y2="34" />
          <line className="draw bevel" x1="84" y1="56" x2="70" y2="48" />
          <line className="draw bevel" x1="148" y1="50" x2="162" y2="64" />
          <line className="draw bevel" x1="188" y1="50" x2="202" y2="64" />
          <line className="draw bevel" x1="188" y1="176" x2="202" y2="190" />
          <line className="draw bevel" x1="164" y1="176" x2="176" y2="164" />

          {/* Linhas de cálculo */}
          <path className="draw construction" d="M122 48 H176" />
          <path className="draw construction" d="M113 192 H188" />
          <path className="draw construction" d="M164 120 H204" />
          <path className="draw construction" d="M154 84 L190 48" />
          <path className="draw construction" d="M151 121 L186 88" />
          <path className="draw construction" d="M140 148 L104 188" />

          {/* Setas simples */}
          <path className="draw arrow" d="M200 120 L194 116 M200 120 L194 124" />
          <path className="draw arrow" d="M186 88 L180 86 M186 88 L184 94" />

          {/* Textos técnicos */}
          <text className={styles.text} x="88" y="14">
            Overall: 200 x 200
          </text>

          <text className={styles.text} x="-165" y="14" transform="rotate(-90)">
            Overall: 200 x 200
          </text>

          <text className={styles.text} x="90" y="232">
            Depth: 15.0
          </text>

          <text className={styles.smallText} x="76" y="44">
            R 25.4
          </text>

          <text className={styles.smallText} x="162" y="82">
            R 25.4
          </text>

          <text className={styles.smallText} x="188" y="116">
            8.0
          </text>

          <text className={styles.smallText} x="136" y="198">
            AS-IS PROFILE
          </text>

          <text className={styles.smallText} x="136" y="206">
            SURFACE ROUGHNESS N7
          </text>
        </svg>
      </div>
    </section>
  );
}
