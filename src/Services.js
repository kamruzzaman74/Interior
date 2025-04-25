import React from 'react';
import { motion } from 'framer-motion';
import {
  FaCouch,
  FaPaintRoller,
  FaHome,
  FaBriefcase,
  FaBuilding,
  FaUtensils,
  FaStore,
  FaBed,
} from 'react-icons/fa';
import Navbar from './Navbar';

const services = [
  {
    title: 'Luxury Living Rooms',
    desc: 'Custom-designed living spaces with premium furniture and artistic decor.',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
    icon: <FaCouch className="text-3xl text-yellow-600" />,
    features: ['Designer layout', 'Ambient lighting', 'Luxury finishes'],
  },
  {
    title: 'Creative Wall Designs',
    desc: 'Transform your walls with textures, patterns, and eco-friendly paints.',
    img: 'rr.webp',
    icon: <FaPaintRoller className="text-3xl text-yellow-600" />,
    features: ['Modern textures', 'Custom patterns', 'Sustainable materials'],
  },
  {
    title: 'Modern Home Renovation',
    desc: 'Elegant renovations combining modern aesthetics with functional design.',
    img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914',
    icon: <FaHome className="text-3xl text-yellow-600" />,
    features: ['Open layouts', 'Smart tech', 'Eco upgrades'],
  },
  {
    title: 'Office Renovation',
    desc: 'Boost productivity with smart, stylish office interiors.',
    img: 'e.webp',
    icon: <FaBriefcase className="text-3xl text-yellow-600" />,
    features: ['Ergonomic setups', 'Modern lighting', 'Corporate themes'],
  },
  {
    title: 'Apartment Interior',
    desc: 'Make your apartment a luxury space with our smart layouts.',
    img: 'ttwebp.webp',
    icon: <FaBuilding className="text-3xl text-yellow-600" />,
    features: ['Space optimization', 'Stylish storage', 'Elegant design'],
  },
  {
    title: 'Villa Design',
    desc: 'Premium villa interior and exterior designs that speak elegance.',
    img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be',
    icon: <FaHome className="text-3xl text-yellow-600" />,
    features: ['Landscape integration', 'Classic themes', 'High-end finishes'],
  },
  {
    title: 'Restaurant Interior',
    desc: 'Create memorable dining experiences with stunning restaurant designs.',
    img: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092',
    icon: <FaUtensils className="text-3xl text-yellow-600" />,
    features: ['Ambiance lighting', 'Functional layout', 'Brand colors'],
  },
  {
    title: 'Barber Shop Design',
    desc: 'Modern and functional barber shop interiors for a premium feel.',
    img: 'hhg.webp',
    icon: <FaStore className="text-3xl text-yellow-600" />,
    features: ['Mirror setups', 'Waiting zone', 'Barber station design'],
  },
  {
    title: 'Bedroom & Bathroom Design',
    desc: 'Relaxing and luxurious bedrooms and spa-like bathrooms.',
    img: 'mmm.webp',
    icon: <FaBed className="text-3xl text-yellow-600" />,
    features: ['Cozy themes', 'Modern tubs & showers', 'Ambient lighting'],
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
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
          ✨ Interior Design Services in Bangladesh
        </motion.h2>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-700 bg-white border border-white/50"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-60 object-cover transform group-hover:scale-105 transition duration-500"
              />
              <div className="p-6 text-left">
                <div className="flex items-center gap-3 mb-4">
                  {service.icon}
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-yellow-600 transition">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-3">{service.desc}</p>
                <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
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
