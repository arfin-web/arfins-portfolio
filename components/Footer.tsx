"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUp01Icon } from "@hugeicons/core-free-icons";
import { footerLinks, builtWith } from "@/data/footer";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-background border-t border-border/40 py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-12">
                    {/* Brand & Copyright */}
                    <div className="md:col-span-1">
                        <a href="/" className="text-xl font-bold tracking-tight mb-4 inline-block">
                            Arfin<span className="text-primary">.</span>
                        </a>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-xs">
                            Crafting digital experiences with precision and passion.
                            Focused on building accessible, performant, and beautiful web applications.
                        </p>
                        <p className="text-xs text-muted-foreground">
                            &copy; {currentYear} Arfin Nafriz. All rights reserved.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold mb-4">Quick Links</h4>
                        <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
                            {footerLinks.map((link) => (
                                <a key={link.name} href={link.href} className="hover:text-primary transition-colors w-fit">{link.name}</a>
                            ))}
                        </nav>
                    </div>

                    {/* Tech Stack & Credits */}
                    <div>
                        <h4 className="font-semibold mb-4">Built With</h4>
                        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                            {builtWith.map((item) => (
                                <span key={item} className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60"></span>
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-muted-foreground text-center md:text-left">
                        Designed & Developed by Arfin Nafriz
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-2 text-xs font-medium text-secondary-foreground hover:text-primary transition-colors group"
                    >
                        Back to Top
                        <HugeiconsIcon icon={ArrowUp01Icon} size={14} className="group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
