"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Award,
  Microscope,
  Factory,
  ShieldCheck,
  ClipboardCheck,
} from "lucide-react";
import { QualityIcon } from "../../components/Icons";
import QualityCarousel from "../../components/QualityCarousel";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};

export default function QualityPage() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[85vh] flex flex-col justify-center items-center text-white overflow-hidden">
        {/* Real factory background with gradient overlay */}
        <div className="absolute inset-0">
          <img
            src="/machine.jpg"
            alt="AB Industries Facility"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/80 to-blue-700/70" />
        </div>

        {/* Light glow overlay */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-blue-500/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.8, 0.6] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        {/* Floating mechanical gear SVG (subtle, visible now) */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          className="absolute bottom-12 right-12 w-28 h-28 text-blue-300/20"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        >
          <path d="M32 44a12 12 0 1 0 0-24 12 12 0 0 0 0 24Z" />
          <path d="M32 4v8M32 52v8M4 32h8M52 32h8" />
        </motion.svg>

        {/* Hero text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6"
        >
          <p className="uppercase tracking-[4px] text-sm md:text-base text-blue-200 mb-3">
            Certified Precision & Reliability
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
            Engineering <span className="text-blue-400">Excellence</span>
          </h1>
          <div className="mx-auto mb-6 w-24 h-[3px] bg-blue-400" />
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            ISO 9001:2015 certified — setting new benchmarks in quality,
            precision, and reliability across industries.
          </p>

          <div className="mt-10">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Get in Touch
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 flex flex-col items-center text-blue-300"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-0.5 h-8 bg-blue-300 mb-2 rounded-full" />
          <p className="text-xs uppercase tracking-widest">Scroll</p>
        </motion.div>
      </section>

      {/* ================= OUR COMMITMENT ================= */}
      <section className="py-24 bg-gradient-to-br from-white via-blue-50/30 to-white relative overflow-hidden">
        {/* Subtle floating background gear */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          className="absolute -top-10 -left-10 w-32 h-32 text-blue-500/10"
          stroke="currentColor"
          strokeWidth="1.2"
          fill="none"
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        >
          <circle cx="32" cy="32" r="10" />
          <path d="M32 2v6M32 56v6M2 32h6M56 32h6" />
        </motion.svg>

        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          {/* Text Section */}
          <motion.div {...fadeIn}>
            <h2 className="text-4xl font-bold mb-6 text-slate-800">
              Our <span className="text-blue-600">Commitment</span> to Quality
            </h2>

            <p className="text-slate-600 mb-6 leading-relaxed">
              At{" "}
              <span className="font-semibold text-blue-700">AB Industries</span>
              , quality isn’t just a checkpoint — it’s a culture. Every stage,
              from raw material inspection to final delivery, is governed by
              stringent quality protocols and continuous improvement practices.
            </p>

            <ul className="space-y-5">
              {[
                {
                  icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
                  title: "ISO 9001:2015 Certified",
                  desc: "We maintain internationally recognized Quality Management Standards for manufacturing excellence.",
                },
                {
                  icon: <Microscope className="w-6 h-6 text-blue-600" />,
                  title: "Advanced CMM & Precision Gauging",
                  desc: "State-of-the-art inspection tools ensure micron-level accuracy in every component.",
                },
                {
                  icon: <Award className="w-6 h-6 text-blue-600" />,
                  title: "Full Traceability",
                  desc: "Each part is traceable — from supplier to shop floor to final assembly.",
                },
                {
                  icon: <ClipboardCheck className="w-6 h-6 text-blue-600" />,
                  title: "Zero-Defect Mindset",
                  desc: "Rigorous in-process and final inspections guarantee consistent performance.",
                },
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <div className="mt-1">{item.icon}</div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-slate-800 text-lg">
                      {item.title}
                    </h3>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Image Section */}
          <motion.div {...fadeIn} transition={{ delay: 0.15 }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <Image
                src="/infra-inside-1.jpg"
                alt="Inspection & Quality Equipment"
                width={600}
                height={400}
                className="object-cover w-full h-[420px] group-hover:scale-105 transition-transform duration-700"
              />

              {/* Overlay for ISO Badge */}
              <div className="absolute bottom-4 left-4 bg-white/90 text-blue-700 font-semibold text-sm px-4 py-2 rounded-lg shadow-md flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 11c0-1.657-1.343-3-3-3s-3 1.343-3 3 1.343 3 3 3 3-1.343 3-3z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 11V3m0 8l8-8M12 11l-8-8"
                  />
                </svg>
                ISO 9001:2015 Certified
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= QUALITY & INSPECTION STANDARDS ================= */}
      <section className="relative py-28 bg-gradient-to-br from-blue-50 via-white to-slate-50 overflow-hidden">
        {/* Ambient Glow Shapes */}
        <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-blue-100/30 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-800 leading-tight">
              Quality &{" "}
              <span className="text-blue-700">Inspection Standards</span>
            </h2>

            <div className="w-24 h-[3px] bg-blue-600 rounded-full mb-6" />

            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              At{" "}
              <span className="font-semibold text-slate-800">
                A.B. Industries
              </span>
              , precision isn’t an afterthought — it’s embedded into every
              process. Our facility adheres to{" "}
              <span className="text-blue-700 font-semibold">ISO 9001:2015</span>{" "}
              standards, ensuring that every component meets the most demanding
              specifications.
            </p>

            <ul className="space-y-4 text-slate-700">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">🔍</span>
                <p>
                  <span className="font-semibold">CMM Inspection:</span>{" "}
                  High-accuracy Coordinate Measuring Machine ensures
                  zero-tolerance precision.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">📊</span>
                <p>
                  <span className="font-semibold">
                    Digital Quality Reports:
                  </span>{" "}
                  Each part is traceable through a data-driven inspection
                  process.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">🧾</span>
                <p>
                  <span className="font-semibold">Material Traceability:</span>{" "}
                  From raw materials to final delivery — every stage is
                  documented and certified.
                </p>
              </li>
            </ul>

            <div className="mt-8">
              <Link
                href="/quality"
                className="inline-flex items-center gap-2 bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-blue-800 transition-all"
              >
                Learn More About Our Quality
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </motion.div>

          {/* Right Image Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-lg group">
              <Image
                src="/iso.jpg"
                alt="ISO Certification"
                width={500}
                height={350}
                className="object-contain w-full h-100 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
              <p className="absolute bottom-3 left-3 bg-white/80 text-slate-800 text-sm px-3 py-1 rounded-md font-medium">
                ISO 9001:2015 Certified
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-lg group">
              <Image
                src="/inspection-area.jpg"
                alt="Inspection Area"
                width={500}
                height={350}
                className="object-contain w-full h-100 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
              <p className="absolute bottom-3 left-3 bg-white/80 text-slate-800 text-sm px-3 py-1 rounded-md font-medium">
                CMM & Digital Inspection
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= INFRASTRUCTURE ================= */}
      <section className="relative py-24 bg-gradient-to-br from-slate-100 via-white to-slate-200 overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            {...fadeIn}
            className="text-4xl font-bold mb-4 text-slate-800"
          >
            Our <span className="text-blue-600">Infrastructure</span>
          </motion.h2>

          <motion.p
            {...fadeIn}
            transition={{ delay: 0.1 }}
            className="text-slate-600 max-w-2xl mx-auto mb-10"
          >
            From raw material handling to precision machining, inspection, and
            dispatch — our facility integrates technology and craftsmanship at
            every stage.
          </motion.p>

          {/* ISO Badge */}
          <motion.div
            {...fadeIn}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-blue-100 text-blue-800 px-6 py-2 rounded-full font-semibold mb-16"
          >
            <Image
              src="/iso.jpg"
              alt="ISO 9001:2015 Certification"
              width={28}
              height={28}
              className="rounded-full"
            />
            ISO 9001:2015 Certified Facility
          </motion.div>

          {/* Grid of Infrastructure Areas */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                src: "/vnc-2.jpg",
                title: "VMC Machining Centers",
                desc: "High-precision multi-axis machining using JOTHI and COSMOS VMCs for complex component production.",
              },
              {
                src: "/cnc-5.jpg",
                title: "CNC Turning Centers",
                desc: "Advanced CNC turning centers for consistent, accurate, and repeatable machining of cylindrical parts.",
              },
              {
                src: "/inspection-area.jpg",
                title: "Inspection & Quality Control",
                desc: "Equipped with advanced CMM and measurement tools ensuring zero-defect assurance.",
              },
              {
                src: "/raw-material-storage.jpg",
                title: "Raw Material Storage",
                desc: "Organized and traceable material handling ensuring complete batch traceability and safety.",
              },
              {
                src: "/packing-dispatch.jpg",
                title: "Packing & Dispatch Area",
                desc: "Dedicated packaging and logistics zone ensuring safe delivery of precision components.",
              },
              {
                src: "/image-slider3.png",
                title: "Quality Commitment Board",
                desc: "Daily performance boards displaying metrics for continuous improvement and transparency.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="group bg-white rounded-2xl border border-slate-200 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={500}
                    height={320}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 text-left">
                  <h3 className="text-xl font-semibold mb-2 text-slate-800">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CERTIFICATIONS & STANDARDS ================= */}
      <section className="relative py-24 bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 text-white overflow-hidden">
        {/* Animated background */}
        <motion.div
          className="absolute inset-0 bg-[url('/bg-map-2.png')] opacity-10 bg-cover bg-center"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.h2 {...fadeIn} className="text-4xl font-bold mb-4">
            Certifications & <span className="text-blue-200">Standards</span>
          </motion.h2>
          <motion.p
            {...fadeIn}
            transition={{ delay: 0.1 }}
            className="text-blue-100 max-w-2xl mx-auto mb-12"
          >
            Certified excellence — ensuring that every process, part, and
            performance metric meets global manufacturing standards.
          </motion.p>

          {/* Certificates Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                title: "ISO 9001:2015 Certified",
                desc: "Certified for Quality Management Systems across all manufacturing operations.",
                img: "/iso.jpg",
              },
              {
                title: "Material Traceability",
                desc: "Complete documentation from raw materials to finished components.",
                img: "/raw-material-storage.jpg",
              },
              {
                title: "Advanced Inspection Systems",
                desc: "Equipped with high-precision CMM and inspection equipment.",
                img: "/inspection-area.jpg",
              },
              {
                title: "Digital Quality Reports",
                desc: "Automated process control and inspection data for full transparency.",
                img: "/why-choose-us.jpg",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="group bg-white/10 rounded-2xl overflow-hidden shadow-lg border border-white/20 hover:bg-white/20 hover:shadow-xl transition-all duration-500"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <div className="p-6 text-left">
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {item.title}
                  </h3>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INSPECTION WORKFLOW ================= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            {...fadeIn}
            className="text-4xl font-bold mb-4 text-slate-800"
          >
            Our <span className="text-blue-600">Inspection Workflow</span>
          </motion.h2>
          <p className="text-slate-600 mb-16 max-w-2xl mx-auto">
            Every part goes through a systematic quality control process
            ensuring accuracy, consistency, and reliability.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { step: "1️⃣", title: "Material Verification" },
              { step: "2️⃣", title: "In-Process Inspection" },
              { step: "3️⃣", title: "CMM Validation" },
              { step: "4️⃣", title: "Final Quality Report" },
            ].map((stage, i) => (
              <motion.div
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 rounded-2xl p-6 shadow-md border border-slate-200 hover:shadow-lg transition"
              >
                <div className="text-3xl mb-3">{stage.step}</div>
                <h3 className="font-semibold text-slate-800">{stage.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
