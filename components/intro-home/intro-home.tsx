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
        Math.max(-rect.top / (window.innerHeight * 2.5), 0),
        1
      );

      svg.style.setProperty("--progress", `${progress}`);

      drawItems.forEach((item, index) => {
        const length = item.getTotalLength();

        const start = index * 0.015;
        const end = start + 0.42;

        const itemProgress = Math.min(
          Math.max((progress - start) / (end - start), 0),
          1
        );

        item.style.strokeDashoffset = `${length * (1 - itemProgress)}`;
        item.style.opacity = itemProgress > 0 ? "1" : "0";
      });
    }

    updateDrawing();

    window.addEventListener("scroll", updateDrawing, {
      passive: true,
    });

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
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* moldura técnica */}
          <rect
            className="draw guide"
            x="42"
            y="48"
            width="156"
            height="144"
          />

          {/* linhas técnicas */}
          <line
            className="draw guide"
            x1="42"
            y1="36"
            x2="198"
            y2="36"
          />

          <line
            className="draw guide"
            x1="42"
            y1="206"
            x2="198"
            y2="206"
          />

          <line
            className="draw guide"
            x1="28"
            y1="48"
            x2="28"
            y2="192"
          />

          {/* setas */}
          <line className="draw tech" x1="62" y1="64" x2="78" y2="80" />
          <line className="draw tech" x1="176" y1="64" x2="160" y2="80" />

          <line className="draw tech" x1="162" y1="176" x2="178" y2="192" />

          {/* aramaico */}
          <text
            className={`${styles.letter} draw`}
            x="78"
            y="128"
          >
            𐡌
          </text>

          <text
            className={`${styles.letter} draw`}
            x="118"
            y="128"
          >
            𐡓
          </text>

          <text
            className={`${styles.letter} draw`}
            x="154"
            y="128"
          >
            𐡕
          </text>

          {/* textos técnicos */}
          <text className={styles.text} x="86" y="30">
            Overall: 200 x 200
          </text>

          <text
            className={styles.text}
            x="-156"
            y="18"
            transform="rotate(-90)"
          >
            Overall: 200 x 200
          </text>

          <text className={styles.text} x="96" y="220">
            Depth: 15.0
          </text>

          <text className={styles.smallText} x="58" y="58">
            R 25.4
          </text>

          <text className={styles.smallText} x="154" y="58">
            R 3
          </text>

          <text className={styles.smallText} x="126" y="186">
            AS-IS PROFILE
          </text>

          <text className={styles.smallText} x="126" y="194">
            SURFACE ROUGHNESS N7
          </text>
        </svg>
      </div>
    </section>
  );
}
