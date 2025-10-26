'use client';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { aboutData } from '@/data/HomePage/aboutData';

export default function AboutSection() {
    const { tag, tagIcon: TagIcon, title, description, cta, services } = aboutData;

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content (No changes needed here) */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="space-y-6"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-sm font-medium">
                            <TagIcon className="h-4 w-4" />
                            {tag}
                        </div>

                        <h2 className="text-4xl font-extrabold text-slate-900"> {/* Added font-extrabold */}
                            {title}
                        </h2>

                        <p className="text-lg text-slate-600 leading-relaxed">
                            {description}
                        </p>

                        <Button className="rounded-xl px-6 py-3 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold transition-all duration-300 hover:scale-105">
                            {cta}
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </motion.div>

                    {/* Right Content - Service Cards (RESPONSIVE FIX APPLIED) */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        // CHANGE: Grid stacks on small screens (grid-cols-1), 2 cols on sm+
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                    >
                        {services.map((service, index) => {
                             const IconComponent = service.icon; // Get icon component
                            return (
                              <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300"
                              >
                                <div className={`h-16 w-16 rounded-2xl bg-linear-to-r ${service.color} flex items-center justify-center mb-4`}>
                                  <IconComponent className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="font-semibold text-slate-900 text-lg mb-2">{service.title}</h3>
                                <p className="text-slate-600 text-sm">{service.description}</p>
                              </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}