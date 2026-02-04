"use client";

import React, { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
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
    // Standard Embla setup
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: "start",
        loop: true,
        dragFree: true,
        containScroll: "trimSnaps"
    });

    const [isHovered, setIsHovered] = useState(false);
    const [isDragging, setIsDragging] = useState(false);

    // Track dragging state via Embla events
    useEffect(() => {
        if (!emblaApi) return;

        const onPointerDown = () => setIsDragging(true);
        const onPointerUp = () => setIsDragging(false);
        // Embla 8.x events
        emblaApi.on("pointerDown", onPointerDown);
        emblaApi.on("pointerUp", onPointerUp);

        return () => {
            emblaApi.off("pointerDown", onPointerDown);
            emblaApi.off("pointerUp", onPointerUp);
        };
    }, [emblaApi]);

    // Standard Interval Autoplay
    useEffect(() => {
        if (!emblaApi) return;

        const autoplay = setInterval(() => {
            // Only scroll if not hovered and not manually interacting (dragging)
            if (!isHovered && !isDragging) {
                emblaApi.scrollNext();
            }
        }, 3000); // 3 seconds per slide

        return () => clearInterval(autoplay);
    }, [emblaApi, isHovered, isDragging]);

    return (
        <section
            id="why-us"
            className="py-24 bg-zns-dark relative border-t border-white/5 overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Background Grid */}
            <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />

            <div className="container mx-auto px-4 mb-16">
                <div className="flex flex-col items-start gap-2 mb-4">
                    <div className="h-8 w-[1px] bg-zns-gold/50" />
                    <span className="text-zns-gold font-mono text-[10px] tracking-[0.2em] uppercase">Core Values</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-display font-bold text-white uppercase tracking-tight leading-none">
                    WHY ZNS <span className="text-white/20">NEXUS?</span>
                </h2>
            </div>

            {/* Embla Carousel Viewport */}
            <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
                <div className="flex gap-6 select-none touch-pan-y">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div key={index} className="flex-[0_0_350px] md:flex-[0_0_400px] min-w-0">
                                <div className={cn(
                                    "relative h-[400px] p-8 md:p-10 rounded-sm border border-white/10 flex flex-col justify-between overflow-hidden group bg-white/[0.02]",
                                    "hover:border-white/20 transition-all duration-300 hover:bg-white/[0.05]"
                                )}>
                                    {/* Gradient Background - Reveals on Hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                    <div className="relative z-10">
                                        <div className="text-white/20 font-mono text-xl mb-6">0{index + 1}</div>
                                        <div className="w-12 h-12 bg-white/5 rounded-sm flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                    </div>

                                    <div className="relative z-10">
                                        <h3 className="text-2xl font-display font-bold text-white mb-3">{feature.title}</h3>
                                        <p className="text-zns-text-light text-sm leading-relaxed group-hover:text-white transition-colors">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Scroll Hint */}
            <div className="container mx-auto px-4 mt-8 flex justify-end">
                <span className="text-[10px] font-mono uppercase tracking-widest text-white/30 animate-pulse">
                    Drag or Wait to Explore
                </span>
            </div>
        </section>
    );
};
