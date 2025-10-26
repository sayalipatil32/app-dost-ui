'use client';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { heroData } from '@/data/HomePage/heroData';
import { Calendar } from '@/lib/icons'; // Make sure Calendar is imported from your custom icons file

export default function HeroSection() {
    const {
        tag, tagIcon: TagIcon, titleLine1, titleGradient, titleLine3,
        description, stats, ctaPrimary, ctaSecondary, features, cards
    } = heroData;

    return (
        <section className="relative pt-20 pb-16 overflow-hidden overflow-x-hidden"> {/* Removed px-10, handled by container */}
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden -z-10"> {/* Added z-index */}
                <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-linear-to-r from-blue-200/40 to-purple-200/40 blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-linear-to-r from-cyan-200/40 to-blue-200/40 blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content (No changes needed here) */}
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

                         <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight"> {/* Changed font-bold to font-extrabold */}
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
                               <div className="font-semibold text-slate-900 text-sm">{feature.label}</div> {/* Adjusted text size */}
                             </div>
                           ))}
                         </div>
                    </motion.div>

                    {/* Right Content - Stats Cards (RESPONSIVE FIXES APPLIED) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        // CHANGE: Grid stacks on small screens (grid-cols-1), 2 cols on sm+
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                    >
                        {cards.map((card) => {
                            // Check if the icon exists in the data, default to Calendar if id is 'founded'
                            const IconComponent = card.icon || (card.id === 'founded' ? Calendar : null);
                            return (
                                <motion.div
                                    key={card.id}
                                    whileHover={{ scale: 1.05 }}
                                    // CHANGE: Ensure col-span works correctly with responsive grid
                                    className={`${card.colSpan ? 'sm:col-span-2' : 'sm:col-span-1'} bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300`}
                                >
                                    {/* CHANGE: Flex column on small, row on sm+. Justify between only if aside exists */}
                                    <div className={`flex flex-col text-center sm:text-left sm:flex-row items-center ${card.aside ? 'sm:justify-between' : ''}`}>
                                        {/* CHANGE: Stack icon/text vertically centered on small, side-by-side on sm+ */}
                                        <div className="flex flex-col items-center sm:flex-row sm:items-center gap-3 mb-4 sm:mb-0"> {/* Adjusted gap and margin */}
                                            <div className={`h-12 w-12 rounded-xl bg-linear-to-br ${card.iconBg} flex items-center justify-center shrink-0`}>
                                                {/* Render IconComponent only if it exists */}
                                                {IconComponent && <IconComponent className="h-6 w-6 text-white" />}
                                            </div>
                                            <div>
                                                <div className="text-2xl font-bold text-slate-900">{card.title}</div>
                                                <div className="text-sm text-slate-600 uppercase">{card.subtitle}</div> {/* Added uppercase */}
                                            </div>
                                        </div>
                                        {card.aside && (
                                            // CHANGE: Align right text center on small screens
                                            <div className="text-center sm:text-right mt-2 sm:mt-0">
                                                <div className="text-lg font-semibold text-slate-900">{card.aside.title}</div>
                                                <div className={`text-sm font-medium ${card.aside.color}`}>{card.aside.subtitle}</div>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}