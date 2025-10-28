"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function CncMachiningPage() {
  return (
    <main className="overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[90vh] flex flex-col justify-center items-center text-white overflow-hidden select-none">
        {/* Background Gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-blue-700"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{ backgroundSize: "200% 200%" }}
        />

        {/* Soft Light Glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Rotating Gear SVG */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          className="absolute w-40 h-40 text-blue-300/20 top-24 left-20"
          stroke="currentColor"
          strokeWidth="1.4"
          fill="none"
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        >
          <circle cx="32" cy="32" r="12" />
          <path d="M32 4v8M32 52v8M4 32h8M52 32h8M12.7 12.7l5.6 5.6M45.7 45.7l5.6 5.6M12.7 51.3l5.6-5.6M45.7 18.3l5.6-5.6" />
        </motion.svg>

        {/* Content */}
        <div className="relative z-10 text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="uppercase tracking-[4px] text-blue-200 text-sm mb-4"
          >
            Precision Meets Innovation
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight"
          >
            CNC Machining <span className="text-blue-300">Solutions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-8"
          >
            High-precision CNC components crafted with advanced multi-axis
            machining for complex industrial needs.
          </motion.p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-lg font-semibold shadow-lg transition-colors"
          >
            Get a Quote
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
        </div>
      </section>

      {/* ================= OVERVIEW SECTION ================= */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-[url('/bg-map-2.png')] opacity-[0.05] bg-cover bg-center"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl shadow-lg overflow-hidden"
          >
            <Image
              src="/cnc-machine-1.jpg"
              alt="CNC Machining Service"
              width={600}
              height={400}
              className="rounded-2xl object-cover"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Precision CNC <span className="text-blue-600">Machining</span>
            </h2>
            <p className="text-blue-800/80 mb-6 leading-relaxed text-lg">
              Our CNC machining services deliver exceptional precision and
              repeatability. We specialize in producing complex components with
              tight tolerances for automotive, aerospace, and industrial
              sectors.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              {[
                {
                  title: "Tight Tolerances",
                  desc: "Accuracy up to 5 microns with perfect surface finish.",
                },
                {
                  title: "Multi-Axis Capability",
                  desc: "Advanced 3, 4, and 5-axis CNC machining options.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-white border border-blue-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-7 h-7 text-blue-600 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6l4 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-blue-900">
                      {item.title}
                    </h4>
                    <p className="text-sm text-blue-800/70">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-24 bg-gradient-to-b from-blue-50 to-white text-center">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-12 text-slate-800"
          >
            Why Choose <span className="text-blue-600">AB Industries</span>?
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                title: "Advanced Technology",
                desc: "Equipped with 5-axis CNC and precision measuring instruments.",
                icon: (
                  <svg
                    className="w-10 h-10 text-blue-600 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l4 4H8l4-4z" />
                    <rect x="4" y="6" width="16" height="14" rx="2" />
                  </svg>
                ),
              },
              {
                title: "Skilled Workforce",
                desc: "Experienced professionals ensuring world-class part quality.",
                icon: (
                  <svg
                    className="w-10 h-10 text-blue-600 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="7" r="4" />
                    <path d="M6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
                  </svg>
                ),
              },
              {
                title: "End-to-End Capability",
                desc: "From CAD design to final inspection, we manage the full process.",
                icon: (
                  <svg
                    className="w-10 h-10 text-blue-600 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 3h18v4H3z" />
                    <path d="M8 7v14l8-4V7z" />
                  </svg>
                ),
              },
              {
                title: "Quality Assurance",
                desc: "Every component passes through rigorous inspection and testing.",
                icon: (
                  <svg
                    className="w-10 h-10 text-blue-600 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 12l2 2 4-4" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="bg-white p-8 rounded-2xl shadow-md border border-blue-100 transition"
              >
                {item.icon}
                <h3 className="font-semibold text-lg mb-2 text-slate-800">
                  {item.title}
                </h3>
                <p className="text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-24 bg-gradient-to-r from-blue-700 to-blue-500 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12">
            How Our CNC Machining Works
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                step: "01",
                title: "Share Your Design",
                desc: "Upload your CAD files or product sketches for evaluation.",
              },
              {
                step: "02",
                title: "In-House Production",
                desc: "Our skilled team manufactures precision parts to your specs.",
              },
              {
                step: "03",
                title: "Quality Delivery",
                desc: "Components undergo strict QC and reach you on schedule.",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white/10 p-8 rounded-2xl backdrop-blur-lg border border-white/20 shadow-lg"
              >
                <div className="text-5xl font-extrabold text-blue-200 mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-blue-100">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INDUSTRIES ================= */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12 text-slate-800">
            Industries <span className="text-blue-600">We Serve</span>
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "Aerospace",
              "Automotive",
              "Medical",
              "Robotics",
              "Consumer Goods",
              "Defense",
              "Renewable Energy",
              "Industrial Machinery",
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-lg transition"
              >
                <h3 className="text-blue-700 font-semibold">{item}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CAPABILITIES SECTION ================= */}
      <section className="py-24 bg-gradient-to-r from-blue-800 via-blue-700 to-blue-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-10">
            Our <span className="text-blue-300">Key Capabilities</span>
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              {
                icon: "⚙️",
                title: "CNC Turning",
                desc: "Precision lathe operations delivering superior roundness and dimensional accuracy.",
              },
              {
                icon: "🧰",
                title: "VMC Machining",
                desc: "High-speed vertical milling with advanced control systems.",
              },
              {
                icon: "🪛",
                title: "Rapid Prototyping",
                desc: "Quick turnaround prototypes to validate design concepts.",
              },
              {
                icon: "🧩",
                title: "Component Assembly",
                desc: "Integrated component assembly ensuring seamless product readiness.",
              },
              {
                icon: "📏",
                title: "Custom Tooling",
                desc: "In-house design and manufacturing of jigs, fixtures, and custom tools.",
              },
              {
                icon: "🏭",
                title: "Production Scaling",
                desc: "Capability to handle both low and high-volume production runs efficiently.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 rounded-2xl p-8 shadow-lg border border-blue-400/10 hover:bg-white/20 transition-all"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                <p className="text-blue-100 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-500 text-center text-white relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-[url('/bg-map-2.png')] opacity-10 bg-cover bg-center"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        <div className="relative z-10 container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">
            Need High-Precision CNC Parts?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Partner with us for reliable, scalable, and world-class CNC
            machining services.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-700 font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-gray-100 transition-transform hover:scale-[1.03]"
          >
            Contact Our Team
          </Link>
        </div>
      </section>
    </main>
  );
}
