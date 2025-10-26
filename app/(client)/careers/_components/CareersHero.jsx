'use client';
import { careersHeroData } from '@/data/CareerPage/careersHeroData';
import { motion } from 'framer-motion';

export default function CareersHero() {
  const { tag, tagIcon: TagIcon, titleLine1, titleGradient, description } = careersHeroData;

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-linear-to-r from-blue-200/40 to-purple-200/40 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-linear-to-r from-cyan-200/40 to-blue-200/40 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-sm font-medium mb-6">
              <TagIcon className="h-4 w-4" />
              {tag}
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              {titleLine1}
              <span className="block bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {titleGradient}
              </span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}