"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function LatheTurningPage() {
  return (
    <main className="bg-gradient-to-b from-slate-950 via-blue-950 to-blue-800 text-white">
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[85vh] flex flex-col justify-center items-center overflow-hidden">
        {/* Subtle gradient glow */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{ backgroundSize: "200% 200%" }}
        />

        {/* Soft glowing orbs */}
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-blue-500/25 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl" />

        {/* Lathe SVG Illustration */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
          className="absolute opacity-10 w-[500px] h-[400px] top-20 left-10 text-blue-200"
          stroke="currentColor"
          fill="none"
          strokeWidth="1.5"
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        >
          <path
            fill="none"
            d="M608 128h-16V96a32 32 0 0 0-32-32H80a32 32 0 0 0-32 32v32H32a32 32 0 0 0-32 32v160a32 32 0 0 0 32 32h16v32a32 32 0 0 0 32 32h480a32 32 0 0 0 32-32v-32h16a32 32 0 0 0 32-32V160a32 32 0 0 0-32-32ZM304 320H112V192h192Z"
          />
        </motion.svg>

        {/* HERO CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6"
        >
          <p className="uppercase tracking-[3px] text-blue-300 text-sm mb-4">
            Precision Through Rotation
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Advanced <span className="text-blue-300">Lathe Turning</span>{" "}
            Solutions
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Creating precise cylindrical components that set new standards in
            accuracy, durability, and finish quality.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-lg font-semibold shadow-lg transition"
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
        </motion.div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.img
              src="/Feed-Rod-Bearing.jpg"
              alt="Precision lathe turning component"
              className="rounded-2xl shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            />
            <div>
              <h2 className="text-3xl font-bold mb-4">
                What is <span className="text-blue-600">Lathe Turning?</span>
              </h2>

              <p className="text-blue-100 text-lg leading-relaxed mb-4">
                Lathe turning is the art of shaping rotating materials to
                achieve cylindrical forms with extreme precision. At AB
                Industries, we use advanced CNC lathes to create finely
                engineered parts for aerospace, automotive, and industrial
                applications.
              </p>
              <ul className="space-y-3 text-blue-100">
                <li>⚙️ Tight tolerances up to ±5 microns</li>
                <li>🔩 Smooth surface finishes for functional performance</li>
                <li>
                  🧩 Capable of multi-material turning (steel, brass, aluminum)
                </li>
                <li>📏 Supports both small & large-scale production</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= APPLICATIONS SECTION ================= */}
      <section className="py-20 bg-white text-slate-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6 text-center">
            Applications of <span className="text-blue-600">Lathe Turning</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto text-center mb-12">
            Our precision lathe turning capabilities support a wide range of
            industrial needs — from simple shafts to complex threaded
            components.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Automotive Parts",
                desc: "High-precision shafts, gears, and bushings designed for performance and durability.",
              },
              {
                title: "Aerospace Components",
                desc: "Machined components for aircraft engines and landing gear with micron-level tolerance.",
              },
              {
                title: "Industrial Equipment",
                desc: "Custom tooling and fasteners crafted to meet heavy-duty manufacturing demands.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-all bg-slate-50"
              >
                <h3 className="text-xl font-semibold mb-2 text-blue-700">
                  {item.title}
                </h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MATERIALS SECTION ================= */}
      <section className="py-20 bg-slate-50 text-slate-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Materials We <span className="text-blue-600">Work With</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-10">
            We handle a wide variety of metals and non-metals to meet your
            specific design and performance requirements.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Mild Steel",
              "Stainless Steel",
              "Aluminium",
              "Brass",
              "Copper",
              "Titanium",
              "Plastics (Nylon, Acrylic)",
              "Alloy Steel",
            ].map((material, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 py-4 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <p className="font-medium text-blue-700">{material}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= QUALITY SECTION ================= */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-500 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">
            Surface Finishes & Quality
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-10">
            We maintain strict quality assurance and superior finishing
            standards to meet your exact specifications.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Anodizing",
                desc: "Durable and corrosion-resistant finish for aluminum parts.",
              },
              {
                title: "Polishing",
                desc: "Mirror-like surface finishes for visual and functional precision.",
              },
              {
                title: "Powder Coating",
                desc: "Tough and aesthetic surface finish for all material types.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-sm border border-blue-300/30 rounded-xl p-6 hover:bg-white/20 transition"
              >
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-blue-100">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS SECTION ================= */}
      <section className="py-20 bg-slate-100 text-gray-800">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-10 text-blue-700">
            Our Turning Process
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                step: "01",
                title: "Design Review",
                desc: "We analyze your CAD models and drawings to ensure manufacturability and precision fit.",
              },
              {
                step: "02",
                title: "Programming & Setup",
                desc: "Tool paths are programmed for optimized cutting and minimal material waste.",
              },
              {
                step: "03",
                title: "Precision Machining",
                desc: "Using CNC lathes and advanced tooling, we achieve consistent quality every time.",
              },
            ].map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-xl shadow-md p-8 border-t-4 border-blue-600"
              >
                <div className="text-blue-600 text-4xl font-extrabold mb-4">
                  {s.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-20 bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 text-center text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Partner with Experts in Lathe Turning
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            From concept to completion — our team ensures every detail meets
            your exact standards with unmatched accuracy.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-blue-700 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold shadow-md transition"
          >
            Contact Us
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
    </main>
  );
}
