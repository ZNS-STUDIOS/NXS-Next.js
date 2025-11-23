"use client";

import React from "react";
import { motion } from "framer-motion";
import { Scale, Heart, Layers } from "lucide-react";

const features = [
    {
        title: "Premium Quality, Fair Pricing",
        description: "Get the best without breaking the bank. We believe exceptional work shouldn't come with exploitative pricing.",
        icon: Scale,
    },
    {
        title: "Relationship-First Approach",
        description: "You're not just a project number to us. We build lasting partnerships based on trust, transparency, and mutual success.",
        icon: Heart,
    },
    {
        title: "End-to-End Solutions",
        description: "One partner for all your digital needs. From strategy to execution to growth, we handle everything.",
        icon: Layers,
    },
];

export const WhyUs = () => {
    return (
        <section id="why-us" className="py-24 bg-zns-dark/50 relative">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-display font-bold text-white mb-16 text-center"
                >
                    The ZNS Difference
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="text-center p-8"
                        >
                            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-zns-mint to-zns-teal rounded-2xl flex items-center justify-center mb-8 rotate-3 hover:rotate-6 transition-transform duration-300">
                                <feature.icon className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                            <p className="text-zns-cream/70">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
