import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const About = () => {
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
          <h1 className="text-5xl sm:text-6xl font-extrabold text-indigo-600 tracking-wider mb-6 animate__animated animate__fadeInUp">
            Transform Your Space with Style ✨
          </h1>
          <p className="text-gray-700 text-lg sm:text-xl mx-auto max-w-4xl">
            At [Your Company Name], we specialize in creating customized, high-end interior designs that elevate any space. Let us bring your vision to life.
          </p>
        </motion.div>

        {/* Content Section */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="rounded-full overflow-hidden shadow-xl border-4 border-indigo-500 hover:shadow-xl hover:border-indigo-700 transition-all duration-500 mx-auto"
          >
            <img
              src="./bekub.jpg"
              alt="Interior Design"
              className="w-[150px] h-[150px] object-cover rounded-full"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-indigo-500">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our mission is to create inspiring, personalized spaces that blend aesthetics with functionality. Whether it’s a home, office, or commercial space, we focus on making every design unique and tailored to your needs.
            </p>

            <h3 className="text-2xl font-bold text-indigo-500">What We Offer</h3>
            <ul className="list-inside space-y-6 text-lg text-gray-600 leading-relaxed">
              <li>✨ **Bespoke Interior Designs**: Tailored to your vision and preferences.</li>
              <li>🛋 **Luxury Materials**: Using the finest quality materials for a sophisticated finish.</li>
              <li>🎨 **Creative Styling**: A blend of creativity and practicality to transform any space.</li>
              <li>🔨 **End-to-End Service**: We handle everything from concept to completion.</li>
            </ul>
          </motion.div>
        </div>
        
        {/* Call-to-action Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-lg text-white text-xl font-semibold shadow-lg transform hover:scale-110 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </>
  );
};

export default About;
