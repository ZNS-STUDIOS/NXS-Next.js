"use client";

import React from "react";
import { motion } from "framer-motion";

export const PrismBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 bg-zns-cream">
            {/* Ambient Base Glow - Drastically reduced opacity to show colors */}
            <div className="absolute inset-0 bg-zns-cream opacity-10 backdrop-blur-3xl z-10" />

            {/* Moving Orbs - Increased opacity for true "Prism Gradient" look */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className="absolute inset-0 z-0"
            >
                {/* Cyan Orb */}
                <motion.div
                    animate={{
                        x: [0, 100, -50, 0],
                        y: [0, -100, 50, 0],
                        scale: [1, 1.2, 0.9, 1],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full bg-cyan-400/60 blur-[100px] mix-blend-multiply"
                />

                {/* Magenta Orb */}
                <motion.div
                    animate={{
                        x: [0, -100, 50, 0],
                        y: [0, 100, -50, 0],
                        scale: [1, 1.3, 0.8, 1],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2,
                    }}
                    className="absolute top-1/3 right-1/4 w-[35vw] h-[35vw] rounded-full bg-pink-400/60 blur-[100px] mix-blend-multiply"
                />

                {/* Yellow Orb */}
                <motion.div
                    animate={{
                        x: [0, 80, -80, 0],
                        y: [0, 50, -50, 0],
                        scale: [1, 1.1, 0.9, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 4,
                    }}
                    className="absolute bottom-1/4 left-1/3 w-[45vw] h-[45vw] rounded-full bg-yellow-400/60 blur-[100px] mix-blend-multiply"
                />
                {/* Purple Orb */}
                <motion.div
                    animate={{
                        x: [0, -60, 60, 0],
                        y: [0, -80, 80, 0],
                        scale: [1, 1.4, 0.9, 1],
                    }}
                    transition={{
                        duration: 22,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                    }}
                    className="absolute bottom-1/3 right-1/3 w-[30vw] h-[30vw] rounded-full bg-purple-400/60 blur-[100px] mix-blend-multiply"
                />
            </motion.div>

            {/* Noise Texture Overlay for texture */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')] pointer-events-none z-20 mix-blend-overlay" />
        </div>
    );
};
