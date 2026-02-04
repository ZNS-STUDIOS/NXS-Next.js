import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white tech-grid">
            <Navigation />

            <section className="pt-40 pb-20 px-4">
                <div className="container mx-auto">
                    <div className="text-center mb-20 flex flex-col items-center">
                        <div className="mb-4 flex flex-col items-center gap-2">
                            <div className="h-12 w-[1px] bg-gradient-to-b from-transparent via-zns-gold to-transparent" />
                            <span className="text-zns-gold font-mono text-[10px] tracking-[0.2em] uppercase">Transmission</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-display font-bold text-white tracking-tighter">
                            LET'S <span className="text-transparent bg-clip-text bg-gradient-to-r from-zns-gold to-white">TALK</span>
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        {/* Contact Info */}
                        <div className="space-y-12">
                            <div>
                                <h3 className="text-2xl font-display font-bold mb-6 text-white">Get in Touch</h3>
                                <p className="text-zns-text-light text-lg mb-8 font-sans leading-relaxed">
                                    Have a project in mind? Use the encrypted channel below. response time: &lt; 24h.
                                </p>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-6 group">
                                        <div className="w-12 h-12 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-zns-gold group-hover:bg-zns-gold group-hover:text-black transition-all">
                                            <Mail className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-mono text-zns-text-light uppercase tracking-widest mb-1">Email Protocol</p>
                                            <p className="text-lg font-bold">hello@znsnexus.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6 group">
                                        <div className="w-12 h-12 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-zns-gold group-hover:bg-zns-gold group-hover:text-black transition-all">
                                            <Phone className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-mono text-zns-text-light uppercase tracking-widest mb-1">Direct Line</p>
                                            <p className="text-lg font-bold">+971 50 123 4567</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6 group">
                                        <div className="w-12 h-12 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-zns-gold group-hover:bg-zns-gold group-hover:text-black transition-all">
                                            <MapPin className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-mono text-zns-text-light uppercase tracking-widest mb-1">Base Stations</p>
                                            <p className="text-lg font-bold">UAE • Canada • India</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="relative p-10 border border-white/5 bg-white/[0.02] backdrop-blur-sm">
                            {/* Tech Corners */}
                            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20" />
                            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20" />
                            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/20" />
                            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20" />

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-mono font-bold text-zns-gold uppercase tracking-widest">Name ID</label>
                                        <input type="text" className="w-full bg-white/5 border border-white/10 p-4 focus:outline-none focus:border-zns-gold focus:bg-white/10 transition-all text-white font-mono text-sm placeholder:text-white/20" placeholder="ENTER NAME" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-mono font-bold text-zns-gold uppercase tracking-widest">Email Address</label>
                                        <input type="email" className="w-full bg-white/5 border border-white/10 p-4 focus:outline-none focus:border-zns-gold focus:bg-white/10 transition-all text-white font-mono text-sm placeholder:text-white/20" placeholder="ENTER EMAIL" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-mono font-bold text-zns-gold uppercase tracking-widest">Subject</label>
                                    <input type="text" className="w-full bg-white/5 border border-white/10 p-4 focus:outline-none focus:border-zns-gold focus:bg-white/10 transition-all text-white font-mono text-sm placeholder:text-white/20" placeholder="PROJECT INQUIRY" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-mono font-bold text-zns-gold uppercase tracking-widest">Message Data</label>
                                    <textarea className="w-full bg-white/5 border border-white/10 p-4 h-32 focus:outline-none focus:border-zns-gold focus:bg-white/10 transition-all text-white font-mono text-sm resize-none placeholder:text-white/20" placeholder="INPUT MESSAGE..." />
                                </div>
                                <MagneticButton className="w-full py-5 text-sm font-mono tracking-widest uppercase bg-zns-gold text-white hover:bg-white hover:text-black shadow-[0_0_20px_rgba(180,83,9,0.2)]">
                                    Transmit Message <ArrowRight className="ml-2 w-4 h-4" />
                                </MagneticButton>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
