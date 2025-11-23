"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";

export const FinalCTA = () => {
    return (
        <section className="py-32 bg-gradient-to-b from-zns-dark to-zns-dark-teal relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-zns-mint/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl font-display font-bold text-white mb-8"
                >
                    Ready to Build Something Great?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-xl text-zns-cream/80 max-w-2xl mx-auto mb-12"
                >
                    Let's discuss your project and create a strategy tailored to your goals. No sales pressure, just honest conversation.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <MagneticButton className="text-xl px-12 py-6">
                        Get in Touch <ArrowRight className="ml-2 w-6 h-6" />
                    </MagneticButton>
                </motion.div>
            </div>
        </section>
    );
};
