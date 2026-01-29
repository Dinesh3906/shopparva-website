import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="container mx-auto px-6 py-20 space-y-20">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h1>
                <p className="text-xl text-gray-400 leading-relaxed">
                    We are on a mission to democratize e-commerce intelligence.
                    ShopParva isn't just a tool; it's your personal shopping assistant.
                </p>
            </div>

            {/* Narrative Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="aspect-square rounded-2xl bg-gradient-to-br from-gray-800 to-black border border-white/10 relative overflow-hidden flex items-center justify-center">
                        <div className="absolute inset-0 bg-accent/10"></div>
                        <span className="text-8xl">🛒</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                >
                    <h2 className="text-3xl font-bold">The Problem</h2>
                    <p className="text-gray-400 leading-relaxed">
                        Online shopping is chaotic. Prices fluctuate wildly, deals are often misleading, and tracking multiple platforms is impossible for a human.
                        Consumers lose millions annually by overpaying or missing out on timely discounts.
                    </p>

                    <h2 className="text-3xl font-bold pt-4">The Solution</h2>
                    <p className="text-gray-400 leading-relaxed">
                        ShopParva brings clarity to the chaos. We aggregate real-time data, apply predictive analytics, and give you a unified dashboard
                        to track everything that matters. We believe data should work for you, not against you.
                    </p>
                </motion.div>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { title: "Transparency", text: "No hidden fees, no biased results. Pure data." },
                    { title: "Speed", text: "Real-time updates mean you never miss a beat." },
                    { title: "Privacy", text: "Your shopping habits are yours alone." }
                ].map((item, i) => (
                    <div key={i} className="p-8 bg-white/5 rounded-xl border border-white/5">
                        <h3 className="text-xl font-bold mb-3 text-accent">{item.title}</h3>
                        <p className="text-gray-400">{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;
