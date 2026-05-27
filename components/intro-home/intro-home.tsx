"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./intro-home.module.css";

export default function IntroHome() {
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(0);
  const touchStartY = useRef<number | null>(null);

  useEffect(() => {
    const root = document.documentElement;

    const update = (value: number) => {
      const next = Math.max(0, Math.min(value, 1));

      progressRef.current = next;
      setProgress(next);

      root.style.setProperty("--intro-progress", String(next));

      root.style.setProperty("--home-header-reveal", String(Math.max(0, (next - 0.88) / 0.12)));
      root.style.setProperty("--home-explore-reveal", String(Math.max(0, (next - 0.92) / 0.08)));

      root.style.setProperty("--hero-script-reveal", String(Math.max(0, (next - 0.58) / 0.18)));
      root.style.setProperty("--hero-de-reveal", String(Math.max(0, (next - 0.72) / 0.14)));
      root.style.setProperty("--hero-title-reveal", String(Math.max(0, (next - 0.82) / 0.16)));
    };

    update(0);

    const handleWheel = (event: WheelEvent) => {
      if (progressRef.current >= 1 && event.deltaY > 0) return;

      event.preventDefault();
      update(progressRef.current + event.deltaY / 1000);
    };

    const handleTouchStart = (event: TouchEvent) => {
      touchStartY.current = event.touches[0].clientY;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (touchStartY.current === null) return;
      if (progressRef.current >= 1) return;

      event.preventDefault();

      const currentY = event.touches[0].clientY;
      const delta = (touchStartY.current - currentY) / 620;

      update(progressRef.current + delta);
      touchStartY.current = currentY;
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <section
      className={styles.intro}
      style={{ "--progress": progress } as React.CSSProperties}
    >
      <div className={styles.background} />

      <div className={styles.monogramStage}>
        <svg className={styles.monogram} viewBox="0 0 320 320" aria-hidden="true">
          <path className={styles.frameLine} d="M78 70 H248 V248 H78 Z" />

          <path className={styles.logoLine} d="M91 250 C112 213 126 166 131 119 C136 78 153 55 181 50" />
          <path className={styles.logoLine} d="M181 50 C226 55 250 88 250 132 C250 185 215 225 166 237" />
          <path className={styles.logoLine} d="M166 237 C199 207 211 150 184 109 C166 82 136 84 116 112" />
          <path className={styles.logoLine} d="M70 260 L92 68" />
          <path className={styles.logoLine} d="M250 132 L270 110 V248 H218" />
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
