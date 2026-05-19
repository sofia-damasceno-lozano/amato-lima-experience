import Image from "next/image";
import styles from "./hero-home.module.css";

export default function HeroHome() {
  return (
    /* Hero Home - fundo principal */
    <section className={styles.hero}>

      {/* ================================
          LOGO CENTRAL
          Posiciona a marca no topo da hero
      ================================ */}
      <div className={styles.logoWrapper}>

        {/* ================================
            IMAGEM DA LOGO
            Logo principal da Amato Lima
        ================================ */}
        <img
          src="/amato-lima-experience/logo/logo.png"
          alt="Amato Lima"
          className={styles.logo}
        />

      </div>

      {/* Vídeo que aparece por trás da máscara */}
      <video
        className={styles.video}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/amato-lima-experience/hero-home/hero-poster.png"
      >
        <source
          src="/amato-lima-experience/hero-home/hero-video.mp4"
          type="video/mp4"
        />
      </video>

      {/* Máscara PNG da madeira */}
      <Image
        src="/amato-lima-experience/hero-home/hero-mask.png"
        alt=""
        fill
        priority
        className={styles.mask}
      />

    </section>
  );
}
