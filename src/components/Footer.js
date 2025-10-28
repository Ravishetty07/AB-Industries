// src/components/Footer.js
import React from 'react';
import Link from 'next/link';

// Simple placeholder icons. We can upgrade these later.
const SocialIcon = ({ children }) => (
  <a href="#" className="text-gray-400 hover:text-white transition-colors">
    {children}
  </a>
);

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Column 1: About AB Industries */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4">
              AB Industries
            </h3>
            <p className="text-gray-400">
              Your trusted partner for high-precision CNC, VMC, and Lathe machined components.
            </p>
            <div className="flex space-x-4 mt-6">
              {/* Placeholder SVGs for social icons */}
              <SocialIcon>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </SocialIcon>
              <SocialIcon>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.422.724-.665 1.565-.665 2.454 0 1.717.87 3.228 2.188 4.11-.806-.025-1.565-.247-2.227-.616v.054c0 2.39 1.698 4.382 3.946 4.834-.413.112-.85.172-1.296.172-.316 0-.623-.031-.926-.086.63 1.953 2.453 3.374 4.61 3.413-1.685 1.317-3.811 2.102-6.115 2.102-.398 0-.79-.023-1.175-.068 2.179 1.397 4.768 2.212 7.548 2.212 9.058 0 14.01-7.502 14.01-14.01 0-.213-.005-.425-.014-.636.961-.69 1.798-1.562 2.457-2.548z"/></svg>
              </SocialIcon>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/quality" className="hover:text-white transition-colors">Quality & Infrastructure</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition-colors">CNC Machining</a></li>
              <li><a href="#" className="hover:text-white transition-colors">VMC Machining</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Lathe Turning</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Rapid Prototyping</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Component Assembly</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-3 mt-1 text-white">📍</span>
                <span>(Sample) No. 123, ABC Estate, Peenya, Bangalore - 560058</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-white">📞</span>
                <span>+91 12345 67890</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-white">✉️</span>
                <span>sales@abindustries.in</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} AB Industries. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;