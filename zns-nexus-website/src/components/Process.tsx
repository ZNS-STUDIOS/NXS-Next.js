"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const steps = [
    {
        id: "01",
        title: "Discovery",
        description: "We dive deep into your brand, audience, and goals to uncover unique opportunities.",
        color: "bg-black/40",
    },
    {
        id: "02",
        title: "Strategy",
        description: "Custom solutions tailored to your business. We create a roadmap that aligns with your objectives.",
        color: "bg-black/40",
    },
    {
        id: "03",
        title: "Design",
        description: "Visual storytelling that captivates. We craft interfaces that are both beautiful and functional.",
        color: "bg-black/40",
    },
    {
        id: "04",
        title: "Development",
        description: "Clean, scalable code. We build robust platforms that perform flawlessly across all devices.",
        color: "bg-black/40",
    },
];

export const Process = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    return (
        <section ref={containerRef} id="process" className="relative bg-zns-dark border-t border-white/5">
            <div className="container mx-auto px-4 py-24 flex flex-col md:flex-row gap-12">
                {/* Sticky Title */}
                <div className="md:w-1/3 md:h-screen md:sticky md:top-0 flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                    >
                        <div className="mb-4 flex flex-col items-start gap-2">
                            <div className="h-0.5 w-12 bg-zns-gold" />
                            <span className="text-zns-gold font-mono text-xs tracking-[0.2em] uppercase">Workflow Protocol</span>
                        </div>
                        <h2 className="text-6xl md:text-8xl font-display font-bold text-white mb-6 tracking-tighter">
                            THE <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zns-gold to-white/20">PROCESS</span>
                        </h2>
                        <p className="text-zns-text-light text-lg max-w-sm font-sans leading-relaxed">
                            From concept to launch, we follow a rigorous methodology to ensure precision execution.
                        </p>
                    </motion.div>
                </div>

                {/* Cards Stack */}
                <div className="md:w-2/3 relative">
                    {steps.map((step, index) => {
                        const targetScale = 1 - (steps.length - index) * 0.05;
                        return (
                            <Card
                                key={index}
                                i={index}
                                {...step}
                                progress={scrollYProgress}
                                range={[index * 0.25, 1]}
                                targetScale={targetScale}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

interface CardProps {
    i: number;
    title: string;
    description: string;
    id: string;
    progress: MotionValue<number>;
    range: [number, number];
    targetScale: number;
}

const Card = ({ i, title, description, id, progress, range, targetScale }: CardProps) => {
    const container = useRef(null);
    useScroll({
        target: container,
        offset: ["start end", "start start"],
    });

    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
            <motion.div
                style={{ scale, top: `calc(-5vh + ${i * 25}px)` }}
                className={`relative flex flex-col h-[500px] w-full rounded-sm p-12 border border-white/5 bg-[#0f0f0f] shadow-2xl origin-top hover:border-zns-gold/20 transition-colors duration-500`}
            >
                {/* Tech Corners */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20" />
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/20" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20" />

                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="flex justify-between items-start mb-12 relative z-10">
                    <h3 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">{title}</h3>
                    <span className="text-5xl font-mono font-bold text-white/5">{id}</span>
                </div>

                <p className="text-xl text-zns-text-light max-w-xl leading-relaxed mt-auto relative z-10 font-sans">
                    {description}
                </p>

                <div className="absolute bottom-8 right-8 w-2 h-2 bg-zns-gold shadow-[0_0_10px_rgba(180,83,9,0.5)]" />
            </motion.div>
        </div>
    );
};
