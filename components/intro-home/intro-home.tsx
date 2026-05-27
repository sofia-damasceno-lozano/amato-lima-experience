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

    async function loadMonogram() {
      const response = await fetch("/intro-home/monograma.svg");
      const svgText = await response.text();

      monogramContainer.innerHTML = svgText;

      const svg = monogramContainer.querySelector("svg");
      if (!svg) return;

      svg.classList.add(styles.monogramSvg);
      svg.setAttribute("fill", "none");

      drawItems = Array.from(
        svg.querySelectorAll("path, line, polyline, polygon, rect, circle, ellipse")
      ) as SVGGeometryElement[];

      drawItems.forEach((item) => {
        const length = item.getTotalLength();

        item.style.strokeDasharray = `${length}`;
        item.style.strokeDashoffset = `${length}`;
        item.style.opacity = "0";
      });

      updateDrawing();
    }

    function updateDrawing() {
      const rect = section.getBoundingClientRect();
      const scrollTotal = window.innerHeight * 2.7;
      const progress = Math.min(Math.max(-rect.top / scrollTotal, 0), 1);

      fixedLayer.style.opacity = progress >= 0.98 ? "0" : "1";

      drawItems.forEach((item, index) => {
        const length = item.getTotalLength();

        const start = index * 0.018;
        const end = start + 0.55;

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
      <div ref={fixedRef} className={styles.fixedLayer}>
        <div ref={monogramRef} className={styles.monogram} />
      </div>
    </section>
  );
}
