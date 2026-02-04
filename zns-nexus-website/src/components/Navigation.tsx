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
                <div className="pointer-events-auto glass-panel rounded-full px-2 py-2 md:px-6 md:py-3 flex items-center gap-4 md:gap-8 mx-4 shadow-xl shadow-black/5">
                    <Link href="/" className="relative z-50 group px-2">
                        <span className="font-display text-xl md:text-2xl font-bold text-zns-dark tracking-tighter">
                            ZNS
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-xs font-medium text-zns-text-light hover:text-zns-dark transition-colors px-4 py-2 rounded-full hover:bg-black/5"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-6">
                        <Link href="/careers" className="hidden md:block">
                            <span className="text-xs font-medium text-zns-text-light hover:text-zns-dark transition-colors tracking-wide">
                                CAREERS
                            </span>
                        </Link>
                        <Link href="/contact" className="hidden md:block">
                            <MagneticButton className="px-6 py-2.5 text-xs bg-zns-blue text-white font-medium rounded-full shadow-[0_0_20px_rgba(30,58,138,0.2)] hover:bg-zns-dark hover:text-white transition-all tracking-widest">
                                LET'S TALK
                            </MagneticButton>
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden relative z-50 text-zns-dark p-2 rounded-full hover:bg-black/5 transition-colors"
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
                        className="fixed inset-x-4 top-24 z-40 bg-zns-cream border border-black/5 rounded-3xl p-6 md:hidden shadow-2xl"
                    >
                        <nav className="flex flex-col gap-4">
                            {navLinks.map((link, index) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-zns-dark hover:text-zns-gold transition-colors p-2"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="h-px bg-white/10 my-2" />
                            <Link href="/contact" onClick={() => setIsOpen(false)}>
                                <div className="w-full bg-zns-blue text-white font-bold text-center py-4 rounded-xl shadow-lg shadow-zns-blue/20">
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
