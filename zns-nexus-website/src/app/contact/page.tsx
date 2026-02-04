import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-zns-cream text-zns-dark">
            <Navigation />

            <section className="pt-40 pb-20 px-4">
                <div className="container mx-auto">
                    <h1 className="text-6xl md:text-8xl font-display font-bold mb-20 text-center">
                        Let&apos;s <span className="text-zns-blue">Talk</span>
                    </h1>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        {/* Contact Info */}
                        <div className="space-y-12">
                            <div>
                                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                                <p className="text-zns-text-light text-lg mb-8">
                                    Have a project in mind? We&apos;d love to hear from you. Send us a message and we&apos;ll get back to you within 24 hours.
                                </p>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-white border border-black/5 flex items-center justify-center text-zns-blue shadow-lg shadow-black/5">
                                            <Mail className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-zns-text-light">Email</p>
                                            <p className="text-lg font-medium">hello@znsnexus.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-white border border-black/5 flex items-center justify-center text-zns-blue shadow-lg shadow-black/5">
                                            <Phone className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-zns-text-light">Phone</p>
                                            <p className="text-lg font-medium">+971 50 123 4567</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-white border border-black/5 flex items-center justify-center text-zns-blue shadow-lg shadow-black/5">
                                            <MapPin className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-zns-text-light">Locations</p>
                                            <p className="text-lg font-medium">UAE • Canada • India</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="bg-white p-10 rounded-3xl border border-black/5 shadow-xl shadow-black/5">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-zns-text-light">Name</label>
                                        <input type="text" className="w-full bg-zns-cream/50 border border-black/10 rounded-xl p-4 focus:outline-none focus:border-zns-blue focus:bg-white transition-all text-zns-dark" placeholder="John Doe" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-zns-text-light">Email</label>
                                        <input type="email" className="w-full bg-zns-cream/50 border border-black/10 rounded-xl p-4 focus:outline-none focus:border-zns-blue focus:bg-white transition-all text-zns-dark" placeholder="john@example.com" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-zns-text-light">Subject</label>
                                    <input type="text" className="w-full bg-zns-cream/50 border border-black/10 rounded-xl p-4 focus:outline-none focus:border-zns-blue focus:bg-white transition-all text-zns-dark" placeholder="Project Inquiry" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-zns-text-light">Message</label>
                                    <textarea className="w-full bg-zns-cream/50 border border-black/10 rounded-xl p-4 h-32 focus:outline-none focus:border-zns-blue focus:bg-white transition-all text-zns-dark resize-none" placeholder="Tell us about your project..." />
                                </div>
                                <MagneticButton className="w-full py-5 text-lg bg-zns-dark text-white hover:bg-zns-blue">
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
