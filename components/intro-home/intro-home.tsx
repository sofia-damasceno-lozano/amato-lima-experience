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

      /* REVEAL DA HOME */

      root.style.setProperty(
        "--hero-script-reveal",
        String(Math.max(0, (next - 0.56) / 0.18))
      );

      root.style.setProperty(
        "--hero-de-reveal",
        String(Math.max(0, (next - 0.72) / 0.14))
      );

      root.style.setProperty(
        "--hero-title-reveal",
        String(Math.max(0, (next - 0.82) / 0.16))
      );

      root.style.setProperty(
        "--home-header-reveal",
        String(Math.max(0, (next - 0.9) / 0.1))
      );

      root.style.setProperty(
        "--home-explore-reveal",
        String(Math.max(0, (next - 0.92) / 0.08))
      );
    };

    update(0);

    const handleWheel = (event: WheelEvent) => {
      if (progressRef.current >= 1 && event.deltaY > 0) return;

      event.preventDefault();

      update(progressRef.current + event.deltaY / 950);
    };

    const handleTouchStart = (event: TouchEvent) => {
      touchStartY.current = event.touches[0].clientY;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (touchStartY.current === null) return;
      if (progressRef.current >= 1) return;

      event.preventDefault();

      const currentY = event.touches[0].clientY;

      const delta =
        (touchStartY.current - currentY) / 620;

      update(progressRef.current + delta);

      touchStartY.current = currentY;
    };

    window.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    window.addEventListener(
      "touchstart",
      handleTouchStart,
      { passive: true }
    );

    window.addEventListener(
      "touchmove",
      handleTouchMove,
      { passive: false }
    );

    return () => {
      window.removeEventListener("wheel", handleWheel);

      window.removeEventListener(
        "touchstart",
        handleTouchStart
      );

      window.removeEventListener(
        "touchmove",
        handleTouchMove
      );
    };
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

      {/* MONOGRAMA */}
      <div className={styles.monogramStage}>
        <object
          type="image/svg+xml"
          data="/amato-lima-experience/intro-home/monograma.svg"
          className={styles.monogram}
          aria-hidden="true"
        />
      </div>

      {/* LOGO */}
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

      {/* EXPLORE */}
      <div className={styles.exploreWrapper}>
        <span className={styles.explore}>
          EXPLORAR
        </span>

        <div className={styles.exploreLine} />
      </div>
    </section>
  );
}
