// src/app/layout.js
"use client"; // This IS REQUIRED for ReactLenis to work

import './globals.css';
import { Inter } from 'next/font/google';

// 1. IMPORT LENIS
import ReactLenis from 'lenis/react';

import Header from '../components/Header';
import Footer from '../components/Footer';
// We NO LONGER need AOSInitializer.js

const inter = Inter({ subsets: ['latin'] });

// Note: We must remove the 'metadata' export because 'use client'
// pages cannot export static metadata. This is a tradeoff for smooth scroll.

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* 2. WRAP THE BODY CONTENT */}
      <ReactLenis root>
        <body className={inter.className}>

          {/* <AOSInitializer /> We can now delete this file if we want */}

          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </ReactLenis>
    </html>
  );
}