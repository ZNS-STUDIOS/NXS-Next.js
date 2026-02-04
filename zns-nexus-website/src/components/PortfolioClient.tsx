"use client";

import React, { useState } from "react";
import { Navigation } from "@/components/Navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { caseStudies } from "@/data/case-studies";

export const PortfolioClient = () => {
    const [filter, setFilter] = useState("All");
    const categories = ["All", ...Array.from(new Set(caseStudies.map(study => study.category)))];

    const filteredStudies = filter === "All"
        ? caseStudies
        : caseStudies.filter(study => study.category === filter);

    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white pt-24 pb-20 tech-grid">
            <Navigation />
            <div className="container mx-auto px-4 mt-12">
                {/* Main Header / Hero */}
                <div className="max-w-5xl mx-auto text-center mb-24">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zns-gold/30 bg-white/5 backdrop-blur-sm mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-zns-gold animate-pulse" />
                        <span className="text-zns-gold text-[10px] font-mono font-bold tracking-[0.2em] uppercase">System Showcase</span>
                    </div>

                    <h1 className="font-display font-medium text-7xl md:text-9xl text-white mb-8 tracking-tight">
                        Our <span className="text-zns-gold italic">Craft</span>
                    </h1>
                    <p className="text-zns-text-light text-lg md:text-xl max-w-2xl mx-auto font-sans leading-relaxed">
                        A curated collection of digital experiences built on <span className="text-white font-medium">trust</span> and <span className="text-white font-medium">precision</span>.
                    </p>
                </div>

                <div className="flex justify-center gap-4 mb-20 flex-wrap">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setFilter(category)}
                            className={cn(
                                "px-6 py-3 rounded-sm border transition-all duration-300 font-mono text-xs tracking-widest uppercase",
                                filter === category
                                    ? "bg-zns-gold text-white border-zns-gold"
                                    : "border-white/10 bg-white/5 text-zns-text-light hover:border-zns-gold/50 hover:text-white"
                            )}
                        >
                            {category === "All" ? "All Projects" : category}
                        </button>
                    ))}
                </div>

                {/* Case Studies Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredStudies.map((study, index) => (
                        <Link
                            key={study.slug}
                            href={`/portfolio/${study.slug}`}
                            className="group block"
                        >
                            <article className="relative h-[600px] border border-white/5 bg-[#0a0a0a] hover:border-zns-gold/30 transition-all duration-500 overflow-hidden">
                                {/* Thumbnail Background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50 group-hover:scale-105 transition-transform duration-700">
                                    {/* Placeholder for image - would use Next Image with real images */}
                                    <div className="w-full h-full flex items-center justify-center text-white/5 text-6xl font-bold font-display uppercase tracking-tighter">
                                        {study.category}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="absolute inset-0 p-10 flex flex-col justify-end z-10">
                                    <div className="mb-6 flex items-center gap-3">
                                        <span className="px-3 py-1 bg-white/5 border border-white/10 text-white/60 text-[10px] font-mono uppercase tracking-widest">
                                            {study.category}
                                        </span>
                                        <span className="text-zns-gold text-[10px] font-mono tracking-widest">{study.year}</span>
                                    </div>

                                    <div className="h-px w-full bg-white/10 mb-6 group-hover:w-0 transition-all duration-500" />

                                    <h2 className="font-display font-bold text-4xl text-white mb-4 group-hover:text-zns-gold transition-colors tracking-tight">
                                        {study.title}
                                    </h2>

                                    <p className="text-zns-text-light mb-6 line-clamp-2 text-sm leading-relaxed max-w-md">
                                        {study.shortDescription}
                                    </p>

                                    <div className="flex items-center text-zns-gold font-mono text-xs uppercase tracking-widest group-hover:gap-3 transition-all opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 duration-500">
                                        View Case Study
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </div>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
};
