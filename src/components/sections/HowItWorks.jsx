import React from 'react';
import { motion } from 'framer-motion';

const steps = [
    {
        num: "01",
        title: "The Problem",
        desc: "The same product has different prices across Amazon, Flipkart, Myntra, etc. Discounts are often misleading, and checking manually wastes time/data."
    },
    {
        num: "02",
        title: "Our Solution",
        desc: "ShopParva scans them all instantly. We identify the real lowest price and use historical data to verify if the 'discount' is actually a deal."
    },
    {
        num: "03",
        title: "The Result",
        desc: "You buy with 100% confidence, knowing you didn't overpay. You save money and avoid buyer's remorse."
    }
];

export const HowItWorks = () => {
    return (
        <section className="py-8 lg:py-24 relative overflow-hidden">
            {/* Background Blob */}
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-neon-purple/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6">
                <div className="text-center mb-10 lg:mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        How It <span className="text-gradient-purple">Works</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8 relative">
                    {/* Connecting line for desktop */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-neon-purple/0 via-neon-purple/50 to-neon-purple/0 border-t border-dashed border-white/20" />

                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="relative z-10"
                        >
                            <div className="glass-panel p-8 rounded-2xl border border-white/10 h-full flex flex-col items-center text-center hover:border-white/20 transition-colors">
                                <div className="w-16 h-16 rounded-full bg-[#0b0f1a] border-2 border-neon-purple flex items-center justify-center text-2xl font-bold text-white mb-6 shadow-glow">
                                    {step.num}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
