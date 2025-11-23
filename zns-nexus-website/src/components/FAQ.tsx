"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "What types of businesses do you work with?",
        answer: "We partner with startups launching their first product, established brands looking to scale, and enterprise companies seeking digital transformation. Our solutions are tailored to businesses of all sizes across UAE, Canada, and India.",
    },
    {
        question: "How long does a typical project take?",
        answer: "Project timelines vary based on scope. A landing page might take 2-3 weeks, while a full web application could take 8-12 weeks. We'll give you a clear timeline during our discovery phase and keep you updated throughout.",
    },
    {
        question: "Do you offer ongoing support after launch?",
        answer: "Absolutely. We believe launch is just the beginning. All projects include post-launch support, and we offer maintenance packages for hosting, updates, security, and optimization. Your success is ongoing, not a one-time event.",
    },
    {
        question: "What makes your pricing different?",
        answer: "We're transparent and fair. No hidden fees, no surprise costs. You get premium quality without the premium agency markup. We charge based on value delivered, not arbitrary pricing structures.",
    },
];

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-24 bg-zns-dark relative z-10">
            <div className="container mx-auto px-4 max-w-3xl">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-display font-bold text-white mb-16 text-center"
                >
                    Common Questions
                </motion.h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="border border-white/10 rounded-2xl overflow-hidden bg-white/5"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                            >
                                <span className="text-lg font-bold text-white">{faq.question}</span>
                                {openIndex === index ? (
                                    <Minus className="w-5 h-5 text-zns-mint" />
                                ) : (
                                    <Plus className="w-5 h-5 text-zns-mint" />
                                )}
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="p-6 pt-0 text-zns-cream/70 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
