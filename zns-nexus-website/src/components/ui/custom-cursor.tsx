"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [cursorVariant, setCursorVariant] = useState<"default" | "hover" | "text">("default");
    const [textHeight, setTextHeight] = useState(32);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;

            // Check for clickable elements
            const isClickable = target.tagName === "BUTTON" ||
                target.tagName === "A" ||
                target.closest("button") ||
                target.closest("a") ||
                target.getAttribute("role") === "button";

            // Check for text elements
            const isText = target.tagName === "P" ||
                target.tagName === "H1" ||
                target.tagName === "H2" ||
                target.tagName === "H3" ||
                target.tagName === "H4" ||
                target.tagName === "H5" ||
                target.tagName === "H6" ||
                target.tagName === "SPAN" ||
                target.tagName === "LI";

            if (isClickable) {
                setCursorVariant("hover");
            } else if (isText) {
                // Get computed line height for adaptive caret
                const computedStyle = window.getComputedStyle(target);
                const lineHeight = computedStyle.lineHeight;

                // Parse line height - it could be 'normal', a pixel value, or a unitless number
                let height = 32; // default
                if (lineHeight !== 'normal') {
                    const parsedHeight = parseFloat(lineHeight);
                    if (!isNaN(parsedHeight)) {
                        // If it's a unitless number, multiply by font size
                        if (lineHeight === parsedHeight.toString()) {
                            const fontSize = parseFloat(computedStyle.fontSize);
                            height = parsedHeight * fontSize;
                        } else {
                            height = parsedHeight;
                        }
                    }
                }

                // Clamp height between reasonable values
                height = Math.max(16, Math.min(height, 80));
                setTextHeight(height);
                setCursorVariant("text");
            } else {
                setCursorVariant("default");
            }
        };

        window.addEventListener("mousemove", updateMousePosition);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 8,
            y: mousePosition.y - 8,
            height: 16,
            width: 16,
            backgroundColor: "#14e08e",
            mixBlendMode: "difference" as const,
        },
        hover: {
            x: mousePosition.x - 32,
            y: mousePosition.y - 32,
            height: 64,
            width: 64,
            backgroundColor: "#14e08e",
            mixBlendMode: "difference" as const,
        },
        text: {
            x: mousePosition.x - 2,
            y: mousePosition.y - (textHeight / 2),
            height: textHeight,
            width: 4,
            backgroundColor: "#14e08e",
            mixBlendMode: "difference" as const,
        }
    };

    return (
        <motion.div
            className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
            animate={variants[cursorVariant]}
            transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
        />
    );
};
