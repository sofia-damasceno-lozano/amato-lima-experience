"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import styles from "./intro-home.module.css";

export default function IntroHome() {
  const introRef = useRef<HTMLDivElement>(null);
  const veilRef = useRef<HTMLDivElement>(null);
  const flashRef = useRef<HTMLDivElement>(null);
  const traceRef = useRef<SVGSVGElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const introPhraseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = document.documentElement;

    const ctx = gsap.context(() => {
      const paths = traceRef.current?.querySelectorAll("path");

      root.style.setProperty("--home-bg-reveal", "0.01");
      root.style.setProperty("--home-title-reveal", "0");
      root.style.setProperty("--home-explore-reveal", "0");
      root.style.setProperty("--home-menu-reveal", "0");
      root.style.setProperty("--home-real-logo-reveal", "0");

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
          root.style.setProperty("--home-bg-reveal", "1");
          root.style.setProperty("--home-title-reveal", "1");
          root.style.setProperty("--home-explore-reveal", "1");
          root.style.setProperty("--home-menu-reveal", "1");
          root.style.setProperty("--home-real-logo-reveal", "1");

          gsap.set(introRef.current, { display: "none" });
          gsap.set(document.body, { overflow: "auto" });
        },
      });

      tl.set(document.body, { overflow: "hidden" });

      tl.to(paths, {
        strokeDashoffset: 0,
        opacity: 1,
        duration: 1.8,
        stagger: 0.08,
      });

      tl.fromTo(
        logoRef.current,
        {
          opacity: 0,
          scale: 0.96,
          y: 12,
          filter: "blur(1px)",
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.15,
        },
        "-=0.55"
      );

      tl.to(
        traceRef.current,
        {
          opacity: 0,
          scale: 1.03,
          duration: 0.8,
        },
        "-=0.25"
      );

      tl.to(logoRef.current, {
        y: "-31.6vh",
        scale: 0.49,
        duration: 1.5,
        delay: 0.15,
      });

      tl.fromTo(
        introPhraseRef.current,
        {
          opacity: 0,
          y: 10,
          filter: "blur(4px)",
          "--intro-phrase-shine": "-120%",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.05,
          ease: "power2.out",
        },
        "-=0.25"
      );

      tl.to(
        introPhraseRef.current,
        {
          "--intro-phrase-shine": "140%",
          duration: 0.9,
          ease: "power2.inOut",
        },
        "-=0.08"
      );

      tl.to(
        flashRef.current,
        {
          opacity: 1,
          duration: 0.1,
          ease: "power1.out",
        },
        "-=0.08"
      );

      tl.to(
        root,
        {
          "--home-bg-reveal": 1,
          "--home-title-reveal": 1,
          "--home-menu-reveal": 1,
          "--home-explore-reveal": 1,
          "--home-real-logo-reveal": 1,
          duration: 0.28,
          ease: "power1.inOut",
        },
        "<+=0.05"
      );

      tl.to(
        veilRef.current,
        {
          opacity: 0,
          duration: 0.28,
          ease: "power1.inOut",
        },
        "<"
      );

      tl.to(
        logoRef.current,
        {
          opacity: 0,
          duration: 0.28,
          ease: "power1.out",
        },
        "<+=0.03"
      );

      tl.to(
        introPhraseRef.current,
        {
          opacity: 0,
          duration: 0.24,
          ease: "power1.out",
        },
        "<"
      );

      tl.to(
        flashRef.current,
        {
          opacity: 0,
          duration: 0.38,
          ease: "power2.out",
        },
        "-=0.16"
      );
    }, introRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={introRef} className={styles.intro}>
      <div ref={veilRef} className={styles.veil} />
      <div ref={flashRef} className={styles.transitionFlash} />

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

      <div ref={introPhraseRef} className={styles.introPhrase}>
        <span className={styles.introScript}>Arte</span>
        <span className={styles.introDe}>DE</span>
        <span className={styles.introTitle}>HABITAR</span>
      </div>
    </div>
  );
}
