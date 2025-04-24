import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative bg-gradient-to-br from-[#1f1c2c] via-[#302b63] to-[#24243e] text-white px-6 sm:px-12 lg:px-24 pt-16 pb-10">
      {/* Neon glow circle */}
      <div className="absolute -top-10 left-1/2 w-96 h-96 bg-pink-400 opacity-20 rounded-full blur-3xl transform -translate-x-1/2 -z-10"></div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10 items-center text-center sm:text-left">
        {/* Branding */}
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-wide text-yellow-400">Ferosainteriorandconstruction</h2>
          <p className="text-white/80 text-sm">
            Elegant Spaces ✨ | Modern Designs 🛋 | Trusted Craftsmanship 🛠
          </p>
        </div>

        {/* Nav Links */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-pink-300">Explore</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#services" className="hover:text-yellow-300 transition">Services</a></li>
            <li><a href="#portfolio" className="hover:text-yellow-300 transition">Portfolio</a></li>
            <li><a href="#contact" className="hover:text-yellow-300 transition">Contact Us</a></li>
          </ul>
        </div>

        {/* Social + Newsletter */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-pink-300">Follow Us</h3>
          <div className="flex justify-center sm:justify-start gap-4">
            <a href="https://www.facebook.com/Ferosainteriorandconstruction?rdid=tkMkTAYr2bMV5CLp&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1E4jQvxb9A%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 hover:bg-blue-600 hover:text-white p-3 rounded-full transition shadow-xl transform hover:scale-110"
            >
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/ferosainterior"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-pink-600 hover:bg-pink-600 hover:text-white p-3 rounded-full transition shadow-xl transform hover:scale-110"
            >
              <FaInstagram />
            </a>
            <a href="https://bd.linkedin.com/company/ferosainterior"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-800 hover:bg-blue-800 hover:text-white p-3 rounded-full transition shadow-xl transform hover:scale-110"
            >
              <FaLinkedinIn />
            </a>
          </div>

          <div className="mt-4">
            <input
              type="email"
              placeholder="Subscribe for updates"
              className="w-full sm:w-auto px-4 py-2 rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
        </div>
      </div>

      {/* Divider & Copyright */}
      <div className="border-t border-white/20 my-8"></div>
      <div className="text-center text-white/70 text-sm">
        © {new Date().getFullYear()} All rights reserved by <span className="text-white font-semibold">GrowMore19</span>.
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-yellow-400 hover:bg-yellow-500 text-black p-3 rounded-full shadow-lg z-50 transition transform hover:scale-110"
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
