"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onAnimationStart" | "onDrag" | "onDragStart" | "onDragEnd" | "ref"> {
    children: React.ReactNode;
    className?: string;
    strength?: number;
}

export const MagneticButton = ({
    children,
    className,
    strength = 0.5,
    ...props
}: MagneticButtonProps) => {
    const ref = useRef<HTMLButtonElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current!.getBoundingClientRect();

        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);

        setPosition({ x: x * strength, y: y * strength });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.button
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className={cn(
                "relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-bold text-white transition-all duration-300 bg-zns-mint rounded-full group hover:bg-zns-teal focus:outline-none focus:ring-2 focus:ring-zns-mint focus:ring-offset-2 focus:ring-offset-zns-dark",
                className
            )}
            {...props}
        >
            <span className="relative z-10 flex items-center gap-2 text-zns-dark group-hover:text-white transition-colors duration-300">
                {children}
            </span>
            <div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 group-hover:scale-100 group-hover:bg-zns-teal/20" />
        </motion.button>
    );
};
