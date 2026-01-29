import React from 'react';
import { motion } from 'framer-motion';

const techs = [
    { name: "React", color: "text-cyan-400" },
    { name: "Tailwind", color: "text-cyan-500" },
    { name: "Node.js", color: "text-green-500" },
    { name: "Python", color: "text-yellow-400" },
    { name: "Terraform", color: "text-purple-400" },
    { name: "Docker", color: "text-blue-500" },
    { name: "AWS", color: "text-orange-400" },
    { name: "OpenAI", color: "text-white" },
];

export const TechStack = () => {
    return (
        <section className="py-16 border-y border-white/5 bg-white/[0.02]">
            <div className="container mx-auto px-6 mb-8 text-center">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Powered by modern infrastructure</h3>
            </div>

            <div className="flex overflow-hidden relative">
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0b0f1a] to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0b0f1a] to-transparent z-10" />

                <motion.div
                    animate={{ x: [0, -1200] }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="flex gap-16 items-center px-4"
                >
                    {[...techs, ...techs, ...techs].map((tech, i) => (
                        <div key={i} className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
                            <div className={`text-xl font-bold ${tech.color} whitespace-nowrap`}>{tech.name}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
