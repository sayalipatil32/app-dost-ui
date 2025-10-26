'use client';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { ctaData } from '@/data/HomePage/ctaData';

export default function CtaSection() {
  const { title, description, ctaPrimary, ctaSecondary } = ctaData;
  
  return (
    <section className="py-16 bg-linear-to-r from-blue-600 to-purple-600">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">{title}</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="rounded-xl px-8 py-3 bg-white text-blue-600 hover:bg-blue-50 font-semibold shadow-lg">
              {ctaPrimary}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="rounded-xl px-8 py-3 border-2 border-white text-black hover:bg-white/10 hover:text-white font-semibold">
              {ctaSecondary}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}