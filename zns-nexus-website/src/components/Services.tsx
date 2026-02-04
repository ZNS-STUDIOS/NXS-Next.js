"use client";

import React, { useRef, useState } from "react";
import { Code, Film, Share2, PenTool, ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { ServiceCursor } from "@/components/ui/service-cursor";

const services = [
    {
        title: "Web Development",
        description: "Transform your vision into stunning, high-performance digital experiences. From e-commerce to SaaS platforms.",
        icon: Code,
        caseStudySlug: "quantum-email-platform",
    },
    {
        title: "Video Editing",
        description: "Cinematic storytelling that captures attention and converts viewers. Professional editing, color grading, and motion graphics.",
        icon: Film,
        caseStudySlug: "neon-gaming-brand",
    },
    {
        title: "Social Media Marketing",
        description: "Strategic social campaigns that drive real engagement and growth. Data-driven strategies across Instagram, LinkedIn, Twitter.",
        icon: Share2,
        caseStudySlug: "viral-social-campaign",
    },
    {
        title: "Content Creation",
        description: "Compelling content that resonates with your audience. From blog posts to landing pages, we craft narratives that convert.",
        icon: PenTool,
        caseStudySlug: "fintech-content-strategy",
    },
];

export const Services = () => {
    const router = useRouter();
    const containerRef = useRef<HTMLDivElement>(null);
    const [hoveredService, setHoveredService] = useState<typeof services[0] | null>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
    });

    // Adjusted range to ensure we don't scroll past the content into empty space
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"]);

    return (
        <>
            <ServiceCursor hoveredService={hoveredService} />

            {/* Scroll Container - Increased height for slower scroll speed */}
            <section ref={containerRef} id="services" className="relative h-[300vh] bg-gradient-to-b from-white via-zns-cream to-[#eae6dd]">

                {/* Sticky Wrapper - Pins the content while scrolling */}
                <div className="sticky top-0 flex h-screen items-center overflow-hidden">

                    {/* Header Absolute */}
                    <motion.div
                        style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
                        className="absolute top-12 left-0 w-full text-center z-10 px-4"
                    >
                        <h2 className="text-5xl md:text-7xl font-display font-bold text-zns-dark leading-none">
                            WHAT <span className="text-zns-blue">WE DO</span> BEST
                        </h2>
                        <div className="mt-4 flex items-center justify-center gap-4 text-zns-text-light text-sm uppercase tracking-widest">
                            <span>Scroll to explore</span>
                            <div className="w-12 h-px bg-black/10" />
                        </div>
                    </motion.div>

                    {/* Horizontal Moving Content */}
                    <motion.div style={{ x }} className="flex gap-8 px-12 md:px-24">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <div
                                    key={index}
                                    onClick={() => router.push(`/portfolio/${service.caseStudySlug}`)}
                                    onMouseEnter={() => setHoveredService(service)}
                                    onMouseLeave={() => setHoveredService(null)}
                                    className="relative w-[350px] md:w-[500px] h-[60vh] md:h-[70vh] flex-shrink-0 group cursor-pointer"
                                >
                                    <div className="absolute inset-0 bg-white border border-black/5 rounded-[2.5rem] overflow-hidden transition-all duration-500 group-hover:shadow-[0_20px_40px_-15px_rgba(180,83,9,0.15)] group-hover:border-zns-gold/30 shadow-xl shadow-black/5" />

                                    {/* Hover Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-zns-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem]" />

                                    <div className="relative h-full p-10 md:p-14 flex flex-col justify-between z-10">
                                        {/* Header */}
                                        <div className="flex justify-between items-start">
                                            <span className="font-display text-6xl text-zns-dark/10 group-hover:text-zns-gold transition-colors duration-500 font-bold">
                                                0{index + 1}
                                            </span>
                                            <div className="w-14 h-14 rounded-full border border-zns-dark/10 flex items-center justify-center group-hover:bg-zns-gold group-hover:border-transparent transition-all duration-300">
                                                <ArrowUpRight className="w-6 h-6 text-zns-dark group-hover:text-white" />
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="space-y-6">
                                            <Icon className="w-12 h-12 text-zns-blue mb-4 stroke-[1.5]" />
                                            <h3 className="text-4xl md:text-5xl font-display font-medium text-zns-dark group-hover:translate-x-2 transition-transform duration-300">
                                                {service.title}
                                            </h3>
                                            <p className="text-zns-text-light text-lg leading-relaxed border-t border-zns-dark/10 pt-6 group-hover:border-zns-gold/20 transition-colors duration-500">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>
        </>
    );
};
