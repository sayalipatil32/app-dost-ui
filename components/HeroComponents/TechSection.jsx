'use client';
import { motion } from 'framer-motion';
import { techData } from '@/data/HomePage/techData';

export default function TechSection() {
  const { title, description, technologies } = techData;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">{title}</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="text-center p-4 bg-slate-100 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <div className="text-2xl mb-2">{tech.icon}</div>
              <div className="font-semibold text-slate-700 text-sm">{tech.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}