"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        company: "U.S. Department of State",
        role: "Senior Product Manager",
        period: "2020 - 2025",
        achievements: [
            "Scaled Online Passport Renewal to 70k apps/week",
            "Managed $130M+ budget across 10 product lines",
            "Achieved 95% positive feedback via usability testing",
            "Cut release cycles from 6 months to 2 weeks"
        ]
    },
    {
        company: "Accenture Federal Services",
        role: "Consultant, Product Management",
        period: "2017 - 2020",
        achievements: [
            "Launched automated STIG Vulnerability Remediation Platform",
            "Reduced vulnerability mitigation time by 40%",
            "Led AI/ML research identifying 10+ federal use cases"
        ]
    },
    {
        company: "Phase One Consulting Group",
        role: "Consultant, Risk Management",
        period: "2016 - 2017",
        achievements: [
            "Accelerated VHA PMO projects by 6 months",
            "Structured risk mitigation for 15+ complex projects"
        ]
    },
    {
        company: "FundsFlo, Inc.",
        role: "Lead Product Manager",
        period: "2016",
        achievements: [
            "Decreased time-to-market to 4 months",
            "Implemented automated testing using Python/Selenium"
        ]
    }
];

export function Experience() {
    return (
        <section id="experience" className="px-6 lg:px-12 py-24">
            <div className="max-w-6xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Professional Experience</h2>
                    <div className="h-1 w-24 bg-foreground rounded-full" />
                </div>

                <div className="space-y-12">
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={exp.company + exp.period}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="relative pl-8 border-l border-border"
                        >
                            <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] rounded-full bg-foreground" />
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                                <div>
                                    <h3 className="text-xl font-bold">{exp.role}</h3>
                                    <p className="text-muted-foreground font-medium">{exp.company}</p>
                                </div>
                                <span className="text-sm font-mono text-muted-foreground bg-secondary/20 px-3 py-1 rounded-full w-fit">
                                    {exp.period}
                                </span>
                            </div>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {exp.achievements.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground italic">
                                        <span className="text-foreground mt-1">▹</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
