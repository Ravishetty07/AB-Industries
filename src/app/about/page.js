"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { QualityIcon } from "../../components/Icons";
import { ArrowRight, Users, Globe } from "lucide-react";
import { Cog } from "lucide-react";

export default function AboutPage() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  const fadeIn = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  // Animated counter for milestones
  const [years, setYears] = useState(0);
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);

  useEffect(() => {
    const duration = 1500;
    const start = performance.now();
    const animate = (time) => {
      const progress = Math.min((time - start) / duration, 1);
      setYears(Math.floor(10 * progress));
      setProjects(Math.floor(1200 * progress));
      setClients(Math.floor(100 * progress));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, []);

  return (
    <main className="bg-white text-slate-900 overflow-hidden">
{/* ================= HERO SECTION ================= */}
<section className="relative h-[90vh] flex flex-col justify-center items-center bg-white text-slate-900 overflow-hidden select-none">
  {/* Rotating Gear Left (Large) */}
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    className="absolute top-16 left-16 w-32 h-32 text-slate-400/15"
    stroke="currentColor"
    strokeWidth="1.5"
    fill="none"
    animate={{ rotate: 360 }}
    transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
  >
    <path d="M32 44a12 12 0 1 0 0-24 12 12 0 0 0 0 24Z" />
    <path d="M32 4v8M32 52v8M4 32h8M52 32h8M12.7 12.7l5.6 5.6M45.7 45.7l5.6 5.6M12.7 51.3l5.6-5.6M45.7 18.3l5.6-5.6" />
  </motion.svg>

  {/* Gear Right (Smaller Inner Gear) */}
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    className="absolute bottom-20 right-16 w-24 h-24 text-blue-500/20"
    stroke="currentColor"
    strokeWidth="1.5"
    fill="none"
    animate={{ rotate: -360 }}
    transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
  >
    <circle cx="32" cy="32" r="10" />
    <path d="M32 2v6M32 56v6M2 32h6M56 32h6M10.4 10.4l4.2 4.2M49.4 49.4l4.2 4.2M10.4 53.6l4.2-4.2M49.4 14.6l4.2-4.2" />
  </motion.svg>

  {/* Floating Wireframe Ring (adds depth) */}
  <motion.div
    className="absolute bottom-10 left-1/2 -translate-x-1/2 w-48 h-48 border border-blue-400/20 rounded-full"
    animate={{ rotate: 360 }}
    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
  />

  {/* Subtle CNC motion dots (ambient tech effect) */}
  <motion.div
    className="absolute top-1/3 right-1/4 w-40 h-40 bg-blue-400/10 rounded-full blur-2xl"
    animate={{ y: [0, 30, 0], opacity: [0.6, 0.9, 0.6] }}
    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
  />
  <motion.div
    className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-slate-400/10 rounded-full blur-3xl"
    animate={{ y: [0, -30, 0], opacity: [0.5, 0.8, 0.5] }}
    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
  />

  {/* Main Content */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="relative z-10 text-center px-6"
  >
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="uppercase tracking-[4px] text-blue-600 text-sm mb-4"
    >
      Precision Meets Innovation
    </motion.p>

    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight"
    >
      Building{" "}
      <span className="text-blue-700">Tomorrow’s Components</span> Today
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-8"
    >
      From CNC machining to precision manufacturing — shaping the future of engineering with excellence.
    </motion.p>

    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Link
        href="/contact"
        className="inline-flex items-center gap-3 bg-blue-700 hover:bg-blue-800 px-8 py-4 rounded-lg text-lg font-semibold text-white shadow-lg transition-colors"
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
  </motion.div>

  {/* Scroll Indicator */}
  <motion.div
    className="absolute bottom-8 flex flex-col items-center text-slate-400"
    animate={{ y: [0, 8, 0] }}
    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
  >
    <div className="w-0.5 h-8 bg-slate-400 mb-2 rounded-full" />
    <p className="text-xs uppercase tracking-widest">Scroll</p>
  </motion.div>
</section>


      {/* ================= COMPANY OVERVIEW ================= */}
      <section className="relative py-28 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
        {/* Decorative subtle blur shapes */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-200/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.p
            {...fadeIn}
            transition={{ delay: 0.1 }}
            className="uppercase tracking-[3px] text-sm md:text-base text-blue-600 font-medium mb-3"
          >
            Get to Know Us
          </motion.p>

          <motion.h2
            {...fadeIn}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Who <span className="text-blue-600">We Are</span>
          </motion.h2>

          {/* Animated accent line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            className="mx-auto w-24 h-[3px] bg-blue-600 origin-left mb-10"
          />

          <motion.p
            {...fadeIn}
            transition={{ delay: 0.4 }}
            className="max-w-3xl mx-auto text-slate-600 leading-relaxed text-lg mb-16"
          >
            AB Industries is a trusted name in precision CNC and VMC machining,
            prototyping, and component assembly. We combine technical expertise,
            advanced automation, and a passion for detail to shape the future of
            manufacturing — one part at a time.
          </motion.p>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {[
              {
                title: "Precision Engineering",
                desc: "Our advanced CNC and VMC machines ensure accuracy to the micron — every single time.",
                icon: "⚙️",
              },
              {
                title: "End-to-End Solutions",
                desc: "From concept to prototype to production — we handle it all under one roof.",
                icon: "🏭",
              },
              {
                title: "Global Standards",
                desc: "We adhere to international manufacturing standards, serving industries across borders.",
                icon: "🌍",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                {...fadeIn}
                transition={{ delay: 0.2 * index }}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-8 text-center border border-slate-100"
              >
                <div className="text-5xl mb-5">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-slate-800 group-hover:text-blue-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-base leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= OUR STORY ================= */}
      <section className="relative py-28 bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
        {/* Decorative faint gear icon in background */}
        <motion.div
          className="absolute top-[-50px] right-[-50px] w-64 h-64 text-blue-200/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        >
          <Cog className="w-full h-full" />
        </motion.div>

        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight text-slate-800">
              Our <span className="text-blue-600">Story</span>
            </h2>

            <div className="h-[3px] w-20 bg-blue-600 mb-6 rounded-full" />

            <p className="text-slate-600 mb-5 leading-relaxed text-lg">
              Founded in{" "}
              <span className="font-semibold text-slate-800">2015</span>, AB
              Industries started with a simple lathe and a bold vision — to
              redefine precision manufacturing standards in India.
            </p>

            <p className="text-slate-600 mb-8 leading-relaxed text-lg">
              From humble beginnings, we’ve grown into a trusted partner for
              diverse industries — blending craftsmanship, technology, and
              innovation to deliver world-class engineering solutions.
            </p>

            <blockquote className="border-l-4 border-blue-600 pl-4 italic text-slate-500 mb-8">
              “Precision is not just our goal — it’s our identity.”
            </blockquote>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 hover:shadow-lg transition-all"
            >
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/about-story.jpg"
                alt="AB Industries Facility"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
            </div>

            {/* Floating caption */}
            <div className="absolute bottom-4 left-6 bg-white/90 backdrop-blur-sm text-slate-800 px-4 py-2 rounded-lg text-sm font-medium shadow-md">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                CNC Workshop • Est. 2015
              </motion.span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= MILESTONES ================= */}
      <section className="py-24 bg-white text-center">
        <motion.h2 {...fadeIn} className="text-4xl font-bold mb-12">
          Our <span className="text-blue-600">Milestones</span>
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-16">
          <div>
            <p className="text-5xl font-extrabold text-blue-700 mb-2">
              {years}+
            </p>
            <p className="text-slate-600 font-medium">Years of Excellence</p>
          </div>
          <div>
            <p className="text-5xl font-extrabold text-blue-700 mb-2">
              {projects}+
            </p>
            <p className="text-slate-600 font-medium">Projects Completed</p>
          </div>
          <div>
            <p className="text-5xl font-extrabold text-blue-700 mb-2">
              {clients}+
            </p>
            <p className="text-slate-600 font-medium">Happy Clients</p>
          </div>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="relative py-28 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
        {/* Decorative gear graphics (subtle background elements) */}
        <motion.div
          className="absolute -top-10 -right-10 w-40 h-40 text-blue-200/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <Cog className="w-full h-full" />
        </motion.div>
        <motion.div
          className="absolute bottom-0 left-0 w-32 h-32 text-blue-100/20"
          animate={{ rotate: -360 }}
          transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
        >
          <Cog className="w-full h-full" />
        </motion.div>

        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 relative z-10">
          {/* MISSION */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 hover:shadow-lg transition-all duration-500"
          >
            <h2 className="text-3xl font-bold text-slate-800 mb-4 flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Our Mission
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              To deliver precision-engineered solutions that exceed expectations
              — every time, every part.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <QualityIcon />
                <span className="ml-3 text-slate-700">
                  99.9% defect-free manufacturing
                </span>
              </li>
              <li className="flex items-center">
                <QualityIcon />
                <span className="ml-3 text-slate-700">
                  Constant innovation & technology upgrades
                </span>
              </li>
            </ul>
          </motion.div>

          {/* VISION */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 hover:shadow-lg transition-all duration-500"
          >
            <h2 className="text-3xl font-bold text-slate-800 mb-4 flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h18M9 3v18m6-18v18M3 21h18"
                />
              </svg>
              Our Vision
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              To be a global benchmark in advanced manufacturing — driven by
              precision, reliability, and partnership.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <QualityIcon />
                <span className="ml-3 text-slate-700">
                  One-stop solutions from prototype to production
                </span>
              </li>
              <li className="flex items-center">
                <QualityIcon />
                <span className="ml-3 text-slate-700">
                  Building long-term, trusted relationships
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ================= TEAM ================= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h2 {...fadeIn} className="text-4xl font-bold mb-4">
            Meet Our <span className="text-blue-600">Experts</span>
          </motion.h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-12">
            The skilled engineers, machinists, and innovators who drive AB
            Industries forward.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {["user.jpg", "user.jpg", "user.jpg"].map((img, i) => (
              <motion.div
                key={i}
                {...fadeIn}
                transition={{ delay: 0.1 * i }}
                className="group bg-slate-50 rounded-xl shadow-md p-6 hover:shadow-xl transition-all"
              >
                <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-100">
                  <Image
                    src={`/${img}`}
                    alt="Team Member"
                    width={200}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-2xl font-semibold">Team Member {i + 1}</h3>
                <p className="text-blue-700 font-medium">
                  {i === 0
                    ? "Founder / CEO"
                    : i === 1
                    ? "Head of Engineering"
                    : "Quality Assurance Lead"}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= GLOBAL PRESENCE ================= */}
      {/* ================= GLOBAL PRESENCE ================= */}
      <section className="relative py-28 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100 text-center">
        {/* Background world map */}
        <div className="absolute inset-0">
          <Image
            src="/bg-map-2.png"
            alt="World Map Background"
            fill
            className="object-cover opacity-10"
          />
          {/* Soft blue gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50/40 via-transparent to-white" />
        </div>

        {/* Animated glowing dots (global presence markers) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <span className="absolute top-[30%] left-[40%] w-3 h-3 bg-blue-600 rounded-full opacity-70 animate-ping" />
          <span className="absolute top-[45%] left-[70%] w-3 h-3 bg-blue-500 rounded-full opacity-60 animate-ping" />
          <span className="absolute bottom-[30%] left-[20%] w-3 h-3 bg-blue-400 rounded-full opacity-60 animate-ping" />
          <span className="absolute top-[55%] right-[25%] w-3 h-3 bg-blue-500 rounded-full opacity-70 animate-ping" />
        </div>

        {/* Content */}
        <motion.div
          {...fadeIn}
          className="relative z-10 container mx-auto px-6 flex flex-col items-center"
        >
          <Globe className="w-16 h-16 text-blue-600 mb-6" />

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Global <span className="text-blue-600">Presence</span>
          </h2>

          {/* Accent divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mx-auto mb-8 w-20 h-[3px] bg-blue-600 origin-left"
          />

          <p className="text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed text-lg">
            Delivering precision-engineered components to clients across
            <span className="text-blue-600 font-semibold"> India</span>,
            <span className="text-blue-600 font-semibold"> Europe</span>, and
            <span className="text-blue-600 font-semibold">
              {" "}
              North America
            </span>{" "}
            — ensuring quality that meets global standards.
          </p>

          {/* Animated region highlights */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10">
            {[
              {
                title: "🇮🇳 India",
                desc: "Headquarters & main production facility in Mangalore, Karnataka.",
              },
              {
                title: "🇩🇪 Europe",
                desc: "Serving clients across Germany, Italy, and the Netherlands.",
              },
              {
                title: "🇺🇸 North America",
                desc: "Precision components supplied to U.S. manufacturing partners.",
              },
            ].map((region, index) => (
              <motion.div
                key={index}
                {...fadeIn}
                transition={{ delay: 0.2 * index }}
                className="bg-white/70 backdrop-blur-md border border-slate-200 rounded-xl p-8 hover:shadow-lg hover:border-blue-200 transition-all"
              >
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  {region.title}
                </h3>
                <p className="text-slate-600 text-base">{region.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ================= CORE VALUES ================= */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h2 {...fadeIn} className="text-4xl font-bold mb-12">
            Our <span className="text-blue-600">Core Values</span>
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: "⚙️",
                title: "Precision",
                desc: "Every micron matters — we ensure unmatched quality in every component.",
              },
              {
                icon: "💡",
                title: "Innovation",
                desc: "Continuously evolving our processes to stay ahead of the curve.",
              },
              {
                icon: "🤝",
                title: "Integrity",
                desc: "Building trust through transparency and long-term partnerships.",
              },
            ].map((v, i) => (
              <motion.div
                key={i}
                {...fadeIn}
                transition={{ delay: 0.1 * i }}
                className="bg-white/80 backdrop-blur-md shadow-md rounded-2xl p-8 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="text-5xl mb-4">{v.icon}</div>
                <h3 className="text-2xl font-semibold mb-3 text-blue-700">
                  {v.title}
                </h3>
                <p className="text-slate-600">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INFRASTRUCTURE ================= */}
      <section className="relative py-28 bg-gradient-to-b from-white via-slate-50 to-slate-100 overflow-hidden">
        {/* Decorative gradient glow */}
        <motion.div
          className="absolute top-20 right-0 w-96 h-96 bg-blue-300/20 blur-3xl rounded-full"
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-400/10 blur-3xl rounded-full"
          animate={{ opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="relative w-full h-[480px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/infrastructure.jpg"
                alt="Factory Infrastructure"
                fill
                className="object-cover object-center transform group-hover:scale-105 group-hover:rotate-[1deg] transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
            </div>
            {/* Floating caption */}
            <div className="absolute bottom-5 left-6 bg-white/90 backdrop-blur-sm text-slate-800 px-4 py-2 rounded-lg text-sm font-medium shadow-md">
              Precision Facility • Smart Manufacturing Line
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-800 leading-tight">
              Our <span className="text-blue-600">Infrastructure</span>
            </h2>

            <p className="text-slate-600 mb-8 text-lg leading-relaxed">
              Equipped with advanced CNC and VMC machining centers, digital
              inspection systems, and ERP-integrated workflows — our facility
              ensures{" "}
              <span className="text-slate-800 font-semibold">
                precision, consistency, and scalability
              </span>{" "}
              in every component.
            </p>

            {/* Key Points */}
            <ul className="grid sm:grid-cols-2 gap-5 text-slate-700">
              <li className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6l4 2"
                  />
                </svg>
                5-Axis CNC Machining Centers
              </li>
              <li className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 17v-2a4 4 0 118 0v2"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 9a9 9 0 0118 0"
                  />
                </svg>
                Coordinate Measuring Machines (CMM)
              </li>
              <li className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                Rapid Prototyping Facilities
              </li>
              <li className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h18M9 3v18m6-18v18M3 21h18"
                  />
                </svg>
                ERP & MES Integrated Production
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-24 bg-white text-center">
        <motion.h2 {...fadeIn} className="text-4xl font-bold mb-12">
          What Our <span className="text-blue-600">Clients Say</span>
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-10 px-6">
          {[
            {
              name: "Sarah Johnson",
              role: "Procurement Head, NovaTech",
              feedback:
                "AB Industries has been a game-changer for our precision needs. Reliable, timely, and quality-driven.",
            },
            {
              name: "David Lee",
              role: "CTO, InnovateX",
              feedback:
                "Their attention to detail and engineering excellence make them a trusted partner.",
            },
            {
              name: "Anita Rao",
              role: "Operations Director, MechWorks",
              feedback:
                "Top-notch quality with proactive communication — our go-to manufacturing partner.",
            },
          ].map((t, i) => (
            <motion.div
              key={i}
              {...fadeIn}
              transition={{ delay: 0.1 * i }}
              className="bg-slate-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all"
            >
              <p className="text-slate-700 mb-6 italic">“{t.feedback}”</p>
              <h4 className="font-semibold text-lg text-blue-700">{t.name}</h4>
              <p className="text-slate-500 text-sm">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= INDUSTRIES ================= */}
      <section className="relative py-28 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
        {/* Subtle radial glow */}
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-400/10 rounded-full blur-3xl"
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-slate-800"
          >
            Industries <span className="text-blue-600">We Serve</span>
          </motion.h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { name: "Automotive", icon: "🚗" },
              { name: "Aerospace", icon: "✈️" },
              { name: "Medical", icon: "🩺" },
              { name: "Electronics", icon: "💡" },
              { name: "Defense", icon: "🛡️" },
              { name: "Renewables", icon: "⚡" },
              { name: "Robotics", icon: "🤖" },
              { name: "Marine", icon: "⚓" },
            ].map((sector, i) => (
              <motion.div
                key={sector.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 15px 40px rgba(0,0,0,0.1)",
                }}
                className="group bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1 p-8 flex flex-col items-center text-center"
              >
                {/* Icon Circle */}
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-50 group-hover:bg-blue-600 transition-all duration-500 mb-5 shadow-inner">
                  <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {sector.icon}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-slate-800 group-hover:text-blue-700 transition-colors">
                  {sector.name}
                </h3>

                {/* Decorative Line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  className="mt-3 w-10 h-[2px] bg-blue-600 origin-left rounded-full"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-gradient-to-r from-blue-700 to-blue-500 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg-map-2.png')] opacity-10 bg-cover bg-center" />
        <motion.div {...fadeIn} className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let’s Build the Future of Manufacturing Together
          </h2>
          <p className="max-w-2xl mx-auto mb-10 text-blue-100">
            Partner with AB Industries to bring precision and innovation to your
            projects.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-gray-100 transition-transform hover:scale-[1.03]"
          >
            Get a Free Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
