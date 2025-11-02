"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function CncMachiningPage() {
  return (
    <main className="overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[90vh] flex flex-col justify-center items-center text-white overflow-hidden select-none">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/cnc-machine-1.jpg"
            alt="CNC Machining Facility"
            fill
            className="object-cover object-center opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/80 to-blue-700/70" />
        </div>

        {/* Subtle floating glow effects */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"
          animate={{ y: [0, 20, 0], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-blue-300/10 rounded-full blur-3xl"
          animate={{ y: [0, -20, 0], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

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
            CNC Machining{" "}
            <span className="text-blue-400 drop-shadow-md">Solutions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Advanced CNC turning and milling precision for aerospace,
            automotive, and industrial applications.
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

        {/* Bottom Caption inside image */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md px-6 py-2 rounded-lg border border-white/20 text-sm font-medium text-blue-100">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            State-of-the-Art CNC Machining Centre • Since 2015
          </motion.span>
        </div>
      </section>

      {/* ================= CNC OVERVIEW SECTION ================= */}
      <section className="py-28 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
        {/* Subtle moving map pattern */}
        <motion.div
          className="absolute inset-0 bg-[url('/bg-map-2.png')] opacity-[0.5] bg-cover bg-center"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />

        <div className="container mx-auto px-15 grid md:grid-cols-2 gap-5 items-center relative z-10">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative bg-center overflow-hidden group"
          >
            <Image
              src="/cnc-main.jpg"
              alt="CNC Turning Centre at AB Industries"
              width={550}
              height={350}
              className="rounded-2xl object-contain bg-center group-hover:scale-105 transition-transform duration-700"
            />

            {/* Gradient Overlay */}
            {/* <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-blue-800/20 to-transparent" /> */}

            {/* Bottom Caption */}
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <p className="inline-block bg-white/90 backdrop-blur-sm text-blue-800 px-5 py-2 rounded-full text-sm font-medium shadow-md">
                Advanced CNC & VMC Machining Facility
              </p>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Precision CNC{" "}
              <span className="text-blue-600">Machining Excellence</span>
            </h2>

            <p className="text-slate-600 mb-8 leading-relaxed text-lg">
              Our CNC machining division is equipped with multi-axis turning
              centers and high-speed VMCs, enabling the production of highly
              complex components with micron-level accuracy. We deliver
              reliability, repeatability, and exceptional surface quality for
              demanding sectors like{" "}
              <span className="text-blue-700 font-medium">Aerospace</span>,{" "}
              <span className="text-blue-700 font-medium">Automotive</span>, and{" "}
              <span className="text-blue-700 font-medium">
                Industrial Engineering
              </span>
              .
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Tight Tolerances",
                  desc: "Precision up to ±5 microns with advanced calibration systems.",
                },
                {
                  title: "Multi-Axis Capability",
                  desc: "3, 4, and 5-axis machining for complex geometry and efficiency.",
                },
                {
                  title: "Surface Finish Quality",
                  desc: "Superior Ra finish with in-house deburring and polishing stations.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start gap-4 bg-white border border-blue-100 rounded-xl p-5 shadow-sm hover:shadow-lg transition-all"
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
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= CNC MACHINE SHOWCASE ================= */}
      <section className="py-28 bg-gradient-to-b from-slate-50 via-white to-slate-100 relative overflow-hidden">
        {/* Decorative Blurs */}
        <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-300/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Our <span className="text-blue-600">CNC Machining</span> Lineup
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-slate-600 mb-16 text-lg leading-relaxed"
          >
            Advanced turning centres engineered for precision, performance, and
            reliability. Each CNC station is optimized for multi-operation
            accuracy and consistent output.
          </motion.p>

          {/* Machine Image Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                src: "/cnc-turring-centre-01.jpg",
                title: "CNC Turning Centre - 01",
                desc: "High-speed precision turning for complex cylindrical components.",
              },
              {
                src: "/cnc-turring-centre-02.jpg",
                title: "CNC Turning Centre - 02",
                desc: "Handles multi-operation machining with superior dimensional accuracy.",
              },
              {
                src: "/cnc-turring-centre-03.jpg",
                title: "CNC Turning Centre - 03",
                desc: "Optimized for large batch production with uniform quality output.",
              },
            ].map((machine, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl shadow-lg border border-slate-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
              >
                {/* Machine Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={machine.src}
                    alt={machine.title}
                    fill
                    className="object-contain object-center group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
                  {/* Text Overlay */}
                  <div className="absolute bottom-4 left-4 text-left">
                    <h3 className="text-white font-semibold text-xl drop-shadow-md">
                      {machine.title}
                    </h3>
                    <p className="text-blue-100 text-sm drop-shadow-sm">
                      {machine.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TECHNICAL CAPABILITIES ================= */}
      <section className="py-28 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
        {/* Decorative Blurs */}
        <div className="absolute top-10 left-10 w-[300px] h-[300px] bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-blue-300/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-slate-900"
          >
            Technical <span className="text-blue-600">Capabilities</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-slate-600 max-w-2xl mx-auto mb-16"
          >
            Our machining capabilities are backed by advanced infrastructure,
            precision tools, and an expert engineering team capable of handling
            complex geometries with unmatched accuracy.
          </motion.p>

          {/* Capability Grid */}
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10 text-left">
            {[
              {
                icon: "🧰",
                title: "Machine Range",
                desc: "CNC Turning Centers, 3-Axis & 5-Axis VMCs, Conventional Lathes, Drilling & Tapping Machines.",
              },
              {
                icon: "📐",
                title: "Dimensional Accuracy",
                desc: "Precision up to ±5 microns with certified CMM validation.",
              },
              {
                icon: "🧩",
                title: "Component Size",
                desc: "Turning up to Ø300mm × 500mm and milling up to 800mm × 500mm × 500mm.",
              },
              {
                icon: "⚙️",
                title: "Supported Materials",
                desc: "Aluminum, Stainless Steel, Mild Steel, Brass, Copper, and Engineering Plastics.",
              },
              {
                icon: "💻",
                title: "Software & Programming",
                desc: "CAD/CAM-based programming (Fusion 360, MasterCAM) with 3D simulation and toolpath optimization.",
              },
              {
                icon: "🔬",
                title: "Inspection Equipment",
                desc: "CMM, Verniers, Micrometers, Height Gauges, and Surface Roughness Testers for complete quality validation.",
              },
            ].map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-md border border-slate-200 hover:shadow-xl transition-all duration-500 p-8"
              >
                <div className="text-3xl mb-4">{cap.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-blue-800">
                  {cap.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {cap.desc}
                </p>
              </motion.div>
            ))}
          </div>
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
      <section className="relative py-28 bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600 text-white overflow-hidden">
        {/* Animated glow layers */}
        <motion.div
          className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-300/20 rounded-full blur-3xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-6"
          >
            How Our <span className="text-blue-200">CNC Machining</span> Works
          </motion.h2>

          <p className="text-blue-100 max-w-2xl mx-auto mb-14 text-lg">
            A precise, streamlined process — from digital design to finished
            product, ensuring efficiency and uncompromised quality at every
            stage.
          </p>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                step: "01",
                title: "Share Your Design",
                desc: "Send your CAD drawings or part specifications — our experts evaluate feasibility, materials, and tolerances.",
                icon: "📐",
              },
              {
                step: "02",
                title: "In-House Machining",
                desc: "Precision components are produced using CNC turning, VMC, and 5-axis machining centers under expert supervision.",
                icon: "⚙️",
              },
              {
                step: "03",
                title: "Inspection & Delivery",
                desc: "Each part undergoes CMM inspection and quality checks before secure packaging and on-time dispatch.",
                icon: "✅",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 150 }}
                className="relative bg-white/10 p-10 rounded-2xl backdrop-blur-xl border border-white/20 shadow-lg overflow-hidden"
              >
                {/* Step number */}
                <div className="absolute -top-4 left-6 text-8xl font-extrabold text-white/10">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="text-5xl mb-4 text-blue-200">{step.icon}</div>

                {/* Title */}
                <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>

                {/* Description */}
                <p className="text-blue-100 text-base leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>  
      
    </main>
  );
}
