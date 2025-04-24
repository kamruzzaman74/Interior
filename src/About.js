import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const About = () => {
  return (
    <>
      <Navbar />

      <div className="bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white min-h-screen py-20 px-6 sm:px-12 lg:px-24 overflow-hidden">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-extrabold text-yellow-300 tracking-wider mb-4 animate-bounce drop-shadow-md">
            Welcome to Our Interior Studio ✨
          </h1>
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            We redefine spaces with unique designs, high-end materials, and an eye for style. Your dream space starts here.
          </p>
        </motion.div>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="rounded-3xl overflow-hidden shadow-2xl border-[6px] border-pink-400 hover:shadow-pink-300 transition-all duration-500 hover:scale-105"
          >
            <img
              src="./bekub.jpg"
              alt="Interior Design"
              className="w-full h-[500px] object-cover rounded-3xl"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-cyan-400 drop-shadow">Why Choose Us?</h2>
            <ul className="list-disc list-inside space-y-4 text-lg text-white/90 leading-relaxed">
              <li>
                🎨 <strong className="text-yellow-300">Innovative Designs:</strong> We tailor every idea to match your personality and purpose.
              </li>
              <li>
                🛋 <strong className="text-pink-400">Luxury Materials:</strong> Handpicked textures, fabrics, and elements that define class.
              </li>
              <li>
                🤝 <strong className="text-cyan-300">Client First:</strong> Your vision fuels our creativity. We listen, we deliver.
              </li>
              <li>
                🔨 <strong className="text-lime-300">Full-Service Package:</strong> From planning to execution, we handle everything professionally.
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
