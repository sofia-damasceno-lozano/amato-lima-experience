"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "./sections-home-after-hero.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function SectionsHomeAfterHero() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        `.${styles.planLine}`,
        {
          strokeDasharray: 900,
          strokeDashoffset: 900,
          opacity: 0,
        },
        {
          strokeDashoffset: 0,
          opacity: 1,
          duration: 2,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 72%",
            end: "bottom 35%",
            scrub: 1.2,
          },
        }
      );

      gsap.fromTo(
        `.${styles.planGlow}`,
        {
          opacity: 0,
          scale: 0.96,
        },
        {
          opacity: 1,
          scale: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            end: "center 45%",
            scrub: 1,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <main className={styles.wrapper}>
      <section ref={sectionRef} className={styles.blueprintSection}>
        <div className={styles.organicBackground} />
        <div className={styles.cinematicOverlay} />

        <div className={styles.copyBlock}>
          <span>SELEÇÃO E ENGENHARIA</span>
          <h2>Da linha ao ativo.</h2>
          <p>
            A engenharia como origem silenciosa da forma, da escolha e da
            permanência.
          </p>
        </div>

        <div className={styles.blueprintStage}>
          <div className={styles.planGlow} />

          <svg
            className={styles.blueprintSvg}
            viewBox="0 0 1000 1000"
            aria-hidden="true"
          >
            {/* contorno externo */}
            <path
              className={styles.planLine}
              d="M180 180 H790 V360 H865 V790 H610 V875 H180 Z"
            />

            {/* paredes internas */}
            <path className={styles.planLine} d="M180 500 H610 V875" />
            <path className={styles.planLine} d="M610 360 V790" />
            <path className={styles.planLine} d="M180 650 H610" />
            <path className={styles.planLine} d="M430 180 V500" />
            <path className={styles.planLine} d="M430 360 H790" />
            <path className={styles.planLine} d="M610 560 H865" />

            {/* cozinha / ilha */}
            <path className={styles.planLineThin} d="M660 410 H745 V720 H660 Z" />
            <path className={styles.planLineThin} d="M705 450 V680" />

            {/* sala */}
            <path className={styles.planLineThin} d="M235 690 H500 V800 H235 Z" />
            <path className={styles.planLineThin} d="M290 720 H445" />

            {/* quarto 01 */}
            <path className={styles.planLineThin} d="M230 250 H370 V390 H230 Z" />
            <path className={styles.planLineThin} d="M255 270 H350 V350 H255 Z" />

            {/* quarto 02 */}
            <path className={styles.planLineThin} d="M475 215 H720 V330 H475 Z" />
            <path className={styles.planLineThin} d="M520 235 H690 V305 H520 Z" />

            {/* banheiro */}
            <path className={styles.planLineThin} d="M685 590 H820 V730 H685 Z" />
            <path className={styles.planLineThin} d="M720 625 H785" />
            <path className={styles.planLineThin} d="M745 655 A28 28 0 1 1 744 655" />

            {/* portas / arcos */}
            <path className={styles.planLineThin} d="M610 505 Q675 505 675 570" />
            <path className={styles.planLineThin} d="M430 445 Q500 445 500 500" />
            <path className={styles.planLineThin} d="M610 790 Q660 790 660 840" />
          </svg>
        </div>
      </section>
    </main>
  );
              }
