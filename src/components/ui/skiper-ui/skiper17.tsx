"use client";

import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { cn } from "@/lib/utils";

interface CardData {
  id: number | string;
  image: string;
  alt?: string;
}

interface StickyCard002Props {
  cards: CardData[];
  className?: string;
  containerClassName?: string;
  imageClassName?: string;
}

// ✅ Smooth scroll hook using Lenis
function useLenis() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // ✅ Updated options for new Lenis API
    const lenis = new Lenis({
      lerp: 0.1, // smoothness (0–1)
      wheelMultiplier: 1.2,
      touchMultiplier: 1.2,
      duration: 1.2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);
}


const StickyCard002 = ({
  cards,
  className,
  containerClassName,
  imageClassName,
}: StickyCard002Props) => {
  const container = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

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
        if (!current || !next) continue;

        tl.to(current, { scale: 0.8, rotation: 3, duration: 1 }, i)
          .to(next, { y: "0%", duration: 1 }, i);
      }

      const resizeObserver = new ResizeObserver(() => ScrollTrigger.refresh());
      if (container.current) resizeObserver.observe(container.current);

      return () => {
        resizeObserver.disconnect();
        tl.kill();
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    },
    { scope: container }
  );

  return (
    <div ref={container} className={cn("relative h-full w-full", className)}>
      <div className="sticky-cards relative flex h-screen items-center justify-center overflow-hidden p-3 lg:p-8">
        <div
          className={cn(
            "relative h-[90%] w-full max-w-2xl overflow-hidden rounded-xl",
            containerClassName
          )}
        >
          {cards.map((card, i) => (
            <img
              key={card.id}
              src={card.image}
              alt={card.alt || ""}
              ref={(el) => {
                imageRefs.current[i] = el;
              }}
              className={cn(
                "absolute inset-0 h-full w-full object-cover rounded-xl",
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
  useLenis(); // ✅ Activate smooth scrolling

  const defaultCards = [
    { id: 1, image: "/hero-bg.jpg" },
    { id: 2, image: "/about-epsilon-01-1.png" },
    { id: 3, image: "/cnc-machine-1.jpg" },
    { id: 4, image: "/Five-Axis-Machining-Service.jpg" },
  ];

  return (
    <div className="h-[400vh] w-full">
      <StickyCard002 cards={defaultCards} />
    </div>
  );
};
