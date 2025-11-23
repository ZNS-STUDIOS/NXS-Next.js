"use client";

import React from "react";
import Link from "next/link";
import { Twitter, Linkedin, Github, Instagram } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-zns-dark border-t border-white/10 pt-20 pb-10 relative overflow-hidden">
            {/* Large Background Text */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full select-none pointer-events-none overflow-hidden flex justify-center">
                <h1 className="text-[15vw] md:text-[20vw] font-display font-bold text-white/5 leading-none tracking-tighter whitespace-nowrap">
                    ZNS NEXUS
                </h1>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-32">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="inline-block mb-6">
                            <span className="font-display text-3xl font-bold text-white tracking-tighter">
                                ZNS <span className="text-zns-mint">Nexus</span>
                            </span>
                        </Link>
                        <p className="text-xl text-white mb-4">Connecting Dots</p>
                        <p className="text-zns-cream/60 max-w-md">
                            We don't make websites. We make relations. Full-spectrum digital solutions for startups, brands, and enterprises.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            {["Services", "Process", "Why Us", "FAQ"].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`#${item.toLowerCase().replace(" ", "-")}`}
                                        className="text-zns-cream/60 hover:text-zns-mint transition-colors"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Contact</h4>
                        <ul className="space-y-4 text-zns-cream/60">
                            <li>hello@znsnexus.com</li>
                            <li>UAE • Canada • India</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-end gap-4 text-sm font-bold uppercase tracking-wider">
                    <div className="flex gap-8 text-zns-cream/60">
                        <a href="#" className="hover:text-zns-mint transition-colors">Instagram</a>
                        <a href="#" className="hover:text-zns-mint transition-colors">LinkedIn</a>
                        <a href="#" className="hover:text-zns-mint transition-colors">Email</a>
                    </div>
                    <p className="text-zns-cream/40">© 2025 ZNS Nexus</p>
                </div>
            </div>
        </footer>
    );
};
