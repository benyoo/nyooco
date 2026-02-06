"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Cpu, Network, ShieldCheck } from "lucide-react";

const caseStudies = [
    {
        title: "Online Passport Renewal",
        description: "Scaled service to 70k applications per week for the U.S. State Dept. Aligned cross-functional teams to a unified KPI framework.",
        impact: "20% reduction in fulfillment time",
        tags: ["Scale", "KPI Architecture", "Modernization"],
        icon: <Network className="h-6 w-6 text-foreground" />,
    },
    {
        title: "STIG Vulnerability Platform",
        description: "Leading 0-to-1 rollout of an automated remediation platform for DOD solutions. Reduced manual overhead significantly.",
        impact: "40% faster vulnerability mitigation",
        tags: ["Security", "Automation", "GovCloud"],
        icon: <ShieldCheck className="h-6 w-6 text-foreground" />,
    },
    {
        title: "PMO Risk Management",
        description: "Orchestrated risk mitigation and schedule planning for 15+ Veterans Health Administration projects.",
        impact: "6 months avg. schedule acceleration",
        tags: ["Risk Management", "PMO", "Efficiency"],
        icon: <TrendingUp className="h-6 w-6 text-foreground" />,
    },
];

export function StrategyImpact() {
    return (
        <section id="strategy-impact" className="px-6 lg:px-12 py-24 bg-card/30">
            <div className="max-w-6xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Highlights</h2>
                    <div className="h-1 w-24 bg-foreground rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {caseStudies.map((study, index) => (
                        <motion.div
                            key={study.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <Card className="bg-background/40 border-border/50 hover:border-foreground/50 transition-all duration-300 group">
                                <CardContent className="p-8">
                                    <div className="mb-6 bg-foreground/10 w-12 h-12 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                        {study.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">{study.title}</h3>
                                    <p className="text-muted-foreground mb-6 line-clamp-3">
                                        {study.description}
                                    </p>
                                    <div className="p-4 rounded-lg bg-primary/5 border border-primary/10 mb-6">
                                        <span className="text-xs font-mono uppercase tracking-wider text-primary block mb-1">Key Result</span>
                                        <span className="text-lg font-bold">{study.impact}</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {study.tags.map(tag => (
                                            <Badge key={tag} variant="secondary" className="bg-secondary/50 text-xs font-medium">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
