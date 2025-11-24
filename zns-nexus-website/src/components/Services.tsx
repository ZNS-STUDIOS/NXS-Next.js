"use client";

import React, { useRef, useState } from "react";
import { Code, Film, Share2, PenTool, ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { ServiceCursor } from "@/components/ui/service-cursor";
import { BorderBeam } from "@/components/ui/border-beam";

const services = [
    {
        title: "Web Development",
        description: "Transform your vision into stunning, high-performance digital experiences. From e-commerce to SaaS platforms.",
        icon: Code,
        color: "bg-blue-500",
        caseStudySlug: "quantum-email-platform",
    },
    {
        title: "Video Editing",
        description: "Cinematic storytelling that captures attention and converts viewers. Professional editing, color grading, and motion graphics.",
        icon: Film,
        color: "bg-purple-500",
        caseStudySlug: "neon-gaming-brand",
    },
    {
        title: "Social Media Marketing",
        description: "Strategic social campaigns that drive real engagement and growth. Data-driven strategies across Instagram, LinkedIn, Twitter.",
        icon: Share2,
        color: "bg-pink-500",
        caseStudySlug: "viral-social-campaign",
    },
    {
        title: "Content Creation",
        description: "Compelling content that resonates with your audience. From blog posts to landing pages, we craft narratives that convert.",
        icon: PenTool,
        color: "bg-orange-500",
        caseStudySlug: "fintech-content-strategy",
    },
];

export const Services = () => {
    const router = useRouter();
    const containerRef = useRef<HTMLDivElement>(null);
    const [hoveredService, setHoveredService] = useState<typeof services[0] | null>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const handleServiceClick = (caseStudySlug: string) => {
        router.push(`/portfolio/${caseStudySlug}`);
    };

    return (
        <>
            <ServiceCursor hoveredService={hoveredService} />
            <section
                ref={containerRef}
                id="services"
                className="relative py-32 bg-zns-dark overflow-hidden"
            >
                {/* Section Header */}
                <div className="container mx-auto px-4 mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-display font-bold text-white leading-none text-center"
                    >
                        WHAT <span className="text-zns-mint">WE DO</span> BEST
                    </motion.h2>
                </div>

                {/* Horizontal Scroll Container */}
                <div className="relative">
                    <div className="overflow-x-auto overflow-y-hidden scrollbar-hide pb-12">
                        <div className="flex gap-4 md:gap-8 px-4 md:px-12 min-w-max">
                            {services.map((service, index) => {
                                const Icon = service.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{
                                            duration: 0.6,
                                            delay: index * 0.1,
                                            ease: "easeOut"
                                        }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        onClick={() => handleServiceClick(service.caseStudySlug)}
                                        onMouseEnter={() => setHoveredService(service)}
                                        onMouseLeave={() => setHoveredService(null)}
                                        className="w-[85vw] md:w-[400px] aspect-[3/4] relative group cursor-pointer"
                                    >
                                        <div className="absolute inset-0 bg-[#0a0a0a] border border-white/10 group-hover:border-zns-mint/30 transition-colors duration-500" />
                                        <BorderBeam lightColor="#14e08e" lightWidth={350} duration={10} delay={index * 2} />

                                        <div className="relative h-full p-8 md:p-10 flex flex-col justify-between z-10">
                                            {/* Header */}
                                            <div className="flex justify-between items-start">
                                                <span className="font-display text-4xl md:text-5xl text-white/20 group-hover:text-zns-mint transition-colors duration-500">
                                                    0{index + 1}
                                                </span>
                                                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-zns-mint group-hover:border-zns-mint transition-all duration-300">
                                                    <ArrowUpRight className="w-5 h-5 text-white group-hover:text-zns-dark" />
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div>
                                                <h3 className="text-3xl md:text-4xl font-display italic text-white mb-4 group-hover:translate-x-2 transition-transform duration-300">
                                                    {service.title}
                                                </h3>
                                                <p className="text-zns-cream/60 text-sm md:text-base leading-relaxed border-t border-white/10 pt-4 group-hover:border-zns-mint/30 transition-colors duration-500">
                                                    {service.description}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="container mx-auto px-4 mt-8 flex justify-end">
                        <div className="flex items-center gap-4 text-zns-cream/40 text-sm uppercase tracking-widest">
                            <span>Scroll to explore</span>
                            <div className="w-12 h-px bg-white/20" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
