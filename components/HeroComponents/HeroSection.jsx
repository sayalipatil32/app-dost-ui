'use client';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { heroData } from '@/data/HomePage/heroData';
import { Calendar } from '@/lib/icons'; // Import our custom icon

export default function HeroSection() {
  const {
    tag, tagIcon: TagIcon, titleLine1, titleGradient, titleLine3,
    description, stats, ctaPrimary, ctaSecondary, features, cards
  } = heroData;

  return (
    <section className="relative pt-20 pb-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-linear-to-r from-blue-200/40 to-purple-200/40 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-linear-to-r from-cyan-200/40 to-blue-200/40 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-sm font-medium">
              <TagIcon className="h-4 w-4" />
              {tag}
            </div>

            <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
              {titleLine1}
              <span className="block bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {titleGradient}
              </span>
              {titleLine3}
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed">
              {description}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className={`flex items-center gap-2 text-2xl font-bold text-slate-900`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="rounded-xl px-8 py-3 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105">
                {ctaPrimary}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="rounded-xl px-8 py-3 border-2 border-slate-300 hover:border-blue-500 text-slate-700 hover:text-blue-600 font-semibold transition-all duration-300 hover:scale-105">
                {ctaSecondary}
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {features.map((feature) => (
                <div key={feature.label} className="text-center">
                  <div className="flex justify-center mb-2">
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <div className="font-semibold text-slate-900">{feature.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {cards.map((card) => (
              <motion.div
                key={card.id}
                whileHover={{ scale: 1.05 }}
                className={`${card.colSpan} bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300`}
              >
                <div className={`flex items-center ${card.aside ? 'justify-between' : ''} mb-4`}>
                  <div className="flex items-center gap-3">
                    <div className={`h-12 w-12 rounded-xl bg-linear-to-br ${card.iconBg} flex items-center justify-center`}>
                      {/* Use custom Calendar or Lucide icon */}
                      {card.id === 'founded' ? <Calendar className="h-6 w-6 text-white" /> : <card.icon className="h-6 w-6 text-white" />}
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-slate-900">{card.title}</div>
                      <div className="text-sm text-slate-600">{card.subtitle}</div>
                    </div>
                  </div>
                  {card.aside && (
                     <div className="text-right">
                       <div className="text-lg font-semibold text-slate-900">{card.aside.title}</div>
                       <div className={`text-sm font-medium ${card.aside.color}`}>{card.aside.subtitle}</div>
                     </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}