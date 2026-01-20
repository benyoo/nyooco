"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center px-6 lg:px-12 py-24 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,oklch(0.42_0_0/0.03),transparent_70%)]" />

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
                    15 Years of <br />
                    <span className="text-muted-foreground italic tracking-tighter">Large-Scale Transformation.</span>
                </h1>

                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed transition-colors mb-10 max-w-2xl">
                    Leading 0-1 and 1-N product development for high-impact environments. Managing
                    <span className="text-foreground font-semibold"> $130M+ budgets </span> and delivering secure, user-centered modernization for the
                    <span className="text-foreground"> Federal and Private sectors.</span>
                </p>

                <div className="flex flex-wrap gap-4">
                    <Button size="lg" className="rounded-full px-8 h-12 text-base bg-foreground text-background hover:bg-muted-foreground">
                        Strategy & Impact
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="lg" className="rounded-full px-8 h-12 text-base border-border hover:bg-secondary/20">
                        Professional Experience
                    </Button>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ delay: 1, duration: 2 }}
                className="absolute bottom-12 right-12 hidden lg:block"
            >
                <div className="text-right text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground vertical-lr">
                    PMP | CISM CERTIFIED
                </div>
            </motion.div>
        </section>
    );
}
