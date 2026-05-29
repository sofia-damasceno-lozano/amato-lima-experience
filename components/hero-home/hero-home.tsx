"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./hero-home.module.css";

export default function HeroHome() {
  const [menuOpen, setMenuOpen] = useState(false);

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

        <button
          className={styles.menuButton}
          aria-label="Abrir menu"
          onClick={() => setMenuOpen(true)}
        >
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

        <div className={styles.exploreWrapper}>
          <div className={styles.line} />
          <span className={styles.explore}>EXPLORAR</span>
        </div>
      </div>

      <div
        className={`${styles.menuBackdrop} ${
          menuOpen ? styles.menuBackdropOpen : ""
        }`}
        onClick={() => setMenuOpen(false)}
      />

      <aside
        className={`${styles.sideMenu} ${
          menuOpen ? styles.sideMenuOpen : ""
        }`}
      >
        <button
          className={styles.closeMenu}
          aria-label="Fechar menu"
          onClick={() => setMenuOpen(false)}
        >
          ×
        </button>

        <nav className={styles.menuNav}>
          <a href="#">Home</a>
          <a href="#">Institucional</a>
          <a href="#">Viver Amato Lima</a>
          <a href="#">Projetos</a>
          <a href="#">Contato</a>
        </nav>
      </aside>
    </section>
  );
}
