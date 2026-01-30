import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Zap, ShoppingCart, Brain, Layers, Globe } from 'lucide-react';

const features = [
    {
        title: "Best Price in Whole India",
        desc: "We scan multiple platforms to show you the lowest available price instantly. Know where it's cheapest.",
        icon: Globe,
        color: "from-blue-500 to-cyan-500"
    },
    {
        title: "Multi-Platform Price Tracker",
        desc: "Track prices across all supported platforms with clear visual graphs. Spot real discounts vs fake offers.",
        icon: LineChart,
        color: "from-purple-500 to-pink-500"
    },
    {
        title: "Price Drop Notifications",
        desc: "Set your price. We notify you when it drops on ANY platform. No need to monitor multiple apps.",
        icon: Zap,
        color: "from-yellow-400 to-orange-500"
    },
    {
        title: "Try-On / Preview Support",
        desc: "Visualize before you buy with virtual try-on features for supported categories. Reduce wrong purchases.",
        icon: Layers,
        color: "from-green-400 to-emerald-600"
    },
    {
        title: "Make My Kit",
        desc: "Bundle multiple products (essentials, setups) and find the best combined price across platforms.",
        icon: ShoppingCart,
        color: "from-red-500 to-pink-600"
    },
    {
        title: "Preference Tab for Confused Customers",
        desc: "Select your budget, brand, and trust preferences. We suggest the best option for YOU.",
        icon: Brain,
        color: "from-indigo-400 to-blue-600"
    },
    {
        title: "Smart Deal Insights",
        desc: "Data-driven highlights of genuine deals. We warn you about inflated MRPs and fake discounts.",
        icon: Zap,
        color: "from-orange-400 to-red-500"
    },
    {
        title: "Platform Availability Check",
        desc: "See which platforms actually have stock. Save time and avoid clicking dead links.",
        icon: Layers,
        color: "from-teal-400 to-green-500"
    },
    {
        title: "Best User Experience",
        desc: "Clean, fast, distraction-free UI optimized for Indian internet conditions and low-end devices.",
        icon: Globe,
        color: "from-blue-400 to-indigo-500"
    }
];

export const Features = () => {
    return (
        <section className="py-8 lg:py-24 relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-8 lg:mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Everything you need to <span className="text-gradient-purple">Shop Smarter</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        ShopParva is a smart shopping intelligence platform built for India.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "0px" }}
                            transition={{
                                delay: (idx % 3) * 0.05,
                                duration: 0.4,
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
