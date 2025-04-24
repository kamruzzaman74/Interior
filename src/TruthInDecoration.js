import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 * i, duration: 0.6, ease: 'easeOut' },
  }),
};

const TruthInDecoration = () => {
  return (
    <div className="bg-gradient-to-br from-white via-yellow-50 to-white py-20 px-4 sm:px-8 lg:px-24 overflow-hidden">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: -60 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt="Modern interior design"
            className="w-full rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-700"
          />
        </motion.div>

        {/* Text Content */}
        <div className="text-center md:text-left z-10">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight"
          >
            ✨ Truth in Our Modern Decoration ✨
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-xl mx-auto md:mx-0"
          >
            Where every space whispers stories, and every detail shines with intention. 
            Our modern designs combine warmth, minimalism, and authenticity — 
            creating spaces that speak the truth of your lifestyle. 🌿🪞
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default TruthInDecoration;
