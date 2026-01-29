import React from 'react';
import { motion } from 'framer-motion';
import {
    Code,
    Database,
    Cloud,
    Cpu,
    Settings,
    Layers
} from 'lucide-react';

const TechStack = () => {
    const categories = [
        {
            title: "Frontend",
            icon: <Code size={24} />,
            items: ["React.js", "Tailwind CSS", "Framer Motion", "Vite"]
        },
        {
            title: "Backend",
            icon: <ServerIcon size={24} />,
            items: ["Node.js", "Express", "Python", "FastAPI"]
        },
        {
            title: "Database",
            icon: <Database size={24} />,
            items: ["PostgreSQL", "Redis", "MongoDB"]
        },
        {
            title: "AI & ML",
            icon: <Cpu size={24} />,
            items: ["TensorFlow", "Scikit-Learn", "OpenAI API"]
        },
        {
            title: "Cloud & DevOps",
            icon: <Cloud size={24} />,
            items: ["AWS", "Docker", "CI/CD Pipelines"]
        }
    ];

    return (
        <div className="container mx-auto px-6 py-20">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Built for Scale</h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    We use cutting-edge technologies to ensure reliability, speed, and intelligence.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categories.map((cat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/30 transition-all hover:bg-white/10"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-accent/20 rounded-lg text-accent">
                                {cat.icon}
                            </div>
                            <h3 className="text-xl font-bold">{cat.title}</h3>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {cat.items.map((item, i) => (
                                <span key={i} className="px-3 py-1 bg-black/40 rounded border border-white/10 text-sm text-gray-300">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

// Helper component since I used ServerIcon which isn't imported above but LayoutDashboard was
const ServerIcon = ({ size }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
        <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
        <line x1="6" x2="6.01" y1="6" y2="6" />
        <line x1="6" x2="6.01" y1="18" y2="18" />
    </svg>
);

export default TechStack;
