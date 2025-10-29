"use client";

import { motion } from "framer-motion";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  Cog,
  Factory,
  Layers,
  Wrench,
} from "lucide-react";
import React from "react";
import { Autoplay, EffectCreative, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { cn } from "@/lib/utils";

const Skiper51 = () => {
  const images = [
    { src: "/cnc-1.avif", alt: "CNC Machining Center" },
    { src: "/cnc-2.avif", alt: "Precision Turning Center" },
    { src: "/cnc-main.jpg", alt: "Vertical Machining Center" },
    { src: "/vmc-machine-4.jpg", alt: "VMC Machine in Operation" },
    { src: "/infra-1.jpg", alt: "Infrastructure Overview" },
    { src: "/infra-inside-2.jpg", alt: "Production Floor" },
    { src: "/machine.jpg", alt: "Quality Inspection" },
    { src: "/cncoper-2.jpg", alt: "Quality Inspection" },
  ];

  return (
    <section className="relative flex flex-col items-center justify-center w-full min-h-[90vh] overflow-hidden bg-gradient-to-b from-slate-50 via-slate-100 to-slate-200">
      {/* ===== Decorative gradient circles ===== */}
      <motion.div
        className="absolute -top-20 left-0 w-[400px] h-[400px] bg-blue-200/30 rounded-full blur-[100px]"
        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-blue-300/25 rounded-full blur-[100px]"
        animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      {/* ===== Floating industrial icons ===== */}
      <motion.div
        className="absolute top-[18%] left-[8%] text-blue-400/40"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <Cog className="w-14 h-14" />
      </motion.div>

      <motion.div
        className="absolute top-[25%] right-[10%] text-blue-300/40"
        animate={{ rotate: -360 }}
        transition={{ duration: 75, repeat: Infinity, ease: "linear" }}
      >
        <Factory className="w-16 h-16" />
      </motion.div>

      <motion.div
        className="absolute bottom-[15%] left-[5%] text-blue-400/30"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <Wrench className="w-14 h-14" />
      </motion.div>

      <motion.div
        className="absolute bottom-[20%] right-[5%] text-blue-300/40"
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      >
        <Layers className="w-14 h-14" />
      </motion.div>

      {/* ===== Section Heading ===== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center mb-10 px-6"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
          Our <span className="text-blue-600">Infrastructure</span>
        </h2>
        <p className="text-slate-600 mt-3 text-lg max-w-2xl mx-auto">
          Precision-built facilities and advanced machinery powering quality manufacturing.
        </p>
      </motion.div>

      {/* ===== Carousel Section ===== */}
      <div className="relative z-10 w-full max-w-6xl px-4 md:px-8">
        <Carousel_005
          images={images}
          autoplay
          showPagination
          loop
          spaceBetween={30}
        />
      </div>
    </section>
  );
};

export { Skiper51 };

const Carousel_005 = ({
  images,
  className,
  showPagination = false,
  showNavigation = false,
  loop = true,
  autoplay = false,
  spaceBetween = 0,
}: {
  images: { src: string; alt: string }[];
  className?: string;
  showPagination?: boolean;
  showNavigation?: boolean;
  loop?: boolean;
  autoplay?: boolean;
  spaceBetween?: number;
}) => {
  const css = `
    .Carousal_005 {
      width: 100%;
      height: 520px;
      padding-bottom: 60px !important;
    }
    .Carousal_005 .swiper-slide {
      background-position: center;
      background-size: cover;
      border-radius: 30px;
      transition: transform 0.6s ease;
    }
    .Carousal_005 .swiper-slide-active {
      transform: scale(1.08);
    }
    .Carousal_005 .swiper-pagination-bullet {
      background-color: #1e40af !important;
      opacity: 0.5;
    }
    .Carousal_005 .swiper-pagination-bullet-active {
      opacity: 1;
      scale: 1.2;
    }
  `;

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.6 }}
      className={cn("relative w-full", className)}
    >
      <style>{css}</style>

      <Swiper
        spaceBetween={spaceBetween}
        autoplay={
          autoplay
            ? { delay: 2500, disableOnInteraction: false }
            : undefined
        }
        effect="creative"
        grabCursor
        slidesPerView="auto"
        centeredSlides
        loop={loop}
        pagination={showPagination ? { clickable: true } : false}
        navigation={
          showNavigation
            ? {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }
            : false
        }
        className="Carousal_005"
        creativeEffect={{
          prev: { shadow: true, translate: [0, 0, -400] },
          next: { translate: ["100%", 0, 0] },
        }}
        modules={[EffectCreative, Pagination, Autoplay]}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image.src}
              alt={image.alt}
              className="h-[520px] w-full rounded-3xl object-cover shadow-xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export { Carousel_005 };
