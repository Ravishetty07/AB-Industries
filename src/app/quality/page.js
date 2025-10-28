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
      <section className="relative h-[85vh] flex flex-col justify-center items-center bg-white text-slate-900 overflow-hidden">
        {/* Decorative SVG Gears */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          className="absolute top-12 left-12 w-24 h-24 text-blue-500/10"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        >
          <path d="M32 44a12 12 0 1 0 0-24 12 12 0 0 0 0 24Z" />
          <path d="M32 4v8M32 52v8M4 32h8M52 32h8M12.7 12.7l5.6 5.6M45.7 45.7l5.6 5.6M12.7 51.3l5.6-5.6M45.7 18.3l5.6-5.6" />
        </motion.svg>

        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          className="absolute bottom-16 right-16 w-20 h-20 text-slate-500/10"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          animate={{ rotate: -360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        >
          <circle cx="32" cy="32" r="10" />
          <path d="M32 2v6M32 56v6M2 32h6M56 32h6M10.4 10.4l4.2 4.2M49.4 49.4l4.2 4.2M10.4 53.6l4.2-4.2M49.4 14.6l4.2-4.2" />
        </motion.svg>

        {/* Modern Floating Mechanical SVGs */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          className="absolute top-1/2 left-1/3 w-16 h-16 text-blue-400/15"
          stroke="currentColor"
          strokeWidth="1.2"
          fill="none"
          animate={{ rotate: 360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        >
          <path d="M50 15a35 35 0 1 0 0 70 35 35 0 1 0 0-70Zm0 20a15 15 0 1 1 0 30 15 15 0 1 1 0-30Z" />
        </motion.svg>

        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="uppercase tracking-[4px] text-sm md:text-base text-blue-500 mb-3"
          >
            Precision Through Innovation
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight text-slate-800"
          >
            Engineering <span className="text-blue-600">Excellence</span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            className="mx-auto mb-6 w-24 h-[3px] bg-blue-600 origin-left"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            Empowering industries with precision, performance, and reliability —
            every component, every time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="mt-10"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-blue-800 hover:shadow-xl transition-all"
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
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 flex flex-col items-center text-slate-500"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-0.5 h-8 bg-slate-400 mb-2 rounded-full" />
          <p className="text-xs uppercase tracking-widest">Scroll</p>
        </motion.div>
      </section>

      {/* ================= OUR COMMITMENT ================= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div {...fadeIn}>
            <h2 className="text-4xl font-bold mb-6 text-slate-800">
              Our <span className="text-blue-600">Commitment</span> to Quality
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Quality is the foundation of everything we do — from material
              sourcing to final inspection. Every part undergoes rigorous
              testing to ensure it exceeds your expectations.
            </p>

            <ul className="space-y-5">
              {[
                {
                  icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
                  title: "ISO 9001:2015 Compliant",
                  desc: "All processes follow international quality management standards.",
                },
                {
                  icon: <Microscope className="w-6 h-6 text-blue-600" />,
                  title: "Advanced CMM Inspection",
                  desc: "Precision measuring systems ensure defect-free outputs.",
                },
                {
                  icon: <Award className="w-6 h-6 text-blue-600" />,
                  title: "Material Traceability",
                  desc: "We maintain full traceability from raw material to final component.",
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

          {/* Image */}
          <motion.div {...fadeIn} transition={{ delay: 0.1 }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/Tools-768x512.jpg"
                alt="Inspection Equipment"
                width={600}
                height={400}
                className="object-cover w-full h-[420px]"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= INFRASTRUCTURE ================= */}
      <section className="py-24 bg-slate-50">
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
            className="text-slate-600 max-w-2xl mx-auto mb-16"
          >
            Built for precision and scalability — equipped with world-class CNC,
            VMC, and inspection systems.
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                src: "/cnc-machine-1.jpg",
                title: "VMC Machining Centers",
                desc: "High-speed multi-axis machining for complex geometries.",
              },
              {
                src: "/Five-Axis-Machining-Service.jpg",
                title: "5-Axis CNC Machines",
                desc: "Unmatched precision for single-setup complex components.",
              },
              {
                src: "/DSCF5445-Enhanced-NR-768x512.jpg",
                title: "CNC Lathes",
                desc: "Precision turning for tight-tolerance cylindrical parts.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl border border-slate-200 shadow-lg hover:-translate-y-1 transition-all duration-500 overflow-hidden"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  width={400}
                  height={250}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-slate-800">
                    {item.title}
                  </h3>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CERTIFICATIONS & STANDARDS ================= */}
      <section className="py-24 bg-gradient-to-r from-blue-700 to-blue-500 text-white relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-[url('/bg-map-2.png')] opacity-10 bg-cover bg-center"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.h2 {...fadeIn} className="text-4xl font-bold mb-8">
            Certifications & Standards
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "ISO 9001:2015",
              "Material Traceability",
              "CMM Inspection",
              "Digital Quality Reports",
            ].map((cert, i) => (
              <motion.div
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="bg-white/10 rounded-2xl p-6 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-500"
              >
                <h3 className="text-xl font-semibold text-white mb-2">
                  {cert}
                </h3>
                <p className="text-blue-100 text-sm">
                  Verified and validated under global industry standards.
                </p>
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

      {/* ================= FEATURED COMPONENTS ================= */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            {...fadeIn}
            className="text-4xl font-bold mb-4 text-slate-800"
          >
            Featured <span className="text-blue-600">Components</span>
          </motion.h2>
          <p className="text-slate-600 mb-12 max-w-2xl mx-auto">
            A glimpse into the high-precision parts crafted by our engineers.
          </p>
          <motion.div {...fadeIn}>
            <QualityCarousel />
          </motion.div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-24 bg-blue-700 text-white text-center relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-[url('/bg-map-2.png')] opacity-10 bg-cover bg-center"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <div className="relative z-10">
          <motion.h2 {...fadeIn} className="text-4xl font-bold mb-6">
            Built for Precision. Committed to Quality.
          </motion.h2>
          <motion.p
            {...fadeIn}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto mb-10 text-blue-100"
          >
            Partner with AB Industries for defect-free manufacturing, every
            time.
          </motion.p>
          <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-gray-100 transition-transform hover:scale-[1.03]"
            >
              Request a Quality Audit
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
