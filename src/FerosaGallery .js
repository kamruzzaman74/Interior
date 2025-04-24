import React from 'react';
import { motion } from 'framer-motion';

const FerosaGallery = () => {
  const images = [
    { src: '/jjwebp.webp' },
    { src: '/r.webp' },
    { src: '/ttwebp.webp', title: 'Cozy Bedroom Retreat' },
  ];

  return (
    <div className="bg-gray-100 py-20 px-6 md:px-20">
      <motion.h2 
        className="text-4xl font-bold text-center text-yellow-600 mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        🌟 Discover the Art of Interior Living
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-10">
        {images.map((img, idx) => (
          <motion.div 
            key={idx}
            className="bg-white rounded-3xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-500"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.3 }}
          >
            <img 
              src={img.src} 
              alt={img.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{img.title}</h3>
              <p className="text-gray-600">
                Transform your daily experience with timeless design, thoughtful layout, and warm atmosphere.
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="text-center mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          ✨ At Ferosa INTERIORS, we don’t just decorate rooms—we craft experiences.
          Let us turn your ideas into inspiring, elegant realities that feel like home. 💫
        </p>
      </motion.div>
    </div>
  );
};

export default FerosaGallery;
