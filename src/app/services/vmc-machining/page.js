"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function VmcMachiningPage() {
  return (
    <main className="overflow-hidden bg-gradient-to-b from-slate-50 to-blue-50 text-gray-800">
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[85vh] flex flex-col justify-center items-center text-white overflow-hidden select-none">
        {/* Background Gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />

        {/* Soft Glow Light */}
        <motion.div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-blue-300/30 rounded-full blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        {/* Rotating Gear SVG */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="absolute w-72 h-72 text-blue-300/40 top-20 left-10"
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        >
          <path
            fill="currentColor"
            d="M487.4 315.7l-46.3-26.8c2.3-13.6 3.5-27.6 3.5-41.9s-1.2-28.3-3.5-41.9l46.3-26.8c7.6-4.4 10.5-13.8 6.9-21.7l-45.2-90.4c-3.7-7.5-12.2-11.3-20.3-8.8l-52.9 16.4c-20.9-15.9-44.1-28.6-69.3-37.3L261 9.4c-8-2.7-16.9.8-20.7 8.2l-45.1 90.3c-3.9 7.7-.9 17.1 6.7 21.5l46.6 26.9c-1.8 9.6-2.7 19.6-2.7 29.8 0 10.2.9 20.2 2.7 29.8l-46.6 26.9c-7.6 4.4-10.6 13.8-6.7 21.5l45.1 90.3c3.8 7.4 12.7 10.9 20.7 8.2l52.9-16.4c25.2 8.7 48.4 21.4 69.3 37.3l52.9 16.4c8.1 2.5 16.6-1.3 20.3-8.8l45.2-90.4c3.6-7.9.7-17.3-6.9-21.7zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"
          />
        </motion.svg>

        {/* Floating Ring */}
        <motion.div
          className="absolute bottom-24 right-16 w-52 h-52 border-[2px] border-blue-300/40 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />

        {/* CNC Machine Outline SVG (subtle background right) */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 600 400"
          className="absolute bottom-10 right-8 w-[380px] h-[200px] text-blue-200/30"
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <rect
            x="50"
            y="50"
            width="500"
            height="250"
            rx="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle
            cx="150"
            cy="175"
            r="50"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <rect
            x="300"
            y="100"
            width="200"
            height="150"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </motion.svg>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Precision <span className="text-blue-300">VMC Machining</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Vertical Machining Centers engineered for extreme accuracy, superior
            finish, and repeatable excellence.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-lg font-semibold shadow-lg transition-all"
          >
            Request a Quote
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Link>
        </motion.div>
      </section>  

      {/* ================= ABOUT SECTION ================= */}
      <section className="py-20 container mx-auto px-6 md:px-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            What is VMC Machining?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            VMC (Vertical Machining Center) machining involves the use of
            vertically oriented spindles and advanced CNC controls to create
            precise, complex, and high-quality components. At AB Industries, our
            VMC machines are equipped with the latest 4th-axis technologies,
            ensuring both precision and productivity in every cut.
          </p>
          <ul className="mt-6 space-y-2 text-gray-700">
            <li>✔️ High-speed precision cutting</li>
            <li>✔️ 3 & 4 Axis VMC machines for intricate geometries</li>
            <li>✔️ Excellent surface finish and dimensional accuracy</li>
            <li>✔️ Handles metals, alloys, and engineering plastics</li>
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <Image
            src="/Five-Axis-Machining-Service.jpg"
            alt="VMC Machining"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg"
          />
          <motion.div
            className="absolute -bottom-6 -right-6 w-40 h-40 bg-blue-400/20 blur-2xl rounded-full"
            animate={{ opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-20 bg-white text-gray-800">
        <div className="container mx-auto px-6 md:px-16">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-10">
            Key Highlights of Our VMC Machining
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Exceptional Precision",
                desc: "Achieving tolerance levels as low as 5 microns for superior accuracy.",
              },
              {
                title: "Multi-Material Capability",
                desc: "Expertise in machining aluminum, brass, stainless steel, and composites.",
              },
              {
                title: "Optimized Productivity",
                desc: "High spindle speed and automation ensure consistent performance.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-8 rounded-2xl shadow-md bg-gradient-to-b from-blue-50 to-white border border-blue-100"
              >
                <h3 className="text-xl font-semibold text-blue-700 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-20 bg-gradient-to-br from-blue-100 to-blue-50">
        <div className="container mx-auto px-6 md:px-16 text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-8">
            How Our VMC Process Works
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                step: "01",
                title: "Design & Programming",
                desc: "Using CAD/CAM tools to create detailed 3D models and machining paths.",
              },
              {
                step: "02",
                title: "Precision Machining",
                desc: "Advanced VMC machines execute tool paths with high-speed accuracy.",
              },
              {
                step: "03",
                title: "Quality Inspection",
                desc: "Each component undergoes strict dimensional and surface testing.",
              },
            ].map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="p-8 bg-white rounded-xl shadow-lg border-t-4 border-blue-500"
              >
                <span className="text-blue-700 text-4xl font-bold mb-4 block">
                  {s.step}
                </span>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">
                  {s.title}
                </h3>
                <p className="text-gray-700">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INDUSTRIES ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-16">
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-10">
            Industries We Serve
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
            {[
              "Aerospace Components",
              "Automotive Manufacturing",
              "Robotics & Automation",
              "Industrial Equipment",
              "Medical Devices",
              "Consumer Electronics",
            ].map((ind, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 shadow-sm"
              >
                <p className="text-blue-800 font-semibold">{ind}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-500 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Begin Your Precision Project?
        </h2>
        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
          Connect with our machining experts to explore how our advanced VMC
          technology can bring your designs to life.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-blue-100 transition"
        >
          Get in Touch
        </Link>
      </section>
    </main>
  );
}
