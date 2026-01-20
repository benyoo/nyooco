"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, Lock, FileText } from "lucide-react";

const credentials = [
    {
        title: "Project Management Professional (PMP)",
        issuer: "PMI",
        description: "Expert level oversight of large-scale infrastructure projects.",
        icon: <Award className="h-5 w-5" />,
    },
    {
        title: "Certified Information Security Manager (CISM)",
        issuer: "ISACA",
        description: "Ensuring high-governance and regulatory compliance in product development.",
        icon: <ShieldCheck className="h-5 w-5" />,
    },
];

export function GovernanceSecurity() {
    return (
        <section id="governance-security" className="px-6 lg:px-12 py-24">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">Governance & Security</h2>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                        Leading product development with a security-first mindset. Specializing in high-governance environments
                        where data integrity and regulatory compliance are non-negotiable.
                    </p>

                    <div className="space-y-6">
                        {credentials.map((cred, index) => (
                            <div key={cred.title} className="flex gap-6 items-start">
                                <div className="mt-1 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                    {cred.icon}
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">{cred.title}</h4>
                                    <p className="text-sm text-muted-foreground">{cred.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative aspect-square lg:aspect-video rounded-2xl bg-gradient-to-br from-secondary/50 via-background to-background p-1 border border-border/50 overflow-hidden"
                >
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
                        <Lock className="w-64 h-64" />
                    </div>
                    <div className="relative h-full w-full bg-background/80 rounded-[calc(var(--radius)-4px)] p-8 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-3 h-3 rounded-full bg-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                            <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                            <span className="ml-2 text-xs font-mono text-muted-foreground uppercase tracking-widest">Secure Development Lifecycle</span>
                        </div>
                        <div className="space-y-4 font-mono text-sm text-primary/80">
                            <p>{">"} STIG Compliance: 100%</p>
                            <p>{">"} Threat Modeling: Continuous</p>
                            <p>{">"} Zero Trust Architecture: Enabled</p>
                            <p>{">"} MLOps Security Governance: Active</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
