"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, Lock, FileText } from "lucide-react";

const credentials = [
    {
        title: "Project Management Professional (PMP)",
        issuer: "PMI",
        description: "Cert #3130356 | Expert oversight of federal portfolios.",
        icon: <Award className="h-5 w-5" />,
    },
    {
        title: "Certified Information Security Manager (CISM)",
        issuer: "ISACA",
        description: "Cert #252776744 | Governance and regulatory compliance in secure apps.",
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
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">Certifications</h2>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                        Leading product development with a security-first mindset. Specializing in high-governance environments
                        where data integrity and regulatory compliance are non-negotiable.
                    </p>

                    <div className="space-y-6">
                        {credentials.map((cred, index) => (
                            <div key={cred.title} className="flex gap-6 items-start">
                                <div className="mt-1 w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center text-foreground flex-shrink-0">
                                    {cred.icon}
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">{cred.title}</h4>
                                    <p className="text-sm text-muted-foreground italic">{cred.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative aspect-square lg:aspect-video rounded-2xl bg-gradient-to-br from-secondary/30 via-background to-background p-1 border border-border/50 overflow-hidden"
                >
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
                        <Lock className="w-64 h-64" />
                    </div>
                    <div className="relative h-full w-full bg-background/80 rounded-[calc(var(--radius)-4px)] p-8 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-2 h-2 rounded-full bg-foreground/20" />
                            <div className="w-2 h-2 rounded-full bg-foreground/40" />
                            <div className="w-2 h-2 rounded-full bg-foreground/60" />
                            <span className="ml-2 text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Secure Product Lifecycle</span>
                        </div>
                        <div className="space-y-4 font-mono text-sm text-muted-foreground">
                            <p>{">"} STIG Compliance Enforcement</p>
                            <p>{">"} Enterprise Risk Mitigation</p>
                            <p>{">"} Zero Trust Architecture (ZTA)</p>
                            <p>{">"} Multi-platform Governance</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
