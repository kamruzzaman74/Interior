import React from 'react';
import { motion } from 'framer-motion';

const WhyPickMe = () => {
  return (
    <div className="bg-white py-20 px-6 md:px-20">
      {/* Title Section */}
      <motion.h2
        className="text-4xl font-bold text-center text-yellow-600 mb-12"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        💡 Why Pick Me?
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Image + Animated Text */}
        <motion.div
          className="relative"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/ee.webp" // Replace with your image
            alt="Creative Vision"
            className="w-full h-72 object-cover rounded-3xl shadow-lg"
          />
          <motion.div
            className="absolute bottom-4 left-4 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-xl font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            🎨 Creative Vision You Can Trust
          </motion.div>
        </motion.div>

        {/* Right Text */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-gray-800"
        >
          <h3 className="text-2xl font-semibold mb-4">Thoughtful Designs, Personalized for You</h3>
          <p className="mb-4 text-lg">
            We blend innovation and elegance, bringing your dream spaces to life. Every project is a journey, and we make it magical.
          </p>
          <p className="text-lg">
            Whether it's a luxury lounge or a cozy corner, our approach is detail-oriented, emotion-driven, and 100% client-focused.
          </p>
        </motion.div>
      </div>

      {/* Second Row (Reverse Layout) */}
      <div className="grid md:grid-cols-2 gap-10 mt-16 items-center">
        {/* Left Text */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-gray-800"
        >
          <h3 className="text-2xl font-semibold mb-4">Timely Delivery & Transparent Process</h3>
          <p className="mb-4 text-lg">
            We value your time and investment. That's why we keep communication crystal clear and deadlines sacred.
          </p>
          <p className="text-lg">
            Let us take care of the details while you enjoy watching your dream home or workspace unfold beautifully.
          </p>
        </motion.div>

        {/* Right Image + Text */}
        <motion.div
          className="relative"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/e.webp" // Replace with your image
            alt="Trust Process"
            className="w-full h-72 object-cover rounded-3xl shadow-lg"
          />
          <motion.div
            className="absolute top-4 right-4 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-xl font-medium"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            ⏱️ Trusted Process, Happy Clients
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyPickMe;
