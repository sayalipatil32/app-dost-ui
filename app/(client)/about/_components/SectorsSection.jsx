'use client';
import { motion } from 'framer-motion';
import { sectorsData } from '@/data/AboutPage/sectorsData';
import { CheckCircle } from '@/lib/icons'; // Use custom icon

export default function SectorsSection() {
  const { title, description, sectors } = sectorsData;

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

        <div className="grid lg:grid-cols-3 gap-8">
          {sectors.map((sector, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className={`h-2 bg-linear-to-r ${sector.color}`}></div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`h-12 w-12 rounded-xl bg-linear-to-r ${sector.color} flex items-center justify-center`}>
                    <div className="text-white">
                      <sector.icon className="h-8 w-8" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{sector.title}</h3>
                </div>
                <ul className="space-y-3">
                  {sector.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}