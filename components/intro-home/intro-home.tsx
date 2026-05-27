"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./intro-home.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function IntroHome() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const svg = svgRef.current;

    if (!section || !svg) return;

    const ctx = gsap.context(() => {
      const lines = svg.querySelectorAll<SVGPathElement | SVGLineElement | SVGRectElement | SVGCircleElement>(
        ".draw"
      );

      lines.forEach((line) => {
        const length = line.getTotalLength();

        gsap.set(line, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });
      });

      gsap.set(".fadeItem", {
        opacity: 0,
        y: 8,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=2600",
          scrub: 1.2,
          pin: true,
        },
      });

      tl.to(".gridLine", {
        opacity: 0.26,
        duration: 0.8,
        stagger: 0.01,
      });

      tl.to(
        ".measureLine",
        {
          strokeDashoffset: 0,
          opacity: 0.65,
          duration: 1.3,
          stagger: 0.035,
        },
        "-=0.3"
      );

      tl.to(
        ".technicalText",
        {
          opacity: 0.58,
          y: 0,
          duration: 0.9,
          stagger: 0.035,
        },
        "-=0.5"
      );

      tl.to(
        ".logoLine",
        {
          strokeDashoffset: 0,
          opacity: 0.92,
          duration: 2.4,
          stagger: 0.08,
        },
        "-=0.35"
      );

      tl.to(
        ".detailLine",
        {
          strokeDashoffset: 0,
          opacity: 0.5,
          duration: 1.2,
          stagger: 0.035,
        },
        "-=1.4"
      );

      tl.to(
        ".technicalTextSmall",
        {
          opacity: 0.46,
          y: 0,
          duration: 0.7,
          stagger: 0.025,
        },
        "-=0.8"
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.intro}>
      <svg
        ref={svgRef}
        className={styles.blueprint}
        viewBox="0 0 240 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* grid */}
        {Array.from({ length: 25 }).map((_, i) => (
          <line
            key={`v-${i}`}
            className="gridLine"
            x1={i * 10}
            y1="0"
            x2={i * 10}
            y2="240"
          />
        ))}

        {Array.from({ length: 25 }).map((_, i) => (
          <line
            key={`h-${i}`}
            className="gridLine"
            x1="0"
            y1={i * 10}
            x2="240"
            y2={i * 10}
          />
        ))}

        {/* frame principal */}
        <rect className="draw measureLine" x="28" y="24" width="184" height="190" />

        {/* medidas externas */}
        <line className="draw measureLine" x1="28" y1="14" x2="212" y2="14" />
        <line className="draw measureLine" x1="28" y1="10" x2="28" y2="20" />
        <line className="draw measureLine" x1="212" y1="10" x2="212" y2="20" />

        <line className="draw measureLine" x1="16" y1="24" x2="16" y2="214" />
        <line className="draw measureLine" x1="12" y1="24" x2="22" y2="24" />
        <line className="draw measureLine" x1="12" y1="214" x2="22" y2="214" />

        <line className="draw measureLine" x1="42" y1="224" x2="198" y2="224" />
        <line className="draw measureLine" x1="42" y1="219" x2="42" y2="229" />
        <line className="draw measureLine" x1="198" y1="219" x2="198" y2="229" />

        {/* monograma técnico */}
        <path
          className="draw logoLine"
          d="M72 157
             C51 142 50 90 75 63
             C94 43 127 47 142 72
             C162 105 145 153 103 163"
        />

        <path
          className="draw logoLine"
          d="M75 158
             C89 153 93 139 93 120
             L93 61"
        />

        <path
          className="draw logoLine"
          d="M95 64
             C120 74 135 94 135 119
             C135 145 119 163 96 169"
        />

        <path
          className="draw logoLine"
          d="M116 67
             H168
             C178 67 185 75 185 85
             V157"
        />

        <path
          className="draw logoLine"
          d="M158 83
             V157
             H187"
        />

        {/* linhas internas e cortes técnicos */}
        <path
          className="draw detailLine"
          d="M82 62 L52 30"
        />

        <path
          className="draw detailLine"
          d="M151 67 L179 36"
        />

        <path
          className="draw detailLine"
          d="M158 157 L185 184"
        />

        <path
          className="draw detailLine"
          d="M72 157 L50 183"
        />

        <path
          className="draw detailLine"
          d="M104 48 H178"
        />

        <path
          className="draw detailLine"
          d="M105 180 H188"
        />

        <path
          className="draw detailLine"
          d="M141 72 C151 88 153 113 145 137"
        />

        <path
          className="draw detailLine"
          d="M105 73 C122 83 129 98 129 118"
        />

        {/* textos técnicos */}
        <text className="fadeItem technicalText" x="86" y="10">
          Overall: 200 x 200
        </text>

        <text className="fadeItem technicalText" x="32" y="232">
          Depth: 15.0
        </text>

        <text className="fadeItem technicalText" x="-185" y="12" transform="rotate(-90)">
          Overall: 200 x 200
        </text>

        <text className="fadeItem technicalTextSmall" x="73" y="49">
          R 25.4
        </text>

        <text className="fadeItem technicalTextSmall" x="148" y="57">
          R 25.4
        </text>

        <text className="fadeItem technicalTextSmall" x="156" y="73">
          R 3
        </text>

        <text className="fadeItem technicalTextSmall" x="152" y="171">
          8.0
        </text>

        <text className="fadeItem technicalTextSmall" x="102" y="188">
          AS-IS PROFILE
        </text>

        <text className="fadeItem technicalTextSmall" x="102" y="197">
          SURFACE ROUGHNESS N7
        </text>
      </svg>
    </section>
  );
}
