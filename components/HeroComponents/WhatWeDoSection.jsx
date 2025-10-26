'use client';
import { motion } from 'framer-motion';
import { whatWeDoData } from '@/data/HomePage/whatWeDoData';

export default function WhatWeDoSection() {
  const { tag, tagIcon: TagIcon, title, expertise } = whatWeDoData;

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-sm font-medium mb-4">
            <TagIcon className="h-4 w-4" />
            {tag}
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">{title}</h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {expertise.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 group"
            >
              <div className={`h-20 w-20 rounded-2xl bg-linear-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  <service.icon className="h-10 w-10" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}