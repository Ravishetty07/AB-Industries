"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const TextScrollReveal = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8], [0, 1, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2, 1], [50, 0, -30]);

  const text = `At AB Industries, we engineer precision components with innovation, quality, and consistency at every stage of manufacturing.`;

  const words = text.split(" ");

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center items-center bg-white text-gray-900 px-6"
    >
      <div className="max-w-4xl text-center">
        <motion.h2
          style={{ opacity, y }}
          className="text-3xl md:text-5xl font-bold leading-tight"
        >
          Scroll to reveal our story
        </motion.h2>

        <div className="mt-12 text-2xl md:text-3xl font-medium leading-relaxed tracking-tight text-gray-800 flex flex-wrap justify-center">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: i * 0.05,
                duration: 0.4,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.6 }}
              className="mx-1 inline-block"
            >
              {word}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};
