"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Users, Sparkles, TrendingUp, Award, Wallet } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";
import { cn } from "@/lib/utils";

const features = [
    {
        title: "Premium Quality, Fair Pricing",
        description: "We believe exceptional work shouldn't come with exploitative pricing. Premium quality but in budget.",
        icon: Wallet,
        className: "md:col-span-2",
    },
    {
        title: "Global Reach",
        description: "We serve clients across the world.",
        icon: Users,
        className: "md:col-span-1",
    },
    {
        title: "100% Transparent",
        description: "We don't hide anything from you.",
        icon: Zap,
        className: "md:col-span-1",
    },
    {
        title: "Relation First Approach",
        description: "We build partnerships, not just client lists.",
        icon: Sparkles,
        className: "md:col-span-2",
    },
    {
        title: "Support Till the End",
        description: "We don't just give you the product, we support you till the end.",
        icon: TrendingUp,
        className: "md:col-span-3",
    },
];

export const WhyUs = () => {
    return (
        <section id="why-us" className="py-24 bg-zns-dark relative">
            <div className="container mx-auto px-4">
                <div className="mb-16 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-display font-bold text-white mb-6"
                    >
                        WHY <span className="text-zns-mint">NEXUS?</span>
                    </motion.h2>
                    <p className="text-xl text-zns-cream/60 max-w-2xl mx-auto">
                        We don't just build digital products. We build digital legacies.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={cn(
                                "group relative p-8 rounded-3xl border border-white/10 overflow-hidden hover:border-zns-mint/30 transition-colors duration-500 min-h-[250px] flex flex-col justify-between",
                                feature.className
                            )}
                        >
                            <BorderBeam lightColor="#14e08e" lightWidth={350} duration={8} />
                            <div className="absolute inset-0 bg-[#0a0a0a] -z-10" />

                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <feature.icon className="w-6 h-6 text-white" />
                                </div>

                                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">{feature.title}</h3>
                                <p className="text-zns-cream/60 group-hover:text-zns-cream/90 transition-colors text-lg">{feature.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
