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
        poster="/hero-home/hero-poster.png"
      >
        <source src="/hero-home/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Máscara PNG da madeira */}
      <Image
        src="/hero-home/hero-mask.png"
        alt=""
        fill
        priority
        className={styles.mask}
      />

    </section>
  );
}
