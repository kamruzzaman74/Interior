import React from "react";
import { motion } from "framer-motion";

const AnimatedFinalComponent = () => {
  return (
    <motion.div
      className="relative min-h-screen bg-white text-gray-900 flex justify-center items-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      {/* Background Animation */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="w-full h-full bg-gray-200" />
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 text-center space-y-6 px-4 md:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.7 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-black tracking-wide">
          Discover Elegant Interiors for Your Space
        </h1>
        <p className="text-lg md:text-xl text-gray-600 font-light animate__animated animate__fadeIn">
          Transform your home with bespoke designs crafted just for you.
        </p>

        <motion.button
          className="px-6 py-3 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg shadow-xl text-white text-lg font-semibold transform hover:scale-110 transition-all"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          Start Your Design Journey
        </motion.button>

        {/* Moving Elements */}
        <motion.div
          className="absolute top-16 right-16"
          animate={{ x: [0, 20, 0], rotate: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 4, repeatType: "loop" }}
        >
          <div className="w-24 h-24 bg-gradient-to-r from-teal-300 to-blue-500 rounded-full"></div>
        </motion.div>

        <motion.div
          className="absolute bottom-16 left-16"
          animate={{ x: [0, -20, 0], rotate: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 5, repeatType: "loop" }}
        >
          <div className="w-24 h-24 bg-gradient-to-r from-pink-400 to-orange-500 rounded-full"></div>
        </motion.div>

        {/* Footer Text Animation */}
        <motion.p
          className="text-sm text-gray-500 font-light mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          Let's create a space that reflects your style and personality.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default AnimatedFinalComponent;
