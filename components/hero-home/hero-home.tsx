import Image from "next/image";
import styles from "./hero-home.module.css";

export default function HeroHome() {
  return (
    /* Hero Home - fundo principal */
    <section className={styles.hero}>

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

{/* CONTAINER DA LOGO -
    Responsável por posicionar
    a logo sobre a hero */}

<div className={styles.logoWrapper}>

  {/* IMAGEM DA LOGO -
      Logo principal da marca */}

  <img
    src="/logo.png" /* caminho da imagem dentro da pasta public */
    
    alt="Amato Lima" /* acessibilidade e SEO */

    className={styles.logo} /* classe de estilização */
  />

</div>
