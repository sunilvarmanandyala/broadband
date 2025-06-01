import React from 'react';
import { motion } from 'framer-motion';

const highlights = [
  {
    title: 'Gigabit Speeds',
    description: 'Experience ultra-fast internet connectivity.',
    icon: '⚡',
  },
  {
    title: '24/7 Local Support',
    description: 'Our team is here to help anytime.',
    icon: '📞',
  },
  {
    title: 'Reliable Coverage',
    description: 'Stay connected with our expansive network.',
    icon: '📡',
  },
];

const HighlightCards = () => (
  <section className="bg-white dark:bg-gray-900 py-12 px-4">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      {highlights.map((item, index) => (
        <motion.div
          key={index}
          className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-4xl mb-4">{item.icon}</div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{item.title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default HighlightCards;
