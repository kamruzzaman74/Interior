import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalculator } from 'react-icons/fa';

const AICostEstimator = () => {
  const [size, setSize] = useState('');
  const [style, setStyle] = useState('standard');
  const [material, setMaterial] = useState('basic');
  const [cost, setCost] = useState(null);

  const calculateCost = () => {
    const base = parseInt(size) * 180 || 0; // base cost in BDT per sqft

    const styleMultiplier = style === 'luxury' ? 2 : style === 'premium' ? 1.5 : 1;
    const materialMultiplier = material === 'high' ? 2 : material === 'medium' ? 1.5 : 1;

    const estimatedCost = base * styleMultiplier * materialMultiplier;
    setCost(estimatedCost);
  };

  return (
    <div className="relative bg-gradient-to-br from-yellow-100 via-white to-yellow-50 py-16 px-4 sm:px-8 lg:px-24">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')] bg-cover bg-center opacity-10 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl max-w-4xl mx-auto p-8"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8 flex items-center justify-center gap-3">
          <FaCalculator className="text-yellow-500" />
          Interior Cost Estimator – Dhaka
        </h2>

        <p className="text-center text-gray-600 mb-6">
          📐 Estimate your home or office interior cost in <strong>BDT</strong> instantly based on your preferences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block mb-1 font-semibold text-gray-700">Room Size (sq ft)</label>
            <input
              type="number"
              value={size}
              onChange={(e) => setSize(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="e.g., 300"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-700">Design Level</label>
            <select
              value={style}
              onChange={(e) => setStyle(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              <option value="standard">Standard</option>
              <option value="premium">Premium</option>
              <option value="luxury">Luxury</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-700">Material Quality</label>
            <select
              value={material}
              onChange={(e) => setMaterial(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              <option value="basic">Basic</option>
              <option value="medium">Medium</option>
              <option value="high">High-End</option>
            </select>
          </div>
        </div>

        <div className="text-center mt-8">
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            onClick={calculateCost}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 text-lg"
          >
            Estimate Cost
          </motion.button>

          {cost !== null && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-6 text-2xl font-semibold text-green-700"
            >
              Estimated Cost: ৳ {cost.toLocaleString('en-BD')}
            </motion.p>
          )}
        </div>

        <p className="mt-6 text-sm text-center text-gray-500 italic">
          Note: This is an estimate for residential or commercial interiors in Dhaka and nearby areas.
        </p>
      </motion.div>
    </div>
  );
};

export default AICostEstimator;
