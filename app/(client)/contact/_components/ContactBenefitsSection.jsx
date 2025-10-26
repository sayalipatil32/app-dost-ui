'use client';
import { motion } from 'framer-motion';
import { contactBenefitsData } from '@/data/ContactPage/contactBenefitsData';

export default function ContactBenefitsSection() {
    const { title, description, benefits } = contactBenefitsData;

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
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        {description}
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((benefit, index) => {
                        const IconComponent = benefit.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300"
                            >
                                <div className="h-12 w-12 rounded-xl bg-linear-to-r from-blue-500 to-purple-600 flex items-center justify-center mb-4 text-white">
                                    <IconComponent className="h-6 w-6" /> {/* Render the icon component */}
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-3">{benefit.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{benefit.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}