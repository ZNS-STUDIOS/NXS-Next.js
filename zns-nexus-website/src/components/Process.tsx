"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
    {
        id: "01",
        title: "Discovery",
        description: "We dive deep into your brand, audience, and goals to uncover unique opportunities.",
    },
    {
        id: "02",
        title: "Strategy",
        description: "Custom solutions tailored to your business. We create a roadmap that aligns with your objectives.",
    },
    {
        id: "03",
        title: "Design",
        description: "Visual storytelling that captivates. We craft interfaces that are both beautiful and functional.",
    },
    {
        id: "04",
        title: "Development",
        description: "Clean, scalable code. We build robust platforms that perform flawlessly across all devices.",
    },
];

export const Process = () => {
    return (
        <section id="process" className="py-24 bg-zns-dark border-t border-white/5 relative overflow-hidden">
            {/* Background Tech Grid */}
            <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none" />

            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="mb-20 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                        <div className="h-[1px] w-12 bg-zns-gold/50" />
                        <span className="text-zns-gold font-mono text-[10px] tracking-[0.2em] uppercase">Workflow Protocol</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tight">
                        THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-zns-gold to-white/20">PROCESS</span>
                    </h2>
                </div>

                {/* Horizontal Step Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="relative group pt-8 border-t border-white/10 hover:border-zns-gold/50 transition-colors duration-500"
                        >
                            {/* Step Indicator */}
                            <div className="absolute top-0 left-0 -translate-y-1/2 w-3 h-3 bg-zns-dark border border-white/20 group-hover:border-zns-gold group-hover:bg-zns-gold transition-colors duration-500 rounded-full" />

                            <div className="mb-6">
                                <span className="text-5xl font-mono font-bold text-white/5 group-hover:text-white/10 transition-colors duration-500 select-none">
                                    {step.id}
                                </span>
                            </div>

                            <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-zns-gold transition-colors duration-300">
                                {step.title}
                            </h3>

                            <p className="text-zns-text-light/60 text-sm leading-relaxed max-w-xs group-hover:text-zns-text-light transition-colors duration-300">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
