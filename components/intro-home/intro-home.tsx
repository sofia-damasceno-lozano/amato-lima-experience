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

    const paths = svg.querySelectorAll<SVGPathElement>(".draw");

    paths.forEach((path) => {
      const length = path.getTotalLength();

      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;
      path.style.opacity = "0";
    });

    function updateDrawing() {
      const rect = section.getBoundingClientRect();

      const progress = Math.min(
        Math.max(-rect.top / (window.innerHeight * 1.8), 0),
        1
      );

      paths.forEach((path, index) => {
        const length = path.getTotalLength();

        const start = index * 0.08;
        const end = start + 0.45;

        const localProgress = Math.min(
          Math.max((progress - start) / (end - start), 0),
          1
        );

        path.style.strokeDashoffset = `${length * (1 - localProgress)}`;
        path.style.opacity = localProgress > 0 ? "1" : "0";
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
          className={styles.monogramSvg}
          viewBox="0 0 240 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* linha esquerda */}
          <path
            className={`${styles.glowLine} draw`}
            d="M82 72 
               L72 151 
               C69 178 86 196 111 196 
               C135 196 153 178 155 151"
          />

          {/* curva central externa */}
          <path
            className={`${styles.glowLine} draw`}
            d="M105 92
               C137 84 169 108 170 142
               C171 177 145 200 109 198"
          />

          {/* curva central interna */}
          <path
            className={`${styles.glowLine} draw`}
            d="M116 108
               C137 110 151 123 151 143
               C151 164 138 178 118 181"
          />

          {/* ligação superior */}
          <path
            className={`${styles.glowLine} draw`}
            d="M126 92
               C137 80 153 73 174 73"
          />

          {/* forma direita contínua */}
          <path
            className={`${styles.glowLine} draw`}
            d="M154 73
               H184
               C197 73 205 82 205 95
               V177
               H171
               V96"
          />
        </svg>
      </div>
    </section>
  );
}
