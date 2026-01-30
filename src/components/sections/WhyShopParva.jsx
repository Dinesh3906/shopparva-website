import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, BarChart, Heart, MousePointer2, Smartphone, Sparkles } from 'lucide-react';

const differentiators = [
    {
        title: "Shows Data, Not Ads",
        desc: "We prioritize real price history and honest comparisons over sponsored products.",
        icon: BarChart
    },
    {
        title: "Neutral Decision Engine",
        desc: "We don't favor any platform. We simply show you where the deal is best.",
        icon: ShieldCheck
    },
    {
        title: "Decision-Focused",
        desc: "Our goal isn't to make you buy more, but to help you buy better and with confidence.",
        icon: MousePointer2
    },
    {
        title: "Built for India",
        desc: "Optimized for Indian shopping habits, local platforms, and internet conditions.",
        icon: Smartphone
    },
    {
        title: "Transparent Intelligence",
        desc: "No hidden algorithms. We show you exactly why a deal is good or bad.",
        icon: Heart
    },
    {
        title: "Zero Clutter",
        desc: "We keep it simple. No pop-ups, no spam, just the insights you need.",
        icon: Sparkles
    }
];

export const WhyShopParva = () => {
    return (
        <section className="py-8 lg:py-24 relative bg-[#0b0f1a]/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-8 lg:mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Why <span className="text-gradient-purple">ShopParva?</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        In a market flooded with ads and fake discounts, we stand for truth.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {differentiators.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "0px", amount: 0.1 }}
                            transition={{ delay: (idx % 3) * 0.05 }}
                            className="bg-white/5 border border-white/5 rounded-xl p-8 hover:bg-white/10 transition-colors"
                        >
                            <item.icon className="w-10 h-10 text-neon-purple mb-6" />
                            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                            <p className="text-gray-400">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
