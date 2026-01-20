"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navItems = [
    { label: "Highlights", href: "#strategy-impact" },
    { label: "Experience", href: "#experience" },
    { label: "Governance", href: "#governance-security" },
    { label: "Domains", href: "#tech-stack" },
];

export function Nav() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-12 h-20 flex items-center justify-between",
                scrolled ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent"
            )}
        >
            <Link href="/" className="text-xl font-bold tracking-tighter flex items-center gap-2 group">
                <div className="w-8 h-8 rounded-lg bg-foreground flex items-center justify-center text-background group-hover:rotate-12 transition-transform">
                    B
                </div>
                <span className="hidden sm:inline font-mono tracking-[0.2em] text-sm">BENYOO</span>
            </Link>

            <div className="flex items-center gap-8">
                {navItems.map((item) => (
                    <Link
                        key={item.label}
                        href={item.href}
                        className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground hover:text-foreground transition-colors"
                    >
                        {item.label}
                    </Link>
                ))}
            </div>
        </motion.nav>
    );
}
