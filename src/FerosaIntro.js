// FerosaIntro.tsx
import React from 'react';
import { motion } from 'framer-motion';

const FerosaIntro = () => {
  return (
    <div className="bg-white w-full py-16 px-4 md:px-20 flex flex-col md:flex-row items-center justify-between gap-12">
      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <img
          src="/bb.PNG" // 🔁 Replace with your actual image path
          alt="Ferosa Interior Design"
          className="rounded-3xl shadow-xl w-full h-auto object-cover"
        />
      </div>

      {/* Content Section */}
      <motion.div
        className="w-full md:w-1/2 text-gray-800"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold text-yellow-600 mb-4">Ferosa INTERIORS</h2>
        <p className="text-lg leading-8 mb-4">
          ✨ We provide a full range of planning and overseeing services for projects of all shapes and sizes. 
          Our mission is to center every design on the client’s ideal vision, making thoughtful changes that you’ll love.
        </p>
        <p className="text-lg leading-8">
          🌞 The Sunshine team uses skilled craftsmen, quality materials, and harmonious design techniques 
          to achieve warm, functional spaces.
        </p>
      </motion.div>
    </div>
  );
};

export default FerosaIntro;
