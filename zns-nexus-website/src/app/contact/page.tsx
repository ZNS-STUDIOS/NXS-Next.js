import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-zns-dark text-white">
            <Navigation />

            <section className="pt-40 pb-20 px-4">
                <div className="container mx-auto">
                    <h1 className="text-6xl md:text-8xl font-display font-bold mb-20 text-center">
                        Let's <span className="text-zns-mint">Talk</span>
                    </h1>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        {/* Contact Info */}
                        <div className="space-y-12">
                            <div>
                                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                                <p className="text-zns-cream/60 text-lg mb-8">
                                    Have a project in mind? We'd love to hear from you. Send us a message and we'll get back to you within 24 hours.
                                </p>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-zns-mint">
                                            <Mail className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-zns-cream/40">Email</p>
                                            <p className="text-lg">hello@znsnexus.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-zns-mint">
                                            <Phone className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-zns-cream/40">Phone</p>
                                            <p className="text-lg">+971 50 123 4567</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-zns-mint">
                                            <MapPin className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-zns-cream/40">Locations</p>
                                            <p className="text-lg">UAE • Canada • India</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="bg-white/5 p-10 rounded-3xl border border-white/10">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-zns-cream/60">Name</label>
                                        <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-zns-mint transition-colors" placeholder="John Doe" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-zns-cream/60">Email</label>
                                        <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-zns-mint transition-colors" placeholder="john@example.com" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-zns-cream/60">Subject</label>
                                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-zns-mint transition-colors" placeholder="Project Inquiry" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-zns-cream/60">Message</label>
                                    <textarea className="w-full bg-white/5 border border-white/10 rounded-xl p-4 h-32 focus:outline-none focus:border-zns-mint transition-colors resize-none" placeholder="Tell us about your project..." />
                                </div>
                                <MagneticButton className="w-full py-5 text-lg">
                                    Send Message <ArrowRight className="ml-2 w-5 h-5" />
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
