"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ComponentAssemblyPage() {
  return (
    <main className="overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[90vh] flex flex-col justify-center items-center overflow-hidden text-white">
        {/* Background Gradient with Depth */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-blue-900 via-blue-700 to-blue-500"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          style={{ backgroundSize: "200% 200%" }}
        />

        {/* Soft Light Layers */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[700px] h-[700px] bg-blue-300/20 rounded-full blur-3xl"
          animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] bg-cyan-400/25 rounded-full blur-3xl"
          animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.2, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Decorative Animated Gears */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          className="absolute top-20 left-24 w-24 h-24 text-blue-200/20"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          animate={{ rotate: 360 }}
          transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
        >
          <circle cx="32" cy="32" r="10" />
          <path d="M32 2v6M32 56v6M2 32h6M56 32h6M10 10l4 4M50 50l4 4M10 54l4-4M50 14l4-4" />
        </motion.svg>

        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          className="absolute bottom-24 right-24 w-32 h-32 text-blue-100/10"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          animate={{ rotate: -360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        >
          <path d="M32 12v40M12 32h40M20 20l24 24M44 20L20 44" />
        </motion.svg>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
            Precision <span className="text-blue-200">Component Assembly</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed">
            Combining precision-engineered parts into complete, reliable
            assemblies — crafted for performance, accuracy, and consistency.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-white text-blue-700 font-semibold px-8 py-4 rounded-xl text-lg shadow-xl hover:shadow-blue-300/40 hover:scale-[1.05] hover:bg-slate-50 transition-all duration-300"
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

      {/* ================= INTRODUCTION ================= */}
      <section className="py-20 bg-white text-slate-800">
        <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/Press-Fit-768x768.jpg"
              alt="Component Assembly Process"
              width={600}
              height={600}
              className="rounded-2xl shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-blue-700">
              Precision Assembly Solutions
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Our component assembly services transform individual machined
              parts into fully functional systems. Every connection is executed
              with meticulous care to ensure precision fit and mechanical
              integrity.
            </p>
            <p className="text-slate-600 leading-relaxed">
              From simple sub-assemblies to complex mechanical systems, we
              provide end-to-end assembly solutions supported by quality control
              and testing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= ASSEMBLY PROCESS ================= */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Our <span className="text-blue-300">Assembly Process</span>
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              A structured, quality-controlled workflow — ensuring every product
              performs flawlessly under real-world conditions.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { step: "1", title: "Component Inspection", icon: "🔍" },
              { step: "2", title: "Precision Fitting", icon: "⚙️" },
              { step: "3", title: "Functional Testing", icon: "🧪" },
              { step: "4", title: "Final Packaging", icon: "📦" },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-blue-400/20"
              >
                <div className="text-4xl mb-3">{s.icon}</div>
                <h3 className="text-lg font-semibold mb-1 text-blue-100">
                  {s.title}
                </h3>
                <p className="text-blue-200/80 text-sm">Step {s.step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= OUR ASSEMBLY EXPERTISE ================= */}
      <section className="py-20 bg-slate-50 text-slate-800">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4">
              Our <span className="text-blue-600">Assembly Expertise</span>
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              From micro components to large-scale industrial assemblies — we
              ensure every connection, fit, and alignment meets the highest
              precision standards.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Mechanical Assembly",
                desc: "Precision mechanical integration of shafts, bearings, and fasteners with micron-level accuracy.",
                icon: (
                  <svg
                    className="w-12 h-12 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6l4 2"
                    />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                ),
              },
              {
                title: "Electromechanical Systems",
                desc: "Integration of precision-machined housings with PCB, wiring, and connector systems.",
                icon: (
                  <svg
                    className="w-12 h-12 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 12h18M12 3v18" />
                    <circle cx="12" cy="12" r="9" />
                  </svg>
                ),
              },
              {
                title: "Custom Fixture Assembly",
                desc: "We develop specialized jigs and fixtures for holding, testing, and validating assembled components.",
                icon: (
                  <svg
                    className="w-12 h-12 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 7h16M4 17h16M7 4v16M17 4v16" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-slate-800">
                  {item.title}
                </h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= QUALITY ASSURANCE ================= */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Our Precision Promise</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-10">
            Every assembly is rigorously tested, verified, and certified to meet
            the most demanding quality standards. Precision isn’t just a goal —
            it’s our DNA.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Micron-Level Accuracy", icon: "🎯" },
              { label: "ISO Certified Process", icon: "📜" },
              { label: "High-Performance Tools", icon: "🧰" },
              { label: "Zero Defect Assurance", icon: "✅" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-blue-400/30 hover:scale-105 transition-all"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-blue-100">{item.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ENHANCED CALL TO ACTION ================= */}
      <section className="relative py-28 bg-gradient-to-tr from-blue-800 via-blue-700 to-blue-900 text-center text-white overflow-hidden">
        {/* Animated gradient glow orbs */}
        <motion.div
          className="absolute -top-24 left-1/4 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-3xl"
          animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-150px] right-1/4 w-[600px] h-[600px] bg-cyan-400/25 rounded-full blur-3xl"
          animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.2, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Minimal SVG accent gear */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          className="absolute top-16 right-16 w-20 h-20 text-blue-200/10"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <path d="M32 44a12 12 0 1 0 0-24 12 12 0 0 0 0 24Z" />
          <path d="M32 4v8M32 52v8M4 32h8M52 32h8M12.7 12.7l5.6 5.6M45.7 45.7l5.6 5.6M12.7 51.3l5.6-5.6M45.7 18.3l5.6-5.6" />
        </motion.svg>

        {/* CTA Content */}
        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight"
          >
            Built for <span className="text-blue-200">Precision Assembly</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-blue-100 max-w-2xl mx-auto mb-10 text-lg leading-relaxed"
          >
            Every part. Every joint. Every connection — engineered for flawless
            fit and lasting reliability. Experience true precision in every
            assembly.
          </motion.p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-white text-blue-500 font-semibold px-10 py-4 rounded-xl shadow-lg hover:shadow-2xl hover:bg-slate-100 transition-all duration-300"
            >
              Get in Touch
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
        </div>
      </section>
    </main>
  );
}
