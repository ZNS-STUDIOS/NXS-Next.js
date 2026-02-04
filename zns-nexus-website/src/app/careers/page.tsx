import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { ArrowRight, Briefcase } from "lucide-react";

const positions = [
    {
        title: "Senior Frontend Developer",
        type: "Full-time",
        location: "Remote / UAE",
        department: "Engineering",
    },
    {
        title: "UI/UX Designer",
        type: "Full-time",
        location: "Remote / Canada",
        department: "Design",
    },
    {
        title: "Social Media Manager",
        type: "Part-time",
        location: "Remote / India",
        department: "Marketing",
    },
];

export default function CareersPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white tech-grid">
            <Navigation />

            <section className="pt-40 pb-20 px-4">
                <div className="container mx-auto">
                    <div className="text-center mb-20 flex flex-col items-center">
                        <div className="mb-4 flex flex-col items-center gap-2">
                            <div className="h-12 w-[1px] bg-gradient-to-b from-transparent via-zns-blue to-transparent" />
                            <span className="text-zns-blue font-mono text-[10px] tracking-[0.2em] uppercase">Talent Acquisition</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-display font-bold mb-6 text-white tracking-tighter">
                            JOIN THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-zns-blue to-white">TEAM</span>
                        </h1>
                        <p className="text-xl text-zns-text-light max-w-2xl mx-auto font-sans leading-relaxed">
                            We're always looking for talented individuals to help us build the future of digital.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-6">
                        {positions.map((position, index) => (
                            <div key={index} className="group relative bg-white/[0.02] p-8 border border-white/5 hover:border-zns-blue/50 transition-all duration-300 flex flex-col md:flex-row items-center justify-between gap-6 hover:bg-white/[0.04]">
                                {/* Tech Corners */}
                                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/10 group-hover:border-zns-blue/50 transition-colors" />
                                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/10 group-hover:border-zns-blue/50 transition-colors" />
                                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/10 group-hover:border-zns-blue/50 transition-colors" />
                                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/10 group-hover:border-zns-blue/50 transition-colors" />

                                <div>
                                    <h3 className="text-2xl font-display font-bold mb-2 text-white group-hover:text-zns-blue transition-colors">{position.title}</h3>
                                    <div className="flex gap-4 text-xs font-mono text-zns-text-light group-hover:text-white uppercase tracking-widest transition-colors">
                                        <span className="flex items-center gap-2"><Briefcase className="w-3 h-3 text-zns-blue" /> {position.department}</span>
                                        <span className="text-white/20">/</span>
                                        <span>{position.type}</span>
                                        <span className="text-white/20">/</span>
                                        <span>{position.location}</span>
                                    </div>
                                </div>
                                <MagneticButton className="px-8 py-3 text-xs font-mono whitespace-nowrap bg-zns-blue text-white hover:bg-white hover:text-black tracking-widest uppercase rounded-sm">
                                    Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                                </MagneticButton>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
