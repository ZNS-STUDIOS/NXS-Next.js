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
        <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#0a0a0a] tech-grid">

            <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#0a0a0a] opacity-80 pointer-events-none" />

            {/* Content */}
            <motion.div
                style={{ y, opacity }}
                className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center justify-center h-full"
            >
                {/* Tech Label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-8 flex flex-col items-center gap-2"
                >
                    <div className="h-12 w-[1px] bg-gradient-to-b from-transparent via-zns-gold to-transparent" />
                    <span className="text-zns-gold/80 font-mono text-[10px] tracking-[0.2em] uppercase">Strategic Digital Growth // Global</span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-12 relative"
                >
                    <h1 className="text-[10vw] md:text-[8vw] leading-[0.9] font-display font-bold tracking-tighter text-white">
                        <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">WE BUILD</span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">PRODUCTS THAT</span>
                        <span className="block text-zns-gold">SCALE</span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="max-w-xl text-zns-text-light text-lg md:text-xl font-sans leading-relaxed mb-12"
                >
                    ZNS Nexus helps startups and growth-stage companies build fast,
                    conversion-focused websites, videos, and social campaigns that
                    drive real business results.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="flex flex-col md:flex-row gap-6 items-center"
                >
                    <Link href="/contact">
                        <MagneticButton className="px-8 py-4 bg-zns-gold text-white border border-zns-gold rounded-sm font-bold font-mono text-sm hover:bg-white hover:text-zns-dark transition-all flex items-center gap-3 tracking-widest uppercase shadow-[0_0_20px_rgba(180,83,9,0.2)]">
                            Start Your Project
                            <ArrowRight className="w-4 h-4" />
                        </MagneticButton>
                    </Link>
                    <Link href="/portfolio" className="text-zns-text-light hover:text-white font-mono text-xs tracking-widest uppercase transition-colors border-b border-transparent hover:border-zns-gold pb-1">
                        See Our Work
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
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zns-text-light/50">Scroll to Explore</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-zns-gold/50 to-transparent" />
            </motion.div>
        </section>
    );
};
