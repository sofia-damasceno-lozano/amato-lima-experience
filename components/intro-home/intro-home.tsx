"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import styles from "./intro-home.module.css";

export default function IntroHome() {
  const introRef = useRef<HTMLDivElement>(null);
  const veilRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = document.documentElement;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.inOut" },
        onComplete: () => {
          // libera a home sem destruir o elemento
          gsap.set(introRef.current, { pointerEvents: "none" });
          gsap.set(document.body, { overflow: "auto" });

          root.style.setProperty("--home-real-logo-reveal", "1");
        },
      });

      tl.set(document.body, { overflow: "hidden" });

      // entrada suave
      tl.fromTo(
        logoRef.current,
        {
          opacity: 0,
          y: 30,
          scale: 0.96,
          filter: "blur(6px)",
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.9,
        }
      );

      // linha aparece
      tl.fromTo(
        ".divider",
        {
          scaleX: 0,
          opacity: 0,
        },
        {
          scaleX: 1,
          opacity: 1,
          duration: 0.6,
          transformOrigin: "center",
        },
        "-=0.5"
      );

      // subtitle aparece
      tl.fromTo(
        ".subtitle",
        {
          opacity: 0,
          y: 10,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
        },
        "-=0.4"
      );

      // subida para header
      tl.to(logoRef.current, {
        y: "-28vh",
        scale: 0.72,
        duration: 0.9,
      });

      // fade do fundo
      tl.to(
        veilRef.current,
        {
          opacity: 0,
          duration: 0.6,
        },
        "-=0.7"
      );
    }, introRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={introRef} className={styles.intro}>
      <div ref={veilRef} className={styles.veil} />

      <div ref={logoRef} className={styles.logoWrap}>
        <div className={styles.brand}>
          <Image
            src="/simbolo.png"
            alt="Amato Lima"
            width={120}
            height={120}
            priority
            className={styles.symbol}
          />

          <div className={styles.textBlock}>
            <h1 className={styles.title}>AMATO LIMA</h1>

            <div className={`${styles.divider} divider`} />

            <h2 className={`${styles.subtitle} subtitle`}>
              ATIVOS IMOBILIÁRIOS
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
