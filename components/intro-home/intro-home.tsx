"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import styles from "./intro-home.module.css";

export default function IntroHome() {
  const introRef = useRef<HTMLDivElement>(null);
  const veilRef = useRef<HTMLDivElement>(null);
  const traceRef = useRef<SVGSVGElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const paths = traceRef.current?.querySelectorAll("path");

      if (paths) {
        paths.forEach((path) => {
          const length = path.getTotalLength();

          gsap.set(path, {
            strokeDasharray: length,
            strokeDashoffset: length,
          });
        });
      }

      const tl = gsap.timeline({
        defaults: { ease: "power3.inOut" },
        onComplete: () => {
          gsap.set(introRef.current, { display: "none" });
          gsap.set(document.body, { overflow: "auto" });
        },
      });

      tl.set(document.body, { overflow: "hidden" });

      /* SVG rápido e discreto */
      tl.to(paths, {
        strokeDashoffset: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.02,
      });

      /* LOGO ENTRA DE BAIXO */
      tl.fromTo(
        logoRef.current,
        {
          y: "120vh",
          scale: 1.08,
          opacity: 0,
        },
        {
          y: "0vh",
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
        },
        "-=0.3"
      );

      /* HOME SOBE JUNTO */
      tl.to(
        ".home-content",
        {
          y: "0vh",
          opacity: 1,
          duration: 1.1,
          ease: "power3.out",
        },
        "-=0.7"
      );

      /* LOGO REDUZ E POSICIONA */
      tl.to(
        logoRef.current,
        {
          scale: 0.65,
          y: "-28vh",
          duration: 0.8,
          ease: "power3.inOut",
        },
        "-=0.9"
      );

      /* SVG SOME */
      tl.to(
        traceRef.current,
        {
          opacity: 0,
          duration: 0.4,
        },
        "-=0.8"
      );

      /* VEIL SOME POR ÚLTIMO */
      tl.to(
        veilRef.current,
        {
          opacity: 0,
          duration: 0.6,
        },
        "-=0.6"
      );
    }, introRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={introRef} className={styles.intro}>
      <div ref={veilRef} className={styles.veil} />

      <svg
        ref={traceRef}
        className={styles.trace}
        viewBox="0 0 420 320"
        fill="none"
        aria-hidden="true"
      >
        <path d="M105 52 H315 Q340 52 340 77 V243 Q340 268 315 268 H105 Q80 268 80 243 V77 Q80 52 105 52" />
        <path d="M238 88 C276 88 300 112 300 146 L300 214 L258 214 L258 150 C258 129 244 120 224 120 L194 120" />
        <path d="M194 120 C140 120 106 154 106 206 C106 248 132 272 168 272 C210 272 238 240 238 196 C238 160 218 138 184 138" />
        <path d="M154 92 L130 216 C124 248 142 272 168 272" />
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
    </div>
  );
}
