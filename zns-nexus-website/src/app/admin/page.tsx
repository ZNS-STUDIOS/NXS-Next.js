import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Plus, Folder, Users, Settings } from "lucide-react";

export default function AdminPage() {
    return (
        <main className="min-h-screen bg-zns-dark text-white">
            <Navigation />

            <section className="pt-40 pb-20 px-4">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center mb-12">
                        <h1 className="text-4xl font-display font-bold">Admin Dashboard</h1>
                        <button className="bg-zns-mint text-zns-dark px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-white transition-colors">
                            <Plus className="w-5 h-5" /> New Project
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
                                    <Folder className="w-5 h-5" />
                                </div>
                                <h3 className="font-bold">Total Projects</h3>
                            </div>
                            <p className="text-3xl font-bold">12</p>
                        </div>
                        <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                                    <Users className="w-5 h-5" />
                                </div>
                                <h3 className="font-bold">Active Clients</h3>
                            </div>
                            <p className="text-3xl font-bold">8</p>
                        </div>
                        <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500">
                                    <Settings className="w-5 h-5" />
                                </div>
                                <h3 className="font-bold">System Status</h3>
                            </div>
                            <p className="text-3xl font-bold text-zns-mint">Online</p>
                        </div>
                    </div>

                    <div className="bg-white/5 rounded-3xl border border-white/10 overflow-hidden">
                        <div className="p-6 border-b border-white/10">
                            <h3 className="font-bold text-xl">Recent Projects</h3>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-white/5 text-zns-cream/60">
                                    <tr>
                                        <th className="p-6">Project Name</th>
                                        <th className="p-6">Client</th>
                                        <th className="p-6">Status</th>
                                        <th className="p-6">Date</th>
                                        <th className="p-6">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/10">
                                    {[1, 2, 3].map((i) => (
                                        <tr key={i} className="hover:bg-white/5 transition-colors">
                                            <td className="p-6 font-bold">Project Alpha {i}</td>
                                            <td className="p-6">Client {i}</td>
                                            <td className="p-6"><span className="px-3 py-1 rounded-full bg-zns-mint/20 text-zns-mint text-xs font-bold">Active</span></td>
                                            <td className="p-6 text-zns-cream/60">Nov 24, 2025</td>
                                            <td className="p-6">
                                                <button className="text-zns-mint hover:underline">Edit</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
