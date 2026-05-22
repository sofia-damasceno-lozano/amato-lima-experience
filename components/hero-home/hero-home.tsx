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
        <span></span>
        <span></span>
      </button>

      {/* ================================
          TEXTO PRINCIPAL DA HERO
          Composição editorial cinematic
      ================================ */}
      <div className={styles.heroTitle}>
        <span className={styles.lineTop}>
          Arte
        </span>

        <span className={styles.lineSmall}>
          de
        </span>

        <span className={styles.lineBottom}>
          <span className={styles.ha}>
            HA
          </span>

          <span className={styles.bitar}>
            BITAR
          </span>
        </span>
      </div>

      {/* detalhe inferior esquerdo */}
      <div className={styles.exploreWrap}>
        <span className={styles.exploreText}>
          EXPLORAR
        </span>

        <span className={styles.exploreLine} />
      </div>

      {/* detalhe lateral direito */}
<div className={styles.sideDetails}>

  <span className={styles.ativos}>
    ATIVOS
  </span>

  <span>EXCLUSIVOS</span>

  <span className={styles.legado}>
    LEGADO
  </span>

  <span className={styles.permanece}>
  QUE PERMANECE
</span>

</div>

      {/* coordenadas esquerda */}
      <div className={styles.coordinates}>
        <span>23°35'28.8"S</span>
        <span>46°41'30.7"W</span>

        <span className={styles.coordDash}>—</span>

        <span>SÃO PAULO</span>
        <span>BRASIL</span>
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
