"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import styles from "./intro-home.module.css";

function splitText(text: string) {
  return text.split("").map((char, i) => (
    <span key={i} className="char">
      {char === " " ? "\u00A0" : char}
    </span>
  ));
}

export default function IntroHome() {
  const introRef = useRef<HTMLDivElement>(null);
  const veilRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => {
          gsap.set(introRef.current, { pointerEvents: "none" });
          gsap.set(document.body, { overflow: "auto" });
        },
      });

      tl.set(document.body, { overflow: "hidden" });

      // AMATO LIMA (esquerda → direita)
      tl.fromTo(
        ".title .char",
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.03,
          duration: 0.4,
        }
      );

      // linha (quase junto)
      tl.fromTo(
        ".divider",
        {
          scaleX: 0,
          opacity: 0,
        },
        {
          scaleX: 1,
          opacity: 1,
          duration: 0.3,
          transformOrigin: "center",
        },
        "-=0.25"
      );

      // SUBTITLE (direita → esquerda)
      tl.fromTo(
        ".subtitle .char",
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          stagger: {
            each: 0.02,
            from: "end",
          },
          duration: 0.35,
        },
        "-=0.28"
      );

      // subir tudo
      tl.to(logoRef.current, {
        y: "-26vh",
        scale: 0.65,
        duration: 0.8,
      });

      tl.to(
        veilRef.current,
        {
          opacity: 0,
          duration: 0.5,
        },
        "-=0.6"
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
            width={90}
            height={90}
            priority
            className={styles.symbol}
          />

          <div className={styles.textBlock}>
            <h1 className={`${styles.title} title`}>
              {splitText("AMATO LIMA")}
            </h1>

            <div className={`${styles.divider} divider`} />

            <h2 className={`${styles.subtitle} subtitle`}>
              {splitText("ATIVOS IMOBILIÁRIOS")}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
