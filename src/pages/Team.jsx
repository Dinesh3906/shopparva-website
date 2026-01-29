import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Code, Cpu } from 'lucide-react';

const Team = () => {
    return (
        <div className="container mx-auto px-6 py-20">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Meet the Visionaries</h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Built by students, driven by innovation. We are combining academic excellence with real-world problem solving.
                </p>
            </div>

            <div className="flex justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-md w-full bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-accent/40 transition-all duration-500 shadow-2xl"
                >
                    <div className="h-32 bg-gradient-to-r from-accent to-purple-600 relative">
                        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
                            <div className="w-32 h-32 rounded-full border-4 border-primary bg-gray-800 flex items-center justify-center overflow-hidden">
                                <span className="text-4xl">👨‍💻</span> {/* Placeholder for Founder Image */}
                            </div>
                        </div>
                    </div>

                    <div className="pt-20 pb-8 px-8 text-center">
                        <h2 className="text-3xl font-bold mb-2">Founder Name</h2>
                        <p className="text-accent font-medium mb-4">Founder & Lead Engineer</p>

                        <p className="text-gray-400 mb-6 italic">
                            "Building scalable systems to solve everyday problems. Passionate about AI, Cloud Architecture, and seamless UX."
                        </p>

                        <div className="flex flex-wrap justify-center gap-2 mb-8">
                            {['React', 'Node.js', 'AI/ML', 'Cloud'].map((skill) => (
                                <span key={skill} className="px-3 py-1 bg-white/5 rounded-full text-xs font-semibold text-gray-300 border border-white/5">
                                    {skill}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-center gap-6">
                            <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-accent hover:text-white transition-colors text-gray-400">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-gray-800 hover:text-white transition-colors text-gray-400">
                                <Github size={20} />
                            </a>
                            <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-blue-500 hover:text-white transition-colors text-gray-400">
                                <Code size={20} />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Join Us CTA */}
            <div className="mt-24 text-center">
                <h3 className="text-2xl font-bold mb-4">Want to join the journey?</h3>
                <p className="text-gray-400 mb-8">We are always looking for passionate contributors.</p>
                <a href="mailto:careers@shopparva.com" className="inline-block px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors font-semibold">
                    Get in Touch
                </a>
            </div>
        </div>
    );
};

export default Team;
