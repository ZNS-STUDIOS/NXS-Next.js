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
        <section ref={containerRef} id="process" className="relative bg-zns-cream">
            <div className="container mx-auto px-4 py-24 flex flex-col md:flex-row gap-12">
                {/* Sticky Title */}
                <div className="md:w-1/3 md:h-screen md:sticky md:top-0 flex flex-col justify-center">
                    <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-6xl md:text-8xl font-display font-bold text-zns-dark mb-6"
                    >
                        THE <br />
                        <span className="text-zns-blue">PROCESS</span>
                    </motion.h2>
                    <p className="text-zns-text-light text-lg max-w-sm">
                        From concept to launch, we follow a proven methodology to ensure success.
                    </p>
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
                className={`relative flex flex-col h-[500px] w-full rounded-3xl p-12 border border-black/5 bg-white shadow-xl shadow-black/5 origin-top hover:border-zns-gold/20 transition-colors duration-500`}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-zns-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />

                <div className="flex justify-between items-start mb-12 relative z-10">
                    <h3 className="text-4xl md:text-5xl font-bold text-zns-dark">{title}</h3>
                    <span className="text-6xl font-display font-bold text-zns-dark/10">{id}</span>
                </div>

                <p className="text-xl text-zns-text-light max-w-xl leading-relaxed mt-auto relative z-10">
                    {description}
                </p>

                <div className="absolute bottom-8 right-8 w-4 h-4 rounded-full bg-zns-gold shadow-[0_0_20px_rgba(180,83,9,0.3)]" />
            </motion.div>
        </div>
    );
};
