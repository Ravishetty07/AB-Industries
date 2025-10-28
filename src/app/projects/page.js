// src/app/page.js
"use client"; // We need this for all the Framer Motion animations

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Framer Motion (Combined into one line)
import { motion, useScroll, useTransform } from 'framer-motion';

// Lucide Icons (Combined into one line)
import { ArrowRight, MoveRight, Layers, Target, CheckCircle } from 'lucide-react';


// Data for our Card Stack
const CORE_SERVICES = [
  {
    id: 1,
    title: "Precision CNC Machining",
    description: "Utilizing state-of-the-art 3, 4, and 5-axis CNC & VMC machines for your most complex parts."
  },
  {
    id: 2,
    title: "Rapid Prototyping",
    description: "From concept to a functional, high-fidelity part in your hands. Perfect for validating your designs."
  },
  {
    id: 3,
    title: "Component Assembly & Finishing",
    description: "Save time and resources. We provide full-service assembly, welding, and finishing for your components."
  }
];

// Data for our Projects Showcase
const PROJECTS = [
  { src: "/Impeller.jpg", alt: "CNC Machined Impeller" },
  { src: "/Feed-Rod-Bearing.jpg", alt: "Custom Feed Rod Bearing" },
  { src: "/Protective-Cap.jpg", alt: "Machined Protective Cap" },
  { src: "/Fork_blkbg.jpg", alt: "Precision Machined Fork" },
  { src: "/Press-Fit-768x768.jpg", alt: "Press Fit Component" },
  { src: "/enhanced_drone.jpg", alt: "Drone Component" },
];

