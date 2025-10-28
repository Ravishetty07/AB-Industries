"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Cog, Wrench, Layers, Gauge, Hammer } from "lucide-react";

// Reusable Service Card
const ServiceCard = ({ imageUrl, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className="group bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 flex flex-col"
  >
    <div className="relative w-full h-56 overflow-hidden">
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
    </div>
    <div className="p-6 flex flex-col justify-between grow text-center">
      <h3 className="text-2xl font-semibold mb-3 text-slate-800">{title}</h3>
      <p className="text-slate-600 mb-6 text-base leading-relaxed">
        {description}
      </p>
      <Link
        href="/contact"
        className="text-blue-700 font-medium hover:underline hover:text-blue-800 transition-colors"
      >
        Request a Quote →
      </Link>
    </div>
  </motion.div>
);

export default function ServicesPage() {
  const services = [
    {
      imageUrl: "/Five-Axis-Machining-Service.jpg",
      title: "5-Axis CNC Machining",
      description:
        "Ultra-precise machining for complex geometries and surfaces — perfect for aerospace, defense, and high-precision industries.",
    },
    {
      imageUrl: "/cnc-machine-1.jpg",
      title: "CNC Milling (3 & 4-Axis)",
      description:
        "High-speed vertical and horizontal milling for everything from prototypes to production-grade housings and brackets.",
    },
    {
      imageUrl: "/DSCF5445-Enhanced-NR-768x512.jpg",
      title: "CNC Lathe Turning",
      description:
        "Precision turning for shafts, pins, and cylindrical components with micron-level tolerance and superior finish.",
    },
    {
      imageUrl: "/cnc-prototype-1.jpg",
      title: "Rapid Prototyping",
      description:
        "Accelerate development with high-fidelity, test-ready prototypes. We bridge the gap between concept and production.",
    },
    {
      imageUrl: "/CNC-Laser-cutting.jpg",
      title: "CNC Laser Cutting",
      description:
        "Clean, precise, and fast laser cutting for intricate sheet metal parts, enclosures, and industrial assemblies.",
    },
    {
      imageUrl: "/Press-Fit-768x768.jpg",
      title: "Component Assembly",
      description:
        "Streamline production with in-house sub-assembly, press-fitting, and integrated finishing services.",
    },
  ];

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[70vh] flex flex-col justify-center items-center text-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
        {/* Animated gear SVG */}
        <motion.div
          className="absolute top-1/4 left-1/4 text-blue-400/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <Cog className="w-40 h-40" />
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 right-1/4 text-blue-300/10"
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        >
          <Wrench className="w-32 h-32" />
        </motion.div>

        <div className="relative z-10 px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight"
          >
            Our <span className="text-blue-400">Services & Capabilities</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-blue-100 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            From concept to completion — precision-engineered components
            delivered with accuracy, innovation, and reliability.
          </motion.p>
        </div>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, i) => (
              <ServiceCard
                key={service.title}
                imageUrl={service.imageUrl}
                title={service.title}
                description={service.description}
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-28 bg-gradient-to-b from-slate-50 to-white text-center relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-[url('/bg-map-2.png')] opacity-10 bg-cover bg-center"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        <div className="relative z-10 container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold mb-12 text-slate-800"
          >
            Why Choose <span className="text-blue-600">AB Industries</span>?
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                icon: <Gauge className="w-8 h-8 text-blue-600" />,
                title: "High Precision",
                desc: "Micron-level accuracy for every component we produce.",
              },
              {
                icon: <Layers className="w-8 h-8 text-blue-600" />,
                title: "End-to-End Solutions",
                desc: "From design validation to assembly — all under one roof.",
              },
              {
                icon: <Hammer className="w-8 h-8 text-blue-600" />,
                title: "Modern Machinery",
                desc: "State-of-the-art 5-axis CNCs and automated inspection tools.",
              },
              {
                icon: <Cog className="w-8 h-8 text-blue-600" />,
                title: "Engineering Expertise",
                desc: "Decades of experience in manufacturing excellence.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
              >
                <div className="flex justify-center mb-5">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-slate-800">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ENGINEERING EXPERTISE ================= */}
      <section className="py-24 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-[url('/bg-map-2.png')] opacity-10 bg-cover bg-center"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12"
          >
            Engineering Expertise That Drives{" "}
            <span className="text-blue-200">Excellence</span>
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                icon: "⚙️",
                title: "Design for Manufacturability",
                desc: "We optimize your designs for real-world production without compromising precision.",
              },
              {
                icon: "🧩",
                title: "Material Expertise",
                desc: "From aluminum and steel to titanium and polymers — we machine it all.",
              },
              {
                icon: "📊",
                title: "CAD/CAM Integration",
                desc: "Seamless digital workflows for faster prototyping and reduced lead time.",
              },
              {
                icon: "🔍",
                title: "Quality Assurance",
                desc: "Automated CMM inspections and in-process checks at every stage.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-500"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INDUSTRIES WE EMPOWER ================= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-slate-800"
          >
            Industries <span className="text-blue-600">We Empower</span>
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Aerospace & Defence",
              "Automotive",
              "Medical Devices",
              "Electronics & Semiconductors",
              "Energy & Renewables",
              "Robotics & Automation",
              "Marine & Industrial",
              "Tooling & Fixtures",
            ].map((industry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 rounded-xl border border-slate-200 shadow-sm p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-500"
              >
                <h3 className="text-lg font-semibold text-blue-700">
                  {industry}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= OUR PROCESS ================= */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-slate-800"
          >
            Our <span className="text-blue-600">Manufacturing Process</span>
          </motion.h2>

          <div className="flex flex-col md:flex-row justify-center items-start md:items-center md:space-x-10 space-y-10 md:space-y-0">
            {[
              {
                step: "1️⃣",
                title: "Design Review",
                desc: "We evaluate manufacturability and suggest optimizations.",
              },
              {
                step: "2️⃣",
                title: "Machining",
                desc: "Precision milling, turning, and finishing as per spec.",
              },
              {
                step: "3️⃣",
                title: "Quality Inspection",
                desc: "CMM and optical measurements for perfect results.",
              },
              {
                step: "4️⃣",
                title: "Assembly & Delivery",
                desc: "On-time dispatch with complete documentation.",
              },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-slate-200 shadow-md rounded-2xl p-6 w-full md:w-64"
              >
                <div className="text-4xl mb-3">{s.step}</div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  {s.title}
                </h3>
                <p className="text-slate-600 text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="relative py-28 bg-gradient-to-r from-blue-700 to-blue-500 text-white text-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-[url('/bg-map-2.png')] opacity-10 bg-cover bg-center"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <div className="relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Let’s Build Your Next Component Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto mb-10 text-blue-100 text-lg leading-relaxed"
          >
            Have a design ready or an idea in mind? Our engineers are ready to
            bring your concept to life with precision and innovation.
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring" }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-gray-100 transition-transform"
            >
              Request a Quote →
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
