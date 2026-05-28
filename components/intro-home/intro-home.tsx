"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import styles from "./intro-home.module.css";

export default function IntroHome() {
  const introRef = useRef<HTMLDivElement>(null);
  const traceRef = useRef<SVGSVGElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const phraseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const paths = traceRef.current?.querySelectorAll("path");

      const tl = gsap.timeline({
        defaults: {
          ease: "power3.inOut",
        },
        onComplete: () => {
          gsap.set(introRef.current, { display: "none" });
          document.documentElement.style.setProperty("--home-header-reveal", "1");
        },
      });

      document.documentElement.style.setProperty("--home-header-reveal", "0");

      if (paths) {
        paths.forEach((path) => {
          const length = path.getTotalLength();

          gsap.set(path, {
            strokeDasharray: length,
            strokeDashoffset: length,
          });
        });
      }

      tl.set(document.body, { overflow: "hidden" });

      tl.fromTo(
        introRef.current,
        { opacity: 1 },
        { opacity: 1, duration: 0.1 }
      );

      tl.to(paths, {
        strokeDashoffset: 0,
        opacity: 1,
        duration: 1.75,
        stagger: 0.12,
      });

      tl.fromTo(
        logoRef.current,
        {
          opacity: 0,
          scale: 0.96,
          y: 14,
          filter: "blur(10px)",
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.2,
        },
        "-=0.55"
      );

      tl.to(
        traceRef.current,
        {
          opacity: 0,
          scale: 1.04,
          duration: 0.95,
        },
        "-=0.35"
      );

      tl.to(logoRef.current, {
        y: "-38vh",
        scale: 0.48,
        duration: 1.35,
        delay: 0.2,
      });

      tl.fromTo(
        phraseRef.current,
        {
          opacity: 0,
          y: 18,
          filter: "blur(12px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.25,
        },
        "-=0.55"
      );

      tl.to(phraseRef.current, {
        opacity: 0,
        y: -10,
        filter: "blur(8px)",
        duration: 0.8,
        delay: 0.55,
      });

      tl.to(
        introRef.current,
        {
          opacity: 0,
          duration: 1,
        },
        "-=0.35"
      );

      tl.set(document.body, { overflow: "auto" });
    }, introRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={introRef} className={styles.intro}>
      <svg
        ref={traceRef}
        className={styles.trace}
        viewBox="0 0 320 180"
        fill="none"
        aria-hidden="true"
      >
        <path d="M82 118 L82 62 L132 62" />
        <path d="M104 132 L104 82 L158 82 L158 50" />
        <path d="M132 126 C166 126 196 104 196 72" />
        <path d="M202 54 L238 54 L238 112 L188 112" />
        <path d="M94 142 L176 142 C220 142 256 112 256 76" />
      </svg>

      <div ref={logoRef} className={styles.logoWrap}>
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
  );
}
