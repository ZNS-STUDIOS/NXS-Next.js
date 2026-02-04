"use client";

import React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";

interface ServicePreviewProps {
    isHovering: boolean;
    service: {
        title: string;
        caseStudySlug?: string;
        previewImage?: string;
    };
}

export const ServicePreview: React.FC<ServicePreviewProps> = ({ isHovering, service }) => {
    const cursorX = useMotionValue(0);
    const cursorY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 300 };
    const x = useSpring(cursorX, springConfig);
    const y = useSpring(cursorY, springConfig);

    React.useEffect(() => {
        const updateCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        window.addEventListener("mousemove", updateCursor);
        return () => window.removeEventListener("mousemove", updateCursor);
    }, [cursorX, cursorY]);

    if (!isHovering || !service.caseStudySlug) return null;

    return (
        <motion.div
            style={{
                x,
                y,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed pointer-events-none z-[9999]"
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
        >
            <div className="relative -translate-x-1/2 -translate-y-1/2">
                <Link href={`/portfolio/${service.caseStudySlug}`} className="pointer-events-auto">
                    <div className="w-[300px] rounded-2xl overflow-hidden bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
                        {/* Preview Image */}
                        <div className="w-full h-[180px] bg-gradient-to-br from-zns-teal/30 to-zns-mint/20 flex items-center justify-center">
                            <p className="text-zns-mint/50 text-sm font-semibold">Portfolio Preview</p>
                        </div>

                        {/* Content */}
                        <div className="p-4">
                            <p className="text-white font-semibold text-sm">View {service.title} Work →</p>
                            <p className="text-zns-cream/60 text-xs mt-1">Click to see case study</p>
                        </div>
                    </div>
                </Link>
            </div>
        </motion.div>
    );
};
