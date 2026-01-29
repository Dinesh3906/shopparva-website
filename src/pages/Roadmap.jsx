import React from 'react';
import { motion } from 'framer-motion';

const Roadmap = () => {
    const steps = [
        {
            phase: "Phase 1",
            title: "MVP Launch",
            status: "Completed",
            items: ["Basic price tracking", "User authentication", "Initial UI/UX"]
        },
        {
            phase: "Phase 2",
            title: "User Growth",
            status: "In Progress",
            items: ["Mobile App Beta", "Social sharing features", "Expanded retailer support"]
        },
        {
            phase: "Phase 3",
            title: "AI Integration",
            status: "Upcoming",
            items: ["Predictive pricing models", "Personalized deal feed", "Chatbot assistant"]
        },
        {
            phase: "Phase 4",
            title: "Scale & Partnerships",
            status: "Future",
            items: ["B2B API access", "Global retailer integration", "Community marketplace"]
        }
    ];

    return (
        <div className="container mx-auto px-6 py-20">
            <div className="text-center mb-20">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Roadmap</h1>
                <p className="text-xl text-gray-400">Our journey to revolutionize shopping.</p>
            </div>

            <div className="relative max-w-4xl mx-auto">
                {/* Vertical Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white/10 hidden md:block" />

                <div className="space-y-12">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Content Card */}
                            <div className="w-full md:w-1/2">
                                <div className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-accent/40 transition-colors relative">
                                    {/* Status Badge */}
                                    <span className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full border ${step.status === 'Completed' ? 'bg-green-500/20 text-green-400 border-green-500/20' :
                                            step.status === 'In Progress' ? 'bg-blue-500/20 text-blue-400 border-blue-500/20' :
                                                'bg-gray-700/50 text-gray-400 border-gray-600/30'
                                        }`}>
                                        {step.status}
                                    </span>

                                    <h3 className="text-accent font-mono text-sm mb-2">{step.phase}</h3>
                                    <h4 className="text-2xl font-bold mb-4">{step.title}</h4>
                                    <ul className="space-y-2">
                                        {step.items.map((item, i) => (
                                            <li key={i} className="flex items-center gap-2 text-gray-400 text-sm">
                                                <span className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Center Dot */}
                            <div className="relative z-10 w-8 h-8 rounded-full bg-primary border-4 border-accent shadow-[0_0_15px_rgba(108,99,255,0.5)] hidden md:block" />

                            {/* Spacer for layout balance */}
                            <div className="w-full md:w-1/2 hidden md:block" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Roadmap;
