import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Twitter } from 'lucide-react';
import ceoImg from '../../assets/images/founder_ceo.jpg';
import techImg from '../../assets/images/tech_cofounder.jpg';
import marketingImg from '../../assets/images/marketing_cofounder.jpg';

const team = [
    {
        name: "Dinesh kumar",
        role: "Founder & CEO",
        bio: "Tech-focused problem solver with a background in computer science. Focused on building long-term value for Indian shoppers.",
        tags: ["Product", "Strategy", "Engineering"],
        image: ceoImg,
        links: {
            github: "https://github.com/Dinesh3906",
            linkedin: "https://www.linkedin.com/in/dhavala-dinesh-kumar-bb2a79327/"
        }
    },
    {
        name: "Hinduja simhadri",
        role: "Tech Co-founder",
        bio: "Architecting scalable systems and AI models. Passionate about using technology to solve real-world problems.",
        tags: ["Full Stack", "AI/ML", "Cloud"],
        image: techImg,
        links: {
            github: "https://github.com/Hinduja-25",
            linkedin: "https://www.linkedin.com/in/hinduja-simhadri-965419316/"
        }
    },
    {
        name: "sathvik bhat",
        role: "Marketing Co-founder",
        bio: "Focused on practical growth strategies and building authentic connections with our user community.",
        tags: ["Growth", "Community", "Operations"],
        image: marketingImg,
        links: {
            github: "#",
            linkedin: "#"
        }
    }
];

export const Team = () => {
    return (
        <section className="py-8 lg:py-24 relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-neon-purple/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-8 lg:mb-16 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                            Meet the <span className="text-gradient-purple">Founders</span>
                        </h2>
                        <p className="text-gray-400 max-w-xl text-lg">
                            A team of tech-focused problem solvers dedicated to building long-term value.
                        </p>
                    </div>
                    <a href="#contact" className="text-neon-blue hover:text-white transition-colors font-semibold flex items-center gap-2">
                        Join our team <span className="text-xl">→</span>
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {team.map((member, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ delay: (idx % 3) * 0.05 }}
                            className="group relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-blue rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                            <div className="relative bg-[#0f111e] rounded-2xl p-6 border border-white/10 h-full flex flex-col hover:translate-y-[-5px] transition-transform duration-300">
                                {/* Profile Image with gradient overlay match */}
                                <div className="relative w-full aspect-square mb-6 overflow-hidden rounded-xl bg-white/5">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f111e] to-transparent opacity-60" />
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                                <p className="text-neon-purple font-medium mb-4">{member.role}</p>
                                <p className="text-gray-400 text-sm mb-6 flex-grow">{member.bio}</p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {member.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4 pt-4 border-t border-white/5">
                                    <a href={member.links.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                                        <Github className="w-5 h-5" />
                                    </a>
                                    <a href={member.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                    <a href="#" className="text-gray-500 hover:text-white transition-colors">
                                        <Twitter className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
