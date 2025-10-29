"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import Lenis from "lenis";
import { useEffect, useRef, useState } from "react";

const images = [
  "/Impeller.jpg",
  "/why-choose-us.jpg",
  "/cnc-machine-1.jpg",
  "/cnc-prototype-1.jpg",
  "/DSCF5445-Enhanced-NR-768x512.jpg",
  "/Feed-Rod-Bearing.jpg",
  "/Fork_blkbg.jpg",
  "/enhanced_drone.jpg",
  "/Impeller.jpg",
  "/Five-Axis-Machining-Service.jpg",
  "/Poi-sappu-po-768x768.jpg",
  "/Press-Fit-768x768.jpg",
  "/Protective-Cap.jpg",
  "/prototyping.jpg",
  "/Tools-768x512.jpg",
];

const Skiper30 = () => {
  const gallery = useRef<HTMLDivElement>(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <main className="w-full bg-[#eee] text-black">
      {/* ====== Show full parallax ONLY on desktop ====== */}
      <div className="hidden md:block">
        {/* ======= Intro Section ======= */}
        <div className="font-geist flex h-screen items-center justify-center gap-2">
          <div className="absolute left-1/2 top-[10%] grid -translate-x-1/2 content-start justify-items-center gap-6 text-center text-black">
            <span className="relative max-w-[12ch] text-xs uppercase leading-tight opacity-40 after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-gradient-to-b after:from-white after:to-black after:content-['']">
              scroll down to see
            </span>
          </div>
        </div>

        {/* ======= Parallax Gallery ======= */}
        <div
          ref={gallery}
          className="relative box-border flex h-[175vh] gap-[2vw] overflow-hidden bg-white p-[2vw]"
        >
        <Column images={[images[0], images[1], images[2]]} y={y} />
        <Column images={[images[3], images[4], images[5]]} y={y2} />
        <Column images={[images[6], images[7], images[8]]} y={y3} />
        <Column images={[images[9], images[10], images[11]]} y={y4} />
        </div>

        {/* ======= Bottom Section ======= */}
        <div className="font-geist relative flex h-screen items-center justify-center gap-2">
          <div className="absolute left-1/2 top-[10%] grid -translate-x-1/2 content-start justify-items-center gap-6 text-center text-black">
            <span className="relative max-w-[12ch] text-xs uppercase leading-tight opacity-40 after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-gradient-to-b after:from-white after:to-black after:content-['']">
              scroll up to see
            </span>
          </div>
        </div>
      </div>

      {/* ====== Optional: Simple fallback for mobile ====== */}
      {/* <div className="block md:hidden py-20 text-center text-gray-700">
        <p className="text-sm opacity-60">Parallax gallery available on desktop</p>
      </div> */}
    </main>
  );
};

type ColumnProps = {
  images: string[];
  y: MotionValue<number>;
};

const Column = ({ images, y }: ColumnProps) => {
  return (
    <motion.div
      className="
        relative -top-[45%] flex h-full w-1/4 min-w-[250px] flex-col gap-[2vw]
        first:top-[-45%]
        [&:nth-child(2)]:top-[-95%]
        [&:nth-child(3)]:top-[-45%]
        [&:nth-child(4)]:top-[-75%]
      "
      style={{ y }}
    >
      {images.map((src, i) => (
        <div key={i} className="relative h-full w-full overflow-hidden">
          <img
            src={src}
            alt="image"
            className="pointer-events-none object-cover rounded-md"
          />
        </div>
      ))}
    </motion.div>
  );
};

export { Skiper30 };
