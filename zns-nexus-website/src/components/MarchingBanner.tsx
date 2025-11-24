"use client";

import React from "react";
import { motion } from "framer-motion";

const items = ["STRATEGY", "DESIGN", "DEVELOPMENT", "GROWTH"];

export const MarchingBanner = () => {
    return (
        <div className="relative flex h-[20vh] overflow-hidden bg-zns-dark items-center border-y border-white/5">
            <div className="flex whitespace-nowrap">
                <motion.div
                    animate={{ x: [0, -2000] }}
                    transition={{
                        repeat: Infinity,
                        duration: 30,
                        ease: "linear",
                    }}
                    className="flex items-center"
                >
                    {items.map((item, index) => (
                        <span
                            key={index}
                            className="inline-block mx-8 text-8xl md:text-9xl font-display font-bold"
                            style={{
                                WebkitTextStroke: '2px rgba(20, 224, 142, 0.5)',
                                color: 'rgba(20, 224, 142, 0.2)',
                            }}
                        >
                            {item} •
                        </span>
                    ))}
                    {items.map((item, index) => (
                        <span
                            key={`dup-${index}`}
                            className="inline-block mx-8 text-8xl md:text-9xl font-display font-bold"
                            style={{
                                WebkitTextStroke: '2px rgba(20, 224, 142, 0.5)',
                                color: 'rgba(20, 224, 142, 0.2)',
                            }}
                        >
                            {item} •
                        </span>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};
