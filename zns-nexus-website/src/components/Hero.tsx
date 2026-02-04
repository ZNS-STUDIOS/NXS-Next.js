"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { PrismBackground } from "@/components/ui/prism-background";

export const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();

    const y = useTransform(scrollY, [0, 1000], [0, 400]);
    const opacity = useTransform(scrollY, [0, 500], [1, 0]);

    return (
        <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-zns-cream">
            {/* Prism Gradient Background */}
            <PrismBackground />

            {/* Content */}
            <motion.div
                style={{ y, opacity }}
                className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center justify-center h-full"
            >
                {/* Tagline Pill */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zns-gold/40 bg-white/50 backdrop-blur-md shadow-lg shadow-zns-gold/10"
                >
                    <div className="w-1.5 h-1.5 rounded-full bg-zns-gold" />
                    <span className="text-zns-gold text-xs font-bold tracking-[0.2em] uppercase">The Art of Restoration</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-zns-gold" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-12"
                >
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-zns-dark mb-2 tracking-wide">
                        THE BRIDGE BETWEEN
                    </h2>
                    <h1 className="text-[12vw] md:text-[10vw] leading-[0.85] font-sans font-bold tracking-tighter text-zns-blue">
                        <span className="block">AMBITION &</span>
                        <span className="block">EXECUTION</span>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                >
                    <Link href="/contact">
                        <MagneticButton className="px-12 py-6 bg-zns-blue text-white rounded-full font-bold text-xl hover:bg-zns-dark hover:text-white transition-colors flex items-center gap-2 group shadow-[0_0_30px_rgba(30,58,138,0.2)]">
                            GET MATCHED
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </MagneticButton>
                    </Link>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
            >
                <span className="text-xs uppercase tracking-[0.2em] text-zns-text-light">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-zns-gold to-transparent" />
            </motion.div>
        </section>
    );
};
