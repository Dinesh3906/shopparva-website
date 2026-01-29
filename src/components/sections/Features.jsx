import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Zap, ShoppingCart, Brain, Layers, Globe } from 'lucide-react';

const features = [
    {
        title: "Real-time Price Tracking",
        desc: "Instant alerts when prices drop on your favorite products across 50+ stores.",
        icon: LineChart,
        color: "from-blue-500 to-cyan-500"
    },
    {
        title: "AI-Powered Comparisons",
        desc: "Our engine analyzes reviews and specs to recommend the absolute best value.",
        icon: Brain,
        color: "from-purple-500 to-pink-500"
    },
    {
        title: "Instant Alerts",
        desc: "Get notified via WhatsApp, Email, or Push Notification the second a deal goes live.",
        icon: Zap,
        color: "from-yellow-400 to-orange-500"
    },
    {
        title: "Unified Dashboard",
        desc: "Manage all your wishlists, orders, and price history in one beautiful interface.",
        icon: Layers,
        color: "from-green-400 to-emerald-600"
    },
    {
        title: "Smart Recommendations",
        desc: "Personalized suggestions based on your browsing habits and budget.",
        icon: ShoppingCart,
        color: "from-red-500 to-pink-600"
    },
    {
        title: "Global Availability",
        desc: "Shop from international stores with automatic currency conversion and shipping calculation.",
        icon: Globe,
        color: "from-indigo-400 to-blue-600"
    }
];

export const Features = () => {
    return (
        <section className="py-24 relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Everything you need to <span className="text-gradient-purple">Shop Smarter</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        ShopParva brings enterprise-grade analytics to your personal shopping, helping you save money without the hassle.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{
                                delay: idx * 0.08,
                                duration: 0.5,
                                ease: "easeOut"
                            }}
                            whileHover={{
                                y: -8,
                                transition: { duration: 0.3, ease: "easeOut" }
                            }}
                            className="glass-panel p-8 rounded-2xl group hover:shadow-glow transition-all duration-300 border border-white/5 hover:border-white/20"
                        >
                            <div className={`w-14 h-14 rounded-xl bg-gradient-to-tr ${feature.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                <feature.icon className="text-white w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-purple transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
