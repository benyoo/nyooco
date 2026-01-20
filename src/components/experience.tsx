"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        company: "U.S. Department of State (OCST)",
        role: "Senior Product Manager",
        period: "Mar 2020 - Sep 2025",
        achievements: [
            "Scaled Online Passport Renewal to 70k apps/week (20% faster fulfillment)",
            "95% positive feedback rate via deep-dive usability testing",
            "70% user adoption of modernized comms system across 200 missions",
            "Cut deployment failures by 50% via Salesforce workflow optimization",
            "Built repeatable launch framework used across 5+ product lines"
        ]
    },
    {
        company: "U.S. Department of State (OCST)",
        role: "Branch Chief (Acting)",
        period: "Dec 2023 - Apr 2024",
        achievements: [
            "Managed $130M budget and 265 personnel across 10 product lines",
            "Boosted team performance 20% by redesigning roles and metrics",
            "Reduced decision-making bottlenecks by 40% via portfolio initiatives"
        ]
    },
    {
        company: "Accenture Federal Services",
        role: "Consultant, Product Management",
        period: "Aug 2017 - Mar 2020",
        achievements: [
            "Launched 0-1 STIG Vulnerability Remediation Platform (40% faster mitigation)",
            "Accelerated delivery velocity by 30% via backlog prioritization",
            "Launched 3 federal AI/ML pilot projects (AI Vision, Workflow Intelligence)"
        ]
    },
    {
        company: "Phase One Consulting Group",
        role: "Consultant, Risk Management",
        period: "Jun 2016 - Aug 2017",
        achievements: [
            "6 months schedule acceleration across 15 VHA PMO projects",
            "Early risk detection and structured mitigation planning"
        ]
    },
    {
        company: "FundsFlo, Inc.",
        role: "Lead Product Manager",
        period: "Jan 2016 - May 2016",
        achievements: [
            "Decreased time-to-market to 4 months via rapid prototyping",
            "Reduced functional test durations by 50% via Python/Selenium"
        ]
    },
    {
        company: "LDC Artist Representation",
        role: "Consultant",
        period: "Oct 2015 - Jan 2016",
        achievements: [
            "Built agent-custom digital infrastructure within 3 months"
        ]
    },
    {
        company: "EXP Culture, LLC",
        role: "Founder (Startup), Product Manager",
        period: "Feb 2015 - Oct 2015",
        achievements: [
            "Developed bootstrap business model and MVP via stakeholder interviews",
            "Produced localized events with partners including Red Bull"
        ]
    },
    {
        company: "Nyoo Co.",
        role: "Founder (Startup), Talent Manager",
        period: "Aug 2014 - Oct 2015",
        achievements: [
            "Established boutique talent management operations"
        ]
    },
    {
        company: "Unison Marketplace (FedBid)",
        role: "Software QA Analyst",
        period: "Dec 2012 - Apr 2014",
        achievements: [
            "Increased QA test completion by 50% via Selenium automation",
            "Maintained <2% defect rate for monthly production releases",
            "Led mobile integration testing of the FedBid web application"
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
