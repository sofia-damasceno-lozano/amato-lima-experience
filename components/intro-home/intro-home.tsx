"use client";

import { useEffect, useRef } from "react";
import styles from "./intro-home.module.css";

export default function IntroHome() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const fixedRef = useRef<HTMLDivElement | null>(null);
  const monogramRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const fixedLayer = fixedRef.current;
    const monogramContainer = monogramRef.current;

    if (!section || !fixedLayer || !monogramContainer) return;

    let drawItems: SVGGeometryElement[] = [];
    let svgElement: SVGSVGElement | null = null;

    async function loadMonogram() {
      const response = await fetch("/intro-home/monograma.svg");
      const svgText = await response.text();

      monogramContainer.innerHTML = svgText;

      svgElement = monogramContainer.querySelector("svg");

      if (!svgElement) return;

      svgElement.classList.add(styles.monogramSvg);
      svgElement.setAttribute("fill", "none");

      drawItems = Array.from(
        svgElement.querySelectorAll(
          "path, line, polyline, polygon, rect, circle, ellipse"
        )
      ) as SVGGeometryElement[];

      drawItems.forEach((item) => {
        const length = item.getTotalLength();

        item.style.strokeDasharray = `${length}`;
        item.style.strokeDashoffset = `${length}`;
        item.style.opacity = "0";
        item.style.fill = "none";
      });

      updateDrawing();
    }

    function updateDrawing() {
      const rect = section.getBoundingClientRect();
      const scrollTotal = window.innerHeight * 2.7;

      const progress = Math.min(Math.max(-rect.top / scrollTotal, 0), 1);

      if (svgElement) {
        svgElement.style.setProperty("--progress", `${progress}`);
      }

      fixedLayer.style.opacity = progress >= 0.98 ? "0" : "1";

      drawItems.forEach((item, index) => {
        const length = item.getTotalLength();

        const start = index * 0.015;
        const end = start + 0.72;

        const itemProgress = Math.min(
          Math.max((progress - start) / (end - start), 0),
          1
        );

        item.style.strokeDashoffset = `${length * (1 - itemProgress)}`;
        item.style.opacity = itemProgress > 0 ? "1" : "0";
      });
    }

    loadMonogram();

    window.addEventListener("scroll", updateDrawing, { passive: true });
    window.addEventListener("resize", updateDrawing);

    return () => {
      window.removeEventListener("scroll", updateDrawing);
      window.removeEventListener("resize", updateDrawing);
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.intro}>
      <div ref={fixedRef} className={styles.sticky}>
        <div ref={monogramRef} className={styles.monogram} />
      </div>
    </section>
  );
}
