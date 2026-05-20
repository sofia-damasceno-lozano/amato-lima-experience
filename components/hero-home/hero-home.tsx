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

      {/* ================================
         BOTÃO MENU
      Ícone minimalista de navegação
================================ */}

     <button className={styles.menuButton}>

     {/* linha superior */}
     <span></span>

     {/* linha inferior */}
     <span></span>

     </button>

      {/* ================================
       TEXTO PRINCIPAL DA HERO
       Composição editorial cinematic
================================ */}

    <div className={styles.heroTitle}>

    {/* Linha superior */}
    <span className={styles.lineTop}>
     Arte
    </span>

    {/* Palavra pequena lateral */}
    <span className={styles.lineSmall}>
     de
    </span>

    {/* Linha inferior */}
<span className={styles.lineBottom}>

  <span className={styles.ha}>
    HA
  </span>

  <span className={styles.bitar}>
    BITAR
  </span>

</span>

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
