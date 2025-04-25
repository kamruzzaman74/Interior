import React from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white text-gray-900 min-h-screen py-20 px-6 sm:px-12 lg:px-24 overflow-hidden">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-yellow-500 tracking-wide mb-4 animate-bounce">
            Get in Touch with Ferosa Interiors 🏡
          </h1>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
            Whether you're planning to redesign your home or give your workspace a stunning transformation, our team at <strong className="text-pink-500">Ferosa Interiors & Construction</strong> is ready to assist you. Reach out and let's build your dream space together!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6 bg-yellow-50 p-8 rounded-2xl shadow-xl"
          >
            <input
              type="text"
              placeholder="👤 Your Name"
              className="w-full p-4 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-500"
            />
            <input
              type="email"
              placeholder="📧 Your Email"
              className="w-full p-4 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-500"
            />
            <textarea
              placeholder="💬 Your Message"
              rows={6}
              className="w-full p-4 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-500"
            />
            <button className="w-full py-3 text-lg font-bold bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-all duration-300 shadow-xl">
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
            <div className="bg-pink-50 p-6 rounded-2xl shadow-md">
              <h3 className="text-2xl font-bold text-pink-600 mb-2">📍 Our Location</h3>
              <p className="text-gray-700 text-lg">
                Block D, House No 197, Road No 5, Bashundhara R/A, Dhaka
              </p>
            </div>

            <div className="bg-yellow-50 p-6 rounded-2xl shadow-md">
              <h3 className="text-2xl font-bold text-yellow-600 mb-2">📞 Contact Us Directly</h3>
              <p className="text-gray-700 text-lg">
                📱 Phone: <a href="tel:01821951556" className="text-blue-600 underline">01821-951556</a><br />
                📧 Gmail: <a href="mailto:Bsicontruction500@gmail.com" className="text-blue-600 underline">Bsicontruction500@gmail.com</a>
              </p>
            </div>

            <div className="bg-gray-100 p-6 rounded-2xl shadow-md">
              <h3 className="text-2xl font-bold text-gray-700 mb-2">🔗 Social Media</h3>
              <div className="flex flex-col space-y-2 text-lg">
                <a
                  href="https://www.facebook.com/Ferosainteriorandconstruction"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  🌐 Facebook
                </a>
                <a href="#" className="text-pink-600 hover:underline">📸 Instagram</a>
                <a href="#" className="text-blue-400 hover:underline">🐦 Twitter</a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Extra Note */}
        <p className="mt-16 text-center text-sm text-gray-500 italic">
          © {new Date().getFullYear()} growMore19 ,enhance your oppourtunity. Dhaka, Bangladesh.
        </p>
      </div>
    </>
  );
};

export default Contact;


