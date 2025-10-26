'use client';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { openingsData } from '@/data/CareerPage/openingsData';

export default function OpeningsSection() {
  const { title, noOpenings } = openingsData;

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">{title}</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="bg-white rounded-2xl p-12 shadow-lg border border-slate-200">
            <div className="text-6xl mb-6">{noOpenings.icon}</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">{noOpenings.title}</h3>
            <p className="text-slate-600 mb-8 text-lg">
              {noOpenings.description}
            </p>
            <Button className="rounded-xl px-8 py-3 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold">
              {noOpenings.cta}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}