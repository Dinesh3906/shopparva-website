import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, ChevronRight, Menu, X } from 'lucide-react';
import { Button } from './ui/Button';
import { cn } from '../lib/utils';

// We use hash links for single-page scrolling behavior
const navLinks = [
    { name: 'Home', path: '#' },
    { name: 'Features', path: '#features' }, // ID specific
    { name: 'Stack', path: '#stack' },
    { name: 'Team', path: '#team' },
    { name: 'Roadmap', path: '#roadmap' },
    { name: 'Contact', path: '#contact' },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('Home');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Handle scroll detection for styling and section highlighting
    useEffect(() => {
        const handleScroll = () => {
            // 1. Toggle glass effect
            setIsScrolled(window.scrollY > 50);

            // 2. Detect active section
            const sections = navLinks.map(link => link.path.replace('#', ''));
            let currentSection = 'Home';

            for (const section of sections) {
                if (!section) continue; // Skip home's empty/hash path
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        currentSection = navLinks.find(l => l.path === `#${section}`)?.name || 'Home';
                        break;
                    }
                }
            }
            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (e, path) => {
        e.preventDefault();
        if (path === '#') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const element = document.querySelector(path);
            if (element) {
                // Offset for the fixed header
                const headerOffset = 100;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        }
    };

    return (
        <>
            {/* Fixed Positioning ensures it "moves next"/stays with user */}
            <nav
                className={cn(
                    'fixed top-4 left-0 right-0 z-50 transition-all duration-500 ease-in-out',
                    // Floating pill design for desktop when scrolled
                    isScrolled ? 'px-4 md:px-0' : 'px-6'
                )}
            >
                <div
                    className={cn(
                        "mx-auto transition-all duration-500 flex items-center justify-between",
                        // The container transforms appearance based on scroll
                        isScrolled
                            ? "glass-nav rounded-full px-6 py-3 max-w-5xl shadow-2xl border border-white/10 bg-[#0b0f1a]/60 backdrop-blur-xl"
                            : "container bg-transparent py-6"
                    )}
                >
                    {/* Logo */}
                    <a href="#" onClick={(e) => scrollToSection(e, '#')} className="flex items-center gap-2 group">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-neon-purple to-neon-blue flex items-center justify-center shadow-glow group-hover:shadow-glow-lg transition-all duration-300">
                            <ShoppingBag className="text-white w-5 h-5" />
                        </div>
                        <span className={cn(
                            "text-2xl font-bold tracking-tight transition-colors duration-300",
                            isScrolled ? "text-white" : "text-white group-hover:text-neon-purple"
                        )}>
                            ShopParva
                        </span>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-1 bg-white/5 p-1.5 rounded-full border border-white/5 backdrop-blur-sm">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.path}
                                onClick={(e) => scrollToSection(e, link.path)}
                                className={cn(
                                    "relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
                                    activeSection === link.name
                                        ? "text-white bg-white/10 shadow-inner"
                                        : "text-gray-400 hover:text-white hover:bg-white/5"
                                )}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        <Button variant="primary" className="h-10 px-6 text-sm" icon={ChevronRight}>
                            Get Started
                        </Button>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-white p-2 rounded-lg bg-white/5"
                        >
                            {mobileMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            className="absolute top-24 left-4 right-4 glass-panel rounded-2xl overflow-hidden p-4 flex flex-col gap-2 md:hidden"
                        >
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.path}
                                    onClick={(e) => {
                                        scrollToSection(e, link.path);
                                        setMobileMenuOpen(false);
                                    }}
                                    className="p-4 rounded-xl hover:bg-white/5 text-gray-300 hover:text-neon-purple font-medium transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="h-px bg-white/10 my-2" />
                            <Button variant="primary" className="w-full justify-center">Get Started</Button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </>
    );
};
