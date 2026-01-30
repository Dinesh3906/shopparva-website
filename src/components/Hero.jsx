import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Users } from 'lucide-react';
import { Button } from './ui/Button';

export const Hero = () => {
    return (
        <section className="relative min-h-[75vh] lg:min-h-[90vh] flex items-center pt-0 lg:pt-20 overflow-hidden">
            {/* Background Abstract Mesh - EXTREME PERFORMANCE OPTIMIZATION */}
            {/* Replaced 'filter: blur()' with 'radial-gradient' for 0 cost rendering */}
            <div className="absolute top-0 right-0 w-full lg:w-[60%] h-full pointer-events-none opacity-60">
                {/* Static background to fill gap immediately */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f1a]/80 to-[#1a1f2e]/80 lg:hidden" />

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="absolute top-1/4 right-1/4 w-[600px] h-[600px] mix-blend-screen animate-blob-1 will-change-transform"
                    style={{
                        background: 'radial-gradient(circle, rgba(124, 108, 255, 0.5) 0%, rgba(124, 108, 255, 0) 70%)'
                    }}
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="absolute bottom-1/4 right-0 w-[700px] h-[700px] mix-blend-screen animate-blob-2 will-change-transform"
                    style={{
                        background: 'radial-gradient(circle, rgba(79, 70, 229, 0.5) 0%, rgba(79, 70, 229, 0) 70%)'
                    }}
                />
                {/* Deep dark overlay to blend */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f1a] via-transparent to-transparent" />
            </div>

            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 relative z-10">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col justify-center"
                >
                    {/* Badge */}
                    <div className="flex items-center gap-2 mb-4 lg:mb-6">
                        <div className="px-3 py-1 rounded-full border border-neon-purple/30 bg-neon-purple/10 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-neon-purple animate-pulse" />
                            <span className="text-neon-purple text-xs font-semibold tracking-wider uppercase">Beta Live Now</span>
                        </div>
                        <span className="text-gray-400 text-sm">Join 2,000+ Smart Shoppers</span>
                    </div>

                    {/* Heading */}
                    {/* Simplified structure for performance */}
                    <h1 className="text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-4 lg:mb-6 tracking-tight">
                        Discover <span className="text-gradient-purple">Smarter</span><br />
                        Shopping Decisions.
                    </h1>

                    <p className="text-lg text-gray-400 mb-6 lg:mb-10 max-w-lg leading-relaxed">
                        ShopParva is a smart shopping intelligence platform built for India. Find the best price across all major platforms, understand real trends, and avoid fake discounts.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-8 lg:mb-12">
                        <a href="https://drive.google.com/file/d/1-Xc0kERB9HrSkBgmjkS1ZhwJUybyNVlm/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                            <Button variant="primary" icon={ArrowRight} className="h-14 px-8 text-lg shadow-[0_0_30px_rgba(124,108,255,0.3)] w-full sm:w-auto">
                                Explore ShopParva
                            </Button>
                        </a>
                        <Button variant="secondary" className="h-14 px-8 text-lg group">
                            <Play className="w-4 h-4 mr-2 fill-white group-hover:scale-110 transition-transform" />
                            Watch Demo
                        </Button>
                    </div>

                    {/* Trust/Social Proof */}
                    <div className="flex items-center gap-6">
                        <div className="flex -space-x-4">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className={`w-12 h-12 rounded-full border-2 border-[#0b0f1a] bg-gray-800 flex items-center justify-center overflow-hidden`}>
                                    <Users className="w-6 h-6 text-gray-400" />
                                </div>
                            ))}
                        </div>
                        <div>
                            <div className="flex items-center gap-1">
                                {"★★★★★".split("").map((star, i) => (
                                    <span key={i} className="text-yellow-400 text-lg">{star}</span>
                                ))}
                            </div>
                            <p className="text-sm text-gray-400"><span className="text-white font-bold">4.9/5</span> from happy users</p>
                        </div>
                    </div>
                </motion.div>

                {/* Right Visual (Abstract) */}
                <div className="relative hidden lg:block h-[600px]">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }} // Reduced scale delta
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="absolute inset-0 flex items-center justify-center"
                    >
                        <div className="relative w-full h-[80%]">
                            {/* Main Glass Card */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[400px] glass-panel rounded-2xl border border-white/10 p-6 flex flex-col justify-between transform rotate-[-5deg] hover:rotate-0 transition-all duration-700 hover:scale-105 z-20 will-change-transform">
                                <div className="flex justify-between items-center mb-4">
                                    <div className="h-3 w-20 bg-white/10 rounded-full" />
                                    <div className="h-8 w-8 rounded-full bg-neon-purple/20" />
                                </div>
                                <div className="space-y-3">
                                    <div className="h-24 w-full bg-gradient-to-r from-neon-purple/10 to-transparent rounded-lg" />
                                    <div className="h-4 w-3/4 bg-white/5 rounded-full" />
                                    <div className="h-4 w-1/2 bg-white/5 rounded-full" />
                                </div>
                                <div className="mt-4 flex gap-3">
                                    <div className="h-10 flex-1 bg-neon-purple rounded-lg opacity-80" />
                                    <div className="h-10 w-10 bg-white/10 rounded-lg" />
                                </div>
                            </div>

                            {/* Floating Elements - GPU Accelerated CSS Float */}
                            <div className="absolute top-10 right-0 w-48 glass-panel p-4 rounded-xl border border-white/10 z-30 animate-float-custom">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 font-bold">$$</div>
                                    <div>
                                        <div className="text-xs text-gray-400">Savings</div>
                                        <div className="text-lg font-bold text-white">$450.00</div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute bottom-10 left-0 w-48 glass-panel p-4 rounded-xl border border-white/10 z-30 animate-float-custom" style={{ animationDelay: '2s' }}>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-neon-pink/20 flex items-center justify-center text-neon-pink font-bold">AI</div>
                                    <div>
                                        <div className="text-xs text-gray-400">Insight</div>
                                        <div className="text-sm font-bold text-white">Price Drop!</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
