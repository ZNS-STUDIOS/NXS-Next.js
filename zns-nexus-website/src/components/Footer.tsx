"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";

export const Footer = () => {
    return (
        <footer className="bg-zns-dark pt-12 pb-12 relative overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Main CTA */}
                <div className="relative mb-20 text-center py-24 rounded-3xl overflow-hidden">
                    {/* Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-zns-teal/20 via-zns-dark to-zns-dark -z-10" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(20,224,142,0.15),transparent_50%)] -z-10" />

                    <h2 className="text-[12vw] leading-[0.8] font-display font-bold text-white mb-8">
                        LET'S WORK <br />
                        <span className="text-zns-mint">TOGETHER</span>
                    </h2>
                    <Link href="/contact">
                        <MagneticButton className="px-12 py-6 bg-white text-zns-dark rounded-full font-bold text-xl hover:bg-zns-mint transition-colors inline-flex items-center gap-3">
                            START A PROJECT
                            <ArrowUpRight className="w-6 h-6" />
                        </MagneticButton>
                    </Link>
                </div>

                {/* Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-white/10 pt-12">
                    <div className="md:col-span-2">
                        <Link href="/" className="text-3xl font-bold text-white mb-6 block">ZNS</Link>
                        <p className="text-zns-cream/60 max-w-sm">
                            We don't just build digital products; we build digital legacies.
                            Partner with us to redefine your digital presence.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Socials</h4>
                        <ul className="space-y-4">
                            {["Instagram", "LinkedIn", "Twitter", "Behance"].map((social) => (
                                <li key={social}>
                                    <a href="#" className="text-zns-cream/60 hover:text-zns-mint transition-colors flex items-center gap-2 group">
                                        {social}
                                        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Location</h4>
                        <p className="text-zns-cream/60 mb-6">
                            Global Services<br />
                            Based in UAE, Canada, India
                        </p>
                        <Link href="/careers" className="text-zns-mint hover:text-white transition-colors text-sm font-bold uppercase tracking-widest flex items-center gap-2 group">
                            Careers
                            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Link>
                    </div>
                </div>

                <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zns-cream/40">
                    <p>© 2025 ZNS Nexus. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>

            {/* Scrolling Background Text */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none opacity-[0.09]">
                <div className="flex animate-marquee">
                    <h1 className="text-[20vw] font-bold text-white whitespace-nowrap leading-none px-8">
                        ZNS NEXUS • ZNS NEXUS • ZNS NEXUS • ZNS NEXUS • ZNS NEXUS •
                    </h1>
                    <h1 className="text-[20vw] font-bold text-white whitespace-nowrap leading-none px-8" aria-hidden="true">
                        ZNS NEXUS • ZNS NEXUS • ZNS NEXUS • ZNS NEXUS • ZNS NEXUS •
                    </h1>
                </div>
            </div>
        </footer>
    );
};
