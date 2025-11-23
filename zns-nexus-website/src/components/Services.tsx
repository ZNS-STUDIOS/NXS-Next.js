"use client";

import React, { useRef, useState } from "react";
import { Code, Film, Share2, PenTool, ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { ServiceCursor } from "@/components/ui/service-cursor";

const services = [
    {
        title: "Web Development",
        description: "Transform your vision into stunning, high-performance websites and applications. From e-commerce to SaaS platforms.",
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
                    <div className="overflow-x-auto overflow-y-hidden scrollbar-hide pb-8">
                        <div className="flex gap-6 px-4 md:px-8 min-w-max">
                            {services.map((service, index) => {
                                const Icon = service.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: index * 0.1,
                                            ease: "easeOut"
                                        }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        onClick={() => handleServiceClick(service.caseStudySlug)}
                                        onMouseEnter={() => setHoveredService(service)}
                                        onMouseLeave={() => setHoveredService(null)}
                                        className="w-[85vw] md:w-[450px] aspect-[4/5] bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col justify-between backdrop-blur-md hover:border-zns-mint/50 transition-all duration-300 group cursor-pointer hover:scale-[1.02] flex-shrink-0"
                                    >
                                        {/* Hover Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />

                                        <div className="relative z-10">
                                            {/* Icon and Arrow */}
                                            <div className="flex justify-between items-start mb-8">
                                                <div className={`w-14 h-14 rounded-2xl ${service.color} bg-opacity-20 flex items-center justify-center`}>
                                                    <Icon className="w-7 h-7 text-white" />
                                                </div>
                                                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-zns-mint group-hover:border-zns-mint transition-colors">
                                                    <ArrowUpRight className="w-5 h-5 text-white" />
                                                </div>
                                            </div>

                                            {/* Title and Description */}
                                            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 group-hover:text-zns-mint transition-colors">
                                                {service.title}
                                            </h3>
                                            <p className="text-zns-cream/70 text-sm md:text-base leading-relaxed">
                                                {service.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="text-center mt-8">
                        <p className="text-zns-mint/60 text-sm uppercase tracking-wider">
                            ← Scroll to explore →
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};
