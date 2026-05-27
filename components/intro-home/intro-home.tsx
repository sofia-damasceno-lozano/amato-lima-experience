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
      const scrollTotal = window.innerHeight * 2.7;

      const progress = Math.min(Math.max(-rect.top / scrollTotal, 0), 1);

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
      <div className={styles.sticky}>
        <svg
          ref={svgRef}
          className={styles.blueprint}
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* moldura principal externa técnica */}
          <rect className="draw" x="15" y="15" width="170" height="170" />

          <rect
            className="draw technicalSecondary"
            x="24.2"
            y="24.2"
            width="151.6"
            height="151.6"
          />

          {/* linhas de cota principais */}
          <line className="draw" x1="15" y1="6" x2="185" y2="6" />
          <line className="draw" x1="6" y1="15" x2="6" y2="185" />
          <line className="draw" x1="51.4" y1="194" x2="185" y2="194" />

          {/* ticks das cotas */}
          <line className="draw" x1="15" y1="3.5" x2="15" y2="8.5" />
          <line className="draw" x1="185" y1="3.5" x2="185" y2="8.5" />

          <line className="draw" x1="3.5" y1="15" x2="8.5" y2="15" />
          <line className="draw" x1="3.5" y1="185" x2="8.5" y2="185" />

          <line className="draw" x1="51.4" y1="191.5" x2="51.4" y2="196.5" />
          <line className="draw" x1="185" y1="191.5" x2="185" y2="196.5" />

          {/* =======================================================
              O CANAL CENTRAL EM 3D
              ======================================================= */}

          {/* Camada 1: fundo do canal */}
          <path
            className="draw canal-base"
            d="M 96.4,24.2 
               L 96.4,60.0 
               A 33.4,33.4 0 0,1 63.0,93.4
               A 19.8,19.8 0 0,0 43.2,113.2
               L 43.2,154.0
               A 19.8,19.8 0 0,0 63.0,173.8
               A 57.4,57.4 0 0,1 120.4,116.4
               L 120.4,64.2
               A 29.4,29.4 0 0,1 149.8,34.8
               L 149.8,154.0"
          />

          {/* Camada 2: laterais internas */}
          <path
            className="draw canal-vinco"
            d="M 96.4,24.2 
               L 96.4,60.0 
               A 33.4,33.4 0 0,1 63.0,93.4
               A 19.8,19.8 0 0,0 43.2,113.2
               L 43.2,154.0
               A 19.8,19.8 0 0,0 63.0,173.8
               A 57.4,57.4 0 0,1 120.4,116.4
               L 120.4,64.2
               A 29.4,29.4 0 0,1 149.8,34.8
               L 149.8,154.0"
          />

          {/* Camada 3: linha central */}
          <path
            className="draw canal-centro"
            d="M 96.4,24.2 
               L 96.4,60.0 
               A 33.4,33.4 0 0,1 63.0,93.4
               A 19.8,19.8 0 0,0 43.2,113.2
               L 43.2,154.0
               A 19.8,19.8 0 0,0 63.0,173.8
               A 57.4,57.4 0 0,1 120.4,116.4
               L 120.4,64.2
               A 29.4,29.4 0 0,1 149.8,34.8
               L 149.8,154.0"
          />

          {/* detalhes de chanfro nas extremidades */}
          <line className="draw" x1="24.2" y1="24.2" x2="43.2" y2="43.2" />
          <line className="draw" x1="141.8" y1="154.0" x2="157.8" y2="170.0" />
          <line className="draw" x1="149.8" y1="154.0" x2="149.8" y2="173.8" />

          {/* linhas técnicas adicionais */}
          <line className="draw" x1="96.4" y1="60" x2="120.4" y2="64.2" />
          <line className="draw" x1="63" y1="93.4" x2="120.4" y2="116.4" />
          <line className="draw" x1="43.2" y1="154" x2="63" y2="173.8" />

          {/* textos de identidade editorial */}
          <text className={styles.text} x="85" y="4">
            Overall: 200 x 200
          </text>

          <text className={styles.text} x="90" y="191">
            Depth: 15.0
          </text>

          <text className={styles.smallText} x="45" y="35">
            R 25.4
          </text>

          <text className={styles.smallText} x="105" y="140">
            AS-IS PROFILE
          </text>

          <text className={styles.smallText} x="105" y="146">
            SURFACE ROUGHNESS N7
          </text>
        </svg>
      </div>
    </section>
  );
}
