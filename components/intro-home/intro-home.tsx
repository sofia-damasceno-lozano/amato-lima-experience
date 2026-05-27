"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import styles from "./intro-home.module.css";

export default function IntroHome() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = window.innerHeight * 0.75;
      const value = Math.min(window.scrollY / maxScroll, 1);

      setProgress(value);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className={styles.intro}
      style={
        {
          "--progress": progress,
        } as React.CSSProperties
      }
    >
      <div className={styles.background} />

      <div className={styles.monogramStage}>
        <svg
          className={styles.monogram}
          viewBox="0 0 320 320"
          aria-hidden="true"
        >
          <path
            className={styles.line}
            d="M78 252 C92 218 104 178 110 132 C116 84 137 55 165 48"
          />

          <path
            className={styles.line}
            d="M165 48 C215 48 250 84 250 132 C250 185 215 224 166 236"
          />

          <path
            className={styles.line}
            d="M166 236 C198 212 216 176 212 136 C208 100 185 76 154 78 C132 80 116 96 106 122"
          />

          <path
            className={styles.line}
            d="M83 254 C116 246 143 230 166 206"
          />

          <path
            className={styles.line}
            d="M250 132 L270 108 L270 244 H218"
          />

          <path
            className={styles.line}
            d="M62 264 L84 70"
          />
        </svg>
      </div>

      <div className={styles.logoStage}>
        <Image
          src="/amato-lima-experience/logo/logo.png"
          alt="Amato Lima"
          width={220}
          height={72}
          priority
          className={styles.logo}
        />
      </div>

      <div className={styles.exploreWrapper}>
        <span className={styles.explore}>EXPLORAR</span>
        <div className={styles.exploreLine} />
      </div>
    </section>
  );
}
