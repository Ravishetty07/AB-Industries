"use client";

import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { cn } from "@/lib/utils";

// ✅ Smooth scroll
function useLenis() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const lenis = new Lenis({
      lerp: 0.075,        // Lower = smoother
      duration: 1.6,      // Smooth feel
      smoothTouch: true,  // ✅ enable mobile smoothness
      wheelMultiplier: 0.9,
      touchMultiplier: 0.6, // ✅ reduce touch speed (fix mobile jump)
    } as any);

    // ✅ Sync GSAP with Lenis
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => lenis.destroy();
  }, []);
}



const StickyCard002 = ({
  cards,
  className = "",
  containerClassName = "",
  imageClassName = "",
}) => {
  const container = useRef(null);
  const imageRefs = useRef([]);

  useGSAP(
    () => {
      if (typeof window === "undefined") return;

      gsap.registerPlugin(ScrollTrigger);
      const images = imageRefs.current;
      const total = images.length;

      if (!total) return;

      gsap.set(images[0], { y: "0%", scale: 1 });
      for (let i = 1; i < total; i++) {
        gsap.set(images[i], { y: "100%", scale: 1 });
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".sticky-cards",
          start: "top top",
          end: () => `+=${window.innerHeight * (total - 1)}`,
          pin: true,
          scrub: 0.5,
          pinSpacing: true,
        },
      });

      for (let i = 0; i < total - 1; i++) {
        const current = images[i];
        const next = images[i + 1];

        tl.to(current, { scale: 0.85, rotation: 18, duration: 1 }, i).to(
          next,
          { y: "0%", duration: 1 },
          i
        );
      }

      ScrollTrigger.refresh();
    },
    { scope: container }
  );

  return (
    <div ref={container} className={cn("relative h-full w-full", className)}>
      {/* ⚙️ Background SVG gears */}
      <svg
        className="pointer-events-none absolute left-5 top-20 h-28 w-28 opacity-25 animate-spin-slow"
        viewBox="0 0 100 100"
      >
        <circle
          cx="50"
          cy="50"
          r="35"
          stroke="white"
          strokeWidth="5"
          fill="none"
        />
      </svg>
      <svg
        className="pointer-events-none absolute right-5 bottom-20 h-28 w-28 opacity-25 animate-spin-slow-reverse"
        viewBox="0 0 100 100"
      >
        <circle
          cx="50"
          cy="50"
          r="25"
          stroke="white"
          strokeWidth="4"
          fill="none"
        />
      </svg>

      <div className="sticky-cards relative flex h-screen items-center justify-center overflow-hidden p-2 sm:p-4 lg:p-12">
        <div
          className={cn(
            "relative h-[55vh] sm:h-[80vh] w-full max-w-[90%] sm:max-w-3xl lg:max-w-5xl mx-auto overflow-hidden rounded-xl border border-white/10 shadow-2xl",
            containerClassName
          )}
        >
          {cards.map((card, i) => (
            <img
              key={card.id}
              src={card.image}
              alt=""
              ref={(el) => {
                imageRefs.current[i] = el;
              }}
              className={cn(
                "absolute inset-0 h-full w-full object-cover rounded-2xl",
                imageClassName
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const Skiper17 = () => {
  useLenis();
  const defaultCards = [
    { id: 1, image: "/new1.jpg" },
    { id: 2, image: "/new2.jpg" },
    { id: 3, image: "/new3.jpg" },
    { id: 4, image: "/new5.jpg" },
  ];

  return (
    <div className="h-[400vh] w-full bg-black text-white">
      <StickyCard002
        cards={defaultCards}
        className=""
        containerClassName=""
        imageClassName=""
      />
    </div>
  );
};

export default Skiper17;
