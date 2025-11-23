import { Metadata } from "next";
import { caseStudies } from "@/data/case-studies";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Portfolio | ZNS Nexus",
    description: "Explore our portfolio of successful projects across web development, video editing, social media marketing, and content creation.",
};

export default function PortfolioPage() {
    const categories = Array.from(new Set(caseStudies.map(study => study.category)));

    return (
        <main className="min-h-screen bg-zns-dark text-white pt-24 pb-20">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h1 className="font-display font-bold text-6xl md:text-8xl text-white mb-6">
                        Our <span className="text-zns-mint">Work</span>
                    </h1>
                    <p className="text-zns-cream/70 text-xl">
                        Explore our portfolio of successful projects that have driven real results for our clients
                    </p>
                </div>

                {/* Category Filter - Can be interactive in future */}
                <div className="flex justify-center gap-4 mb-16 flex-wrap">
                    <button className="px-6 py-2 rounded-full bg-zns-mint text-zns-dark font-semibold hover:bg-white transition-colors">
                        All Projects
                    </button>
                    {categories.map((category) => (
                        <button
                            key={category}
                            className="px-6 py-2 rounded-full border border-white/20 text-white hover:border-zns-mint hover:text-zns-mint transition-colors"
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Case Studies Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {caseStudies.map((study, index) => (
                        <Link
                            key={study.slug}
                            href={`/portfolio/${study.slug}`}
                            className="group block"
                        >
                            <article className="relative h-[500px] rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-zns-mint/50 transition-all duration-500">
                                {/* Thumbnail Background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-zns-teal/20 to-zns-mint/10">
                                    {/* Placeholder for image - would use Next Image with real images */}
                                    <div className="w-full h-full flex items-center justify-center text-zns-mint/30 text-6xl font-bold">
                                        {study.category}
                                    </div>
                                </div>

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-zns-dark via-zns-dark/50 to-transparent" />

                                {/* Content */}
                                <div className="relative h-full p-8 flex flex-col justify-end">
                                    <div className="mb-3 flex items-center gap-3">
                                        <span className="px-3 py-1 rounded-full bg-zns-mint/20 text-zns-mint text-sm font-semibold">
                                            {study.category}
                                        </span>
                                        <span className="text-zns-cream/60 text-sm">{study.year}</span>
                                    </div>

                                    <h2 className="font-display font-bold text-3xl text-white mb-3 group-hover:text-zns-mint transition-colors">
                                        {study.title}
                                    </h2>

                                    <p className="text-zns-cream/70 mb-4 line-clamp-2">
                                        {study.shortDescription}
                                    </p>

                                    <div className="flex items-center text-zns-mint font-semibold group-hover:gap-3 transition-all">
                                        View Case Study
                                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>

                                {/* Hover Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-zns-mint/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </article>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
