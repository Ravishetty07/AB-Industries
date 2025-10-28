"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

interface TextRevealBoxProps {
  textBlocks: string[];
  highlightWords?: string[];
}

export const TextRevealBox = ({
  textBlocks = [],
  highlightWords = ["innovation", "precision", "future"],
}: TextRevealBoxProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  // Add smoothing to scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    mass: 0.4,
  });

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen flex-col items-center justify-center bg-black px-6 py-32 text-white overflow-hidden"
    >
      <div className="max-w-5xl w-full space-y-20 text-center">
        {textBlocks.map((block, blockIndex) => {
          const words = block.split(" ");

          return (
            <div
              key={blockIndex}
              className="flex flex-wrap justify-center text-[2.4rem] md:text-[3rem] font-extrabold leading-tight tracking-tight"
            >
              {words.map((word, i) => {
                const start = (blockIndex * 0.25) + (i / words.length) * 0.3;
                const end = start + 0.25;

                const opacity = useTransform(smoothProgress, [start, end], [0, 1]);
                const y = useTransform(smoothProgress, [start, end], [40, 0]);
                const isHighlight = highlightWords.some((h) =>
                  word.toLowerCase().includes(h.toLowerCase())
                );

                return (
                  <motion.span
                    key={i}
                    style={{ opacity, y }}
                    className={`mx-[6px] transition-colors duration-500 ${
                      isHighlight ? "text-orange-500" : "text-white"
                    }`}
                  >
                    {word}
                  </motion.span>
                );
              })}
            </div>
          );
        })}
      </div>

      {/* subtle top & bottom fade for cinematic depth */}
      <div className="pointer-events-none absolute top-0 left-0 h-32 w-full bg-gradient-to-b from-black to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};
