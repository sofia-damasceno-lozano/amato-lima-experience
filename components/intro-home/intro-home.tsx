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
      root.style.setProperty("--hero-script-reveal", String(Math.max(0, (next - 0.34) / 0.22)));
      root.style.setProperty("--hero-de-reveal", String(Math.max(0, (next - 0.52) / 0.2)));
      root.style.setProperty("--hero-title-reveal", String(Math.max(0, (next - 0.62) / 0.22)));
    };

    update(0);

    const handleWheel = (event: WheelEvent) => {
      if (progressRef.current >= 1 && event.deltaY > 0) return;

      event.preventDefault();

      const delta = event.deltaY / 900;
      update(progressRef.current + delta);
    };

    const handleTouchStart = (event: TouchEvent) => {
      touchStartY.current = event.touches[0].clientY;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (touchStartY.current === null) return;
      if (progressRef.current >= 1) return;

      event.preventDefault();

      const currentY = event.touches[0].clientY;
      const delta = (touchStartY.current - currentY) / 520;

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
          <path className={styles.frameLine} d="M78 72 H244 V244 H78 Z" />

          <path className={styles.carveLine} d="M92 248 C112 210 125 165 130 120 C134 82 150 58 176 52" />
          <path className={styles.carveLine} d="M176 52 C222 54 248 88 248 132 C248 184 213 224 166 236" />
          <path className={styles.carveLine} d="M166 236 C202 202 210 145 184 108 C166 82 136 84 116 112" />
          <path className={styles.carveLine} d="M72 258 L94 68" />
          <path className={styles.carveLine} d="M248 132 L268 108 V244 H218" />
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
