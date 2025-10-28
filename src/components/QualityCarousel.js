"use client";

import React from 'react';
import Image from 'next/image';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// This is an array of your cool part images!
const partImages = [
  { src: "/Impeller.jpg", alt: "CNC Machined Impeller" },
  { src: "/Feed-Rod-Bearing.jpg", alt: "Custom Feed Rod Bearing" },
  { src: "/Protective-Cap.jpg", alt: "Machined Protective Cap" },
  { src: "/Fork_blkbg.jpg", alt: "Precision Machined Fork" },
  { src: "/Press-Fit-768x768.jpg", alt: "Press Fit Component" },
];

export default function QualityCarousel() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      className="w-full h-[300px] md:h-[500px] rounded-lg shadow-2xl"
      breakpoints={{
        // when window width is >= 768px
        768: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        // when window width is >= 1024px
        1024: {
          slidesPerView: 3,
          spaceBetween: 40
        }
      }}
    >
      {partImages.map((image) => (
        <SwiperSlide key={image.src}>
          <div className="relative w-full h-full">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 bg-black/50 text-white p-3 w-full">
              <p className="font-medium text-center">{image.alt}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}