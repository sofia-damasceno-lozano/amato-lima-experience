"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./visual-immersion.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function VisualImmersion() {
  const sectionRef = useRef<HTMLElement>(null);
  const phraseRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.set(phraseRef.current, {
        opacity: 0,
        y: 40,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=250%",
          scrub: 1.2,
          pin: true,
        },
      });

      tl.to(phraseRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
      });

      tl.to(phraseRef.current, {
        opacity: 1,
        duration: 1.2,
      });

      tl.to(phraseRef.current, {
        opacity: 0,
        y: -30,
        duration: 1,
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={styles.section}
    >
      <div className={styles.content}>
        <p
          ref={phraseRef}
          className={styles.phrase}
        >
          A matéria precede o ativo.
        </p>
      </div>
    </section>
  );
}
