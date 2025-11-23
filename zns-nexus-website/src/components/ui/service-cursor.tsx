"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface ServiceCursorProps {
    hoveredService: {
        title: string;
        caseStudySlug: string;
        color: string;
    } | null;
}

export const ServiceCursor: React.FC<ServiceCursorProps> = ({ hoveredService }) => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 60); // Offset to center the cursor
            cursorY.set(e.clientY - 60);
        };

        window.addEventListener("mousemove", moveCursor);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, [cursorX, cursorY]);

    if (!hoveredService) return null;

    return (
        <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-normal"
            style={{
                x: cursorXSpring,
                y: cursorYSpring,
            }}
        >
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="relative w-[120px] h-[120px] rounded-full bg-zns-mint/95 backdrop-blur-md border-2 border-white/30 shadow-2xl flex flex-col items-center justify-center"
            >
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-zns-mint opacity-50 blur-xl" />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center gap-2">
                    <ExternalLink className="w-6 h-6 text-zns-dark" strokeWidth={2.5} />
                    <span className="text-[10px] font-bold text-zns-dark uppercase tracking-wider text-center leading-tight">
                        View<br />Work
                    </span>
                </div>

                {/* Animated ring */}
                <motion.div
                    className="absolute inset-0 rounded-full border-2 border-white/50"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </motion.div>
        </motion.div>
    );
};
