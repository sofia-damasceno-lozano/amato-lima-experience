"use client";

import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

export default function IntroHome() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoaded(true);
    }, 100); // pequeno delay pra garantir mount

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        
        {/* SYMBOL */}
        <div
          className={`${styles.symbol} ${
            loaded ? styles.symbolVisible : ""
          }`}
        >
          <img src="/simbolo.png" alt="Amato Lima símbolo" />
        </div>

        {/* TEXT */}
        <div className={styles.textBlock}>
          
          <h1
            className={`${styles.title} ${
              loaded ? styles.titleVisible : ""
            }`}
          >
            AMATO LIMA
          </h1>

          <div
            className={`${styles.line} ${
              loaded ? styles.lineVisible : ""
            }`}
          />

          <p
            className={`${styles.subtitle} ${
              loaded ? styles.subtitleVisible : ""
            }`}
          >
            ATIVOS IMOBILIÁRIOS
          </p>

        </div>
      </div>
    </section>
  );
}
