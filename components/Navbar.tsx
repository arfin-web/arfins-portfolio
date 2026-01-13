"use client";

import { useState, useEffect } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Menu01Icon, Cancel01Icon, ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Experience", href: "#experience" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <header
            className={cn(
                "fixed z-50 transition-all duration-500 ease-in-out left-0 right-0",
                isScrolled
                    ? "top-6 mx-auto max-w-4xl"
                    : "top-0 w-full border-b border-transparent"
            )}
        >
            <div
                className={cn(
                    "relative flex items-center justify-between transition-all duration-500",
                    isScrolled
                        ? "bg-background/80 backdrop-blur-md rounded-full border border-border/50 shadow-lg py-3 px-6 md:px-8"
                        : "bg-background/0 backdrop-blur-none border-t border-transparent py-6 container mx-auto px-4 md:px-6"
                )}
            >
                {/* Logo */}
                <a href="/" className="text-xl font-bold tracking-tight shrink-0 z-50">
                    Arfin<span className="text-primary">.</span>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors hover:scale-105 active:scale-95 duration-200"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* CTA Button / Mobile Toggle */}
                <div className="flex items-center gap-4 shrink-0 z-50">
                    <Button
                        size={isScrolled ? "sm" : "default"}
                        className={cn("hidden md:flex rounded-full", isScrolled && "px-6")}
                        asChild
                    >
                        <a href="#contact">
                            Let&apos;s Talk
                            {!isScrolled && <HugeiconsIcon icon={ArrowRight02Icon} size={18} className="ml-2" />}
                        </a>
                    </Button>

                    <button
                        className="md:hidden flex items-center justify-center p-2 text-foreground"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <HugeiconsIcon icon={isMobileMenuOpen ? Cancel01Icon : Menu01Icon} size={24} />
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <div
                    className={cn(
                        "fixed inset-0 bg-background/95 backdrop-blur-xl z-40 md:hidden flex flex-col items-center justify-center gap-8 transition-all duration-300 origin-top",
                        isMobileMenuOpen
                            ? "opacity-100 scale-y-100 pointer-events-auto"
                            : "opacity-0 scale-y-0 pointer-events-none"
                    )}
                    style={{ top: "0" }}
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-2xl font-bold text-foreground hover:text-primary transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <Button size="lg" className="rounded-full mt-4" onClick={() => setIsMobileMenuOpen(false)} asChild>
                        <a href="#contact">Let&apos;s Talk</a>
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
