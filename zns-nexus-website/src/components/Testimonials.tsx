"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "CEO, TechFlow",
        content: "ZNS Nexus transformed our digital presence completely. The attention to detail and creative direction was exactly what we needed to stand out.",
    },
    {
        name: "Michael Chen",
        role: "Founder, StartUp X",
        content: "Working with the team was seamless. They understood our vision from day one and delivered a solution that exceeded our expectations.",
    },
    {
        name: "Emma Davis",
        role: "Marketing Director, GrowthCo",
        content: "The ROI we've seen since launching our new site has been incredible. Professional, talented, and easy to work with.",
    },
];

export const Testimonials = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
    const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <section className="py-32 bg-zns-dark relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="mb-12 flex justify-center">
                        <Quote className="w-16 h-16 text-zns-mint opacity-20" />
                    </div>

                    <div className="h-[300px] md:h-[250px] relative flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 flex flex-col items-center justify-center"
                            >
                                <p className="text-2xl md:text-4xl font-display font-medium text-white leading-relaxed mb-8">
                                    "{testimonials[current].content}"
                                </p>
                                <div>
                                    <h4 className="text-xl font-bold text-white">{testimonials[current].name}</h4>
                                    <p className="text-zns-mint">{testimonials[current].role}</p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="flex justify-center gap-4 mt-12">
                        <button
                            onClick={prev}
                            className="p-4 rounded-full border border-white/10 hover:bg-white hover:text-zns-dark transition-all duration-300 group"
                        >
                            <ArrowLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={next}
                            className="p-4 rounded-full border border-white/10 hover:bg-white hover:text-zns-dark transition-all duration-300 group"
                        >
                            <ArrowRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
