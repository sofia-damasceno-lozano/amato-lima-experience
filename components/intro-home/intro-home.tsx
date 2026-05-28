"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import styles from "./intro-home.module.css";

export default function IntroHome() {
  const introRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const lineTopRef = useRef<HTMLDivElement>(null);
  const lineBottomRef = useRef<HTMLDivElement>(null);
  const markRef = useRef<HTMLDivElement>(null);
  const phraseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.inOut",
        },
        onComplete: () => {
          gsap.set(introRef.current, {
            display: "none",
          });
        },
      });

      tl.set(document.body, { overflow: "hidden" });

      tl.fromTo(
        [lineTopRef.current, lineBottomRef.current],
        { scaleX: 0, opacity: 0 },
        {
          scaleX: 1,
          opacity: 1,
          duration: 1.25,
          stagger: 0.18,
        }
      );

      tl.fromTo(
        markRef.current,
        { opacity: 0, scale: 0.92, filter: "blur(10px)" },
        {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.15,
        },
        "-=0.55"
      );

      tl.fromTo(
        logoRef.current,
        { opacity: 0, y: 18, filter: "blur(8px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.2,
        },
        "-=0.45"
      );

      tl.fromTo(
        phraseRef.current,
        { opacity: 0, y: 22, filter: "blur(10px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.25,
        },
        "-=0.35"
      );

      tl.to(phraseRef.current, {
        "--shine-x": "140%",
        duration: 1.35,
        ease: "power2.inOut",
      });

      tl.to(
        logoRef.current,
        {
          y: "-38vh",
          scale: 0.42,
          duration: 1.35,
        },
        "-=0.2"
      );

      tl.to(
        introRef.current,
        {
          clipPath: "inset(0 0 100% 0)",
          duration: 1.45,
        },
        "-=0.85"
      );

      tl.set(document.body, { overflow: "auto" });
    }, introRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={introRef} className={styles.intro}>
      <div className={styles.inner}>
        <div className={styles.lines}>
          <div ref={lineTopRef} className={styles.line} />
          <div ref={lineBottomRef} className={styles.line} />
        </div>

        <div ref={logoRef} className={styles.logoWrap}>
          <div ref={markRef} className={styles.markGlow} />

          <Image
            src="/amato-lima-experience/logo/logo.png"
            alt="Amato Lima"
            width={240}
            height={80}
            priority
            className={styles.logo}
          />
        </div>

        <div ref={phraseRef} className={styles.phrase}>
          <span className={styles.script}>Arte</span>
          <span className={styles.de}>DE</span>
          <span className={styles.title}>HABITAR</span>
        </div>
      </div>
    </div>
  );
      }
