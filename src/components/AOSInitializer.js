"use client"; // This directive is very important!

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const AOSInitializer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true,     // Animate only once
      offset: 50,     // Animate when 50px past the element
    });
  }, []); // Empty dependency array ensures this runs only once

  return null; // This component doesn't render any visible HTML
};

export default AOSInitializer;