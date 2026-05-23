import styles from "./hero-home.module.css";

export default function HeroHome() {
  return (
    <section className={styles.hero}>
      <img
        src="/hero-home/wood.png"
        alt=""
        className={styles.background}
      />

      <header className={styles.header}>
        <div className={styles.menu}>
          <span />
          <span />
        </div>

        <img
          src="/logo.png"
          alt="Amato Lima Ativos Imobiliários"
          className={styles.logo}
        />

        <span className={styles.contact}>CONTATO</span>
      </header>

      <div className={styles.content}>
        <h1 className={styles.title}>
          <span className={styles.cursive}>Arte</span>

          <span className={styles.de}>DE</span>

          <span className={styles.habitar}>HABITAR</span>
        </h1>

        <div className={styles.microText}>
          <span>ATIVOS EXCLUSIVOS.</span>
          <span>LEGADO QUE PERMANECE.</span>
        </div>

        <div className={styles.videoFrame}>
          <video
            src="/hero-home/video.mp4"
            autoPlay
            muted
            loop
            playsInline
            className={styles.video}
          />
        </div>

        <div className={styles.explore}>
          <span />
          <p>EXPLORAR</p>
        </div>
      </div>
    </section>
  );
}
