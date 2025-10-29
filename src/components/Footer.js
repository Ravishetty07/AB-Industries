"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Cog } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Quality & Infrastructure", href: "/quality" },
    { name: "Contact Us", href: "/contact" },
  ];

  const serviceLinks = [
    { name: "CNC Machining", href: "/services/cnc-machining" },
    { name: "VMC Machining", href: "/services/vmc-machining" },
    { name: "Lathe Turning", href: "/services/lathe-turning" },
    { name: "Rapid Prototyping", href: "/services/rapid-prototyping" },
    { name: "Component Assembly", href: "/services/component-assembly" },
  ];

  return (
    <footer className="relative bg-[#0a0f1a] text-gray-300 overflow-hidden">
      {/* Subtle animated blue orb */}
      <motion.div
        className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl"
        animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* --- About Section --- */}
        <div>
          <Link
            href="/"
            className="flex items-center space-x-2 font-semibold text-xl text-white mb-4"
          >
            <Cog className="w-6 h-6 text-blue-400" />
            <span>A.B. Industries</span>
          </Link>
          <p className="text-blue-100 text-sm leading-relaxed mb-6">
            Precision engineering company specializing in CNC, VMC, and Lathe
            machining — delivering quality, reliability, and innovation for
            every client requirement.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://linkedin.com"
              className="text-blue-300 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5v-14a5 5 0 0 0-5-5zM8 19h-3v-11h3v11zm-1.5-12.3a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5zm13.5 12.3h-3v-5.6c0-3.4-4-3.1-4 0v5.6h-3v-11h3v1.8c1.4-2.6 7-2.8 7 2.5v6.7z" />
              </svg>
            </a>
            <a
              href="mailto:abindustries4851@gmail.com"
              className="text-blue-300 hover:text-white transition-colors"
              aria-label="Email"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </a>
          </div>
        </div>

        {/* --- Quick Links --- */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-3">
            {footerLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* --- Services --- */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">
            Our Services
          </h4>
          <ul className="space-y-3">
            {serviceLinks.map((s) => (
              <li key={s.name}>
                <Link
                  href={s.href}
                  className="hover:text-blue-400 transition-colors"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* --- Contact Info --- */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">
            Get in Touch
          </h4>
          <ul className="space-y-4 text-blue-100 text-sm">
            <li className="flex items-start gap-3">
              <span>📍</span>
              <span>
                Sy.No. 70/11, Near Basaveshwara Temple, Cheemasandra,
                <br /> Virgonagar Post, Bangalore – 560049
              </span>
            </li>
            {/* <li className="flex items-start gap-3">
              <span>👨‍🔧</span>
              <span>Mr. Chand Pasha & Mr. Shafiulla</span>
            </li> */}
            <li className="flex items-start gap-3">
              <span>📞</span>
              <span>+91 99800 41620 / +91 98804 01262</span>
            </li>
            <li className="flex items-start gap-3">
              <span>☎️</span>
              <span>080-71290285</span>
            </li>
            <li className="flex items-start gap-3">
              <span>✉️</span>
              <span>abindustries4851@gmail.com</span>
            </li>
            {/* <li className="flex items-start gap-3">
              <span>🧾</span>
              <span>GST – 29AAVFA5740J1ZV</span>
            </li> */}
          </ul>
        </div>
      </div>

      {/* --- Footer Bottom --- */}
      <div className="border-t border-blue-900/40 text-center py-6 text-sm text-blue-200/80">
        <p>
          © {currentYear}{" "}
          <span className="font-semibold text-white">A.B. Industries</span>. All
          Rights Reserved. | Built with ⚙️ Precision
        </p>
      </div>
    </footer>
  );
};

export default Footer;
