"use client";

import React, { useMemo, useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import { Skiper51 } from "@/components/ui/skiper-ui/skiper51";
import MaskedDiv from "@/components/ui/masked-div";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import {
  MoveRight,
  ArrowRight,
  CheckCircle,
  Layers,
  Target,
  Cog,
  Cpu,
  Shield,
  Wrench,
  Factory,
} from "lucide-react";
import AnimatedNumber from "@/components/ui/animated-number";

/**
 * NOTES:
 * - Next 16: next/image automatic optimizations apply. Keep `priority` only for hero.
 * - Many animations are converted to simple `transform` CSS or lower-frequency JS animations.
 * - We lazy-mount heavy sections (projects carousel, masked div gallery, industries) using IntersectionObserver.
 */

/* ---------- Data ---------- */
const PROJECTS = [
  { src: "/Impeller.jpg", alt: "CNC Machined Impeller" },
  { src: "/Feed-Rod-Bearing.jpg", alt: "Feed Rod Bearing" },
  { src: "/Protective-Cap.jpg", alt: "Protective Cap" },
  { src: "/Fork_blkbg.jpg", alt: "Machined Fork Component" },
  { src: "/Press-Fit-768x768.jpg", alt: "Press Fit Component" },
  { src: "/enhanced_drone.jpg", alt: "Drone Body Machining" },
];

const METRICS = [
  {
    num: 100,
    suffix: "+",
    label: "Happy Clients",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-12 h-12 text-blue-600 drop-shadow-md"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c2.21 0 4-1.79 4-4S14.21 3 12 3 8 4.79 8 7s1.79 4 4 4z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 21v-1a7 7 0 0114 0v1" />
      </svg>
    ),
  },
  {
    num: 99.8,
    suffix: "%",
    label: "Quality Rate",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-12 h-12 text-blue-600 drop-shadow-md"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
      >
        <circle cx="12" cy="12" r="9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    num: 24,
    suffix: "H",
    label: "Quote Turnaround",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-12 h-12 text-blue-600 drop-shadow-md"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
      >
        <circle cx="12" cy="12" r="9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 2" />
      </svg>
    ),
  },
  {
    num: 10,
    suffix: "+",
    label: "Years of Experience",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-12 h-12 text-blue-600 drop-shadow-md"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18V3H3zM7 9h10M7 15h10M9 7v10" />
      </svg>
    ),
  },
];

/* ---------- Utility Hook: lazy mount when in view ---------- */
function useInViewLazy(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const node = ref.current;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            obs.disconnect();
          }
        });
      },
      { threshold }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [ref]);

  return [ref, inView];
}

