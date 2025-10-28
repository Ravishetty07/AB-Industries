"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Cpu,
  Layers,
  Settings,
  Zap,
  FileCode2,
  CheckCircle2,
  Rocket,
} from "lucide-react";

export default function RapidPrototypingPage() {
  return (
    <main className="flex flex-col text-slate-800">
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[90vh] flex flex-col justify-center items-center overflow-hidden text-white select-none">
        {/* Layered Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500" />

        {/* Faint Blueprint Grid Overlay */}
        <div
          className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_1px_1px,#ffffff_1px,transparent_0)]"
          style={{ backgroundSize: "40px 40px" }}
        />

        {/* Central Glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-blue-400/30 rounded-full blur-3xl opacity-70"
          animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.8, 0.6] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating SVGs for depth */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="absolute w-64 h-64 text-blue-300/15 top-24 left-10"
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        >
          <path
            fill="currentColor"
            d="M487.4 315.7l-46.3-26.8c2.3-13.6 3.5-27.6 3.5-41.9s-1.2-28.3-3.5-41.9l46.3-26.8c7.6-4.4 10.5-13.8 6.9-21.7l-45.2-90.4c-3.7-7.5-12.2-11.3-20.3-8.8l-52.9 16.4c-20.9-15.9-44.1-28.6-69.3-37.3L261 9.4c-8-2.7-16.9.8-20.7 8.2l-45.1 90.3c-3.9 7.7-.9 17.1 6.7 21.5l46.6 26.9c-1.8 9.6-2.7 19.6-2.7 29.8 0 10.2.9 20.2 2.7 29.8l-46.6 26.9c-7.6 4.4-10.6 13.8-6.7 21.5l45.1 90.3c3.8 7.4 12.7 10.9 20.7 8.2l52.9-16.4c25.2 8.7 48.4 21.4 69.3 37.3l52.9 16.4c8.1 2.5 16.6-1.3 20.3-8.8l45.2-90.4c3.6-7.9.7-17.3-6.9-21.7zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"
          />
        </motion.svg>

        {/* Right Floating Technical SVG */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="absolute w-48 h-48 text-blue-200/10 bottom-20 right-10"
          strokeWidth="1.5"
          fill="none"
          stroke="currentColor"
          animate={{ rotate: -360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        >
          <path d="M12 3v18M3 12h18" />
          <circle cx="12" cy="12" r="10" />
        </motion.svg>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="uppercase tracking-[4px] text-blue-200 text-sm mb-4"
          >
            From Concept to Creation
          </motion.p>

          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            <span className="text-blue-100">Rapid</span>{" "}
            <span className="text-blue-300">Prototyping</span> Excellence
          </h1>

          <p className="text-lg md:text-xl text-blue-100/90 max-w-2xl mx-auto mb-8 leading-relaxed">
            Experience faster, smarter innovation — precision-engineered
            prototypes crafted for real-world testing and design validation.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-lg font-semibold shadow-lg transition-all"
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
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 text-white/70 flex flex-col items-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-0.5 h-8 bg-blue-300 mb-2 rounded-full" />
          <p className="text-xs uppercase tracking-widest">Scroll</p>
        </motion.div>
      </section>

      {/* ================= OVERVIEW SECTION ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Bringing <span className="text-blue-600">Ideas</span> to Life —
            Faster
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Our Rapid Prototyping services bridge the gap between concept and
            production. Using advanced machining and additive technologies, we
            create prototypes that look, feel, and function like the final
            product — so you can iterate faster and smarter.
          </p>

          <div className="grid md:grid-cols-3 gap-10 mt-10">
            {[
              {
                icon: <Zap className="w-10 h-10 text-blue-600" />,
                title: "Quick Turnaround",
                desc: "Prototype production in days, not weeks. Ideal for agile development and iterative design.",
              },
              {
                icon: <Cpu className="w-10 h-10 text-blue-600" />,
                title: "Precision & Performance",
                desc: "Achieve functional accuracy and dimensional stability with modern CNC & 3D printing tech.",
              },
              {
                icon: <Layers className="w-10 h-10 text-blue-600" />,
                title: "Diverse Material Options",
                desc: "From metals to polymers and composites — we choose the best fit for your prototype goals.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 bg-slate-50 rounded-2xl border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all text-left"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-2xl font-semibold mb-2 text-slate-800">
                  {item.title}
                </h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS SECTION ================= */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-600 text-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Our <span className="text-blue-200">Prototyping Process</span>
          </h2>
          <p className="max-w-2xl mx-auto text-blue-100 mb-12">
            We follow a seamless and structured process to transform your
            digital designs into physical prototypes with unmatched precision.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                step: "01",
                title: "Design & Concept Review",
                icon: (
                  <FileCode2 className="w-10 h-10 text-blue-200 mx-auto mb-4" />
                ),
                desc: "You share your CAD model or concept, and our experts analyze feasibility and suggest optimal materials.",
              },
              {
                step: "02",
                title: "Precision Manufacturing",
                icon: (
                  <Settings className="w-10 h-10 text-blue-200 mx-auto mb-4" />
                ),
                desc: "CNC machining, 3D printing, or hybrid methods are used to fabricate the prototype to exact specs.",
              },
              {
                step: "03",
                title: "Testing & Delivery",
                icon: (
                  <CheckCircle2 className="w-10 h-10 text-blue-200 mx-auto mb-4" />
                ),
                desc: "Prototypes undergo inspection and are delivered ready for functional and performance validation.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-blue-300/30 hover:bg-white/20 transition"
              >
                {item.icon}
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-blue-100 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MATERIALS & TECHNOLOGIES ================= */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/40 to-white text-slate-800">
        {/* Decorative SVG background (subtle wave & grid) */}
        <div
          className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_1px_1px,#1e3a8a_1px,transparent_0)]"
          style={{ backgroundSize: "40px 40px" }}
        />
        <motion.div
          className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-blue-400/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4 text-slate-900">
              Advanced{" "}
              <span className="text-blue-700 drop-shadow-sm">
                Technologies & Materials
              </span>
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Every prototype is crafted using a perfect balance of{" "}
              <span className="text-blue-600 font-medium">technology</span> and{" "}
              <span className="text-blue-600 font-medium">
                material performance
              </span>
              . We ensure durability, accuracy, and scalability in every model
              we build.
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all border border-blue-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 12h18M12 3v18"
                  />
                </svg>
                <h3 className="text-2xl font-semibold text-blue-700">
                  Technologies Used
                </h3>
              </div>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 11V7h2v4H9zm0 2h2v2H9v-2z" />
                  </svg>
                  CNC Machining (3, 4 & 5-Axis)
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M4 3h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1z" />
                  </svg>
                  3D Printing (FDM, SLA, SLS)
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.5 10l5 5L17.5 5" />
                  </svg>
                  Laser Cutting & Engraving
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M4 3h12v4H4zM4 9h12v8H4z" />
                  </svg>
                  Vacuum Casting & Mold Simulation
                </li>
              </ul>
            </motion.div>

            {/* Materials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all border border-blue-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12l7.5 7.5L19.5 12M4.5 12L12 4.5 19.5 12"
                  />
                </svg>
                <h3 className="text-2xl font-semibold text-blue-700">
                  Material Range
                </h3>
              </div>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16z" />
                  </svg>
                  Aluminium, Brass, Stainless Steel
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M4 3h12v4H4zM4 9h12v8H4z" />
                  </svg>
                  ABS, PLA, Nylon, Polycarbonate
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.5 10l5 5L17.5 5" />
                  </svg>
                  Acrylic, Resin & Carbon Fiber
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M4 3h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1z" />
                  </svg>
                  High-performance composites
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 text-white text-center">
        {/* Soft glowing background orbs */}
        <motion.div
          className="absolute -top-32 left-1/3 w-[500px] h-[500px] bg-blue-400/30 rounded-full blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-100px] right-1/4 w-[400px] h-[400px] bg-cyan-400/20 rounded-full blur-3xl"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* SVG Decorative Line Pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.04]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 800 600"
        >
          <g stroke="white" strokeWidth="0.5">
            <path d="M0 100 Q400 200 800 100" />
            <path d="M0 300 Q400 400 800 300" />
            <path d="M0 500 Q400 600 800 500" />
          </g>
        </svg>

        {/* Main content */}
        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold mb-6"
          >
            Turn Your <span className="text-blue-200">Concept</span> into
            Reality
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed text-lg"
          >
            Whether you’re a startup validating your design or an enterprise
            optimizing production, our rapid prototyping delivers speed,
            accuracy, and the quality your innovation deserves.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex justify-center"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-white text-blue-700 hover:bg-slate-100 px-8 py-4 rounded-lg text-lg font-semibold shadow-lg transition-all"
            >
              Start Your Project
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
