"use client";

import { useEffect, useRef } from "react";
import styles from "./intro-home.module.css";

export default function IntroHome() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const revealRef = useRef<SVGRectElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const svg = svgRef.current;
    const reveal = revealRef.current;

    if (!section || !svg || !reveal) return;

    const drawItems =
      svg.querySelectorAll<SVGGeometryElement>(".draw");

    drawItems.forEach((item) => {
      const length = item.getTotalLength();

      item.style.strokeDasharray = `${length}`;
      item.style.strokeDashoffset = `${length}`;
      item.style.opacity = "0";
    });

    function updateDrawing() {
      const rect = section.getBoundingClientRect();

      const progress = Math.min(
        Math.max(
          -rect.top / (window.innerHeight * 2.4),
          0
        ),
        1
      );

      svg.style.setProperty(
        "--progress",
        `${progress}`
      );

      drawItems.forEach((item, index) => {
        const length = item.getTotalLength();

        const start = index * 0.03;
        const end = start + 0.45;

        const itemProgress = Math.min(
          Math.max(
            (progress - start) / (end - start),
            0
          ),
          1
        );

        item.style.strokeDashoffset = `${
          length * (1 - itemProgress)
        }`;

        item.style.opacity =
          itemProgress > 0 ? "1" : "0";
      });

      const letterProgress = Math.min(
        Math.max((progress - 0.2) / 0.55, 0),
        1
      );

      reveal.setAttribute(
        "width",
        `${letterProgress * 170}`
      );
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
          className={styles.blueprint}
          viewBox="0 0 240 240"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <clipPath id="letterReveal">
              <rect
                ref={revealRef}
                x="30"
                y="52"
                width="0"
                height="120"
              />
            </clipPath>
          </defs>

          {/* moldura */}
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

          {/* detalhes */}
          <line
            className="draw tech"
            x1="62"
            y1="64"
            x2="78"
            y2="80"
          />

          <line
            className="draw tech"
            x1="176"
            y1="64"
            x2="160"
            y2="80"
          />

          <line
            className="draw tech"
            x1="162"
            y1="176"
            x2="178"
            y2="192"
          />

          {/* letras aramaicas */}
          <g clipPath="url(#letterReveal)">
            <text
              className={`${styles.aramaicLetter} ${styles.letterT}`}
              x="88"
              y="126"
            >
              𐡕
            </text>

            <text
              className={`${styles.aramaicLetter} ${styles.letterR}`}
              x="130"
              y="116"
            >
              𐡓
            </text>

            <text
              className={`${styles.aramaicLetter} ${styles.letterM}`}
              x="122"
              y="126"
            >
              𐡌
            </text>
          </g>

          {/* textos */}
          <text
            className={styles.text}
            x="86"
            y="30"
          >
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

          <text
            className={styles.text}
            x="96"
            y="220"
          >
            Depth: 15.0
          </text>

          <text
            className={styles.smallText}
            x="58"
            y="58"
          >
            R 25.4
          </text>

          <text
            className={styles.smallText}
            x="154"
            y="58"
          >
            R 3
          </text>

          <text
            className={styles.smallText}
            x="126"
            y="186"
          >
            AS-IS PROFILE
          </text>

          <text
            className={styles.smallText}
            x="126"
            y="194"
          >
            SURFACE ROUGHNESS N7
          </text>
        </svg>
      </div>
    </section>
  );
}
