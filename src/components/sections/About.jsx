import React from 'react';
import { motion } from 'framer-motion';

export const About = () => {
    return (
        <section className="py-12 lg:py-24 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                            About <span className="text-gradient-purple">ShopParva</span>
                        </h2>

                        <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                            <p>
                                ShopParva is a smart shopping intelligence platform built for India. We are not an e-commerce store. We do not sell products.
                            </p>
                            <p>
                                Instead, we act as a neutral decision engine that helps you find the best price for your desired product across all major platforms in India.
                            </p>
                            <p>
                                ShopParva does NOT promote paid listings. Our only goal is to help you minimize cost and maximize value.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        {/* Mission Card */}
                        <div className="glass-panel p-8 rounded-2xl border border-white/10 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-neon-purple/10 rounded-full blur-[40px] group-hover:bg-neon-purple/20 transition-colors" />
                            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                            <p className="text-gray-400 text-lg italic">
                                "To help Indian shoppers make confident and informed buying decisions."
                            </p>
                        </div>

                        {/* Vision Card */}
                        <div className="glass-panel p-8 rounded-2xl border border-white/10 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-neon-blue/10 rounded-full blur-[40px] group-hover:bg-neon-blue/20 transition-colors" />
                            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                            <p className="text-gray-400 text-lg italic">
                                "To become India’s most trusted shopping intelligence platform."
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
