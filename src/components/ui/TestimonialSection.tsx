"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react"; // icon package included in shadcn UI

type Testimonial = {
  name: string;
  role: string;
  feedback: string;
  rating?: number; // from 1 to 5
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
      className="relative w-full overflow-hidden py-24 text-gray-900"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Light overlay for readability */}
      <div className="absolute" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        {/* Section heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12 drop-shadow-sm">
          Happy <span className="text-orange-500">Clients</span> Say About Us
        </h2>

        {/* Auto-scrolling row */}
        <motion.div
          className="flex gap-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
        >
          {[...testimonials, ...testimonials].map((testimonial, i) => (
            <motion.div
              key={i}
              className="min-w-[320px] max-w-[360px] bg-white/70 p-6 rounded-2xl text-left shadow-md backdrop-blur-sm border border-gray-100 hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
            >
              {/* Rating stars */}
              {testimonial.rating && (
                <div className="flex mb-3 text-orange-400">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      size={18}
                      fill={starIndex < testimonial.rating ? "#f97316" : "none"}
                      stroke="#f97316"
                      className="mr-1"
                    />
                  ))}
                </div>
              )}

              {/* Feedback */}
              <p className="text-gray-700 italic leading-relaxed mb-4">
                “{testimonial.feedback}”
              </p>

              {/* Name + Role */}
              <h3 className="font-semibold text-gray-900 text-lg">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Soft gradient edges for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/70 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white/70 to-transparent pointer-events-none" />
    </section>
  );
}
