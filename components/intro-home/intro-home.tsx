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
  const shineRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = document.documentElement;

    const ctx = gsap.context(() => {
      const paths = traceRef.current?.querySelectorAll("path");

      root.style.setProperty("--home-bg-reveal", "0");
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
        duration: 0.85,
        stagger: 0.03,
      });

      tl.fromTo(
  shineRef.current,
  {
    opacity: 0,
    x: "-140%",
  },
  {
    opacity: 1,
    x: "140%",
    duration: 0.9,
    ease: "power2.inOut",
  }
);

      tl.fromTo(
        logoRef.current,
        {
          opacity: 0,
          scale: 0.96,
          y: 12,
          filter: "blur(8px)",
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.6,
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
        scale: 0.52,
        duration: 0.75,
        delay: 0,
      });

      tl.to(
  veilRef.current,
  {
    opacity: 0,
    scale: 1.02,
    filter: "blur(2px)",
    duration: 0.55,
    ease: "power2.inOut",
  },
  "-=0.45"
);

      tl.to(
        root,
        {
          "--home-title-reveal": 1,
          duration: 1.1,
        },
        "-=0.45"
      );

      tl.to(root, {
        "--home-explore-reveal": 1,
        duration: 0.85,
      });

      tl.to(
        root,
        {
          "--home-menu-reveal": 1,
          duration: 0.75,
        },
        "-=0.45"
      );

      tl.to(
  root,
  {
    "--home-bg-reveal": 1,
    duration: 0.45,
    ease: "power2.out",
  },
  "-=0.35"
);

      tl.to(
  root,
  {
    "--home-real-logo-reveal": 1,
    duration: 0.01,
  },
  "+=0.18"
);

tl.to(
  logoRef.current,
  {
    opacity: 0,
    filter: "blur(1.2px)",
    duration: 0.14,
    ease: "power1.out",
  },
  "+=0.01"
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
  <div ref={shineRef} className={styles.logoShine} />
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
