{/* Hero Home - fundo principal */}
<section className={styles.hero}>

  {/* Vídeo que aparece por trás da máscara */}
  <video
    className={styles.video}
    autoPlay
    muted
    loop
    playsInline
    poster="/hero-home/hero-poster.png"
  >
    <source src="/hero-home/hero-video.mp4" type="video/mp4" />
  </video>

  {/* Máscara PNG da madeira */}
  <img
    src="/hero-home/hero-mask.png"
    alt=""
    className={styles.mask}
  />

</section>
