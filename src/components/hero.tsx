"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center px-6 lg:px-12 py-24 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,oklch(0.42_0_0/0.03),transparent_70%)]" />

            <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block px-3 py-1 rounded-full bg-foreground/10 text-foreground text-[10px] uppercase tracking-widest font-bold mb-6 border border-border/50">
                        Senior Product Manager
                    </span>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
                        15 Years of <br />
                        <span className="text-muted-foreground italic tracking-tighter">Large-Scale Transformation.</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-tight mb-10 max-w-2xl whitespace-pre-line">
                        I make things work,{"\n"}
                        I make things work better,{"\n"}
                        I make things work better quickly.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Button
                            asChild
                            size="lg"
                            className="rounded-full px-10 h-14 text-lg bg-foreground text-background hover:bg-muted-foreground transition-all duration-300"
                        >
                            <Link href="#contact">
                                Let&apos;s Connect
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative hidden lg:block"
                >
                    <div className="relative aspect-[3/4] max-w-md mx-auto overflow-hidden rounded-2xl border-2 border-border/60 bg-card/20 shadow-2xl p-0.5">
                        <div className="relative h-full w-full overflow-hidden rounded-[calc(var(--radius)+4px)]">
                            <Image
                                src="/profile-portrait.png"
                                alt="Ben Yoo - Senior Product Manager"
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                        </div>
                    </div>
                </motion.div>
            </div>

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
