'use client';
import { motion } from 'framer-motion';
import { Star, Clock, Heart } from '@/lib/icons'; // Import custom icons if needed, or use lucide directly
import { whyWorkData } from '@/data/CareerPage/whyWorkData';

export default function WhyWorkSection() {
    const { title, description, mainBenefits, additionalBenefits } = whyWorkData;

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

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {mainBenefits.map((benefit, index) => {
                        const IconComponent = benefit.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 text-center group"
                            >
                                <div className={`h-16 w-16 rounded-2xl bg-linear-to-r ${benefit.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <div className="text-white">
                                        <IconComponent className="h-8 w-8" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Additional Benefits */}
                <div className="grid md:grid-cols-3 gap-8 mt-12">
                    {additionalBenefits.map((benefit, index) => {
                        const IconComponent = benefit.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl"
                            >
                                <div className={`h-12 w-12 rounded-xl bg-linear-to-r ${benefit.color} flex items-center justify-center shrink-0`}>
                                    <div className="text-white">
                                        <IconComponent className="h-6 w-6" />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h4>
                                    <p className="text-slate-600 text-sm">{benefit.description}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}