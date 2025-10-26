'use client';
import { developmentProcessData } from '@/data/ServicePage/developmentProcessData';
import { motion } from 'framer-motion';

export default function DevelopmentProcess() {
  const { title, description, steps, liveViewers } = developmentProcessData;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">{title}</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((process, index) => {
             const IconComponent = process.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className={`h-16 w-16 rounded-2xl bg-linear-to-r ${process.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    <IconComponent className="h-8 w-8" />
                  </div>
                </div>
                <div className="text-2xl font-bold bg-linear-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{process.title}</h3>
                <p className="text-slate-600 leading-relaxed">{process.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Live Stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 bg-slate-100 rounded-full px-4 py-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-slate-700 font-medium">{liveViewers} people viewing now</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}