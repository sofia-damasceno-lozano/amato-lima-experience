"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./intro-home.module.css";

export default function IntroHome() {
  const introRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.inOut",
        },
        onComplete: () => {
          if (introRef.current) {
            introRef.current.style.display = "none";
          }
        },
      });

      tl.fromTo(
        `.${styles.line}`,
        {
          opacity: 0,
          scaleY: 0,
        },
        {
          opacity: 1,
          scaleY: 1,
          duration: 1.2,
          stagger: 0.12,
        }
      )

        .fromTo(
          `.${styles.curve}`,
          {
            opacity: 0,
            scale: 0.84,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 1.4,
            stagger: 0.12,
          },
          "-=0.7"
        )

        .to(`.${styles.mark}`, {
          opacity: 0,
          scale: 0.96,
          filter: "blur(8px)",
          duration: 0.8,
          delay: 0.3,
        })

        .fromTo(
          `.${styles.logo}`,
          {
            opacity: 0,
            scale: 0.97,
            filter: "blur(10px)",
          },
          {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 1.5,
          },
          "-=0.2"
        )

        .to(introRef.current, {
          opacity: 0,
          duration: 1,
          delay: 0.9,
          pointerEvents: "none",
        });
    }, introRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={introRef} className={styles.intro}>
      <div className={styles.light} />
      <div className={styles.grain} />

      <div className={styles.wrapper}>
        <div className={styles.mark}>
          <span className={`${styles.line} ${styles.line1}`} />
          <span className={`${styles.line} ${styles.line2}`} />
          <span className={`${styles.line} ${styles.line3}`} />

          <span className={`${styles.curve} ${styles.curve1}`} />
          <span className={`${styles.curve} ${styles.curve2}`} />
        </div>

        <img
          src="/logo.png"
          alt="Amato Lima"
          className={styles.logo}
        />
      </div>
    </section>
  );
}
