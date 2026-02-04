"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "What types of businesses do you work with?",
        answer: "We partner with ambitious brands ready to scale. From Series A startups to established enterprises, if you're looking for measurable growth and premium execution, we're the right fit.",
    },
    {
        question: "How long does a typical project take?",
        answer: "We move at the speed of business. Most engagements deliver initial value within 2-3 weeks, with full platform launches typically in the 8-12 week range. We provide a detailed sprint schedule before day one.",
    },
    {
        question: "Do you offer ongoing support after launch?",
        answer: "Yes. We don't ship and ghost. Every project includes a 45-day hyper-care period. Beyond that, we offer growth retainers to ensure your digital infrastructure evolves with your business.",
    },
    {
        question: "What makes your pricing different?",
        answer: "We price on value, not hours. You'll receive a fixed-price proposal with clear deliverables and ROI projections. No hidden fees, no scope creep, just transparent investment for tangible results.",
    },
];

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-24 bg-zns-dark relative z-10 border-t border-white/5">
            <div className="container mx-auto px-4 max-w-3xl">
                {/* Header */}
                <div className="mb-16 text-center flex flex-col items-center">
                    <div className="mb-4 flex flex-col items-center gap-2">
                        <div className="h-8 w-[1px] bg-zns-gold/50" />
                        <span className="text-zns-gold font-mono text-[10px] tracking-[0.2em] uppercase">FAQ</span>
                    </div>
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-display font-bold text-white"
                    >
                        Common <span className="text-zns-gold">Questions</span>
                    </motion.h2>
                </div>

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
                                    <Minus className="w-5 h-5 text-zns-gold" />
                                ) : (
                                    <Plus className="w-5 h-5 text-zns-gold" />
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
