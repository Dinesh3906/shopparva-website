import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Twitter, Linkedin, Github } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="relative bg-[#0b0f1a] pt-20 pb-10 border-t border-white/5 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-neon-purple/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-neon-purple to-neon-blue flex items-center justify-center">
                                <ShoppingBag className="text-white w-4 h-4" />
                            </div>
                            <span className="text-xl font-bold text-white">ShopParva</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Empowering smarter shopping decisions through AI-driven insights and real-time price tracking.
                        </p>
                        <div className="flex gap-4">
                            {[Twitter, Linkedin, Github].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-neon-purple hover:text-white transition-all duration-300 hover:shadow-active">
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {[
                        { title: "Product", links: ["Features", "Integrations", "Pricing", "Roadmap"] },
                        { title: "Company", links: ["About Us", "Careers", "Blog", "Contact"] },
                        { title: "Legal", links: ["Privacy Policy", "Terms of Service", "Security"] }
                    ].map((column, idx) => (
                        <div key={idx}>
                            <h4 className="text-white font-semibold mb-6">{column.title}</h4>
                            <ul className="space-y-4">
                                {column.links.map(link => (
                                    <li key={link}>
                                        <a href="#" className="text-gray-400 hover:text-neon-purple transition-colors text-sm">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-xs">
                        © 2026 ShopParva Inc. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <span className="text-gray-500 text-xs">Made with ❤️ by Team ShopParva</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};
