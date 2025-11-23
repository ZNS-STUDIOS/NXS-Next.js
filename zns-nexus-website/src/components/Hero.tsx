"use client";

import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import gsap from "gsap";

export const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 1000], [0, 400]);
    const opacity = useTransform(scrollY, [0, 500], [1, 0]);

    // Particle Animation
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        const particles: Particle[] = [];
        const particleCount = width < 768 ? 50 : 100;

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
            color: string;

            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 2 + 1;
                // Brand colors: Teal #069593, Mint #14e08e
                this.color = Math.random() > 0.5 ? "#069593" : "#14e08e";
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.globalAlpha = 0.6;
                ctx.fill();
            }
        }

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // Connect particles
            for (let i = 0; i < particles.length; i++) {
                const p1 = particles[i];
                p1.update();
                p1.draw();

                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(20, 224, 142, ${1 - distance / 150})`; // Mint color
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            }
            requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative h-screen w-full flex items-center justify-center overflow-hidden"
        >
            {/* Background Canvas */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full z-0 opacity-50"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zns-dark/50 to-zns-dark z-0 pointer-events-none" />

            {/* Content */}
            <motion.div
                style={{ y, opacity }}
                className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center justify-center h-full"
            >
                {/* Connecting Dots Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="mb-8 relative"
                >
                    <div className="flex items-center gap-4 px-6 py-2 rounded-full border border-zns-mint/30 bg-zns-mint/5 backdrop-blur-sm">
                        <div className="w-2 h-2 rounded-full bg-zns-mint animate-pulse" />
                        <span className="text-zns-mint text-sm font-bold tracking-[0.2em] uppercase">Connecting Dots</span>
                        <div className="w-2 h-2 rounded-full bg-zns-mint animate-pulse" />
                    </div>
                    {/* Decorative lines */}
                    <div className="absolute top-1/2 left-full w-20 h-[1px] bg-gradient-to-r from-zns-mint/30 to-transparent" />
                    <div className="absolute top-1/2 right-full w-20 h-[1px] bg-gradient-to-l from-zns-mint/30 to-transparent" />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="font-display font-bold tracking-tighter leading-[0.9] mb-10 flex flex-col items-center"
                >
                    <span className="block text-4xl md:text-6xl lg:text-7xl text-white mb-2 md:mb-4">THE BRIDGE BETWEEN</span>
                    <span className="block text-6xl md:text-8xl lg:text-[10rem] text-zns-mint uppercase">
                        AMBITION & EXECUTION
                    </span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                >
                    <MagneticButton className="text-lg px-10 py-5 bg-zns-mint text-zns-dark hover:bg-white hover:text-zns-dark">
                        GET MATCHED <ArrowRight className="ml-2 w-5 h-5" />
                    </MagneticButton>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
            >
                <div className="w-[1px] h-20 bg-gradient-to-b from-zns-mint to-transparent animate-pulse" />
            </motion.div>
        </section>
    );
};
