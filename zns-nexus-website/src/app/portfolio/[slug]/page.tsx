import { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudyBySlug } from "@/data/case-studies";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface PageProps {
    params: { slug: string };
}

export async function generateStaticParams() {
    return caseStudies.map((study) => ({
        slug: study.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const study = getCaseStudyBySlug(params.slug);
    if (!study) return { title: "Not Found" };

    return {
        title: `${study.title} | Portfolio | ZNS Nexus`,
        description: study.shortDescription,
    };
}

export default function CaseStudyPage({ params }: PageProps) {
    const study = getCaseStudyBySlug(params.slug);
    if (!study) notFound();

    const currentIndex = caseStudies.findIndex(s => s.slug === params.slug);
    const nextStudy = caseStudies[(currentIndex + 1) % caseStudies.length];
    const prevStudy = caseStudies[(currentIndex - 1 + caseStudies.length) % caseStudies.length];

    return (
        <main className="min-h-screen bg-zns-dark text-white pt-24 pb-20">
            {/* Back Button */}
            <div className="container mx-auto px-4 mb-8">
                <Link
                    href="/portfolio"
                    className="inline-flex items-center text-zns-mint hover:text-white transition-colors"
                >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Back to Portfolio
                </Link>
            </div>

            {/* Hero Section */}
            <section className="container mx-auto px-4 mb-20">
                <div className="max-w-6xl mx-auto">
                    {/* Category & Year */}
                    <div className="flex items-center gap-4 mb-6">
                        <span className="px-4 py-2 rounded-full bg-zns-mint/20 text-zns-mint font-semibold">
                            {study.category}
                        </span>
                        <span className="text-zns-cream/60">{study.year}</span>
                    </div>

                    {/* Title */}
                    <h1 className="font-display font-bold text-5xl md:text-7xl text-white mb-6">
                        {study.title}
                    </h1>

                    {/* Meta Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        <div>
                            <p className="text-zns-cream/60 text-sm uppercase tracking-wider mb-2">Client</p>
                            <p className="text-white font-semibold text-lg">{study.client}</p>
                        </div>
                        <div>
                            <p className="text-zns-cream/60 text-sm uppercase tracking-wider mb-2">Technologies</p>
                            <div className="flex flex-wrap gap-2">
                                {study.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Hero Image Placeholder */}
                    <div className="w-full h-[500px] rounded-3xl bg-gradient-to-br from-zns-teal/20 to-zns-mint/10 border border-white/10 flex items-center justify-center">
                        <p className="text-zns-mint/30 text-4xl font-bold">Hero Image</p>
                    </div>
                </div>
            </section>

            {/* Content Sections */}
            <section className="container mx-auto px-4 mb-20">
                <div className="max-w-4xl mx-auto space-y-20">
                    {/* Overview */}
                    <div>
                        <h2 className="font-display font-bold text-3xl text-white mb-6">Overview</h2>
                        <p className="text-zns-cream/80 text-lg leading-relaxed">
                            {study.shortDescription}
                        </p>
                    </div>

                    {/* Challenge & Solution Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="font-display font-bold text-2xl text-white mb-4">The Challenge</h2>
                            <p className="text-zns-cream/70 text-lg leading-relaxed">
                                {study.challenge}
                            </p>
                        </div>
                        <div>
                            <h2 className="font-display font-bold text-2xl text-white mb-4">Our Solution</h2>
                            <p className="text-zns-cream/70 text-lg leading-relaxed">
                                {study.solution}
                            </p>
                        </div>
                    </div>

                    {/* Process Steps */}
                    <div>
                        <h2 className="font-display font-bold text-3xl text-white mb-8">Process</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {study.process.map((step, index) => (
                                <div key={index} className="p-6 rounded-sm border border-white/5 bg-white/[0.02]">
                                    <div className="text-zns-gold font-mono text-xs uppercase tracking-widest mb-3">
                                        Phase 0{index + 1}
                                    </div>
                                    <h4 className="font-bold text-lg text-white mb-2">{step.title}</h4>
                                    <p className="text-zns-cream/60 text-sm leading-relaxed">{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Impact Statement */}
                    <div className="p-8 md:p-12 rounded-sm border border-zns-gold/20 bg-zns-gold/5">
                        <h3 className="text-zns-gold font-mono text-sm uppercase tracking-widest mb-4">Business Impact</h3>
                        <p className="text-2xl md:text-3xl font-display font-bold text-white leading-tight">
                            &ldquo;{study.impact}&rdquo;
                        </p>
                    </div>

                    {/* Results */}
                    <div>
                        <h2 className="font-display font-bold text-3xl text-white mb-6">Key Results</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {study.results.map((result, index) => (
                                <div
                                    key={index}
                                    className="p-6 rounded-sm bg-white/5 border border-white/10"
                                >
                                    <div className="text-3xl font-bold text-zns-gold mb-2">✓</div>
                                    <p className="text-white font-medium">{result}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Testimonial */}
                    {study.testimonial && (
                        <div className="p-8 rounded-sm bg-gradient-to-br from-white/10 to-transparent border border-white/10">
                            <blockquote className="text-white text-xl italic mb-6 leading-relaxed">
                                &ldquo;{study.testimonial.quote}&rdquo;
                            </blockquote>
                            <div>
                                <p className="text-white font-bold text-lg">{study.testimonial.author}</p>
                                <p className="text-zns-gold text-sm">{study.testimonial.role}</p>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Navigation */}
            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto border-t border-white/10 pt-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Previous */}
                        <Link
                            href={`/portfolio/${prevStudy.slug}`}
                            className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-zns-mint/50 transition-all"
                        >
                            <div className="flex items-center text-zns-mint mb-3">
                                <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                                Previous Project
                            </div>
                            <h3 className="font-display font-bold text-xl text-white group-hover:text-zns-mint transition-colors">
                                {prevStudy.title}
                            </h3>
                        </Link>

                        {/* Next */}
                        <Link
                            href={`/portfolio/${nextStudy.slug}`}
                            className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-zns-mint/50 transition-all text-right"
                        >
                            <div className="flex items-center justify-end text-zns-mint mb-3">
                                Next Project
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </div>
                            <h3 className="font-display font-bold text-xl text-white group-hover:text-zns-mint transition-colors">
                                {nextStudy.title}
                            </h3>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
