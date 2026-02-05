"use client";

import { useState, useEffect } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Menu01Icon, ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Logo from "../shared/Logo";
import NavDesktop from "./NavDesktop";
import MobileMenu from "./MobileMenu";

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

    return (
        <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
            {/* Main Navbar Container */}
            <div
                className={cn(
                    "transition-all duration-500 ease-in-out pointer-events-auto translate-z-0",
                    isScrolled
                        ? "top-6 mx-auto max-w-4xl relative"
                        : "top-0 w-full border-b border-transparent relative"
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
                    <Logo className="z-50" />

                    {/* Desktop Navigation */}
                    <NavDesktop />

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
                            className="md:hidden flex items-center justify-center p-2 text-foreground relative z-50"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <HugeiconsIcon icon={Menu01Icon} size={24} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
        </header>
    );
};

export default Navbar;
