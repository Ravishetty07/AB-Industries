"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Skiper30 } from "@/components/ui/skiper-ui/skiper30";
import { TextScroll } from "@/components/ui/text-scroll";
// import { TextRevealBox } from "@/components/sections/TextRevealBox";
// import { TextScrollReveal } from "@/components/sections/TextScrollReveal";
import { TextRevealBox } from "@/components/ui/TextRevealBox";
import TestimonialSection from "@/components/ui/TestimonialSection";

import {
  ArrowRight,
  ShieldCheck,
  Lightbulb,
  Users,
  Cog,
  Factory,
  Wrench,
} from "lucide-react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const fadeIn = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.7, ease: "easeOut" as const },
  };

  return (
    <main className="bg-white text-slate-900 overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      {/* ================= HERO SECTION (CNC / INDUSTRIAL STYLE) ================= */}
      <section className="relative h-[90vh] flex flex-col justify-center items-center overflow-hidden bg-white text-center">
        {/* Floating Industrial SVGs */}
        <motion.div
          className="absolute top-12 left-[8%] w-14 h-14 text-blue-500/50"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 3v1.5m4.5-1.5V4.5m-9 9H3m18 0h-2.25m-9 7.5V21m4.5-1.5V21m3.03-14.47l1.06 1.06m-11.31 0l1.06-1.06m11.31 11.31l-1.06 1.06m-9.19-1.06l-1.06 1.06M12 8.25a3.75 3.75 0 110 7.5 3.75 3.75 0 010-7.5z"
            />
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-16 right-[10%] w-20 h-20 text-blue-400/50"
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m6-6H6"
            />
          </svg>
        </motion.div>

        <motion.div
          className="absolute top-[25%] right-[20%] w-12 h-12 text-blue-300/60"
          animate={{ y: [0, -20, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 9l10.5 10.5m-3.94-3.94A8.25 8.25 0 1119 10.5a8.25 8.25 0 01-3.44 6.56z"
            />
          </svg>
        </motion.div>

        {/* Faint Blueprint Lines (background grid) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

        {/* Content */}
        <div className="relative z-10 px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400">
              Redefining Precision
            </span>
            <br />
            in CNC Manufacturing
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            High-accuracy CNC machining and rapid prototyping for industries
            where precision drives performance.
          </motion.p>

          {/* CTA */}
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 25px rgba(37,99,235,0.3)",
            }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all shadow-md"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>

        {/* Floating Gear Icons Layer */}
        <motion.div
          className="absolute left-[5%] bottom-[15%] text-blue-300/40"
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        >
          <Cog className="w-16 h-16" />
        </motion.div>

        <motion.div
          className="absolute right-[5%] top-[15%] text-blue-400/30"
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <Cog className="w-20 h-20" />
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 text-slate-500 flex flex-col items-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-0.5 h-8 bg-slate-400/40 mb-2 rounded-full" />
          <p className="text-xs uppercase tracking-widest">Scroll</p>
        </motion.div>
      </section>

      {/* ================= TEXT REVEAL SECTION ================= */}
      <TextRevealBox
        textBlocks={[
          "At AB Industries, precision meets innovation. We shape the future of manufacturing with world-class engineering and technology.",
          "From CNC machining to prototype design, our experts deliver quality solutions with unmatched accuracy and speed.",
          "Every component we create reflects our passion for progress, craftsmanship, and the power of modern manufacturing.",
        ]}
        highlightWords={[
          "precision",
          "prototype",
          "experts",
          "passion",
          "manufacturing",
        ]}
      />

      {/* ================= SKIPER30 SECTION ================= */}
      <section className="relative z-10">
        <Skiper30 />
      </section>

      {/* ================= TEXT SCROLL SECTION ================= */}
      <TextScroll text="AB INDUSTRIES" default_velocity={6} />

      {/* ================= ABOUT SECTION ================= */}
      <section className="relative py-28 bg-gradient-to-br from-white via-slate-50 to-white overflow-hidden">
        {/* Decorative CNC lines + gear for depth */}
        <motion.div
          className="absolute -top-10 left-0 w-56 h-56 text-blue-100/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        >
          <Cog className="w-full h-full" />
        </motion.div>

        <motion.div
          className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-radial from-blue-500/10 via-transparent to-transparent rounded-full blur-3xl"
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-slate-800">
              More Than a Machine Shop —{" "}
              <span className="text-blue-600">
                We’re Your Manufacturing Partner.
              </span>
            </h2>

            <div className="h-[3px] w-20 bg-blue-600 mb-6 rounded-full" />

            <p className="text-slate-600 mb-5 leading-relaxed text-lg">
              AB Industries provides{" "}
              <strong>high-precision CNC and VMC machining</strong> services,
              rapid prototyping, and end-to-end production for aerospace,
              automotive, defence, and medical applications.
            </p>

            <p className="text-slate-600 mb-8 leading-relaxed text-lg">
              We merge{" "}
              <span className="text-slate-800 font-medium">craftsmanship</span>{" "}
              with{" "}
              <span className="text-slate-800 font-medium">
                cutting-edge technology
              </span>{" "}
              to transform complex designs into flawless, production-ready
              components that exceed global standards.
            </p>

            <motion.div whileHover={{ x: 5 }}>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline transition-all"
              >
                Learn More About Us <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/about-epsilon-01-1.png"
                alt="AB Industries Facility"
                fill
                className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
            </div>

            {/* Floating label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
              viewport={{ once: true }}
              className="absolute bottom-5 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg text-slate-800 text-sm font-medium shadow-lg"
            >
              Precision CNC & VMC Facility • Est. 2015
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= CAPABILITIES SECTION ================= */}
      <section id="capabilities" className="py-24 bg-slate-50">
        <div className="text-center mb-14 px-6">
          <motion.h2 {...fadeIn} className="text-4xl font-bold mb-4">
            Our Core Capabilities
          </motion.h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            From prototyping to mass production, our CNC and VMC expertise
            ensures every part meets the tightest tolerances.
          </p>
        </div>

        <div className="container mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              icon: Cog,
              title: "CNC Machining",
              desc: "High-precision CNC turning & milling for complex parts.",
            },
            {
              icon: Wrench,
              title: "Rapid Prototyping",
              desc: "Quick, accurate prototypes to validate your ideas fast.",
            },
            {
              icon: Factory,
              title: "Assembly & Finishing",
              desc: "Complete sub-assembly and finishing solutions in-house.",
            },
            {
              icon: ShieldCheck,
              title: "Quality Inspection",
              desc: "CMM inspection with a zero-defect commitment.",
            },
            {
              icon: Lightbulb,
              title: "Design Assistance",
              desc: "Collaborative engineering for manufacturability optimization.",
            },
            {
              icon: Users,
              title: "Client Support",
              desc: "Technical guidance through your project lifecycle.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              {...fadeIn}
              transition={{ delay: 0.05 * i }}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-2xl transition-all group"
            >
              <item.icon className="w-12 h-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= INDUSTRIES SECTION ================= */}
      {/* ================= INDUSTRIES SECTION ================= */}
      <section className="relative py-28 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
        {/* Ambient Glow Blurs */}
        <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-[5%] right-[10%] w-[350px] h-[350px] bg-blue-100/30 rounded-full blur-3xl" />

        <div className="text-center mb-16 px-6 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-4 text-slate-900"
          >
            Industries We <span className="text-blue-600">Serve</span>
          </motion.h2>

          {/* Animated accent line */}
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
            className="text-slate-600 max-w-2xl mx-auto leading-relaxed text-lg"
          >
            Empowering critical sectors with precision engineering and
            innovation — from aerospace to automation.
          </motion.p>
        </div>

        <div className="container mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
          {[
            {
              name: "Aerospace & Defence",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12H3m9 9V3"
                  />
                </svg>
              ),
              img: "/Impeller.jpg",
            },
            {
              name: "Automotive",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 13l2-2m0 0l7-7 7 7M13 5v6h6"
                  />
                </svg>
              ),
              img: "/Five-Axis-Machining-Service.jpg",
            },
            {
              name: "Medical Devices",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              ),
              img: "/Protective-Cap.jpg",
            },
            {
              name: "Electronics & Semiconductors",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 16h-1v-4h-1m2 4h2v-4h-2v4zm0-4h1V9h-1m1 0V7h-1v2h1z"
                  />
                </svg>
              ),
              img: "/cnc-machine-1.jpg",
            },
            {
              name: "Energy & Industrial Equipment",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 2v20m5-8h5l-10 8V2l10 8h-5z"
                  />
                </svg>
              ),
              img: "/Feed-Rod-Bearing.jpg",
            },
            {
              name: "Robotics & Automation",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h6m-3-3v6m-7 9a9 9 0 1118 0H2z"
                  />
                </svg>
              ),
              img: "/CNC-Laser-cutting.jpg",
            },
          ].map((industry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl shadow-lg bg-white border border-slate-200 hover:border-blue-400/50 transition-all duration-500 hover:-translate-y-1"
            >
              {/* Background Image */}
              <div className="relative w-full h-56 overflow-hidden">
                <Image
                  src={industry.img}
                  alt={industry.name}
                  width={500}
                  height={350}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-6 left-0 right-0 text-center px-4 flex flex-col items-center">
                <div className="mb-2 text-blue-400">{industry.icon}</div>
                <h3 className="text-xl font-semibold text-white drop-shadow-md tracking-wide">
                  {industry.name}
                </h3>
              </div>

              {/* Glow Border Animation */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 rounded-2xl border-2 border-blue-500/30 group-hover:border-blue-500/60 transition-all duration-500"
              />
            </motion.div>
          ))}
        </div>

        {/* Decorative Fade at Bottom */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/70 to-transparent" />
      </section>

      {/* ================= TRUST METRICS ================= */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
          <motion.div {...fadeIn}>
            <ShieldCheck className="mx-auto w-14 h-14 text-blue-600 mb-4" />
            <h4 className="text-2xl font-bold mb-2">99.8% Quality Rate</h4>
            <p className="text-slate-600 text-sm">
              Backed by rigorous CMM inspection and skilled QA teams.
            </p>
          </motion.div>

          <motion.div {...fadeIn} transition={{ delay: 0.1 }}>
            <Lightbulb className="mx-auto w-14 h-14 text-blue-600 mb-4" />
            <h4 className="text-2xl font-bold mb-2">10+ Years Experience</h4>
            <p className="text-slate-600 text-sm">
              Delivering reliability through decades of expertise.
            </p>
          </motion.div>

          <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
            <Users className="mx-auto w-14 h-14 text-blue-600 mb-4" />
            <h4 className="text-2xl font-bold mb-2">100+ Satisfied Clients</h4>
            <p className="text-slate-600 text-sm">
              Trusted partners in global manufacturing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= TESTIMONIALS SECTION ================= */}
      <TestimonialSection
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
      />

      {/* ================= FINAL CTA ================= */}
      {/* ================= FINAL CTA ================= */}
      <section className="relative py-28 text-white text-center overflow-hidden bg-gradient-to-r from-blue-800 via-blue-700 to-blue-500">
        {/* Moving Map Texture */}
        <motion.div
          className="absolute inset-0 bg-[url('/bg-map-2.png')] opacity-10 bg-cover bg-center"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />

        {/* Ambient Lighting */}
        <div className="absolute top-1/4 left-[10%] w-[400px] h-[400px] bg-cyan-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-[10%] right-[10%] w-[450px] h-[450px] bg-blue-300/30 rounded-full blur-3xl" />

        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-800/20 to-blue-900/40" />

        <div className="relative z-10 px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="uppercase tracking-[4px] text-blue-200 text-sm mb-4"
          >
            Partner in Precision
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight"
          >
            Let’s <span className="text-cyan-300">Build the Future</span> of
            Manufacturing Together
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto mb-12 text-blue-100 text-lg leading-relaxed"
          >
            Have a concept, drawing, or production requirement? Our experts will
            help you turn your design into a perfectly engineered component.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 25px rgba(255,255,255,0.3)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-white text-blue-700 font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-gray-100 transition-all"
            >
              Request a Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>

        {/* Decorative CNC Gear Icons */}
        <motion.div
          className="absolute left-[8%] bottom-[15%] text-cyan-200/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <Cog className="w-20 h-20" />
        </motion.div>

        <motion.div
          className="absolute right-[5%] top-[20%] text-blue-200/30"
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        >
          <Cog className="w-16 h-16" />
        </motion.div>

        {/* Fade Overlay for Bottom */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-blue-900 via-blue-800/70 to-transparent" />
      </section>
    </main>
  );
}
