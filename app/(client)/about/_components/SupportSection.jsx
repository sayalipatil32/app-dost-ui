'use client';
import { motion } from 'framer-motion';
import { supportData } from '@/data/AboutPage/supportData';
import { CheckCircle } from '@/lib/icons'; // Use custom icon

export default function SupportSection() {
    const { title, description, featureList, supportCards } = supportData;

    return (
        <section className="py-16 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="space-y-6"
                    >
                        <h2 className="text-4xl font-bold text-slate-900">{title}</h2>
                        <p className="text-lg text-slate-600 leading-relaxed">{description}</p>
                        <div className="space-y-4">
                            {featureList.map((feature, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <CheckCircle className="h-5 w-5 text-green-500" />
                                    <span className="text-slate-700 font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="grid gap-6"
                    >
                        {supportCards.map((feature, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.02 }}
                                className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300"
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`h-12 w-12 rounded-xl bg-linear-to-r ${feature.color} flex items-center justify-center`}>
                                        <div className="text-white">
                                            <feature.icon className="h-6 w-6" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 text-lg">{feature.title}</h3>
                                        <p className="text-slate-600">{feature.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}