/* ---------- Main Component ---------- */
export default function ProjectsPage() {
  const { scrollYProgress } = useScroll();
  // gentler parallax distance
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  // reduced-motion: respect user setting and prefer reduced-motion
  const shouldReduceMotion = useReducedMotion();

  // mobile detection (initially SSR-friendly)
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // precompute random positions for tiny float dots (only once)
  const floatPositions = useMemo(
    () =>
      Array.from({ length: 10 }).map((_, i) => ({
        id: i,
        top: `${10 + Math.floor(Math.random() * 80)}%`,
        left: `${5 + Math.floor(Math.random() * 88)}%`,
        // small offset in duration/delay for natural motion
        dur: 4 + (i % 4) * 0.9,
        delay: (i % 5) * 0.3,
      })),
    []
  );

  // Lazy mount refs for heavy sections
  const [projectsRef, projectsInView] = useInViewLazy(0.15);
  const [maskedRef, maskedInView] = useInViewLazy(0.12);
  const [industriesRef, industriesInView] = useInViewLazy(0.15);

  /* --- Motion variants --- */
  const fadeInView = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.6 },
  };

  // lightweight rotation for icons (long duration)
  const slowRotate = {
    animate: shouldReduceMotion
      ? {}
      : {
          rotate: [0, 360],
        },
    transition: { duration: 65, repeat: Infinity, ease: "linear" },
  };

  return (
    <main className="bg-white text-slate-800">
      {/* ================= ENHANCED HERO SECTION ================= */}
      <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden text-white">
        {/* Parallax Background - useTransform controls only translateY */}
        <motion.div className="absolute inset-0 z-0 will-change-transform" style={{ y }}>
          <Image
            src="/cnc-1.avif"
            alt="AB Industries Projects Background"
            fill
            priority // hero should be priority
            quality={70}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-900/80 to-blue-950/80" />
        </motion.div>

        {/* Animated Glow Orbs - simplified */}
        <motion.div
          className="absolute -top-10 left-20 w-72 h-72 md:w-96 md:h-96 bg-blue-500/20 rounded-full blur-[96px] will-change-transform"
          animate={
            shouldReduceMotion
              ? { opacity: 0.45 }
              : { scale: [1, 1.12, 1], opacity: [0.32, 0.56, 0.32] }
          }
          transition={{ duration: 9, repeat: shouldReduceMotion ? 0 : Infinity }}
          aria-hidden
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[320px] h-[320px] md:w-[400px] md:h-[400px] bg-blue-300/20 rounded-full blur-[88px] will-change-transform"
          animate={
            shouldReduceMotion
              ? { opacity: 0.28 }
              : { scale: [1.06, 0.95, 1.06], opacity: [0.28, 0.56, 0.28] }
          }
          transition={{ duration: 11, repeat: shouldReduceMotion ? 0 : Infinity }}
          aria-hidden
        />

        {/* Floating Industrial SVGs: long slow rotations/translation (reduced on mobile/reduced-motion) */}
        <motion.div
          className="absolute top-[15%] left-[10%] text-blue-400/50 will-change-transform"
          {...(shouldReduceMotion ? {} : slowRotate)}
          aria-hidden
        >
          <Cog className="w-16 h-16 md:w-20 md:h-20" />
        </motion.div>

        <motion.div
          className="absolute top-[25%] right-[15%] text-blue-500/50 will-change-transform"
          animate={
            shouldReduceMotion
              ? {}
              : { rotate: [-360, 0] } // long reverse rotate
          }
          transition={{ duration: 85, repeat: shouldReduceMotion ? 0 : Infinity, ease: "linear" }}
          aria-hidden
        >
          <Wrench className="w-12 h-12 md:w-16 md:h-16" />
        </motion.div>

        <motion.div
          className="absolute bottom-[10%] left-[20%] text-blue-300/50 will-change-transform"
          animate={shouldReduceMotion ? {} : { y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: shouldReduceMotion ? 0 : Infinity }}
          aria-hidden
        >
          <Factory className="w-20 h-20" />
        </motion.div>

        <motion.div
          className="absolute top-[60%] right-[25%] text-blue-400/40 will-change-transform"
          animate={shouldReduceMotion ? {} : { y: [0, 16, 0] }}
          transition={{ duration: 8, repeat: shouldReduceMotion ? 0 : Infinity }}
          aria-hidden
        >
          <Layers className="w-20 h-20" />
        </motion.div>

        <motion.div
          className="absolute bottom-[20%] right-[10%] text-blue-300/50 will-change-transform"
          animate={shouldReduceMotion ? {} : { y: [0, -18, 0], rotate: [0, 14, 0] }}
          transition={{ duration: 9, repeat: shouldReduceMotion ? 0 : Infinity }}
          aria-hidden
        >
          <Target className="w-20 h-20" />
        </motion.div>

        {/* Subtle Metal Texture layer (low opacity, CSS only) */}
        <div className="absolute inset-0 bg-[url('/cnc-main.jpg')] opacity-8 bg-cover mix-blend-overlay pointer-events-none" />

        {/* Hero Text Content */}
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-200"
          >
            Our <span className="text-white">Projects & Works</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Explore a collection of real-world precision engineering solutions — from aerospace-grade components to complex automation parts, crafted with accuracy and passion.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            whileHover={shouldReduceMotion ? {} : { scale: 1.06 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-lg font-semibold shadow-[0_0_20px_rgba(30,64,175,0.4)] transition-all duration-300"
            >
              Request a Quote <MoveRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>

        {/* Animated Floating Mini Icons (precomputed positions, GPU transform only) */}
        {floatPositions.map((p) => (
          <motion.div
            key={p.id}
            className="absolute w-2 h-2 bg-blue-400/50 rounded-full blur-sm will-change-transform"
            style={{ top: p.top, left: p.left }}
            animate={shouldReduceMotion ? {} : { y: [0, -8, 0], opacity: [0.28, 0.7, 0.28] }}
            transition={{
              duration: p.dur,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
            aria-hidden
          />
        ))}
      </section>

      {/* ================= TRUST STATS – PREMIUM SVG ICONS ================= */}
      <section className="relative py-28 bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-0 w-[420px] h-[420px] bg-blue-200/30 rounded-full blur-[110px]" />
          <div className="absolute bottom-10 right-0 w-[360px] h-[360px] bg-indigo-200/40 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center text-4xl md:text-5xl font-extrabold mb-20 text-slate-900 leading-tight"
          >
            Our{" "}
            <span className="text-blue-700 bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text">
              Performance Metrics
            </span>
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            {METRICS.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                viewport={{ once: true }}
                whileHover={shouldReduceMotion ? {} : { scale: 1.04, y: -6 }}
                className="relative bg-white/80 backdrop-blur-xl border border-blue-100 hover:border-blue-400 transition-all duration-500 rounded-3xl p-8 shadow-lg"
              >
                <div className="flex justify-center mb-5">{stat.icon}</div>
                <h3 className="text-5xl md:text-6xl font-extrabold text-blue-700 mb-1">
                  <AnimatedNumber value={stat.num} postfix={stat.suffix} />
                </h3>
                <p className="text-slate-600 font-semibold tracking-wide">{stat.label}</p>

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-[3px] bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-400 rounded-full opacity-80" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HERO SECTION (Skiper51) ================= */}
      <section className="relative z-10">
        <Skiper51 />
      </section>

      {/* =================== INTERACTIVE AUTO + DRAG PROJECTS SHOWCASE =================== */}
      <section
        ref={projectsRef}
        className="relative py-28 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 text-white overflow-hidden"
      >
        {/* Ambient Animated Glows (CSS + transform only) */}
        <div
          className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full blur-[160px] will-change-transform"
          style={{ background: "rgba(59,130,246,0.09)" }}
          aria-hidden
        />
        <div
          className="absolute bottom-0 right-0 w-[520px] h-[520px] rounded-full blur-[180px] will-change-transform"
          style={{ background: "rgba(99,102,241,0.06)" }}
          aria-hidden
        />

        {/* Decorative SVGs (reduced work - simple CSS animations) */}
        <svg className="absolute top-10 left-1/4 w-14 h-14 animate-[spin_25s_linear_infinite] text-blue-700/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M12 6v6l4 2" />
        </svg>
        <svg className="absolute bottom-10 right-1/3 w-12 h-12 animate-[spin_30s_linear_infinite] text-blue-500/15" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <circle cx="12" cy="12" r="9" strokeWidth="1.2" />
        </svg>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold mb-16 leading-tight"
          >
            Featured <span className="text-blue-400">Projects</span>
          </motion.h2>
        </div>

        {/* Auto + Drag Carousel */}
        <motion.div className="relative z-10 cursor-grab active:cursor-grabbing overflow-hidden">
          <motion.div
            drag="x"
            dragConstraints={{ left: -1200, right: 0 }}
            dragElastic={0.08}
            dragTransition={{ bounceStiffness: 120, bounceDamping: 24 }}
            // only auto-animate on non-mobile and if user doesn't prefer reduced motion
            animate={!isMobile && !shouldReduceMotion ? { x: ["0%", "-50%"] } : {}}
            transition={
              !isMobile && !shouldReduceMotion
                ? { duration: 36, ease: "linear", repeat: Infinity }
                : {}
            }
            className="flex gap-6 sm:gap-8 px-6 sm:px-8 md:px-10 py-10"
          >
            {[...PROJECTS, ...PROJECTS].map((p, i) => (
              <motion.div
                key={i}
                whileHover={shouldReduceMotion ? {} : { rotateY: 3.5, rotateX: -1.8, y: -6, scale: 1.04 }}
                transition={{ type: "spring", stiffness: 140, damping: 18 }}
                className="relative shrink-0 w-64 sm:w-72 md:w-80 lg:w-96 bg-gradient-to-b from-slate-800 to-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-transparent to-blue-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="relative h-48 sm:h-56 md:h-60 overflow-hidden">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    width={800}
                    height={520}
                    sizes="(max-width: 640px) 100vw, 33vw"
                    quality={68}
                    className="w-full h-full object-cover transition-transform duration-700"
                    // Do not set priority for each image: hero is priority only
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                </div>

                <div className="p-5 relative z-10">
                  <h3 className="text-lg sm:text-xl font-semibold text-blue-300 mb-1">{p.alt}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">High-precision component manufacturing with next-gen automation.</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 text-center relative z-10"
        >
          <p className="text-slate-400 text-lg mb-6">Want to explore more of our work?</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-xl text-white font-semibold text-lg shadow-[0_0_25px_rgba(30,64,175,0.4)] transition-all duration-300"
          >
            Request a Quote
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>

        {/* Custom animations (moved most to CSS keyframes to reduce JS) */}
        <style jsx>{`
          @keyframes spin-slow {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          .animate-spin-slow { animation: spin-slow 25s linear infinite; }
          .animate-bounce-slow { animation: bounce-slow 5s ease-in-out infinite; }
          @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
          .animate-[spin_25s_linear_infinite] { animation: spin 25s linear infinite; }
          .animate-[spin_30s_linear_infinite] { animation: spin 30s linear infinite; }
        `}</style>
      </section>

      {/* ================= VIDEO SHOWCASE WITH MASKING skiper Ui ================= */}
      <div ref={maskedRef} className="items-between m-auto mt-40 flex max-w-5xl flex-wrap justify-between gap-5">
        {/* lazy-mount heavy images only when in view */}
        {maskedInView ? (
          <>
            <MaskedDiv maskType="type-1" size={0.45} className="my-4">
              <Image src="/vnc-1.jpg" alt="Precision at AB Industries" width={1280} height={720} quality={70} className="object-cover" />
            </MaskedDiv>
            <MaskedDiv maskType="type-1" size={0.45} className="rotate-180 my-4">
              <Image src="/cnc-2.avif" alt="Precision at AB Industries" width={1280} height={720} quality={70} className="object-cover" />
            </MaskedDiv>
            <MaskedDiv maskType="type-3" className="my-4">
              <Image src="/cncoper-2.jpg" alt="Precision at AB Industries" width={1280} height={720} quality={70} className="object-cover" />
            </MaskedDiv>
          </>
        ) : (
          // lightweight placeholders to preserve layout until images load
          <>
            <div className="w-[45%] h-[220px] bg-slate-800/60 rounded-lg" />
            <div className="w-[45%] h-[220px] bg-slate-800/60 rounded-lg" />
            <div className="w-full md:w-[30%] h-[220px] bg-slate-800/60 rounded-lg" />
          </>
        )}
      </div>

      {/* ================= INDUSTRIES SECTION ================= */}
      <section ref={industriesRef} className="relative py-28 bg-white overflow-hidden">
        <motion.div
          className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full blur-[120px] will-change-transform"
          animate={shouldReduceMotion ? {} : { scale: [1, 1.12, 1], opacity: [0.18, 0.5, 0.18] }}
          transition={{ duration: 11, repeat: shouldReduceMotion ? 0 : Infinity }}
          aria-hidden
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[360px] h-[360px] rounded-full blur-[100px] will-change-transform"
          animate={shouldReduceMotion ? {} : { scale: [1.04, 0.92, 1.04], opacity: [0.22, 0.48, 0.22] }}
          transition={{ duration: 12, repeat: shouldReduceMotion ? 0 : Infinity }}
          aria-hidden
        />

        <div className="relative container mx-auto px-6 text-center z-10">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6"
          >
            Industries We <span className="text-blue-600">Empower</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-500 max-w-2xl mx-auto mb-16 text-lg"
          >
            AB Industries delivers precision engineering solutions across a diverse range of industries — from aerospace and defense to medical technology and automation systems.
          </motion.p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { name: "Aerospace", icon: <Layers /> },
              { name: "Automotive", icon: <Wrench /> },
              { name: "Medical Devices", icon: <Target /> },
              { name: "Electronics", icon: <Cpu /> },
              { name: "Defence", icon: <Shield /> },
              { name: "Automation", icon: <Cog /> },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                whileHover={shouldReduceMotion ? {} : { y: -6, scale: 1.04 }}
                className="group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="flex justify-center items-center mb-4 text-blue-600 text-4xl">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="py-24 bg-gradient-to-r from-blue-700 to-blue-600 text-white text-center">
        <motion.h2 {...fadeInView} className="text-4xl font-bold mb-4">
          Let’s Create Your Next Precision Component
        </motion.h2>
        <motion.p {...fadeInView} transition={{ delay: 0.2 }} className="text-blue-100 mb-10 max-w-2xl mx-auto text-lg">
          From prototypes to production, we deliver quality machining that drives your innovation forward.
        </motion.p>
        <motion.div whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-white text-blue-700 font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-blue-100 transition">
            Request a Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
