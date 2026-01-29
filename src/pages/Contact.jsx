import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate submission
        alert("Thanks for reaching out! We'll be in touch soon.");
        setFormState({ name: '', email: '', message: '' });
    };

    return (
        <div className="container mx-auto px-6 py-20">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">

                {/* Contact Info */}
                <div className="space-y-8">
                    <div>
                        <h1 className="text-4xl font-bold mb-4">Let's Talk</h1>
                        <p className="text-gray-400 leading-relaxed">
                            Have questions about ShopParva? Interested in partnering?
                            Or just want to say hi? Drop us a line.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4 text-gray-300">
                            <div className="p-3 bg-accent/20 rounded-lg text-accent">
                                <Mail size={20} />
                            </div>
                            <span>hello@shopparva.com</span>
                        </div>
                        <div className="flex items-center gap-4 text-gray-300">
                            <div className="p-3 bg-accent/20 rounded-lg text-accent">
                                <MapPin size={20} />
                            </div>
                            <span>San Francisco, CA</span>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-white/10">
                        <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Follow Us</h4>
                        <div className="flex gap-4">
                            <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white">
                                <Github size={20} />
                            </a>
                            <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400">Name</label>
                        <input
                            type="text"
                            required
                            className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                            placeholder="Elon Musk"
                            value={formState.name}
                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400">Email</label>
                        <input
                            type="email"
                            required
                            className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                            placeholder="elon@spacex.com"
                            value={formState.email}
                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400">Message</label>
                        <textarea
                            required
                            rows="4"
                            className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
                            placeholder="Tell us about your shopping woes..."
                            value={formState.message}
                            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-4 bg-accent hover:bg-accent/90 text-white font-bold rounded-lg transition-all shadow-lg flex items-center justify-center gap-2"
                    >
                        Send Message
                        <Send size={18} />
                    </button>
                </form>

            </div>
        </div>
    );
};

export default Contact;
