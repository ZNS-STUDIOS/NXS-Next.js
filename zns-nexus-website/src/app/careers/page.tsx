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
        <main className="min-h-screen bg-zns-dark text-white">
            <Navigation />

            <section className="pt-40 pb-20 px-4">
                <div className="container mx-auto">
                    <div className="text-center mb-20">
                        <h1 className="text-6xl md:text-8xl font-display font-bold mb-6">
                            Join the <span className="text-zns-mint">Team</span>
                        </h1>
                        <p className="text-xl text-zns-cream/60 max-w-2xl mx-auto">
                            We're always looking for talented individuals to help us build the future of digital.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-6">
                        {positions.map((position, index) => (
                            <div key={index} className="group bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-zns-mint/50 transition-all duration-300 flex flex-col md:flex-row items-center justify-between gap-6">
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">{position.title}</h3>
                                    <div className="flex gap-4 text-sm text-zns-cream/60">
                                        <span className="flex items-center gap-2"><Briefcase className="w-4 h-4" /> {position.department}</span>
                                        <span>•</span>
                                        <span>{position.type}</span>
                                        <span>•</span>
                                        <span>{position.location}</span>
                                    </div>
                                </div>
                                <MagneticButton className="px-8 py-3 text-sm whitespace-nowrap">
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
