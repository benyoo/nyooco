"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Cpu, Network } from "lucide-react";

const caseStudies = [
    {
        title: "Federal Modernization Strategy",
        description: "Led the migration of legacy mainframe systems to cloud-native architecture for a $50M agency initiative.",
        impact: "35% reduction in operational cost",
        tags: ["Cloud-Native", "Scalability", "ZTA"],
        icon: <Network className="h-6 w-6 text-primary" />,
    },
    {
        title: "Enterprise MLOps Adoption",
        description: "Architected a secure ML pipeline for predictive maintenance, managing cross-functional teams of 40+.",
        impact: "85% faster deployment cycles",
        tags: ["MLOps", "AI Strategy", "DevSecOps"],
        icon: <Cpu className="h-6 w-6 text-primary" />,
    },
    {
        title: "Digital Transformation ROI",
        description: "Orchestrated a global procurement overhaul, consolidating $100M+ in spend across multiple business units.",
        impact: "$12M annual cost avoidance",
        tags: ["ROI Architecture", "Optimization", "FinOps"],
        icon: <TrendingUp className="h-6 w-6 text-primary" />,
    },
];

export function StrategyImpact() {
    return (
        <section id="strategy-impact" className="px-6 lg:px-12 py-24 bg-card/30">
            <div className="max-w-6xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Strategy & Impact</h2>
                    <div className="h-1 w-24 bg-primary rounded-full" />
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
                            <Card className="bg-background/40 border-border/50 hover:border-primary/50 transition-all duration-300 group">
                                <CardContent className="p-8">
                                    <div className="mb-6 bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
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