export default function Home() {
  
  // Setup for Parallax scroll on the hero image
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  // Reusable animation variants for sections
  const fadeInView = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    // transition: { duration: 0.6 }
  };

  return (
    <main className="bg-white">
      
      {/* === SECTION 1: CRAZY HERO === */}
      <section className="relative h-screen flex flex-col justify-center items-center text-white overflow-hidden">
        {/* Parallax Background Image */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y }}
        >
          <Image
            src="/image-slider3.png" // UPDATED IMAGE
            alt="AB Industries Manufacturing"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </motion.div>
        
        {/* Rolling Text Content */}
        <div className="relative z-10 text-center flex flex-col items-center">
          <div className="mb-6 overflow-hidden">
            <motion.h1
              className="text-5xl md:text-8xl font-bold"
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              AB Industries
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.p
              className="text-xl md:text-2xl text-gray-200 max-w-2xl"
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              Precision. Quality. Delivery.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="mt-10"
          >
            <Link href="/contact" className="bg-blue-700 text-white font-medium py-3 px-8 rounded-md
                         hover:bg-blue-800 transition-colors duration-300
                         flex items-center justify-center text-lg shadow-lg">
              Get Your Free Quote
              <MoveRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* === SECTION 2: TRUST BAR (with Animated Numbers) === */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div className="p-4" {...fadeInView} transition={{...fadeInView.transition, delay: 0}}>
              <h3 className="text-4xl font-bold text-blue-700 mb-2">
                <AnimatedNumber value={100} postfix="+" />
              </h3>
              <p className="text-gray-600 font-medium">Happy Clients</p>
            </motion.div>
            <motion.div className="p-4" {...fadeInView} transition={{...fadeInView.transition, delay: 0.1}}>
              <h3 className="text-4xl font-bold text-blue-700 mb-2">
                <AnimatedNumber value={99.8} postfix="%" />
              </h3>
              <p className="text-gray-600 font-medium">Quality Rate</p>
            </motion.div>
            <motion.div className="p-4" {...fadeInView} transition={{...fadeInView.transition, delay: 0.2}}>
              <h3 className="text-4xl font-bold text-blue-700 mb-2">
                <AnimatedNumber value={24} postfix="H" />
              </h3>
              <p className="text-gray-600 font-medium">Quote Turnaround</p>
            </motion.div>
            <motion.div className="p-4" {...fadeInView} transition={{...fadeInView.transition, delay: 0.3}}>
              <h3 className="text-4xl font-bold text-blue-700 mb-2">
                <AnimatedNumber value={10} postfix="+" />
              </h3>
              <p className="text-gray-600 font-medium">Years of Experience</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === SECTION 3: CORE SERVICES (Card Stack Scroll) === */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="relative h-96"
              initial={{ opacity: 0, x: -50 }}
              {...fadeInView}
            >
              <CardStack items={CORE_SERVICES} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              {...fadeInView}
              transition={{...fadeInView.transition, delay: 0.2}}
            >
              <h2 className="text-4xl font-bold mb-6">
                From Concept to Component
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We are a one-stop shop for all your machining needs. We deliver 
                high-quality parts, from single prototypes to full production runs.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center text-lg">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 shrink-0" />
                  5-Axis CNC & VMC Machining
                </li>
                <li className="flex items-center text-lg">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 shrink-0" />
                  Rapid Prototyping Services
                </li>
                <li className="flex items-center text-lg">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 shrink-0" />
                  Full Assembly & Finishing
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === SECTION 4: PROJECTS SHOWCASE (Horizontal Scroll) === */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <motion.div className="text-center max-w-3xl mx-auto mb-16" {...fadeInView}>
            <h2 className="text-4xl font-bold mb-4">
              Projects Showcase
            </h2>
            <p className="text-lg text-gray-300">
              A gallery of high-quality, complex parts we manufacture for our clients.
            </p>
          </motion.div>
        </div>
        
        {/* Horizontal Scroll Container */}
        <div className="overflow-x-auto pb-10">
          <div className="flex gap-6 px-6 md:px-12">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={index}
                className="shrink-0 w-80 md:w-96 rounded-lg overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Image
                  src={project.src}
                  alt={project.alt}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 bg-gray-800">
                  <p className="font-medium text-white">{project.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* === SECTION 5: INDUSTRIES (Hover Expand) === */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div className="text-center max-w-3xl mx-auto mb-16" {...fadeInView}>
            <h2 className="text-4xl font-bold mb-4">
              Serving Critical Industries
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: "Aerospace", icon: <Layers /> },
              { name: "Automotive", icon: <Layers /> },
              { name: "Medical", icon: <Target /> }, // Changed icon
              { name: "Electronics", icon: <Layers /> },
              { name: "Defence", icon: <Target /> }, // Changed icon
              { name: "Automation", icon: <Layers /> },
            ].map((industry, i) => (
              <motion.div
                key={industry.name}
                className="p-6 border rounded-lg text-center cursor-pointer"
                {...fadeInView} // Spreads initial, whileInView, and viewport
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "#1D4ED8",
                  color: "white"
                }}
                // This is the single, corrected transition prop
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  duration: 0.6, 
                  delay: i * 0.05 
                }}
              >
                <div className="flex justify-center items-center mb-3 w-12 h-12 mx-auto">
                  {industry.icon}
                </div>
                <h3 className="text-lg font-semibold">{industry.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === FINAL CALL TO ACTION SECTION === */}
      <section className="py-24 bg-blue-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h2 className="text-4xl font-bold mb-6" {...fadeInView}>
            Let's Build Your Next Component
          </motion.h2>
          <motion.p 
            className="text-lg text-blue-100 max-w-2xl mx-auto mb-10" 
            {...fadeInView}
            transition={{...fadeInView.transition, delay: 0.1}}
          >
            Have a design ready? Our engineers are standing by to provide a 
            free, no-obligation quote for your CNC, VMC, or Lathe requirements.
          </motion.p>
          <motion.div
            {...fadeInView}
            transition={{...fadeInView.transition, delay: 0.2}}
            whileHover={{ scale: 1.05 }}
          >
            <Link href="/contact" className="bg-white text-blue-700 font-medium py-3 px-8 rounded-md
                         hover:bg-gray-100 transition-colors duration-300
                         inline-flex items-center justify-center text-lg shadow-lg">
              Request a Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}