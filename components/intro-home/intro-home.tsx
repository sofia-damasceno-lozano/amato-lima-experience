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

    // Seleciona o caminho que fará o traçado luminoso
    const paths = svg.querySelectorAll<SVGPathElement>(".draw");

    paths.forEach((path) => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;
      path.style.opacity = "0";
    });

    function updateDrawing() {
      const rect = section.getBoundingClientRect();
      // Mantém a excelente mecânica de progressão baseada no scroll que você criou
      const progress = Math.min(
        Math.max(-rect.top / (window.innerHeight * 1.8), 0),
        1
      );

      paths.forEach((path, index) => {
        const length = path.getTotalLength();
        
        // Distribui o desenho ao longo do scroll de forma suave
        const start = index * 0.05;
        const end = Math.min(start + 0.6, 1);

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
        {/* Substituímos o viewBox para 0 0 354 332, que é o tamanho real do vetor do seu Figma */}
        <svg
          ref={svgRef}
          className={styles.monogramSvg}
          viewBox="0 0 354 332"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* O SEGREDO: Usamos a geometria exata do Figma como o contorno luminoso */}
          <path
            className={`${styles.glowLine} draw`}
            d="M152.5 0H354V115.5H319V267.5H251.5V297H319V176.5H354V297C354 316.33 338.33 332 319 332H251.5V297V267.5H251.5V115.5C251.5 96.17 235.83 80.5 216.5 80.5H152.5V0ZM152.5 80.5C96.17 80.5 50.5 126.17 50.5 182.5C50.5 238.83 96.17 284.5 152.5 284.5C186.23 284.5 215.79 268.12 233.91 243L205.65 224.22C193.57 240.97 174.32 251.5 152.5 251.5C114.39 251.5 83.5 220.61 83.5 182.5C83.5 144.39 114.39 113.5 152.5 113.5H216.5V182.5C216.5 189.4 210.9 195 204 195H152.5C145.6 195 140 189.4 140 182.5V145.5H107V182.5C107 207.35 127.15 227.5 152.5 227.5H204C228.85 227.5 249 207.35 249 182.5V113.5H216.5C216.5 113.5 216.5 113.5 216.5 113.5ZM0 50.5H33L66 182.5V238.83C66 290.44 24.31 332-27.3 332H-33V299H-27.3C5.95 299 33 271.95 33 238.83V182.5L0 50.5Z"
          />
        </svg>
      </div>
    </section>
  );
}
