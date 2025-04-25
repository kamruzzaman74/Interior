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
      {/* Background Effect */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="w-full h-full bg-gradient-to-r from-blue-200 via-purple-100 to-pink-200 opacity-30" />
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 text-center space-y-8 px-6 md:px-10 lg:px-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.7 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-wide leading-tight">
          Design Beyond Imagination
        </h1>
        <p className="text-lg md:text-xl text-gray-700 font-medium leading-relaxed">
          Where luxury meets innovation, creating spaces that elevate your lifestyle to new heights. Immerse yourself in a world of tailored design.
        </p>

        {/* Moving Dynamic Elements */}
        <motion.div
          className="absolute top-24 left-16"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 4, repeatType: "loop" }}
        >
          <div className="w-48 h-48 bg-gradient-to-r from-teal-300 to-blue-500 rounded-full shadow-xl"></div>
        </motion.div>

        <motion.div
          className="absolute bottom-24 right-16"
          animate={{ scale: [1, 1.2, 1], rotate: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 5, repeatType: "loop" }}
        >
          <div className="w-48 h-48 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-xl"></div>
        </motion.div>

        {/* Modern Section */}
        <div className="relative mt-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
            Timeless Designs for Modern Living
          </h2>
          <p className="text-gray-600 text-md md:text-lg font-medium leading-relaxed mb-8">
            We integrate cutting-edge technology, sustainable solutions, and modern aesthetics to craft interiors that are both functional and inspiring. From cozy living rooms to sleek office spaces, we create environments that feel both expansive and intimate.
          </p>
        </div>

        {/* Features with Fancy Icons */}
        <div className="space-y-6">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-gray-700">
            <motion.div
              className="flex items-center space-x-3"
              animate={{ x: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 3, repeatType: "loop" }}
            >
              <div className="p-3 bg-gradient-to-r from-purple-400 to-pink-500 text-white rounded-full shadow-lg">
                <i className="fas fa-leaf text-xl"></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Sustainable Design 🌱</h3>
                <p className="text-sm">Eco-friendly materials for a better tomorrow.</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center space-x-3"
              animate={{ x: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, repeatType: "loop" }}
            >
              <div className="p-3 bg-gradient-to-r from-yellow-300 to-orange-500 text-white rounded-full shadow-lg">
                <i className="fas fa-lightbulb text-xl"></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Smart Lighting 💡</h3>
                <p className="text-sm">Ambient and adjustable lighting to suit every mood.</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center space-x-3"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 3, repeatType: "loop" }}
            >
              <div className="p-3 bg-gradient-to-r from-teal-400 to-blue-500 text-white rounded-full shadow-lg">
                <i className="fas fa-tv text-xl"></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Smart Home Integration 🏡</h3>
                <p className="text-sm">Effortlessly control your space with the latest tech.</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer Text Animation */}
        <motion.p
          className="text-sm text-gray-600 font-light mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          Step into the future with interiors that are not only visually stunning but also intuitively designed for comfort and functionality.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default AnimatedFinalComponent;

