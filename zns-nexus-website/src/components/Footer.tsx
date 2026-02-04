"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";

import { MarchingBanner } from "@/components/MarchingBanner";

export const Footer = () => {
    return (
        <footer className="bg-zns-dark pt-0 pb-12 relative overflow-hidden border-t border-white/5">
            {/* Background Marquee */}
            <div className="absolute top-0 left-0 w-full opacity-10 pointer-events-none border-b border-white/5">
                <MarchingBanner />
            </div>

            <div className="container mx-auto px-4 pt-48 relative z-10">

                {/* Main CTA */}
                <div className="relative mb-32 flex flex-col items-start gap-8">
                    <div className="flex flex-col items-start gap-2">
                        <div className="h-0.5 w-12 bg-zns-gold" />
                        <span className="text-zns-gold font-mono text-xs tracking-[0.2em] uppercase">System Ready</span>
                    </div>

                    <h2 className="text-[10vw] leading-[0.85] font-display font-bold text-white tracking-tighter">
                        READY TO <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">SCALE?</span>
                    </h2>

                    <div className="flex flex-col md:flex-row gap-8 items-center mt-4">
                        <div className="flex flex-col items-center md:items-start gap-3">
                            <Link href="/contact">
                                <MagneticButton className="px-12 py-6 bg-zns-gold text-white rounded-sm font-bold font-mono text-xl hover:bg-white hover:text-black transition-all flex items-center gap-3 tracking-widest uppercase shadow-[0_0_30px_rgba(180,83,9,0.2)]">
                                    START PROJECT
                                    <ArrowUpRight className="w-6 h-6" />
                                </MagneticButton>
                            </Link>
                            <span className="text-zns-text-light/60 text-[10px] uppercase tracking-widest font-mono">
                                Free Strategy Call • 24h Response
                            </span>
                        </div>
                        <p className="text-zns-text-light max-w-sm font-sans text-sm md:text-base leading-relaxed text-center md:text-left">
                            We engineer digital dominance. Partner with ZNS Nexus to deploy your high-performance growth engine.
                        </p>
                    </div>
                </div>

                {/* Precision Divider */}
                <div className="precision-divider mb-16" />

                {/* Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 font-mono text-sm">
                    <div className="md:col-span-2">
                        <Link href="/" className="text-2xl font-display font-bold text-white mb-6 block tracking-tighter">ZNS NEXUS</Link>
                        <p className="text-white/40 max-w-xs leading-relaxed text-xs">
                            We don't just build digital products; we build digital legacies. Partner with us to redefine your digital presence.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white/40 mb-6 uppercase tracking-widest text-[10px]">Socials</h4>
                        <ul className="space-y-4">
                            {["Instagram", "LinkedIn", "Twitter", "Behance"].map((social) => (
                                <li key={social}>
                                    <a href="#" className="hidden md:flex text-white hover:text-zns-gold transition-colors items-center gap-1 group tracking-wide w-fit">
                                        <span className="relative">
                                            {social}
                                            <span className="absolute left-0 -bottom-0.5 w-0 h-[1px] bg-zns-gold transition-all duration-300 group-hover:w-full"></span>
                                        </span>
                                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                                    </a>
                                    <a href="#" className="md:hidden text-white hover:text-zns-gold transition-colors flex items-center gap-2">
                                        {social}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white/40 mb-6 uppercase tracking-widest text-[10px]">Location</h4>
                        <p className="text-white/80 mb-6 leading-relaxed">
                            Global Services<br />
                            Based in UAE, Canada, India
                        </p>
                        <Link href="/careers" className="text-zns-gold hover:text-white transition-colors text-xs font-bold uppercase tracking-widest flex items-center gap-2 group">
                            CAREERS
                            <ArrowUpRight className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Link>
                    </div>
                </div>

                <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-white/20 font-mono">
                    <p>© 2025 ZNS Nexus Systems. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
