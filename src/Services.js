import React from 'react';
import { motion } from 'framer-motion';
import { FaCouch, FaPaintRoller, FaHome } from 'react-icons/fa';
import Navbar from './Navbar';

const services = [
  {
    title: 'Luxury Living Rooms',
    desc: 'Experience unmatched elegance with our custom-designed living rooms. Every detail — from lighting to furniture — is tailored for sophistication and comfort.',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
    icon: <FaCouch className="text-3xl text-yellow-600" />,
    features: ['Premium furniture layout', 'Ambient lighting setup', 'Custom wall art & decor'],
  },
  {
    title: 'Creative Wall Designs',
    desc: 'We specialize in transforming plain walls into breathtaking focal points using textures, patterns, and artistic finishes.',
    img: 'nn.PNG',
    icon: <FaPaintRoller className="text-3xl text-yellow-600" />,
    features: ['Textured finishes', 'Modern murals & patterns', 'Eco-friendly paints'],
  },
  {
    title: 'Modern Home Renovation',
    desc: 'Breathe new life into your space with seamless renovations that merge function, luxury, and modern aesthetics.',
    img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914',
    icon: <FaHome className="text-3xl text-yellow-600" />,
    features: ['Open concept remodeling', 'Smart home integration', 'Energy-efficient upgrades'],
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const InteriorServices = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-br from-yellow-50 via-white to-yellow-100 py-20 px-5 sm:px-10 lg:px-24 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-16"
        >
          💫 Elevate Your Space with Our Services
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="relative group rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-700 bg-white backdrop-blur-lg bg-opacity-60 border border-white/40"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-60 object-cover transform group-hover:scale-110 transition duration-500 ease-in-out"
              />
              <div className="p-6 text-left">
                <div className="flex items-center gap-3 mb-3">
                  {service.icon}
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-yellow-600 transition">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
                  {service.features.map((f, index) => (
                    <li key={index}>{f}</li>
                  ))}
                </ul>
              </div>

              <div className="absolute inset-0 rounded-3xl ring-2 ring-transparent group-hover:ring-yellow-300 transition-all duration-700 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default InteriorServices;
