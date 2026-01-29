import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Circle } from 'lucide-react';

const roadmap = [
    {
        phase: "Phase 1: Foundation",
        status: "completed",
        items: ["MVP Development", "Core Price Tracking Engine", "Initial 50 Stores Integration", "Beta User Testing"]
    },
    {
        phase: "Phase 2: Growth",
        status: "active",
        items: ["User Dashboard v2", "Mobile App Launch", "AI Recommendation Engine", "Community Features"]
    },
    {
        phase: "Phase 3: Intelligence",
        status: "upcoming",
        items: ["Predictive Pricing Models", "Visual Search API", "Enterprise Partnerships", "Global Expansion"]
    },
    {
        phase: "Phase 4: Scale",
        status: "upcoming",
        items: ["Decentralized Data Nodes", "DAO Governance", "Custom Hardware Integration", "10M+ Users"]
    }
];

export const Roadmap = () => {
    return (
        <section className="py-24 relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Our <span className="text-gradient-purple">Journey</span>
                    </h2>
                    <p className="text-gray-400">
                        From a student project to a global shopping intelligence platform.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-1 bg-white/10 -translate-x-1/2 rounded-full" />

                    <div className="space-y-12">
                        {roadmap.map((phase, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: idx * 0.2 }}
                                className={`relative flex flex-col md:flex-row gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#0b0f1a] border-4 border-[#171a2d] flex items-center justify-center z-10">
                                    <div className={`w-4 h-4 rounded-full ${phase.status === 'active' ? 'bg-neon-purple animate-pulse' : phase.status === 'completed' ? 'bg-green-500' : 'bg-gray-600'}`} />
                                </div>

                                {/* Content Card */}
                                <div className={`ml-16 md:ml-0 md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 text-left'}`}>
                                    <div className={`glass-panel p-6 rounded-xl border border-white/10 ${phase.status === 'active' ? 'border-neon-purple/50 shadow-glow' : ''}`}>
                                        <h3 className={`text-xl font-bold mb-4 ${phase.status === 'active' ? 'text-neon-purple' : 'text-white'}`}>
                                            {phase.phase}
                                        </h3>
                                        <ul className={`space-y-2 ${idx % 2 === 0 ? 'md:items-end' : 'md:items-start'} flex flex-col`}>
                                            {phase.items.map((item, i) => (
                                                <li key={i} className="flex items-center gap-2 text-gray-400 text-sm">
                                                    {idx % 2 !== 0 && <span className="w-1.5 h-1.5 rounded-full bg-white/20" />}
                                                    {item}
                                                    {idx % 2 === 0 && <span className="w-1.5 h-1.5 rounded-full bg-white/20" />}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
