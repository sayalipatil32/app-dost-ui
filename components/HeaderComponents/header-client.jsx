'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X, Rocket, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function HeaderClient({ navLinks, ctaButtonText }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/95 backdrop-blur-xl shadow-sm"
        >
            <div className="container mx-auto flex h-20 items-center justify-between px-4">

                {/* Logo - Beautiful Gradient Design */}
                <Link
                    href="/"
                    className="flex items-center gap-3 group"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    <div className="relative">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-blue-500 to-purple-600 shadow-lg shadow-blue-500/25 transition-all duration-300 group-hover:scale-105 group-hover:shadow-blue-500/40">
                            <Rocket className="h-6 w-6 text-white" />
                            <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-yellow-400" />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl font-bold bg-linear-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                            AppDost
                        </span>
                        <span className="text-xs font-medium text-slate-500">
                            Complete IT Solutions
                        </span>
                    </div>
                </Link>

                {/* Desktop Navigation - Modern Style */}
                <div className="hidden items-center gap-1 md:flex">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    'relative rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-300 hover:scale-105',
                                    isActive
                                        ? 'text-blue-600 bg-blue-50 shadow-inner'
                                        : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                                )}
                            >
                                {link.name}
                                {isActive && (
                                    <motion.div
                                        layoutId="activeIndicator"
                                        className="absolute inset-0 rounded-xl border border-blue-200/50 bg-linear-to-r from-blue-50 to-indigo-50 -z-10"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                            </Link>
                        );
                    })}
                </div>

                {/* Mobile Menu Button - Improved */}
                <div className="md:hidden">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="rounded-xl text-slate-700 hover:text-blue-600 hover:bg-slate-100 transition-all duration-300"
                        aria-label="Toggle navigation menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className="h-6 w-6 transition-transform duration-300" />
                        ) : (
                            <Menu className="h-6 w-6 transition-transform duration-300" />
                        )}
                    </Button>
                </div>
            </div>

            {/* Mobile Menu - Beautiful Dropdown */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    className="absolute left-0 w-full flex-col gap-1 border-t border-slate-200/60 bg-white/95 p-4 backdrop-blur-xl shadow-xl md:hidden"
                >
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={cn(
                                    'block rounded-xl px-4 py-3.5 text-base font-medium transition-all duration-300 hover:scale-[1.02]',
                                    isActive
                                        ? 'text-blue-600 bg-blue-50 shadow-inner border border-blue-100'
                                        : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                                )}
                            >
                                {link.name}
                            </Link>
                        );
                    })}

                </motion.div>
            )}
        </motion.nav>
    );
}