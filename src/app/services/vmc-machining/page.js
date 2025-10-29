"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function VmcMachiningPage() {
  return (
    <main className="overflow-hidden bg-gradient-to-b from-slate-50 to-blue-50 text-gray-800">
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[85vh] flex flex-col justify-center items-center text-white overflow-hidden select-none">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/vmc-machine-1.jpg"
            alt="VMC Machining Facility"
            fill
            className="object-cover object-center opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/70 to-blue-700/80" />
        </div>

        {/* Soft Glow Light */}
        <motion.div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-blue-300/30 rounded-full blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        {/* Rotating Gear */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="absolute w-64 h-64 text-blue-400/20 top-24 left-16"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <path
            fill="currentColor"
            d="M487.4 315.7l-46.3-26.8c2.3-13.6 3.5-27.6 3.5-41.9s-1.2-28.3-3.5-41.9l46.3-26.8c7.6-4.4 10.5-13.8 6.9-21.7l-45.2-90.4c-3.7-7.5-12.2-11.3-20.3-8.8l-52.9 16.4c-20.9-15.9-44.1-28.6-69.3-37.3L261 9.4c-8-2.7-16.9.8-20.7 8.2l-45.1 90.3c-3.9 7.7-.9 17.1 6.7 21.5l46.6 26.9c-1.8 9.6-2.7 19.6-2.7 29.8 0 10.2.9 20.2 2.7 29.8l-46.6 26.9c-7.6 4.4-10.6 13.8-6.7 21.5l45.1 90.3c3.8 7.4 12.7 10.9 20.7 8.2l52.9-16.4c25.2 8.7 48.4 21.4 69.3 37.3l52.9 16.4c8.1 2.5 16.6-1.3 20.3-8.8l45.2-90.4c3.6-7.9.7-17.3-6.9-21.7zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"
          />
        </motion.svg>

        {/* Main Text */}
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

        {/* Bottom Overlay Info Bar */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 shadow-md">
          <p className="text-sm tracking-widest text-blue-100 font-medium uppercase">
            ISO 9001:2015 Certified | Advanced VMC Facility | 24/7 Production
          </p>
        </div>
      </section>

      {/* ================= VMC MACHINING OVERVIEW ================= */}
      <section className="py-20 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-1/3 w-[300px] h-[300px] bg-blue-200/20 blur-3xl rounded-full" />
        <div className="absolute bottom-10 right-1/4 w-[250px] h-[250px] bg-blue-100/20 blur-2xl rounded-full" />

        <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Precision <span className="text-blue-600">VMC Machining</span>
            </h2>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
              Our Vertical Machining Centers (VMC) are designed for exceptional
              precision, stability, and performance. Equipped with multi-axis
              capability, automated tool changers, and high-speed spindles —
              ideal for complex, high-tolerance components.
            </p>

            <ul className="space-y-2 text-gray-700">
              <li>✔️ 3 & 4 Axis VMC Machines</li>
              <li>✔️ Tight Tolerances up to ±5 microns</li>
              <li>✔️ Handles Aluminium, Steel, and Alloys</li>
              <li>✔️ Mirror Surface Finish and Accuracy</li>
            </ul>
          </motion.div>

          {/* Right Image Layout */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <Image
                src="/vmc-machine-4.jpg"
                alt="VMC Machining Center"
                width={550}
                height={360}
                className="w-full h-[300px] object-cover rounded-xl transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-transparent to-transparent text-white px-4 py-2 text-sm font-medium">
                Advanced Vertical Machining Center
              </div>
            </div>

            {/* Two smaller images below */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-xl overflow-hidden">
                <Image
                  src="/vmc-machine-2.jpg"
                  alt="VMC Machining Process"
                  width={250}
                  height={180}
                  className="w-full h-[160px] object-cover rounded-xl shadow-md hover:scale-105 transition-transform"
                />
              </div>
              <div className="relative rounded-xl overflow-hidden">
                <Image
                  src="/vmc-machine-3.jpg"
                  alt="Precision Setup"
                  width={250}
                  height={180}
                  className="w-full h-[160px] object-cover rounded-xl shadow-md hover:scale-105 transition-transform"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= MACHINE GALLERY ================= */}
      <section className="py-24 bg-slate-50 relative">
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-bold mb-12 text-slate-800"
          >
            Our <span className="text-blue-600">VMC Machines</span> in Action
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { img: "/Vmc-machine-1.jpg", caption: "High-Speed Machining" },
              {
                img: "/Vmc-machine-2.jpg",
                caption: "Precision Milling Center",
              },
              { img: "/Vmc-machine-3.jpg", caption: "Multi-Axis Setup" },
              { img: "/Vmc-machine-4.jpg", caption: "Component Finishing" },
            ].map((machine, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all"
              >
                <Image
                  src={machine.img}
                  alt={machine.caption}
                  width={600}
                  height={400}
                  className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all"></div>
                <div className="absolute bottom-3 left-3 bg-white/90 px-4 py-2 rounded-lg text-slate-800 text-sm font-medium shadow-md">
                  {machine.caption}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TECHNICAL SPECIFICATIONS ================= */}
      <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-6 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-blue-900 text-center mb-12"
          >
            Our <span className="text-blue-600">Machine Specifications</span>
          </motion.h2>

          <div className="overflow-x-auto bg-white shadow-lg rounded-2xl border border-blue-100">
            <table className="w-full text-left text-slate-700">
              <thead className="bg-blue-100/60 text-blue-900 uppercase text-sm">
                <tr>
                  <th className="py-4 px-6">Model</th>
                  <th className="py-4 px-6">Travel (X/Y/Z)</th>
                  <th className="py-4 px-6">Spindle Speed</th>
                  <th className="py-4 px-6">Table Size</th>
                  <th className="py-4 px-6">Accuracy</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "VMC-850",
                    "850 / 510 / 510 mm",
                    "8000 RPM",
                    "1000 x 500 mm",
                    "±5 μm",
                  ],
                  [
                    "VMC-1000",
                    "1000 / 600 / 600 mm",
                    "10000 RPM",
                    "1200 x 600 mm",
                    "±5 μm",
                  ],
                  [
                    "VMC-1200",
                    "1200 / 700 / 650 mm",
                    "12000 RPM",
                    "1400 x 700 mm",
                    "±3 μm",
                  ],
                ].map((row, i) => (
                  <tr
                    key={i}
                    className="border-t border-blue-100 hover:bg-blue-50/40 transition"
                  >
                    {row.map((cell, j) => (
                      <td key={j} className="py-4 px-6">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="relative py-24 bg-gradient-to-b from-white via-blue-50/20 to-white overflow-hidden">
        {/* Ambient Blur Lights */}
        <div className="absolute top-20 left-1/3 w-[300px] h-[300px] bg-blue-200/20 blur-3xl rounded-full" />
        <div className="absolute bottom-10 right-1/4 w-[250px] h-[250px] bg-blue-100/30 blur-2xl rounded-full" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-blue-900 mb-14"
          >
            Key Highlights of Our{" "}
            <span className="text-blue-600">VMC Machining</span>
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Exceptional Precision",
                desc: "Achieving tolerance levels as low as ±5 microns with superior repeatability.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6l4 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
              },
              {
                title: "Multi-Material Capability",
                desc: "Expertise in machining aluminum, brass, stainless steel, and composite materials with efficiency.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 12h18M3 6h18M3 18h18"
                    />
                  </svg>
                ),
              },
              {
                title: "Optimized Productivity",
                desc: "High-speed spindles and automated tool changers ensure reduced cycle time and consistent output.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4l3 3m9-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 250 }}
                className="group bg-white border border-blue-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 p-8 text-center hover:bg-gradient-to-b hover:from-blue-50 hover:to-white"
              >
                <div className="flex justify-center mb-5">
                  <div className="p-4 bg-blue-100 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2 group-hover:text-blue-700">
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

      {/* ================= MATERIAL EXPERTISE ================= */}
      <section className="py-24 bg-gradient-to-r from-blue-700 to-blue-500 text-white text-center">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-4xl font-bold mb-10">
            Material <span className="text-blue-200">Expertise</span>
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "Aluminium Alloys (6061, 7075)",
              "Mild Steel, EN Series",
              "Stainless Steel (SS304, SS316)",
              "Brass & Copper Components",
              "Engineering Plastics (Delrin, Nylon, PEEK)",
              "Titanium & Tool Steels",
            ].map((mat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 py-6 px-4 text-blue-50 shadow-md"
              >
                {mat}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= QUALITY & INSPECTION ================= */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 md:px-20 grid md:grid-cols-2 gap-10 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative rounded overflow-hidden "
          >
            <Image
              src="/infra-inside-1.jpg"
              alt="Quality Inspection"
              width={500}
              height={300}
              className="object-cover rounded-2xl w-full h-[350px] shadow-lg hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0  p-4 text-white text-sm">
              CMM & Digital Inspection Area
            </div>
          </motion.div>

          {/* Right Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Quality &{" "}
              <span className="text-blue-600">Inspection Standards</span>
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed text-lg">
              Every component undergoes multi-stage inspection including
              dimensional verification, surface finish analysis, and material
              certification. Our quality systems comply with{" "}
              <strong>ISO 9001:2015</strong> and maintain digital traceability
              across batches.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>✔️ CMM & Height Gauge Inspections</li>
              <li>✔️ Surface Finish & Tolerance Analysis</li>
              <li>✔️ ISO Certified Workflows</li>
              <li>✔️ Digital Batch Traceability</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="relative py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
        {/* Animated Blur Light */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container mx-auto px-6 md:px-16 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-16"
          >
            How Our <span className="text-blue-300">VMC Process</span> Works
          </motion.h2>

          <div className="relative grid md:grid-cols-3 gap-10">
            {[
              {
                step: "01",
                title: "Design & Programming",
                desc: "CAD/CAM software transforms your concept into detailed 3D models and optimized tool paths.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-blue-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.75 17L15 12l-5.25-5M19.5 12a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
                    />
                  </svg>
                ),
              },
              {
                step: "02",
                title: "Precision Machining",
                desc: "High-speed Vertical Machining Centers cut each part to micrometer-level precision and smooth finish.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-11 h-11 text-blue-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.75 3.75L10.5 6m3 0l.75-2.25m5.25 5.25L18 10.5m0 3l2.25.75m-5.25 5.25L13.5 18m-3 0l-.75 2.25m-5.25-5.25L6 13.5m0-3L3.75 9.75M12 9.75A2.25 2.25 0 1112 14.25A2.25 2.25 0 0112 9.75z"
                    />
                  </svg>
                ),
              },
              {
                step: "03",
                title: "Quality Inspection",
                desc: "Components undergo ISO-standard QC checks using CMM, height gauges, and surface finish analysis.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-blue-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ),
              },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="relative p-10 rounded-2xl bg-gradient-to-b from-blue-700 to-blue-800 shadow-lg border border-blue-400/20 hover:shadow-blue-400/40 transition-all duration-500"
              >
                {/* Step Number */}
                <div className="flex flex-col items-center mb-5">
                  <div className="text-5xl font-extrabold text-blue-200/70 mb-3">
                    {s.step}
                  </div>
                  <div className="p-3 bg-blue-500/20 rounded-full border border-blue-300/30">
                    {s.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-blue-100 mb-3">
                  {s.title}
                </h3>
                <p className="text-blue-200 text-sm leading-relaxed">
                  {s.desc}
                </p>

                {/* Connecting Line (only between cards) */}
                {i < 2 && (
                  <motion.div
                    className="hidden md:block absolute top-1/2 right-[-40px] w-20 h-[2px] bg-gradient-to-r from-blue-400 to-blue-200"
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
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
