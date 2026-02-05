"use client"

import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUp01Icon } from "@hugeicons/core-free-icons";

const ScrollToTop = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground text-center md:text-left">
                Designed & Developed by Arfin Noor Rahman
            </p>

            <button
                onClick={scrollToTop}
                className="flex items-center gap-2 text-xs font-medium text-secondary-foreground hover:text-primary transition-colors group"
            >
                Back to Top
                <HugeiconsIcon icon={ArrowUp01Icon} size={14} className="group-hover:-translate-y-1 transition-transform" />
            </button>
        </div>
    )
}

export default ScrollToTop