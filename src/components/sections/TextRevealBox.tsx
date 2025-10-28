"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const TextRevealBox = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // triggers when the section enters viewport
  });

  // smoother transforms
  const opacity = useTransform(scrollYProgress, [0.1, 0.4, 1], [0, 1, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -50]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-white to-gray-100 text-gray-900 px-6 overflow-hidden"
    >
      <motion.div
        style={{ opacity, y }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto text-center space-y-10"
      >
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Precision Engineering for a{" "}
          <span className="text-orange-600">Smarter Future</span>
        </h2>

        <p className="text-lg md:text-2xl text-gray-700">
          At <span className="font-semibold text-gray-900">AB Industries</span>,
          we combine modern CNC machining and advanced manufacturing techniques
          to deliver world-class mechanical components with{" "}
          <span className="text-orange-600 font-semibold">unmatched accuracy</span>.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {[
            "CNC Machining",
            "Tool Fabrication",
            "Laser Cutting",
            "Prototype Development",
            "5-Axis Milling",
          ].map((text, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true, amount: 0.4 }}
              className="px-6 py-3 bg-gray-200 rounded-full text-gray-900 font-medium text-sm shadow-sm"
            >
              {text}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
