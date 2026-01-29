import React from 'react';
import { motion } from 'framer-motion';
import {
    Globe,
    TrendingUp,
    Bell,
    LayoutDashboard,
    BrainCircuit,
    Server
} from 'lucide-react';

const Features = () => {
    const features = [
        {
            icon: <Globe size={40} />,
            title: "Multi-Platform Tracking",
            desc: "Track prices from Amazon, Flipkart, Myntra, and more in one unified dashboard. No more tab switching."
        },
        {
            icon: <TrendingUp size={40} />,
            title: "Smart Deal Comparison",
            desc: "Automatically compare prices across platforms to ensure you're getting the absolute best deal available."
        },
        {
            icon: <Bell size={40} />,
            title: "Real-Time Alerts",
            desc: "Set your target price and get notified instantly via Email, SMS, or Push Notification when it drops."
        },
        {
            icon: <LayoutDashboard size={40} />,
            title: "User-Friendly Dashboard",
            desc: "Visualize your savings, track history, and manage your wishlist with a clean, intuitive interface."
        },
        {
            icon: <BrainCircuit size={40} />,
            title: "AI Recommendations",
            desc: "Our AI analyzes your preferences to suggest products and deals that you'll actually love."
        },
        {
            icon: <Server size={40} />,
            title: "Enterprise Scalability",
            desc: "Built on robust cloud infrastructure to handle millions of data points without breaking a sweat."
        }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <div className="container mx-auto px-6 py-20">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Powerful Features</h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Everything you need to master the art of online shopping, packed into one sleek platform.
                </p>
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        variants={item}
                        whileHover={{ y: -10, borderColor: 'rgba(108, 99, 255, 0.4)' }}
                        className="p-8 rounded-2xl bg-white/5 border border-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
                    >
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent to-purple-600 flex items-center justify-center text-white mb-6 shadow-lg">
                            {feature.icon}
                        </div>
                        <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                        <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Features;
