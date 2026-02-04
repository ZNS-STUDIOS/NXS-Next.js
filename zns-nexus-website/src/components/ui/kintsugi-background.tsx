"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Fixed initial values for SSR consistency
const initialParticles = Array.from({ length: 20 }, (_, i) => ({
    x: (i * 5) % 100,
    y: (i * 5) % 100,
    targetY: -50,
    duration: 7,
    delay: i * 0.25,
}));

export const KintsugiBackground = () => {
    const [particles, setParticles] = useState(initialParticles);

    // Generate random values only on client-side after mount
    useEffect(() => {
        setParticles(
            Array.from({ length: 20 }, () => ({
                x: Math.random() * 100,
                y: Math.random() * 100,
                targetY: Math.random() * -100,
                duration: Math.random() * 5 + 5,
                delay: Math.random() * 5,
            }))
        );
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {/* Base Texture */}
            <div className="absolute inset-0 bg-[#fdfbf7]" />

            {/* Subtle Marble Texture - Light */}
            <div className="absolute inset-0 opacity-40 mix-blend-multiply filter contrast-125">
                <svg className="w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
                    <filter id="noiseFilter">
                        <feTurbulence type="fractalNoise" baseFrequency="0.005" numOctaves="5" stitchTiles="stitch" />
                        <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.5 0" />
                    </filter>
                    <rect width="100%" height="100%" filter="url(#noiseFilter)" />
                </svg>
            </div>

            {/* Golden Cracks SVG */}
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#bf953f" />
                        <stop offset="25%" stopColor="#fcf6ba" />
                        <stop offset="50%" stopColor="#b38728" />
                        <stop offset="75%" stopColor="#fbf5b7" />
                        <stop offset="100%" stopColor="#aa771c" />
                    </linearGradient>
                    <filter id="goldGlow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="1.5" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                </defs>

                {/* Main Thick Vein (Diagonal) */}
                <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 3, ease: "easeInOut", delay: 0.2 }}
                    d="M-50,200 C150,250 200,100 400,300 S600,150 800,350 S1000,200 1200,400"
                    fill="none"
                    stroke="url(#goldGradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    filter="url(#goldGlow)"
                />

                {/* Branching from Main */}
                <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2.5, ease: "easeInOut", delay: 0.8 }}
                    d="M400,300 C450,400 500,450 600,420"
                    fill="none"
                    stroke="url(#goldGradient)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    filter="url(#goldGlow)"
                />

                {/* Secondary Vein (Top Right) */}
                <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 4, ease: "easeInOut", delay: 0.5 }}
                    d="M70%,0 C65%,20% 75%,40% 60%,60% 80%,80% 60%,100%"
                    fill="none"
                    stroke="url(#goldGradient)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    filter="url(#goldGlow)"
                />

                {/* Detail Branching (Top Right) */}
                <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, ease: "easeInOut", delay: 1.2 }}
                    d="M75%,40% L85%,45% L95%,35%"
                    fill="none"
                    stroke="url(#goldGradient)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    filter="url(#goldGlow)"
                />


                {/* Bottom Left Web */}
                <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 3.5, ease: "easeInOut", delay: 1 }}
                    d="M0,80% Q20%,70% 30%,90% T50%,80%"
                    fill="none"
                    stroke="url(#goldGradient)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    filter="url(#goldGlow)"
                />
            </svg>

            {/* Particles floating */}
            <div className="absolute inset-0">
                {particles.map((particle, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-zns-gold rounded-full"
                        initial={{ x: particle.x + "vw", y: particle.y + "vh", opacity: 0 }}
                        animate={{
                            y: [null, particle.targetY],
                            opacity: [0, 0.8, 0]
                        }}
                        transition={{
                            duration: particle.duration,
                            repeat: Infinity,
                            delay: particle.delay
                        }}
                    />
                ))}
            </div>
        </div>
    );
};
