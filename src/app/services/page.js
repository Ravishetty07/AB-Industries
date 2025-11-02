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

// Add this at the top of the file (after imports)
const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 },
};

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
      <section className="relative h-[80vh] flex flex-col justify-center items-center text-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-900 to-slate-800 text-white">
        {/* Moving Grid Overlay */}
        <motion.div
          className="absolute inset-0 bg-[url('/bg-map-2.png')] opacity-[0.05] bg-cover bg-center"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />

        {/* Rotating Gear Icons */}
        <motion.div
          className="absolute top-20 left-20 text-blue-400/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
        >
          <Cog className="w-48 h-48" />
        </motion.div>

        <motion.div
          className="absolute bottom-24 right-20 text-blue-300/10"
          animate={{ rotate: -360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        >
          <Wrench className="w-40 h-40" />
        </motion.div>

        {/* Centered Content */}
        <div className="relative z-10 px-6">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="uppercase tracking-[4px] text-blue-300/80 text-sm mb-4"
          >
            Excellence in Engineering
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight"
          >
            Our <span className="text-blue-400">Services & Capabilities</span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="mx-auto mb-8 w-24 h-[3px] bg-blue-500 origin-left"
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-blue-100/90 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            From prototyping to production — delivering precision components
            engineered to exceed industry standards.
          </motion.p>
        </div>

        {/* Subtle Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 flex flex-col items-center text-blue-300/70"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-0.5 h-8 bg-blue-400/50 mb-2 rounded-full" />
          <p className="text-xs uppercase tracking-widest">Scroll</p>
        </motion.div>
      </section>

      {/* ================= MACHINES & INFRASTRUCTURE ================= */}
      <section className="relative py-28 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h2
            {...fadeIn}
            className="text-4xl md:text-5xl font-bold mb-6 text-slate-900"
          >
            Our <span className="text-blue-600">Machines & Infrastructure</span>
          </motion.h2>

          <motion.p
            {...fadeIn}
            transition={{ delay: 0.2 }}
            className="text-slate-600 max-w-3xl mx-auto mb-16 leading-relaxed"
          >
            Equipped with world-class CNC, VMC, and inspection systems —
            delivering precision, consistency, and reliability across every
            component we produce.
          </motion.p>

          {/* Main Image with Overlay */}
          <motion.div
            {...fadeIn}
            transition={{ delay: 0.3 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl mb-16"
          >
            <Image
              src="/machine.jpg"
              alt="Machining Facility"
              width={1200}
              height={600}
              className="object-cover w-full h-[500px]"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent" />

            {/* Text Inside Image */}
            <div className="absolute bottom-6 left-0 right-0 text-center px-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2 drop-shadow-lg">
                State-of-the-Art CNC & VMC Facility
              </h3>
              <p className="text-blue-100 text-sm md:text-base drop-shadow-md">
                Modern infrastructure built for precision and performance
              </p>
            </div>
          </motion.div>

          {/* Sub Images Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                src: "/vnc-2.jpg",
                title: "VMC Machine - 01",
                desc: "Capacity: 500x500x800 mm • Make: JOTHI",
              },
              {
                src: "/vmc-machine-4.jpg",
                title: "VMC Machine - 02",
                desc: "Capacity: 1060x650x650 mm • Make: COSMOS",
              },
              {
                src: "/cnc-5.jpg",
                title: "CNC Turning Centre",
                desc: "High-speed precision turning for complex profiles",
              },
              {
                src: "/cnc-turring-centre-02.jpg",
                title: "CNC Lathe Machine",
                desc: "Accurate turning operations with digital control",
              },
              {
                src: "/band-swa-cutting.jpg",
                title: "Bandsaw Cutting",
                desc: "Precision raw material cutting for high repeatability",
              },
              {
                src: "/DRILLING MACHINE-01.png",
                title: "Drilling Machine",
                desc: "For pre-machining and component preparation",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-slate-100 transition-all duration-500"
              >
                <div className="relative w-full h-56 overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={400}
                    height={250}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 text-left">
                  <h4 className="text-lg font-semibold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              </motion.div>
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

      {/* ================= MANUFACTURING PROCESS ================= */}
      <section className="relative py-28 bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
        {/* Decorative background blur */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-100/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-200/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h2
            {...fadeIn}
            className="text-4xl md:text-5xl font-bold mb-6 text-slate-900"
          >
            Our <span className="text-blue-600">Manufacturing Process</span>
          </motion.h2>

          <motion.p
            {...fadeIn}
            transition={{ delay: 0.2 }}
            className="text-slate-600 max-w-3xl mx-auto mb-16 leading-relaxed"
          >
            Every component at{" "}
            <span className="font-semibold text-slate-800">
              A.B. Industries
            </span>
            follows a structured, quality-driven workflow — ensuring accuracy,
            consistency, and efficiency from raw material to final inspection.
          </motion.p>

          {/* Process Steps */}
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-10">
            {[
              {
                step: "01",
                title: "Material Procurement",
                desc: "We source certified raw materials ensuring traceability and quality.",
                icon: "📦",
              },
              {
                step: "02",
                title: "CNC/VMC Machining",
                desc: "High-precision machining using advanced multi-axis systems.",
                icon: "⚙️",
              },
              {
                step: "03",
                title: "Inspection & Testing",
                desc: "CMM and digital measuring systems ensure zero-defect output.",
                icon: "🔍",
              },
              {
                step: "04",
                title: "Assembly & Finishing",
                desc: "Precision assembly, deburring, and final aesthetic finishing.",
                icon: "🛠️",
              },
              {
                step: "05",
                title: "Packing & Dispatch",
                desc: "Safe and labeled packaging with traceability records.",
                icon: "🚚",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl border border-slate-100 p-8 transition-all"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
                <div className="absolute top-4 right-4 text-blue-500 text-xs font-bold">
                  {item.step}
                </div>
              </motion.div>
            ))}
          </div>
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

      {/* ================= TECHNICAL CAPABILITIES ================= */}
      <section className="relative py-28 bg-gradient-to-br from-white via-slate-50 to-white overflow-hidden">
        {/* Decorative background gradient blur */}
        <div className="absolute top-10 left-10 w-[300px] h-[300px] bg-blue-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-blue-200/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h2
            {...fadeIn}
            className="text-4xl md:text-5xl font-bold mb-6 text-slate-900"
          >
            Our <span className="text-blue-600">Technical Capabilities</span>
          </motion.h2>

          <motion.p
            {...fadeIn}
            transition={{ delay: 0.2 }}
            className="text-slate-600 max-w-3xl mx-auto mb-16 leading-relaxed"
          >
            With advanced CNC and VMC technology, precision tooling, and digital
            inspection systems, we achieve superior accuracy, repeatability, and
            finish — across diverse materials and components.
          </motion.p>

          {/* Capabilities Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                icon: "🌀",
                title: "CNC Turning",
                desc: "Up to Ø300 mm diameter and 400 mm length. High-speed precision turning.",
              },
              {
                icon: "⚙️",
                title: "VMC Machining",
                desc: "Travel capacity up to 1060x650x650 mm for complex 3D parts.",
              },
              {
                icon: "🔩",
                title: "Tooling & Fixturing",
                desc: "Custom jigs and fixtures for optimized accuracy and repeatability.",
              },
              {
                icon: "📏",
                title: "CMM Inspection",
                desc: "Digital CMM and measuring instruments ensuring ±0.005 mm precision.",
              },
              {
                icon: "🔧",
                title: "Prototype Development",
                desc: "Rapid prototyping and pre-production validation support.",
              },
              {
                icon: "🧱",
                title: "Material Expertise",
                desc: "Aluminium, Stainless Steel, Brass, Copper, Delrin, Nylon, and more.",
              },
              {
                icon: "🧭",
                title: "Batch Production",
                desc: "Flexible setups for low to high-volume production efficiency.",
              },
              {
                icon: "📂",
                title: "CAD/CAM Integration",
                desc: "SolidWorks, Fusion 360, and MasterCAM integrated workflow.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                {...fadeIn}
                transition={{ delay: 0.05 * i }}
                className="group bg-white border border-slate-200 rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-slate-800 group-hover:text-blue-700 transition-colors">
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

      {/* ================= INDUSTRIES WE EMPOWER ================= */}
      <section className="relative py-28 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
        {/* Ambient Blurs */}
        <div className="absolute top-[10%] left-[5%] w-[350px] h-[350px] bg-blue-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-[5%] right-[10%] w-[300px] h-[300px] bg-blue-200/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900"
          >
            Industries <span className="text-blue-600">We Empower</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-slate-600 max-w-2xl mx-auto mb-14 text-lg leading-relaxed"
          >
            Delivering precision-engineered components to power innovation
            across diverse sectors — from aerospace to automation.
          </motion.p>

          {/* Industry Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Aerospace & Defence", icon: "✈️" },
              { name: "Automotive", icon: "🚗" },
              { name: "Medical Devices", icon: "⚕️" },
              { name: "Electronics & Semiconductors", icon: "💡" },
              { name: "Energy & Renewables", icon: "⚡" },
              { name: "Robotics & Automation", icon: "🤖" },
              { name: "Marine & Industrial", icon: "⚓" },
              { name: "Tooling & Fixtures", icon: "🧰" },
            ].map((industry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl border border-slate-200 shadow-sm p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
              >
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-lg font-semibold text-slate-800 group-hover:text-blue-700 transition-colors">
                  {industry.name}
                </h3>
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
