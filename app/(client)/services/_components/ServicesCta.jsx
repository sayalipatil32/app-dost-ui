'use client';
// Reusing the same structure as other CTAs, but with specific Services data
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { servicesCtaData } from '@/data/ServicePage/servicesCtaData';

export default function ServicesCta() {
  const { title, description, cta } = servicesCtaData;

  return (
    <section className="py-20 bg-linear-to-r from-blue-600 to-purple-600">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {description}
          </p>
          <Button className="rounded-xl px-8 py-4 bg-white text-blue-600 hover:bg-blue-50 font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            {cta}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}