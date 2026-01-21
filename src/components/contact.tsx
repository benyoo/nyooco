"use client";

import { motion } from "framer-motion";
import { Linkedin, Instagram, Mail, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactLinks = [
    {
        label: "LinkedIn",
        value: "benjinyoo",
        href: "https://linkedin.com/in/benjinyoo",
        icon: <Linkedin className="h-5 w-5" />,
    },
    {
        label: "Instagram",
        value: "@be_nyoo",
        href: "https://instagram.com/be_nyoo",
        icon: <Instagram className="h-5 w-5" />,
    },
    {
        label: "Email",
        value: "ben.jin.yoo@gmail.com",
        href: "mailto:ben.jin.yoo@gmail.com",
        icon: <Mail className="h-5 w-5" />,
    },
];

export function Contact() {
    return (
        <section id="contact" className="px-6 lg:px-12 py-32 bg-secondary/10">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Let&apos;s Connect</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Open for strategic partnerships, product leadership opportunities, or just a professional exchange.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {contactLinks.map((link, idx) => (
                        <motion.a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group flex items-center justify-between p-6 rounded-2xl bg-background border border-border/50 hover:border-foreground/50 transition-all duration-300"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-foreground/5 flex items-center justify-center text-foreground group-hover:bg-foreground group-hover:text-background transition-colors">
                                    {link.icon}
                                </div>
                                <div className="text-left">
                                    <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-0.5">{link.label}</p>
                                    <p className="font-bold">{link.value}</p>
                                </div>
                            </div>
                            <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                        </motion.a>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-24 pt-12 border-t border-border/50 text-center"
                >
                    <p className="text-[10px] font-mono uppercase tracking-[0.5em] text-muted-foreground">
                        © {new Date().getFullYear()} BENYOO — DESIGNED FOR IMPACT
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
