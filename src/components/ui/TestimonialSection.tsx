"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

type Testimonial = {
  name: string;
  role: string;
  feedback: string;
  rating?: number;
};

interface TestimonialSectionProps {
  testimonials: Testimonial[];
  backgroundImage?: string;
}

export default function TestimonialSection({
  testimonials,
  backgroundImage = "/images/testimonial-bg.jpg",
}: TestimonialSectionProps) {
  return (
    <section
      className="relative w-full overflow-hidden py-16 md:py-24 text-gray-900"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-white/10 " />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-10 sm:mb-12 drop-shadow-sm">
          Happy <span className="text-orange-500">Clients</span> Say About Us
        </h2>

          {/* Auto-scrolling testimonials (works on all screens) */}
          <motion.div
            className="flex gap-6 sm:gap-8"
            animate={{ x: ["0%", "-70%"] }}
            transition={{
              repeat: Infinity,
              duration: 35, // slower for smoother mobile feel
              ease: "linear",
            }}
          >
          {[...testimonials, ...testimonials].map((testimonial, i) => (
            <motion.div
              key={i}
              className="min-w-[260px] sm:min-w-[320px] max-w-[360px] bg-white/70 p-5 sm:p-6 rounded-2xl text-left shadow-md backdrop-blur-sm border border-gray-100 hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
            >
              {/* Rating */}
              {testimonial.rating && (
                <div className="flex mb-3 text-orange-400">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      size={16}
                      fill={starIndex < testimonial.rating ? "#f97316" : "none"}
                      stroke="#f97316"
                      className="mr-1"
                    />
                  ))}
                </div>
              )}

              {/* Feedback */}
              <p className="text-gray-700 italic leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                “{testimonial.feedback}”
              </p>

              {/* Name + Role */}
              <h3 className="font-semibold text-gray-900 text-base sm:text-lg">
                {testimonial.name}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500">
                {testimonial.role}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Soft fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white via-white/70 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white via-white/70 to-transparent pointer-events-none" />
    </section>
  );
}
