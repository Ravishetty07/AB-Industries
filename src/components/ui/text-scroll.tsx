"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface TextScrollProps {
  text: string;
  default_velocity?: number;
  className?: string;
}

interface ParallaxProps {
  children: string;
  baseVelocity: number;
  className?: string;
}

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export const TextScroll: React.FC<TextScrollProps> = ({
  text,
  default_velocity = 5,
  className,
}) => {
  const ParallaxText: React.FC<ParallaxProps> = ({
    children,
    baseVelocity = 100,
    className,
  }) => {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
      damping: 50,
      stiffness: 400,
    });

    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
      clamp: false,
    });

    const [repetitions, setRepetitions] = useState(1);
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
      const calculateRepetitions = () => {
        if (containerRef.current && textRef.current) {
          const containerWidth = containerRef.current.offsetWidth;
          const textWidth = textRef.current.offsetWidth;
          const newRepetitions = Math.ceil(containerWidth / textWidth) + 2;
          setRepetitions(newRepetitions);
        }
      };

      calculateRepetitions();
      window.addEventListener("resize", calculateRepetitions);
      return () => window.removeEventListener("resize", calculateRepetitions);
    }, [children]);

    const x = useTransform(baseX, (v) => `${wrap(-100 / repetitions, 0, v)}%`);
    const directionFactor = useRef<number>(1);

    useAnimationFrame((_, delta) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
      if (velocityFactor.get() < 0) directionFactor.current = -1;
      else if (velocityFactor.get() > 0) directionFactor.current = 1;
      moveBy += directionFactor.current * moveBy * velocityFactor.get();
      baseX.set(baseX.get() + moveBy);
    });

    return (
      <div
        className="relative w-full overflow-hidden whitespace-nowrap"
        ref={containerRef}
      >
        {/* gradient mask for light theme */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-1/6 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-1/6 bg-gradient-to-l from-white to-transparent" />

        <motion.div
          className={cn(
            "inline-block will-change-transform select-none",
            className
          )}
          style={{
            x,
             // slight tilt angle in degrees
          }}
        >
          {Array.from({ length: repetitions }).map((_, i) => (
            <span key={i} ref={i === 0 ? textRef : null}>
              {children}{" "}
            </span>
          ))}
        </motion.div>
      </div>
    );
  };

  return (
    <section className="relative w-full bg-gradient-to-br from-white via-slate-50 to-white   py-16 md:py-28">
      <div className="relative z-10">
        <ParallaxText
          baseVelocity={default_velocity}
          className={cn(
            "font-extrabold uppercase tracking-tight text-4xl md:text-7xl bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 bg-clip-text text-transparent",
            className
          )}
        >
          {text}
        </ParallaxText>
        <ParallaxText
          baseVelocity={-default_velocity}
          className={cn(
            "font-extrabold uppercase tracking-tight text-4xl md:text-7xl bg-gradient-to-r from-gray-400 via-slate-400 to-gray-300 bg-clip-text text-transparent opacity-70",
            className
          )}
        >
          {text}
        </ParallaxText>
      </div>
    </section>
  );
};
