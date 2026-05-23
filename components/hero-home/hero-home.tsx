"use client";

import Image from "next/image";

import styles from "./hero-home.module.css";

export default function HeroHome() {
  return (
    <section className={styles.hero}>
      {/* background */}
      <Image
        src="/amato-lima-experience/hero-home/wood.jpg"
        alt="Background"
        fill
        priority
        className={styles.background}
      />

      {/* overlay */}
      <div className={styles.overlay} />

      {/* topo */}
      <header className={styles.header}>
        <button className={styles.menuButton}>
          <span />
          <span />
        </button>

        <div className={styles.logoWrapper}>
          <Image
            src="/amato-lima-experience/logo/logo.png"
            alt="Amato Lima"
            width={160}
            height={50}
            className={styles.logo}
          />
        </div>

        <span className={styles.contact}>
          CONTATO
        </span>
      </header>

      {/* conteúdo */}
      <div className={styles.content}>
        <div className={styles.titleWrapper}>
          <span className={styles.de}>
            DE
          </span>

          <h1 className={styles.title}>
            HABITAR
          </h1>

          <span className={styles.script}>
            Arte
          </span>
        </div>

        <p className={styles.subtitle}>
          ATIVOS EXCLUSIVOS.
          <br />
          LEGADO QUE PERMANECE.
        </p>

        {/* moldura */}
        <div className={styles.videoFrame}>
          <video
            className={styles.video}
            autoPlay
            muted
            loop
            playsInline
          >
            <source
              src="/amato-lima-experience/hero-home/video.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <div className={styles.exploreWrapper}>
          <div className={styles.line} />

          <span className={styles.explore}>
            EXPLORAR
          </span>
        </div>
      </div>
    </section>
  );
}
