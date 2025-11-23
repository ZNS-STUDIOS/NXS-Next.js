"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
    {
        number: "01",
        title: "Discovery",
        description: "We dive deep into your goals, audience, and vision. Understanding your needs is where every great project begins.",
    },
    {
        number: "02",
        title: "Strategy",
        description: "Custom solutions tailored to your business. We create a roadmap that aligns with your objectives and sets clear milestones.",
    },
    {
        number: "03",
        title: "Creation",
        description: "Our team brings your vision to life with precision and creativity. Every detail is crafted to exceed expectations.",
    },
    {
        number: "04",
        title: "Growth",
        description: "Launch is just the beginning. We provide ongoing support, optimization, and strategies to ensure your continued success.",
    },
];

export const Process = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section id="process" className="py-24 bg-zns-dark relative overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-display font-bold text-white mb-20 text-center"
                >
                    How We Work Together
                </motion.h2>

                <div ref={containerRef} className="relative max-w-4xl mx-auto">
                    {/* Center Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block">
                        <motion.div
                            style={{ height: lineHeight }}
                            className="w-full bg-zns-mint origin-top"
                        />
                    </div>

                    <div className="space-y-20">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Content */}
                                <div className="flex-1 text-center md:text-left">
                                    <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-zns-mint/30 transition-colors">
                                        <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                                        <p className="text-zns-cream/70">{step.description}</p>
                                    </div>
                                </div>

                                {/* Number Circle */}
                                <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-zns-dark border-2 border-zns-mint flex items-center justify-center">
                                    <span className="text-xl font-bold text-zns-mint">{step.number}</span>
                                </div>

                                {/* Empty Space for Grid */}
                                <div className="flex-1 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
