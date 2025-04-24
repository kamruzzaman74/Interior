import React from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white min-h-screen py-20 px-6 sm:px-12 lg:px-24 overflow-hidden">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-extrabold text-yellow-400 tracking-wide mb-4 animate-bounce">
            Get in Touch with Us
          </h1>
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            We’d love to hear from you! Whether you need a consultation or want to discuss your next project, feel free to reach out.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-lg bg-gray-800 border-2 border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-white/70"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-lg bg-gray-800 border-2 border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-white/70"
            />
            <textarea
              placeholder="Your Message"
              rows={6}
              className="w-full p-4 rounded-lg bg-gray-800 border-2 border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-white/70"
            />
            <button className="w-full py-3 text-lg font-bold bg-yellow-400 text-black rounded-lg hover:bg-yellow-300 transition-all duration-300 shadow-xl hover:shadow-yellow-400">
              ✉️ Send Message
            </button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-pink-400 mb-2">📍 Our Location</h3>
              <p className="text-white/80 text-lg">
                Block D, House No 197, Road No 5, Bashundhara R/A, Dhaka
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-pink-400 mb-2">📱 Follow Us</h3>
              <div className="flex space-x-6 text-xl">
                <a
                  href="https://www.facebook.com/Ferosainteriorandconstruction"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 hover:text-yellow-300 transition duration-300"
                >
                  🔗 Facebook
                </a>
                <a
                  href="#"
                  className="text-yellow-400 hover:text-yellow-300 transition duration-300"
                >
                  📸 Instagram
                </a>
                <a
                  href="#"
                  className="text-yellow-400 hover:text-yellow-300 transition duration-300"
                >
                  🐦 Twitter
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Contact;

