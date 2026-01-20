"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const techFields = [
    {
        category: "AI / MLOps",
        skills: ["Predictive Analysis", "LLM Orchestration", "Data Governance", "Model Monitoring", "Secure ML Pipelines"],
        color: "emerald"
    },
    {
        category: "Cloud & Infrastructure",
        skills: ["Azure Govt", "AWS CloudNative", "Zero Trust Architecture", "Kubernetes", "Infrastructure as Code"],
        color: "blue"
    },
    {
        category: "Edge & Home Automation",
        skills: ["Zigbee/Z-Wave", "Edge Computing", "IoT Security", "Home Assistant", "Energy Optimization"],
        color: "slate"
    }
];

export function TechStack() {
    return (
        <section id="tech-stack" className="px-6 lg:px-12 py-24 bg-card/30">
            <div className="max-w-6xl mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-center">Knowledge Domain</h2>
                    <div className="h-1 w-24 bg-primary rounded-full mx-auto" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {techFields.map((field, idx) => (
                        <motion.div
                            key={field.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="relative p-8 rounded-2xl bg-background/50 border border-border/50 hover:border-primary/30 transition-colors"
                        >
                            <h3 className="text-xl font-bold mb-6 text-primary">{field.category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {field.skills.map(skill => (
                                    <Badge
                                        key={skill}
                                        variant="outline"
                                        className="border-primary/20 bg-primary/5 text-xs py-1 px-3"
                                    >
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
