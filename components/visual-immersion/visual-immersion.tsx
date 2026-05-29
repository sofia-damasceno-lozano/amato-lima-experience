"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./visual-immersion.module.css";

gsap.registerPlugin(ScrollTrigger);

const materials = [
  "/amato-lima-experience/visual-immersion/madeira.png",
  "/amato-lima-experience/visual-immersion/linho.png",
  "/amato-lima-experience/visual-immersion/vidros-reflecta-bronze.jpg",
  "/amato-lima-experience/visual-immersion/quartzo-branco.jpg",
  "/amato-lima-experience/visual-immersion/monograma-travertino.png",
];

export default function VisualImmersion() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRefs = useRef<HTMLDivElement[]>([]);
  const veilRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const images = imageRefs.current;

    if (!section || images.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.set(images, {
        opacity: 0,
        scale: 1.14,
        filter: "blur(8px)",
      });

      gsap.set(images[0], {
        opacity: 1,
        scale: 1.04,
        filter: "blur(0px)",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=520%",
          scrub: 1.2,
          pin: true,
        },
      });

      images.forEach((image, index) => {
        if (index === 0) {
          tl.to(image, {
            scale: 1.16,
            filter: "blur(4px)",
            duration: 1,
          });

          return;
        }

        const previous = images[index - 1];

        tl.to(
          veilRef.current,
          {
            opacity: 0.72,
            duration: 0.35,
          },
          "-=0.2"
        );

        tl.to(
          previous,
          {
            opacity: 0,
            scale: 1.22,
            filter: "blur(12px)",
            duration: 0.75,
          },
          "<"
        );

        tl.to(
          image,
          {
            opacity: 1,
            scale: 1.04,
            filter: "blur(0px)",
            duration: 0.9,
          },
          "<+=0.2"
        );

        tl.to(
          veilRef.current,
          {
            opacity: 0,
            duration: 0.45,
          },
          "-=0.35"
        );

        tl.to(image, {
          scale: 1.16,
          filter: "blur(3px)",
          duration: 1,
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.stage}>
        {materials.map((src, index) => (
          <div
            key={src}
            ref={(el) => {
              if (el) imageRefs.current[index] = el;
            }}
            className={styles.imageLayer}
          >
            <Image
              src={src}
              alt=""
              fill
              priority={index === 0}
              className={styles.image}
            />
          </div>
        ))}

        <div ref={veilRef} className={styles.materialVeil} />
      </div>
    </section>
  );
      }
