"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
    { label: "Highlights", href: "#strategy-impact" },
    { label: "Experience", href: "#experience" },
    { label: "Certifications", href: "#governance-security" },
    { label: "Domains", href: "#tech-stack" },
    { label: "Contact", href: "#contact" },
];

export function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-12 h-20 flex items-center justify-between",
                    scrolled || isOpen ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent"
                )}
            >
                <Link href="/" className="text-xl font-bold tracking-tighter flex items-center gap-2 group z-50">
                    <div className="w-8 h-8 rounded-lg bg-foreground flex items-center justify-center text-background group-hover:rotate-12 transition-transform">
                        B
                    </div>
                    <span className="hidden sm:inline font-mono tracking-[0.2em] text-sm">BENYOO</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-8">
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

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => {
                        console.log("Mobile menu toggled. Current state:", !isOpen);
                        setIsOpen(!isOpen);
                    }}
                    className="lg:hidden z-50 p-3 text-foreground flex items-center justify-center border border-border rounded-md hover:bg-foreground/10 transition-colors"
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X strokeWidth={2.5} /> : <Menu strokeWidth={2.5} />}
                </button>
            </motion.nav>

            {/* Mobile Navigation Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-[60] bg-background/98 backdrop-blur-2xl lg:hidden flex flex-col items-center justify-center"
                    >
                        <div className="flex flex-col items-center gap-10">
                            {navItems.map((item, idx) => (
                                <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                >
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-2xl font-bold tracking-tight hover:text-muted-foreground transition-colors"
                                    >
                                        {item.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
