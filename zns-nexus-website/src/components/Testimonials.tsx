"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ArrowLeft, ArrowRight, Star } from "lucide-react";

const testimonials = [
    {
        name: "Sarah Chen",
        role: "CEO",
        company: "TechFlow Inc.",
        content: "ZNS Nexus transformed our platform from concept to reality. Within 6 months of launch, we hit 500K active users. Their attention to detail and strategic approach was exactly what we needed.",
        metric: "500K+ Users",
        metricLabel: "in 6 months",
        rating: 5,
    },
    {
        name: "Marcus Rodriguez",
        role: "CMO",
        company: "Luminex Wearables",
        content: "The launch campaign exceeded our wildest expectations. 10M+ organic impressions and 50K pre-orders in the first week. ZNS Nexus truly understands modern marketing.",
        metric: "250% ROI",
        metricLabel: "on ad spend",
        rating: 5,
    },
    {
        name: "Emma Davis",
        role: "Marketing Director",
        company: "GrowthCo",
        content: "The ROI we've seen since launching our new site has been incredible. Professional, talented, and easy to work with. They delivered on every promise.",
        metric: "180%",
        metricLabel: "conversion increase",
        rating: 5,
    },
];

export const Testimonials = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
    const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <section className="py-32 bg-zns-dark relative overflow-hidden border-t border-white/5">
            {/* Background Grid */}
            <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Header */}
                    <div className="mb-8 flex flex-col items-center gap-2">
                        <div className="h-8 w-[1px] bg-zns-gold/50" />
                        <span className="text-zns-gold font-mono text-[10px] tracking-[0.2em] uppercase">Client Success Stories</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-16">
                        What Our <span className="text-zns-gold">Clients</span> Say
                    </h2>

                    <div className="h-[400px] md:h-[350px] relative flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 flex flex-col items-center justify-center"
                            >
                                {/* Rating Stars */}
                                <div className="flex gap-1 mb-6">
                                    {[...Array(testimonials[current].rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-zns-gold text-zns-gold" />
                                    ))}
                                </div>

                                {/* Quote */}
                                <p className="text-xl md:text-2xl font-display text-white leading-relaxed mb-8 max-w-3xl">
                                    &ldquo;{testimonials[current].content}&rdquo;
                                </p>

                                {/* Metric Badge */}
                                <div className="mb-8 px-6 py-3 bg-zns-gold/10 border border-zns-gold/20 rounded-full">
                                    <span className="text-zns-gold font-mono text-sm">
                                        <span className="font-bold">{testimonials[current].metric}</span>
                                        <span className="text-white/60 ml-2">{testimonials[current].metricLabel}</span>
                                    </span>
                                </div>

                                {/* Author Info */}
                                <div className="flex flex-col items-center gap-1">
                                    <h4 className="text-xl font-bold text-white">{testimonials[current].name}</h4>
                                    <p className="text-zns-text-light text-sm">
                                        {testimonials[current].role}, <span className="text-zns-gold">{testimonials[current].company}</span>
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation */}
                    <div className="flex justify-center gap-4 mt-8">
                        <button
                            onClick={prev}
                            className="p-4 rounded-sm border border-white/10 text-white hover:bg-zns-gold hover:border-zns-gold hover:text-black transition-all duration-300"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </button>

                        {/* Dots */}
                        <div className="flex items-center gap-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrent(index)}
                                    className={`w-2 h-2 rounded-full transition-all ${current === index ? "bg-zns-gold w-6" : "bg-white/20 hover:bg-white/40"
                                        }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={next}
                            className="p-4 rounded-sm border border-white/10 text-white hover:bg-zns-gold hover:border-zns-gold hover:text-black transition-all duration-300"
                        >
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
