"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Cog, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isTop, setIsTop] = useState(true);
  const [serviceDropdown, setServiceDropdown] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Quality", href: "/quality" },
    { name: "Projects", href: "/projects" },
    { name: "Contact Us", href: "/contact" },
  ];

  const serviceLinks = [
    { name: "Our Services", href: "/services" },
    { name: "CNC Machining", href: "/services/cnc-machining" },
    { name: "VMC Machining", href: "/services/vmc-machining" },
    { name: "Lathe Turning", href: "/services/lathe-turning" },
    { name: "Rapid Prototyping", href: "/services/rapid-prototyping" },
    { name: "Component Assembly", href: "/services/component-assembly" },
  ];

  // Scroll hide/show effect
  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      setIsTop(currentScrollY < 50);
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isTop
          ? "bg-white backdrop-blur-md border-gray-100 rounded-2xl shadow-md"
          : "bg-white backdrop-blur-md shadow-sm border-b border-gray-100"
      }`}
    >
      <nav className="container mx-auto px-6 py-2.5 flex justify-between items-center">
        {/* Logo Section */}
        <Link href="/" className="flex items-center space-x-1">
          <Image
            src="/logo2.png" // make sure this file is inside /public folder
            alt="AB Industries Logo"
            width={40}
            height={40}
            className="object-contain"
            priority
          />
          <span className="text-xl font-bold text-blue-700">Industries</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center relative">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            // Special handling for Services dropdown
            if (link.name === "Services") {
              return (
                <div
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() => setServiceDropdown(true)}
                  onMouseLeave={() => setServiceDropdown(false)}
                >
                  <button
                    className={`flex items-center gap-1 font-medium transition-colors ${
                      isActive
                        ? "text-blue-700"
                        : "text-gray-700 hover:text-blue-700"
                    }`}
                  >
                    Services <ChevronDown size={16} />
                  </button>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {serviceDropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-0 mt-2 w-56 bg-white rounded-md border border-gray-100 shadow-lg py-2"
                      >
                        {serviceLinks.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            // Regular nav link
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors ${
                  isActive
                    ? "text-blue-700"
                    : "text-gray-700 hover:text-blue-700"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          <Link
            href="/contact"
            className="px-5 py-2 font-medium rounded-md bg-blue-700 text-white hover:bg-blue-800 transition-colors"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 hover:text-blue-700 transition-colors"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white/95 backdrop-blur-md"
          >
            <div className="flex flex-col">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                if (link.name === "Services") {
                  return (
                    <div key={link.name} className="border-t border-gray-100">
                      <button
                        onClick={() => setServiceDropdown((prev) => !prev)}
                        className={`w-full text-left px-6 py-3 font-medium flex justify-between items-center ${
                          isActive
                            ? "text-blue-700"
                            : "text-gray-700 hover:text-blue-700"
                        }`}
                      >
                        Services <ChevronDown size={18} />
                      </button>
                      <AnimatePresence>
                        {serviceDropdown && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="flex flex-col bg-blue-50"
                          >
                            {serviceLinks.map((service) => (
                              <Link
                                key={service.name}
                                href={service.href}
                                onClick={() => {
                                  setMenuOpen(false);
                                  setServiceDropdown(false);
                                }}
                                className="block px-8 py-2 text-gray-700 hover:text-blue-700 hover:bg-blue-100 transition-colors"
                              >
                                {service.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`block px-6 py-3 font-medium transition-colors ${
                      isActive
                        ? "text-blue-700"
                        : "text-gray-700 hover:text-blue-700"
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="px-6 py-3 border-t border-gray-100">
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="block text-center px-5 py-2 rounded-md bg-blue-700 text-white font-medium hover:bg-blue-800 transition-colors"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
