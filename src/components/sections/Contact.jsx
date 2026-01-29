import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

export const Contact = () => {
    const [status, setStatus] = useState(null); // null, 'LOADING', 'SUCCESS', 'ERROR'

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setStatus("LOADING");

        const formData = new FormData(e.target);

        // Using your real Web3Forms Access Key
        const accessKey = "65ae1e56-9981-4f29-81f8-29b88ec77184";

        formData.append("access_key", accessKey);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setStatus("SUCCESS");
                e.target.reset();
            } else {
                console.error("Web3Forms API Error:", data);
                setStatus("ERROR");
            }
        } catch (error) {
            console.error("Submission Error:", error);
            setStatus("ERROR");
        }
    };

    return (
        <section className="py-24 relative" id="contact">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Let's <span className="text-gradient-purple">Connect</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-12">
                            Have a question about our technology or want to partner with us? Reach out and our team will get back to you within 24 hours.
                        </p>

                        <div className="space-y-6">
                            {[
                                {
                                    icon: Mail,
                                    text: "shopparva01@gmail.com",
                                    link: "mailto:shopparva01@gmail.com"
                                },
                                {
                                    icon: Phone,
                                    text: "+91 8103079939",
                                    link: "tel:+918103079939"
                                },
                                {
                                    icon: MapPin,
                                    text: "IIIT Bhubaneswar",
                                    link: "https://www.google.com/maps?sca_esv=ae1e161c6b0f2947&rlz=1C1ONGR_enIN1192IN1192&output=search&q=iiit+bhubaneswar+gmap+link&source=lnms&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpaEWjvZ2Py1XXV8d8KvlI3jljrY5CkLlk8Dq3IvwBz-SiiHLMuwmCQZ7DqSL8AQqoJuAtjtegtdjEPKu9tUSpBEYyfYP2fz4cnCC1qzcZxqegTjm-9Z7zSARwuWeikrR-QKgaqQ_EtfB3eNgTol-A1st4tGp8gszgVdPeSYY2Qy3zZcTJkJ-0Ld4d81_5cjNX9QJ6xg&entry=mc&ved=1t:200715&ictx=111"
                                }
                            ].map((item, i) => (
                                <a
                                    key={i}
                                    href={item.link}
                                    target={item.icon === MapPin ? "_blank" : "_self"}
                                    rel={item.icon === MapPin ? "noopener noreferrer" : ""}
                                    className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group"
                                >
                                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-neon-purple/20 transition-colors">
                                        <item.icon className="w-5 h-5 text-neon-purple" />
                                    </div>
                                    <span className="text-lg">{item.text}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="glass-panel p-8 rounded-2xl border border-white/10">
                        {status === "SUCCESS" ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-12"
                            >
                                <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                                    <Send className="text-green-500 w-10 h-10" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                                <p className="text-gray-400">Thanks for reaching out. We'll get back to you shortly.</p>
                                <button
                                    onClick={() => setStatus(null)}
                                    className="mt-8 text-neon-purple hover:underline outline-none"
                                >
                                    Send another message
                                </button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleFormSubmit} className="space-y-6">
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-400">First Name</label>
                                        <input required name="first_name" type="text" className="w-full bg-[#0b0f1a] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-all" placeholder="John" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-400">Last Name</label>
                                        <input required name="last_name" type="text" className="w-full bg-[#0b0f1a] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-all" placeholder="Doe" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400">Email Address</label>
                                    <input required name="email" type="email" className="w-full bg-[#0b0f1a] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-all" placeholder="john@example.com" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400">Message</label>
                                    <textarea required name="message" rows="4" className="w-full bg-[#0b0f1a] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-all" placeholder="Tell us what you're building..." />
                                </div>

                                {status === "ERROR" && (
                                    <p className="text-red-400 text-sm bg-red-400/10 p-4 rounded-lg border border-red-400/20">
                                        Submission failed. Please check your internet connection or the API key configuration.
                                    </p>
                                )}

                                <Button
                                    variant="primary"
                                    className="w-full"
                                    icon={Send}
                                    type="submit"
                                    disabled={status === "LOADING"}
                                >
                                    {status === "LOADING" ? "Sending..." : "Send Message"}
                                </Button>

                                <p className="text-[10px] text-gray-600 text-center uppercase tracking-widest font-bold">
                                    Direct to shopparva01@gmail.com
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};
