import { Navigation } from "@/components/Navigation";
import { Metadata } from "next";
import { caseStudies } from "@/data/case-studies";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Portfolio | ZNS Nexus",
    description: "Explore our portfolio of successful projects across web development, video editing, social media marketing, and content creation.",
};

export default function PortfolioPage() {
    const categories = Array.from(new Set(caseStudies.map(study => study.category)));

    return (
        <main className="min-h-screen bg-zns-cream text-zns-dark pt-24 pb-20">
            <Navigation />
            <div className="container mx-auto px-4">
                {/* Main Header / Hero */}
                <div className="max-w-5xl mx-auto text-center mb-24 pt-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zns-gold/30 bg-white/50 backdrop-blur-sm mb-6 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-zns-gold animate-pulse" />
                        <span className="text-zns-gold text-xs font-bold tracking-[0.2em] uppercase">Selected Works</span>
                    </div>

                    <h1 className="font-display font-medium text-7xl md:text-9xl text-zns-dark mb-8 tracking-tight">
                        Our <span className="text-zns-blue italic">Craft</span>
                    </h1>
                    <p className="text-zns-text-light text-xl md:text-2xl max-w-2xl mx-auto font-light leading-relaxed">
                        A curated collection of digital experiences built on <span className="text-zns-dark font-medium">trust</span> and <span className="text-zns-dark font-medium">precision</span>.
                    </p>
                </div>

                <div className="flex justify-center gap-4 mb-20 flex-wrap">
                    <button className="px-8 py-3 rounded-full bg-zns-dark text-white font-medium hover:bg-zns-blue transition-colors text-sm tracking-wide shadow-lg shadow-zns-dark/10">
                        All Projects
                    </button>
                    {categories.map((category) => (
                        <button
                            key={category}
                            className="px-8 py-3 rounded-full border border-black/5 bg-white text-zns-text-light hover:border-zns-gold/50 hover:text-zns-gold transition-colors text-sm tracking-wide shadow-sm"
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
                            <article className="relative h-[500px] rounded-3xl overflow-hidden bg-white border border-black/5 hover:border-zns-gold/30 hover:shadow-2xl hover:shadow-zns-gold/10 transition-all duration-500 shadow-lg shadow-black/5">
                                {/* Thumbnail Background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-zns-blue/5 to-zns-gold/5">
                                    {/* Placeholder for image - would use Next Image with real images */}
                                    <div className="w-full h-full flex items-center justify-center text-zns-dark/10 text-6xl font-bold font-display uppercase tracking-tighter">
                                        {study.category}
                                    </div>
                                </div>

                                {/* Gradient Overlay - Light Mode: White to Transparent */}
                                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />

                                {/* Content */}
                                <div className="relative h-full p-8 flex flex-col justify-end">
                                    <div className="mb-3 flex items-center gap-3">
                                        <span className="px-3 py-1 rounded-full bg-zns-blue/10 text-zns-blue text-sm font-semibold border border-zns-blue/10">
                                            {study.category}
                                        </span>
                                        <span className="text-zns-text-light text-sm">{study.year}</span>
                                    </div>

                                    <h2 className="font-display font-bold text-3xl text-zns-dark mb-3 group-hover:text-zns-blue transition-colors">
                                        {study.title}
                                    </h2>

                                    <p className="text-zns-text-light mb-4 line-clamp-2">
                                        {study.shortDescription}
                                    </p>

                                    <div className="flex items-center text-zns-gold font-semibold group-hover:gap-3 transition-all">
                                        View Case Study
                                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>

                                {/* Hover Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-zns-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            </article>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
