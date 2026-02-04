"use client";

import React from "react";
import { motion } from "framer-motion";

const clients = [
    "TechFlow",
    "Neon Esports",
    "Luminex",
    "CryptoVault",
    "StartUp X",
    "GrowthCo",
];

const stats = [
    { value: "50+", label: "Projects Delivered" },
    { value: "25+", label: "Happy Clients" },
    { value: "99%", label: "Satisfaction Rate" },
];

export const TrustBadges = () => {
    return (
        <section className="py-16 bg-zns-dark border-t border-white/5 overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Stats Row */}
                <div className="flex justify-center gap-12 md:gap-24 mb-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className="text-4xl md:text-5xl font-display font-bold text-zns-gold mb-2">
                                {stat.value}
                            </div>
                            <div className="text-zns-text-light font-mono text-xs uppercase tracking-widest">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Client Logo Marquee */}
                <div className="relative">
                    <div className="text-center mb-6">
                        <span className="text-white/30 font-mono text-[10px] uppercase tracking-[0.2em]">
                            Industry leading companies*
                        </span>
                    </div>

                    <div className="flex overflow-hidden">
                        <motion.div
                            animate={{ x: [0, -1000] }}
                            transition={{
                                repeat: Infinity,
                                duration: 20,
                                ease: "linear",
                            }}
                            className="flex gap-16 items-center whitespace-nowrap"
                        >
                            {[...clients, ...clients].map((client, index) => (
                                <span
                                    key={index}
                                    className="text-white/20 font-display text-2xl md:text-3xl font-bold uppercase tracking-tight hover:text-white/40 transition-colors"
                                >
                                    {client}
                                </span>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
