"use client";

import Image from "next/image";
import styles from "./hero-home.module.css";

export default function HeroHome() {
  return (
    <section className={styles.hero}>
      <Image
        src="/amato-lima-experience/hero-home/wood.jpg"
        alt="Background"
        fill
        priority
        className={styles.background}
      />

      <div className={styles.overlay} />

      <header className={styles.header}>
        <div className={styles.logoWrapper}>
          <Image
            src="/amato-lima-experience/logo/logo.png"
            alt="Amato Lima"
            width={130}
            height={42}
            className={styles.logo}
          />
        </div>

        <button className={styles.menuButton} aria-label="Abrir menu">
          <span />
          <span />
        </button>
      </header>

      <div className={styles.content}>
        <div className={styles.titleWrapper}>
          <span className={styles.de}>DE</span>
          <h1 className={styles.title}>HABITAR</h1>
          <span className={styles.script}>Arte</span>
        </div>

        <p className={styles.subtitle}>
          ATIVOS EXCLUSIVOS
          <br />
          LEGADO QUE PERMANECE
        </p>

        <div className={styles.videoFrame}>
          <video className={styles.video} autoPlay muted loop playsInline>
            <source
              src="/amato-lima-experience/hero-home/video.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <div className={styles.exploreWrapper}>
          <div className={styles.line} />
          <span className={styles.explore}>EXPLORAR</span>
        </div>
      </div>
    </section>
  );
}
