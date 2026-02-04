"use client";

import React from "react";
import { motion } from "framer-motion"; // Added import
import { Zap, Users, Sparkles, TrendingUp, Wallet } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
    {
        title: "ROI-Focused",
        description: "We measure success by your revenue growth, not our billable hours.",
        icon: TrendingUp,
        gradient: "from-zns-gold/20 to-zns-gold/5"
    },
    {
        title: "Proven Process",
        description: "5-step methodology that's delivered 50+ projects on time.",
        icon: Zap,
        gradient: "from-blue-500/20 to-purple-500/5"
    },
    {
        title: "Zero Hidden Fees",
        description: "Fixed-price projects with complete transparency. No surprises.",
        icon: Wallet,
        gradient: "from-emerald-500/20 to-teal-500/5"
    },
    {
        title: "Real Partnerships",
        description: "Dedicated point of contact, weekly updates, and honest collaboration.",
        icon: Users,
        gradient: "from-orange-500/20 to-red-500/5"
    },
    {
        title: "Post-Launch Support",
        description: "30-45 days of free support included. Success doesn't end at launch.",
        icon: Sparkles,
        gradient: "from-indigo-500/20 to-blue-500/5"
    },
];

export const WhyUs = () => {
    return (
        <section
            id="why-us"
            className="py-24 bg-zns-dark relative border-t border-white/5 overflow-hidden"
        >
            {/* Background Grid */}
            <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />

            {/* Header Section */}
            <div className="container mx-auto px-4 mb-16">
                <div className="flex flex-col items-start gap-4">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <div className="h-[1px] w-8 bg-zns-gold/50" />
                            <span className="text-zns-gold font-mono text-[10px] tracking-[0.2em] uppercase">Core Values</span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-display font-bold text-white uppercase tracking-tight leading-none mb-4">
                            WHY ZNS <span className="text-white/20">NEXUS?</span>
                        </h2>
                    </div>
                    {/* New Subheading */}
                    <p className="text-white/80 text-lg font-light tracking-wide max-w-xl border-l-2 border-white/10 pl-4 py-1"> {/* Increased brightness */}
                        The principles that guide how we work and deliver results.
                    </p>
                </div>
            </div>

            {/* Static Grid Layout - Dense & Intentional */}
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div // Switched to motion.div
                                key={index}
                                className="w-full"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className={cn(
                                    "relative group h-full min-h-[220px] p-8",
                                    "bg-white/[0.02] border border-white/5",
                                    "hover:bg-white/[0.04] hover:border-white/10 hover:-translate-y-[2px]",
                                    "transition-all duration-300 ease-out",
                                    "rounded-sm overflow-hidden"
                                )}>

                                    {/* Gradient Background - Reveals on Hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                    {/* Number - De-emphasized Bottom Right */}
                                    <div className="absolute bottom-4 right-4 text-[40px] font-display font-bold text-white/[0.03] leading-none select-none pointer-events-none group-hover:text-white/[0.05] transition-colors">
                                        0{index + 1}
                                    </div>

                                    <div className="relative z-10 flex flex-col items-start h-full">
                                        {/* Icon - Containerized & Smaller */}
                                        <div className="mb-5 p-3 rounded-sm bg-white/5 border border-white/5 text-zns-gold group-hover:text-white group-hover:bg-zns-gold/10 transition-colors">
                                            <Icon className="w-5 h-5" />
                                        </div>

                                        {/* Content - Packed Top */}
                                        <div className="flex flex-col gap-3">
                                            <h3 className="text-xl font-display font-bold text-white tracking-wide group-hover:text-zns-mint transition-colors">
                                                {feature.title}
                                            </h3>

                                            {/* Micro-accent line */}
                                            <div className="w-8 h-[1px] bg-white/10 group-hover:bg-white/20 transition-colors" />

                                            <p className="text-white/70 text-sm leading-relaxed font-sans max-w-[90%]"> {/* Increased brightness from light/60 to white/70 */}
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};
