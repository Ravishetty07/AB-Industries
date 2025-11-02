"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { QualityIcon } from "../../components/Icons";
import { ArrowRight, Users, Globe } from "lucide-react";
import { Cog } from "lucide-react";
import { Skiper67 } from "@/components/ui/skiper-ui/skiper67";
import TestimonialSection from "@/components/ui/TestimonialSection";


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

      {/* ================= HERO SECTION (Refined Industrial UI + Scroll Indicator) ================= */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-slate-100 overflow-hidden">
        {/* ====== BACKGROUND LIGHTS ====== */}
        <div className="absolute top-16 left-10 w-[420px] h-[420px] bg-blue-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-20 w-[350px] h-[350px] bg-blue-300/20 rounded-full blur-3xl" />

        {/* ====== MAIN GRID ====== */}
        <div className="relative z-10 container mx-auto px-6 lg:px-12 py-20 grid md:grid-cols-2 gap-16 items-center">
          {/* ---------- LEFT CONTENT ---------- */}
          <div className="flex flex-col items-start text-left space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl md:text-6xl font-extrabold leading-tight text-slate-900"
            >
              Welcome to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">
                A.B. Industries
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl"
            >
              Precision machining, CNC manufacturing, and world-class
              engineering services — delivering accuracy, reliability, and
              innovation to power the future of manufacturing.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-700 to-blue-600 text-white px-10 py-4 rounded-xl font-semibold shadow-lg shadow-blue-300/30 hover:shadow-blue-400/40 hover:scale-105 transition-all duration-300"
              >
                Contact Us
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
            </motion.div>
          </div>

          {/* ---------- RIGHT IMAGE (STYLISH BORDER) ---------- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            {/* Outer glowing gradient border */}
            <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-tr from-blue-600 via-blue-400 to-blue-300 opacity-60 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

            {/* Image itself */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200">
              <Image
                src="/infra-3.jpg"
                alt="A.B. Industries Facility"
                width={700}
                height={500}
                className="object-cover w-full h-[450px] rounded-[2rem] transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent rounded-[2rem]" />

              {/* Caption */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md text-slate-900 px-5 py-2 rounded-lg text-sm font-medium shadow-md">
                ⚙️ Precision Manufacturing Facility
              </div>
            </div>
          </motion.div>
        </div>

        {/* ====== SCROLL INDICATOR ====== */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-500 flex flex-col items-center"
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-0.5 h-8 bg-gray-400/40 mb-2 rounded-full" />
          <p className="text-xs uppercase tracking-widest">Scroll</p>
        </motion.div>
      </section>

      {/* ================= COMPANY FACILITY & CONTACT ================= */}
      <section className="relative py-28 bg-gradient-to-br from-white via-slate-50 to-slate-100 overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-blue-100/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left: Facility Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-2xl group"
          >
            <Image
              src="/infra-inside-1.jpg"
              alt="A.B. Industries Facility"
              width={700}
              height={450}
              className="object-cover w-full h-[450px] group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />

            {/* Floating caption */}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-slate-800 px-4 py-2 rounded-lg text-sm font-medium shadow-md">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                A.B. Industries – Precision Manufacturing Facility
              </motion.span>
            </div>
          </motion.div>

          {/* Right: Company Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800 leading-tight">
              Our <span className="text-blue-600">Facility & Location</span>
            </h2>
            <div className="w-20 h-[3px] bg-blue-600 mb-6 rounded-full" />

            <p className="text-slate-600 mb-6 text-lg leading-relaxed">
              Our modern manufacturing facility is located in{" "}
              <span className="font-semibold text-slate-800">
                Cheemasandra, Bangalore
              </span>
              . Equipped with advanced CNC and VMC machines, digital inspection
              systems, and a dedicated quality lab, A.B. Industries is built to
              deliver precision with every project.
            </p>

            <ul className="space-y-3 text-slate-700 text-base">
              <li>
                🏭 <span className="font-semibold">Company:</span> A.B.
                Industries
              </li>
              <li>
                📍<span className="font-semibold">Address:</span> Sy.No. 70/11,
                Near Basaveshwara Temple, Cheemasandra, Virgonagar Post,
                Bangalore – 560049
              </li>
              <li>
                👨‍🔧 <span className="font-semibold">Contact Persons:</span> Mr.
                Chand Pasha & Mr. Shafiulla
              </li>
              <li>
                ☎️ <span className="font-semibold">Mobile:</span> +91 99800
                41620, +91 98804 01262
              </li>
              <li>
                ☎️ <span className="font-semibold">Landline:</span> 080-7129
                0285
              </li>
              <li>
                📧 <span className="font-semibold">Email:</span>{" "}
                abindustries4851@gmail.com
              </li>
              {/* <li>
                🧾 <span className="font-semibold">GST No:</span>{" "}
                29AAVFA5740J1ZV
              </li> */}
            </ul>

            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-blue-800 transition-all"
              >
                Contact Us
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
        </div>
      </section>

      {/* ================= COMPANY OVERVIEW (UPDATED) ================= */}
      <section className="relative py-28 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
        {/* Background Blur & Ambient Lighting */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-200/10 rounded-full blur-3xl" />

        {/* Background Image Overlay */}
        {/* <Image
          src="/infra-inside-1.jpg"
          alt="AB Industries Facility"
          fill
          className="object-cover opacity-[0.07]"
        /> */}

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

          {/* Accent Line */}
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
            AB Industries stands as a precision manufacturing partner for
            industries that demand accuracy, reliability, and innovation. With
            cutting-edge CNC, VMC, and inspection technology, we deliver
            solutions that move the world — from aerospace to automation.
          </motion.p>

          {/* Core Strengths */}
          <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {[
              {
                title: "Precision Engineering",
                desc: "Multi-axis CNC and VMC capabilities deliver micron-level accuracy and flawless repeatability.",
                icon: "⚙️",
              },
              {
                title: "Integrated Manufacturing",
                desc: "From raw material to assembly — complete in-house control for faster turnaround and quality assurance.",
                icon: "🏭",
              },
              {
                title: "Global Quality Standards",
                desc: "Certified ISO 9001:2015 systems aligned with global benchmarks for reliability and traceability.",
                icon: "🌍",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                {...fadeIn}
                transition={{ delay: 0.2 * index }}
                className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all p-8 text-center border border-slate-100 hover:-translate-y-1"
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

          {/* Animated Quick Stats */}
          <motion.div
            {...fadeIn}
            transition={{ delay: 0.8 }}
            className="mt-20 flex flex-wrap justify-center gap-10 text-slate-700"
          >
            {[
              { label: "Years of Experience", value: "15+" },
              { label: "Satisfied Clients", value: "100+" },
              { label: "Projects Delivered", value: "10,000+" },
              { label: "Industries Served", value: "6+" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <h4 className="text-4xl font-extrabold text-blue-700 mb-2">
                  {stat.value}
                </h4>
                <p className="text-sm uppercase tracking-wide text-slate-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= OUR STORY (UPDATED) ================= */}
      <section className="relative py-28 bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
        {/* Subtle ambient background lights */}
        <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-blue-200/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[10%] right-[5%] w-[350px] h-[350px] bg-blue-300/10 rounded-full blur-3xl" />

        {/* Faint rotating gear pattern */}
        <motion.div
          className="absolute top-[-40px] right-[-40px] w-64 h-64 text-blue-200/10"
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
              Our <span className="text-blue-600">Journey</span>
            </h2>

            <div className="h-[3px] w-20 bg-blue-600 mb-6 rounded-full" />

            <p className="text-slate-600 mb-5 leading-relaxed text-lg">
              Founded in{" "}
              <span className="font-semibold text-slate-800">2015</span>,{" "}
              <span className="font-semibold text-blue-700">AB Industries</span>{" "}
              began with a single lathe machine — guided by one vision: to bring
              world-class precision machining to India’s industrial ecosystem.
            </p>

            <p className="text-slate-600 mb-8 leading-relaxed text-lg">
              Over the years, through continuous innovation and investment in
              technology, we have evolved into a fully integrated machining
              facility, delivering excellence in CNC, VMC, and assembly
              operations for a diverse range of industries.
            </p>

            <blockquote className="border-l-4 border-blue-600 pl-4 italic text-slate-500 mb-8">
              “Precision isn’t just what we do — it’s how we think, plan, and
              build.”
            </blockquote>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 hover:shadow-lg transition-all"
              >
                Get in Touch <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/quality"
                className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-800 font-semibold transition-all"
              >
                View Our Quality Standards →
              </Link>
            </div>
          </motion.div>

          {/* Right Image / Facility Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/infra-inside-2.jpg"
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
                Inside Our CNC Facility • Est. 2015
              </motion.span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= VIDEO SHOWCASE ================= */}
      <main className="relative bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-800 overflow-hidden">
        {/* ======== ABOUT HEADER ======== */}
        <section className="relative pb-0 pt-16 text-center">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50/40 via-transparent to-transparent" />

          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            About <span className="text-blue-600">A.B. Industries</span>
          </h1>

          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Discover the people, precision, and technology driving our legacy of
            quality manufacturing. We believe in craftsmanship powered by
            innovation.
          </p>

          {/* Accent Line */}
          <div className="mt-6 h-[2px] w-20 mx-auto bg-blue-600 rounded-full" />
        </section>

        {/* ======== VIDEO SECTION ======== */}
        <section className="relative flex flex-col items-center justify-center pt-10 pb-16">
          <div className="absolute -top-10 -left-10 w-[250px] h-[250px] bg-blue-600/10 blur-[100px] rounded-full" />
          <div className="absolute bottom-0 right-0 w-[200px] h-[200px] bg-orange-500/10 blur-[100px] rounded-full" />

          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-slate-700 mb-2">
              Inside Our Workshop
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base">
              Take a closer look at how precision meets passion in every
              component we craft.
            </p>
          </div>

          {/* 🎥 Company Video */}
          <div className="max-w-5xl w-full flex justify-center">
            <Skiper67 />
          </div>
        </section>
      </main>

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

      {/* ================= WHY CHOOSE AB INDUSTRIES ================= */}
      <section className="relative py-28 bg-gradient-to-br from-white via-slate-50 to-slate-100 overflow-hidden">
        {/* Decorative blur background lights */}
        <div className="absolute top-[10%] left-[10%] w-[400px] h-[400px] bg-blue-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-[10%] right-[10%] w-[350px] h-[350px] bg-blue-200/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="relative w-full h-[480px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/why-choose-us.jpg"
                alt="Why Choose AB Industries"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-30 group-hover:opacity-20 transition-opacity" />
            </div>

            {/* Floating caption */}
            <div className="absolute bottom-4 left-6 bg-white/90 backdrop-blur-sm text-slate-800 px-4 py-2 rounded-lg text-sm font-medium shadow-md">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 1 }}
              >
                Our Precision • Our People
              </motion.span>
            </div>
          </motion.div>

          {/* Right Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight text-slate-800">
              Why Choose <span className="text-blue-600">AB Industries</span>
            </h2>

            <div className="h-[3px] w-20 bg-blue-600 mb-6 rounded-full" />

            <p className="text-slate-600 mb-5 leading-relaxed text-lg">
              Our strength lies in the hands of experienced engineers, skilled
              machinists, and quality specialists who share one goal — to
              deliver unmatched precision and reliability in every component we
              produce.
            </p>

            <p className="text-slate-600 mb-8 leading-relaxed text-lg">
              We combine cutting-edge technology, disciplined process control,
              and a passion for excellence to support industries where precision
              is not an option — it’s a requirement.
            </p>

            <ul className="space-y-4 text-slate-700">
              <li>⚙️ ISO 9001:2015 Certified Operations</li>
              <li>🏭 In-house CNC, VMC, and Assembly Capabilities</li>
              <li>🔍 Advanced CMM Inspection and Traceability</li>
              <li>🤝 Decade-long partnerships with leading manufacturers</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="relative py-28 bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
        {/* Decorative faint rotating gear */}
        <motion.div
          className="absolute top-[-50px] right-[-50px] w-64 h-64 text-blue-200/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        >
          <Cog className="w-full h-full" />
        </motion.div>

        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight text-slate-800">
              Our <span className="text-blue-600">Mission & Vision</span>
            </h2>

            <div className="h-[3px] w-20 bg-blue-600 mb-6 rounded-full" />

            <p className="text-slate-600 mb-5 leading-relaxed text-lg">
              At{" "}
              <span className="font-semibold text-slate-800">
                AB Industries
              </span>
              , our mission is to deliver precision-engineered components that
              exceed customer expectations through technology, expertise, and
              commitment to quality.
            </p>

            <p className="text-slate-600 mb-5 leading-relaxed text-lg">
              We envision becoming a global leader in advanced manufacturing — a
              name synonymous with innovation, reliability, and craftsmanship.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-lg mb-8">
              <h4 className="text-blue-700 font-semibold mb-2">
                Our Core Values
              </h4>
              <ul className="space-y-2 text-slate-700 text-base">
                <li>⚙️ Precision in every process</li>
                <li>💡 Continuous innovation and improvement</li>
                <li>🤝 Integrity and long-term partnerships</li>
                <li>🌱 Commitment to sustainable manufacturing</li>
              </ul>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 hover:shadow-lg transition-all"
            >
              Partner With Us <ArrowRight className="w-4 h-4" />
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
                src="/mission.jpg"
                alt="AB Industries Mission and Vision"
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
                Precision. Innovation. Integrity.
              </motion.span>
            </div>
          </motion.div>
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
                src="/machine.jpg"
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
              Manufacturing<span className="text-blue-600"> Excellence </span>
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

      {/* ================= INFRASTRUCTURE & FACILITIES ================= */}
      <section className="relative py-28 bg-gradient-to-br from-white via-slate-50 to-slate-100 overflow-hidden">
        {/* Background decorative blurs */}
        <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-[5%] right-[10%] w-[350px] h-[350px] bg-blue-100/30 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-4 text-slate-900"
          >
            Our <span className="text-blue-600">Infrastructure</span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mx-auto mb-8 w-24 h-[3px] bg-blue-600 origin-left"
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-slate-600 max-w-2xl mx-auto leading-relaxed text-lg mb-16"
          >
            Our facility is equipped with advanced CNC, VMC, and inspection
            technologies — designed for precision, reliability, and innovation
            at every stage of production.
          </motion.p>

          {/* Facility Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
            {[
              {
                title: "CNC Machining Section",
                desc: "High-speed CNC turning centers ensure precision machining for critical components.",
                img: "/cnc-5.jpg",
              },
              {
                title: "VMC Machining Area",
                desc: "Vertical machining centers for multi-axis operations and complex geometries.",
                img: "/vmc-machine-4.jpg",
              },
              {
                title: "Inspection & Quality Control",
                desc: "Equipped with advanced measuring tools and CMM inspection for zero-defect assurance.",
                img: "/inspection-area.jpg",
              },
              {
                title: "Assembly & Finishing Zone",
                desc: "Dedicated assembly, deburring, and finishing areas ensure flawless final output.",
                img: "/packing-dispatch.jpg",
              },
              {
                title: "Raw Material & Tool Storage",
                desc: "Organized inventory and tool storage systems for efficient workflow management.",
                img: "/raw-material-storage.jpg",
              },
              {
                title: "Maintenance & Support Room",
                desc: "In-house maintenance facility to ensure 24×7 machine reliability and uptime.",
                img: "/infra-inside-3.jpg",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * i }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl shadow-lg bg-white border border-slate-200 hover:border-blue-400/50 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="relative w-full h-56 overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={500}
                    height={350}
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="absolute bottom-6 left-0 right-0 text-center px-4 flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-white drop-shadow-md tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-slate-200 text-sm mt-2 max-w-xs">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
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

      {/* ================= TESTIMONIALS SECTION ================= */}
      {/* <TestimonialSection
        backgroundImage="/bg-map-2.png"
        testimonials={[
          {
            name: "Sarah Johnson",
            role: "Product Manager, NovaTech",
            feedback:
              "Working with AB Industries was seamless — they delivered excellence from start to finish!",
            rating: 5,
          },
          {
            name: "David Lee",
            role: "CTO, InnovateX",
            feedback:
              "Truly impressed by their technical precision and fast turnaround. Highly recommend.",
            rating: 4,
          },
          {
            name: "Priya Sharma",
            role: "Design Head, Vortex Labs",
            feedback:
              "A trustworthy team with unmatched attention to detail. Fantastic experience overall!",
            rating: 5,
          },
          {
            name: "Ravi Shetty",
            role: "Founder, Codeverse",
            feedback:
              "Their innovation and quality mindset helped our product launch faster than expected.",
            rating: 5,
          },
          {
            name: "Ananya Patel",
            role: "Operations Head, TechBridge",
            feedback:
              "Excellent customer service and premium results — definitely our long-term partner.",
            rating: 5,
          },
        ]}
      /> */}

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
