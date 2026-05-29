"use client";

import Image from "next/image";
import styles from "./visual-immersion.module.css";

const materials = [
  "/amato-lima-experience/visual-immersion/madeira.png",
  "/amato-lima-experience/visual-immersion/linho.png",
  "/amato-lima-experience/visual-immersion/vidros-reflecta-bronze.png",
  "/amato-lima-experience/visual-immersion/quartzo-branco.png",
  "/amato-lima-experience/visual-immersion/monograma-travertino.png",
];

export default function VisualImmersion() {
  return (
    <section className={styles.section}>
      {materials.map((image, index) => (
        <div
          key={image}
          className={styles.panel}
        >
          <Image
            src={image}
            alt=""
            fill
            priority={index === 0}
            className={styles.image}
          />
        </div>
      ))}
    </section>
  );
}
