"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Film, Share2, PenTool, ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";

const services = [
    {
        id: "01",
        title: "Web Development",
        description: "Fast, conversion-focused websites that turn visitors into customers. From e-commerce to SaaS platforms.",
        metric: "Avg. 40% increase in leads",
        icon: Code,
        caseStudySlug: "quantum-email-platform",
    },
    {
        id: "02",
        title: "Video Editing",
        description: "Cinematic storytelling that captures attention and converts viewers. Professional editing, color grading, and motion graphics.",
        metric: "2M+ views generated",
        icon: Film,
        caseStudySlug: "neon-gaming-brand",
    },
    {
        id: "03",
        title: "Social Media Marketing",
        description: "Strategic social campaigns that drive real engagement and growth. Data-driven strategies across Instagram, LinkedIn, Twitter.",
        metric: "50K+ followers grown",
        icon: Share2,
        caseStudySlug: "viral-social-campaign",
    },
    {
        id: "04",
        title: "Content Creation",
        description: "Compelling content that resonates with your audience. From blog posts to landing pages, we craft narratives that convert.",
        metric: "500% traffic increase",
        icon: PenTool,
        caseStudySlug: "fintech-content-strategy",
    },
];

export const Services = () => {
    const router = useRouter();

    return (
        <section id="services" className="py-24 bg-zns-dark relative border-t border-white/5">
            <div className="container mx-auto px-4">

                {/* Header */}
                <div className="mb-20">
                    <span className="text-zns-gold font-mono text-[10px] tracking-[0.2em] uppercase">Our Capabilities</span>
                    <h2 className="text-5xl lg:text-7xl font-display font-bold text-white mt-4 leading-tight">
                        Operational <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-zns-gold to-white/20">Modules</span>
                    </h2>
                </div>

                {/* 2x2 Grid Layout - Fixed Dimensions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={service.id}
                                className="group relative bg-white/5 border border-white/10 h-[400px] w-full rounded-sm cursor-pointer hover:bg-white/10 transition-colors duration-500 overflow-hidden"
                                onClick={() => router.push(`/portfolio/${service.caseStudySlug}`)}
                            >
                                {/* Hover Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-zns-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10 flex flex-col h-full p-8 md:p-10">

                                    {/* Top Section: Icon & Header - Tight Spacing */}
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="p-3 bg-white/5 rounded-sm text-zns-gold group-hover:scale-110 transition-transform duration-500 border border-white/5">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <span className="font-mono text-white/20 text-xs tracking-widest">0{index + 1}</span>
                                    </div>

                                    {/* Middle Section: Title & Description */}
                                    <div className="flex-grow flex flex-col pt-0 relative">
                                        <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:translate-x-1 transition-transform duration-300 transform-gpu">
                                            {service.title}
                                        </h3>

                                        {/* Description */}
                                        <div className="relative w-full">
                                            <p className="text-white/80 text-lg leading-relaxed max-w-sm absolute top-0 left-0 transition-all duration-500 ease-in-out opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Bottom Section: Metrics & CTA - Pinned to bottom */}
                                    <div className="mt-auto flex items-center justify-between pt-6 border-t border-white/10 group-hover:border-white/20 transition-colors">
                                        <div className="text-zns-gold font-mono text-[10px] uppercase tracking-widest transition-opacity duration-500 group-hover:opacity-100 opacity-60">
                                            ✓ {service.metric}
                                        </div>
                                        <div className="flex items-center gap-2 text-white font-mono text-[10px] uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">
                                            Explore
                                            <ArrowUpRight className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </section>
    );
};
