"use client";

import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import ReactLenis from "lenis/react";
import React, { useRef } from "react";

const Skiper28 = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const yMotionValue = useTransform(scrollYProgress, [0, 1], [487, 0]);
  const transform = useMotionTemplate`rotateX(30deg) translateY(${yMotionValue}px) translateZ(10px)`;

  return (
    <ReactLenis root>
      <div
        ref={targetRef}
        className="relative z-0 h-[300vh] w-screen bg-[#f5f4f3] text-black"
      >
        <div className="absolute left-1/2 top-[10%] grid -translate-x-1/2 content-start justify-items-center gap-6 text-center text-black">
          <span className="relative max-w-[12ch] text-xs uppercase leading-tight opacity-40 after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-gradient-to-b after:from-white after:to-black after:content-['']">
            scroll down to see
          </span>
        </div>
        <div
          className="sticky top-0 mx-auto flex items-center justify-center bg-transparent py-20"
          style={{
            transformStyle: "preserve-3d",
            perspective: "200px",
          }}
        >
          <motion.div
            style={{
              transformStyle: "preserve-3d",
              transform,
            }}
            className="font-geist w-full max-w-4xl text-center text-6xl font-bold tracking-tighter text-[#ff5800]"
          >
            At AB Industries, precision isn’t just a process — it’s our promise.
            We combine decades of experience with next-generation manufacturing
            technology to deliver products that meet global standards. From CNC
            machining to high-accuracy prototyping, every operation is driven by
            innovation, discipline, and a deep respect for engineering
            excellence. Our facilities are powered by advanced machines, but
            it’s our skilled team that gives every component its soul. We
            believe in progress built on precision, craftsmanship that inspires
            confidence, and technology that transforms ideas into reality. This
            is where quality is created — this is AB Industries.
            <div className="absolute bottom-0 left-0 h-[60vh] w-full bg-gradient-to-b from-transparent to-white" />
          </motion.div>
        </div>
      </div>
    </ReactLenis>
  );
};

export { Skiper28 };

/**
 * Skiper 28 PerspectiveTextScroll — React + framer motion + lenis
 *
 * License & Usage:
 * - Free to use and modify in both personal and commercial projects.
 * - Attribution to Skiper UI is required when using the free version.
 * - No attribution required with Skiper UI Pro.
 *
 * Feedback and contributions are welcome.
 *
 * Author: @gurvinder-singh02
 * Website: https://gxuri.in
 * Twitter: https://x.com/Gur__vi
 */
