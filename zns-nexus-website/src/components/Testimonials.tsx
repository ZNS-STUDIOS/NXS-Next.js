"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "CEO, TechFlow",
        content: "ZNS Nexus transformed our digital presence completely. The attention to detail and creative direction was exactly what we needed to stand out.",
        rating: 5,
    },
    {
        name: "Michael Chen",
        role: "Founder, StartUp X",
        content: "Working with the team was seamless. They understood our vision from day one and delivered a website that exceeded our expectations.",
        rating: 5,
    },
    {
        name: "Emma Davis",
        role: "Marketing Director, GrowthCo",
        content: "The ROI we've seen since launching our new site has been incredible. Professional, talented, and easy to work with.",
        rating: 5,
    },
];

export const Testimonials = () => {
    return (
        <section className="py-32 bg-zns-dark relative overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                        Client Stories
                    </h2>
                    <p className="text-zns-cream/60 text-xl max-w-2xl mx-auto">
                        Don't just take our word for it. Here's what our partners have to say.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white/5 border border-white/10 p-8 rounded-3xl relative hover:border-zns-mint/30 transition-colors"
                        >
                            <Quote className="absolute top-8 right-8 w-10 h-10 text-white/10" />

                            <div className="flex gap-1 mb-6">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-zns-mint fill-zns-mint" />
                                ))}
                            </div>

                            <p className="text-zns-cream/80 text-lg mb-8 leading-relaxed">
                                "{testimonial.content}"
                            </p>

                            <div>
                                <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                                <p className="text-zns-mint text-sm">{testimonial.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
