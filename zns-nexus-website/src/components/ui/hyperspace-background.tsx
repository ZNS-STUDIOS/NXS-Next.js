"use client";

import React, { useRef, useEffect } from "react";

interface Star {
    x: number;
    y: number;
    z: number;
    px: number;
    py: number;
}

export const HyperspaceBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        const stars: Star[] = [];
        const numStars = 800;
        const speed = 0.015; // Reduced from 0.05 to slow down

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const initStars = () => {
            stars.length = 0;
            for (let i = 0; i < numStars; i++) {
                stars.push({
                    x: Math.random() * canvas.width - canvas.width / 2,
                    y: Math.random() * canvas.height - canvas.height / 2,
                    z: Math.random() * canvas.width,
                    px: 0,
                    py: 0,
                });
            }
        };

        const animate = () => {
            ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const cx = canvas.width / 2;
            const cy = canvas.height / 2;

            stars.forEach((star) => {
                star.z -= speed * 100;

                if (star.z <= 0) {
                    star.z = canvas.width;
                    star.x = Math.random() * canvas.width - cx;
                    star.y = Math.random() * canvas.height - cy;
                }

                const k = 128 / star.z;
                const px = star.x * k + cx;
                const py = star.y * k + cy;

                if (px >= 0 && px <= canvas.width && py >= 0 && py <= canvas.height) {
                    const size = (1 - star.z / canvas.width) * 2;
                    const opacity = 1 - star.z / canvas.width;

                    // Draw star point only (removed trail/lighting effect)
                    ctx.fillStyle = `rgba(20, 224, 142, ${opacity * 0.6})`;
                    ctx.beginPath();
                    ctx.arc(px, py, size, 0, Math.PI * 2);
                    ctx.fill();
                }

                star.px = px;
                star.py = py;
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        resizeCanvas();
        initStars();
        animate();

        window.addEventListener("resize", () => {
            resizeCanvas();
            initStars();
        });

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener("resize", resizeCanvas);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{ opacity: 0.4 }}
        />
    );
};
