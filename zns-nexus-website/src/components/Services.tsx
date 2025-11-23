"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Film, Share2, PenTool } from "lucide-react";

const services = [
    {
        title: "Web Development",
        description: "Transform your vision into stunning, high-performance websites and applications.",
        icon: Code,
    },
    {
        title: "Video Editing",
        description: "Cinematic storytelling that captures attention and converts viewers.",
        icon: Film,
    },
    {
        title: "Social Media Marketing",
        description: "Strategic social campaigns that drive real engagement and growth.",
        icon: Share2,
    },
    {
        title: "Content Creation",
        description: "Compelling content that resonates with your audience and drives conversions.",
        icon: PenTool,
    },
];

export const Services = () => {
    return (
        <section id="services" className="py-24 bg-zns-dark relative z-10">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-display font-bold text-white mb-16 text-center"
                >
                    What We Do Best
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-zns-mint/50 transition-all duration-500 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-zns-mint/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-zns-mint/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <service.icon className="w-6 h-6 text-zns-mint" />
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zns-mint transition-colors">
                                    {service.title}
                                </h3>

                                <p className="text-zns-cream/70 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
