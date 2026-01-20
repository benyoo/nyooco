"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center px-6 lg:px-12 py-24 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,oklch(0.25_0.05_240/0.15),transparent_70%)]" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl z-10"
            >
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
                    Senior Product Manager
                </span>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
                    Modernizing Infrastructure at <br />
                    <span className="text-primary italic">Global Scale.</span>
                </h1>

                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed transition-colors mb-10 max-w-2xl">
                    Expertise in Federal and Private Sector modernization with
                    <span className="text-foreground font-semibold"> $100M+ budget management.</span> Advancing digital transformation through MLOps and secure architecture.
                </p>

                <div className="flex flex-wrap gap-4">
                    <Button size="lg" className="rounded-full px-8 h-12 text-base">
                        View Strategy & Impact
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="lg" className="rounded-full px-8 h-12 text-base">
                        Credentials
                    </Button>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 1, duration: 2 }}
                className="absolute bottom-12 right-12 hidden lg:block"
            >
                <div className="text-right text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground vertical-lr">
                    Established MDCCXX
                </div>
            </motion.div>
        </section>
    );
}
