"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
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
                className="fixed top-8 left-0 right-0 z-50 flex justify-center pointer-events-none"
            >
                <div className="pointer-events-auto zero-g-nav rounded-full px-2 py-2 md:px-4 md:py-2.5 flex items-center gap-4 md:gap-8 mx-4 min-w-[320px] md:min-w-[600px] justify-between">
                    <Link href="/" className="relative z-50 group px-2">
                        <span className="font-display text-xl font-bold text-zns-cream tracking-tighter">
                            ZNS
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-[11px] font-mono font-medium text-zns-text-light hover:text-zns-gold transition-colors px-4 py-2 uppercase tracking-widest"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                        <Link href="/contact" className="hidden md:block">
                            <MagneticButton className="px-5 py-2 text-[10px] bg-zns-gold text-white font-bold font-mono rounded-sm hover:bg-white hover:text-black transition-all tracking-widest uppercase">
                                Start Project
                            </MagneticButton>
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden relative z-50 text-zns-cream p-2 rounded-full hover:bg-white/5 transition-colors"
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
                        className="fixed inset-x-4 top-24 z-40 bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 md:hidden shadow-2xl"
                    >
                        <nav className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm font-mono text-zns-cream hover:text-zns-gold transition-colors p-2 uppercase tracking-widest"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="h-px bg-white/10 my-2" />
                            <Link href="/contact" onClick={() => setIsOpen(false)}>
                                <div className="w-full bg-zns-gold text-white font-mono text-xs font-bold text-center py-4 rounded-sm shadow-lg shadow-zns-gold/20 tracking-widest uppercase">
                                    Start Project
                                </div>
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
