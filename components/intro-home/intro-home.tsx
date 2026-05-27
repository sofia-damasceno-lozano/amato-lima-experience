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

    const paths =
      svg.querySelectorAll<SVGPathElement>("path");

    paths.forEach((path) => {
      const length = path.getTotalLength();

      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;
    });

    function updateDrawing() {
      const rect = section.getBoundingClientRect();

      const progress = Math.min(
        Math.max(
          -rect.top / (window.innerHeight * 1.8),
          0
        ),
        1
      );

      paths.forEach((path, index) => {
        const length = path.getTotalLength();

        const start = index * 0.08;
        const end = start + 0.35;

        const localProgress = Math.min(
          Math.max(
            (progress - start) / (end - start),
            0
          ),
          1
        );

        path.style.strokeDashoffset = `${
          length * (1 - localProgress)
        }`;
      });
    }

    updateDrawing();

    window.addEventListener(
      "scroll",
      updateDrawing,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      updateDrawing
    );

    return () => {
      window.removeEventListener(
        "scroll",
        updateDrawing
      );

      window.removeEventListener(
        "resize",
        updateDrawing
      );
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={styles.intro}
    >
      <div className={styles.fixedLayer}>
        <svg
          ref={svgRef}
          className={styles.monogramSvg}
          viewBox="0 0 240 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* haste esquerda */}
          <path
            d="M78 69 
               L68 151 
               C65 178 82 194 107 195"
            className={styles.logoStroke}
          />

          {/* curva externa */}
          <path
            d="M105 91 
               C137 85 165 109 166 142 
               C167 176 143 198 108 195"
            className={styles.logoStroke}
          />

          {/* curva interna */}
          <path
            d="M113 106 
               C134 106 149 121 149 142 
               C149 163 135 178 114 179"
            className={styles.logoStroke}
          />

          {/* ligação superior */}
          <path
            d="M126 92 
               C137 78 153 70 174 70"
            className={styles.logoStroke}
          />

          {/* estrutura direita */}
          <path
            d="M154 70 
               H184 
               C196 70 203 78 203 91 
               V177"
            className={styles.logoStroke}
          />

          {/* haste interna direita */}
          <path
            d="M171 92 
               V177"
            className={styles.logoStroke}
          />

          {/* base direita */}
          <path
            d="M171 177 
               H203"
            className={styles.logoStroke}
          />
        </svg>
      </div>
    </section>
  );
}
