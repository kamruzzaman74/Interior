import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaRegLightbulb, FaTools, FaCheckCircle } from 'react-icons/fa';

const works = [
  {
    title: 'Luxury Living Room',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
  },
  {
    title: 'Office Renovation',
    image: 'fff.webp',
  },
  {
    title: 'Apartment Interior',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914',
  },
  {
    title: 'Barber Shop Design',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7',
  },
  {
    title: 'Bedroom & Bathroom Design',
    image: 'eeee.webp',
  },
  {
    title: 'Restaurant Interior',
    image: 'vvv.webp',
  },
];

const testimonials = [
  {
    name: 'Mr. Rahman',
    role: 'Apartment Owner, Dhaka',
    comment:
      'Turned my dream apartment into reality! Professional, creative, and detail-oriented.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Sarah Islam',
    role: 'CEO, TechFirm Ltd.',
    comment:
      'Amazing office renovation. The ambience now reflects our company’s identity. Highly recommend!',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
];

const Portfolio = () => {
  return (
    <div className="bg-yellow-50 min-h-screen py-14 px-4 sm:px-6 md:px-10 lg:px-20 text-gray-800">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl font-bold text-center mb-12"
      >
        ✨ Our Portfolio – Interior Design Projects in Dhaka
      </motion.h2>

      {/* Work Gallery */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-20">
        {works.map((work, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-md bg-white hover:shadow-xl transition"
          >
            <img
              src={work.image}
              alt={work.title}
              className="w-full h-56 sm:h-64 md:h-72 object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="p-4 text-center font-semibold text-base sm:text-lg">
              {work.title}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Design Process */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <h3 className="text-2xl sm:text-3xl font-bold text-center mb-10">
          🛠️ Our Design Process
        </h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-center">
          {[{
            icon: <FaRegLightbulb />,
            title: 'Concept & Planning',
            desc: 'We brainstorm and plan layouts tailored to your vision and lifestyle.',
          },
          {
            icon: <FaTools />,
            title: 'Design & Execution',
            desc: 'We turn blueprints into stunning interiors with quality craftsmanship.',
          },
          {
            icon: <FaCheckCircle />,
            title: 'Final Touch & Delivery',
            desc: 'Finishing touches to ensure the project exceeds your expectations.',
          }].map((step, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <div className="text-yellow-500 text-4xl mb-4 mx-auto">
                {step.icon}
              </div>
              <h4 className="font-bold text-lg sm:text-xl mb-2">{step.title}</h4>
              <p className="text-sm sm:text-base text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Testimonials */}
      <h3 className="text-2xl sm:text-3xl font-bold mb-10 text-center">
        💬 Client Testimonials
      </h3>
      <div className="grid gap-6 sm:grid-cols-2">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-lg flex flex-col sm:flex-row items-start gap-4"
          >
            <img
              src={t.image}
              alt={t.name}
              className="w-16 h-16 rounded-full object-cover border-4 border-yellow-100"
            />
            <div>
              <FaQuoteLeft className="text-yellow-500 text-xl mb-2" />
              <p className="text-gray-700 mb-2 italic text-sm sm:text-base">
                "{t.comment}"
              </p>
              <p className="font-semibold">{t.name}</p>
              <p className="text-sm text-gray-500">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
