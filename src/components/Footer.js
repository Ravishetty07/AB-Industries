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
    <footer className="relative bg-black   text-gray-300 overflow-hidden">
      {/* Animated glow orb */}
      <motion.div
        className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl"
        animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* --- About Section --- */}
        <div>
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 font-semibold text-xl text-white mb-4"
          >
            <Cog className="w-6 h-6" />
            <span>AB Industries</span>
          </Link>
          <p className="text-blue-100 text-sm leading-relaxed mb-6">
            Trusted precision engineering partner delivering CNC, VMC, and Lathe
            machining excellence — built on accuracy, technology, and
            reliability.
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
              href="https://twitter.com"
              className="text-blue-300 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.6a9.9 9.9 0 0 1-2.8.8 4.9 4.9 0 0 0 2.2-2.7 9.8 9.8 0 0 1-3.1 1.2A4.9 4.9 0 0 0 16.7 3c-2.7 0-4.9 2.3-4.9 5 0 .4 0 .8.1 1.1A14 14 0 0 1 1.7 3.1a5 5 0 0 0-.7 2.5c0 1.7.9 3.2 2.2 4.1a4.7 4.7 0 0 1-2.2-.6v.1a5 5 0 0 0 3.9 4.9 5 5 0 0 1-1.3.2c-.3 0-.6 0-.9-.1a5 5 0 0 0 4.7 3.5A9.9 9.9 0 0 1 0 20a14 14 0 0 0 7.6 2.2c9.1 0 14.1-7.6 14.1-14.2 0-.2 0-.4 0-.6A10 10 0 0 0 24 4.6z" />
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
                  className="hover:text-white transition-colors"
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
                  className="hover:text-white transition-colors"
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
              <span>No. 45, Industrial Area, Peenya, Bangalore – 560058</span>
            </li>
            <li className="flex items-center gap-3">
              <span>📞</span>
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-3">
              <span>✉️</span>
              <span>sales@abindustries.in</span>
            </li>
          </ul>
        </div>
      </div>

      {/* --- Footer Bottom Bar --- */}
      <div className="border-t border-blue-700/40 text-center py-6 text-sm text-blue-200/80">
        <p>
          © {currentYear}{" "}
          <span className="font-semibold text-white">AB Industries</span>. All
          Rights Reserved. | Designed with ⚙️ Precision
        </p>
      </div>
    </footer>
  );
};

export default Footer;
