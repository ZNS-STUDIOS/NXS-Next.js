"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { MagneticButton } from "@/components/ui/magnetic-button";

const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Why Us", href: "#why-us" },
    { name: "Portfolio", href: "/portfolio" },
];

export const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();
    const pathname = usePathname();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <>
            <motion.header
                variants={{
                    visible: { y: 0, opacity: 1 },
                    hidden: { y: -100, opacity: 0 },
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none"
            >
                <div className="pointer-events-auto glass-panel rounded-full px-2 py-2 md:px-6 md:py-3 flex items-center gap-4 md:gap-8 mx-4 shadow-premium">
                    <Link href="/" className="relative z-50 group px-2">
                        <span className="font-display text-xl md:text-2xl font-bold text-white tracking-tighter">
                            ZNS
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-xs font-medium text-zns-cream/70 hover:text-white transition-colors px-4 py-2 rounded-full hover:bg-white/5"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-2">
                        <Link href="/careers" className="hidden md:block">
                            <button className="px-4 py-2 text-xs text-zns-mint hover:text-white font-bold rounded-full hover:bg-white/5 transition-colors">
                                JOIN NEXUS
                            </button>
                        </Link>
                        <Link href="/contact" className="hidden md:block">
                            <MagneticButton className="px-5 py-2 text-xs bg-zns-mint text-zns-dark hover:bg-white font-bold rounded-full shadow-[0_0_20px_rgba(20,224,142,0.3)]">
                                LET'S TALK
                            </MagneticButton>
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden relative z-50 text-white p-2 rounded-full hover:bg-white/10 transition-colors"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-x-4 top-24 z-40 bg-[#0a0a0a] border border-white/10 rounded-3xl p-6 md:hidden shadow-2xl"
                    >
                        <nav className="flex flex-col gap-4">
                            {navLinks.map((link, index) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-white hover:text-zns-mint transition-colors p-2"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="h-px bg-white/10 my-2" />
                            <Link href="/contact" onClick={() => setIsOpen(false)}>
                                <div className="w-full bg-zns-mint text-zns-dark font-bold text-center py-3 rounded-xl">
                                    START PROJECT
                                </div>
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
