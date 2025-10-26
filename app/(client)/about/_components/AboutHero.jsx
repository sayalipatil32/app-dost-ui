'use client';
import { motion } from 'framer-motion';
import { aboutHeroData } from '@/data/AboutPage/aboutHeroData';
import { Clock, Shield, Star } from '@/lib/icons'; // Import custom icons

export default function AboutHero() {
    const {
        tag, tagIcon: TagIcon, titleLine1, titleGradient, description,
        features, mission, stats
    } = aboutHeroData;

    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden -z-10">
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

                        <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                            {titleLine1}
                            <span className="block bg-gradilinearent-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                {titleGradient}
                            </span>
                        </h1>

                        <p className="text-xl text-slate-600 leading-relaxed">
                            {description}
                        </p>

                        <div className="flex items-center gap-4 text-slate-600">
                            {features.map((feature, index) => (
                                <div key={feature.label}>
                                    <div className="flex items-center gap-2">
                                        <feature.icon className={`h-5 w-5 ${feature.color}`} />
                                        <span className="font-semibold">{feature.label}</span>
                                    </div>
                                    {index < features.length - 1 && <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                                    }
                                </div>
                            ))}
                        </div>

                        {/* Mission Statement */}
                        < motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200"
                        >
                            <h3 className="text-lg font-bold text-slate-900 mb-3">{mission.title}</h3>
                            <p className="text-slate-600">{mission.text}</p>
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="grid grid-cols-2 gap-6"
                    >
                        {stats.map((stat) => (
                            <motion.div
                                key={stat.id}
                                whileHover={{ scale: 1.05 }}
                                className={`${stat.colSpan} ${stat.isGradientCard ? 'bg-linear-to-r from-orange-500 to-red-600' : 'bg-white'} rounded-2xl p-6 shadow-lg ${!stat.isGradientCard && 'border border-slate-200'} hover:shadow-xl transition-all duration-300`}
                            >
                                <div className={`flex items-center ${stat.asideValue ? 'justify-between' : ''}`}>
                                    <div className="flex items-center gap-4">
                                        <div className={`h-${stat.size === 'large' ? '16' : '12'} w-${stat.size === 'large' ? '16' : '12'} rounded-${stat.size === 'large' ? '2xl' : 'xl'} ${stat.isGradientCard ? stat.iconBg : `bg-linear-to-br ${stat.iconBg}`} flex items-center justify-center`}>
                                            <stat.icon className={`h-${stat.size === 'large' ? '8' : '6'} w-${stat.size === 'large' ? '8' : '6'} text-white`} />
                                        </div>
                                        <div>
                                            {stat.value && <div className={`text-${stat.size === 'large' ? '3xl' : '2xl'} font-bold ${stat.isGradientCard ? 'text-white' : 'text-slate-900'}`}>{stat.value}</div>}
                                            {stat.label && <div className={`text-${stat.size === 'large' ? 'lg font-semibold' : 'sm font-semibold'} ${stat.isGradientCard ? 'text-white/90' : 'text-slate-600'}`}>{stat.label}</div>}
                                            {stat.title && <div className="text-2xl font-bold text-white">{stat.title}</div>}
                                            {stat.subtitle && <div className="text-white/90 font-semibold">{stat.subtitle}</div>}
                                        </div>
                                    </div>
                                    {stat.asideValue && (
                                        <div className="text-right">
                                            <div className="text-3xl font-bold text-white">{stat.asideValue}</div>
                                            <div className="text-white/90">{stat.asideLabel}</div>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section >
    );
}