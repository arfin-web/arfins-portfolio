import { cn } from "@/lib/utils";
import { navLinks } from "@/data/navbar";
import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { Cancel01Icon } from "@hugeicons/core-free-icons";
import Logo from "../shared/Logo";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
    return (
        <div
            className={cn(
                "fixed inset-0 bg-background/98 backdrop-blur-2xl z-40 md:hidden flex flex-col items-center justify-center gap-8 transition-all duration-500 origin-top pointer-events-auto",
                isOpen
                    ? "opacity-100 scale-y-100"
                    : "opacity-0 scale-y-0 pointer-events-none"
            )}
        >
            {/* Header inside mobile menu for consistency */}
            <div className="absolute top-0 left-0 right-0 p-6 flex items-center justify-between border-b border-border/10">
                <Logo onClick={onClose} />
                <button
                    className="p-2 text-foreground hover:text-primary transition-colors"
                    onClick={onClose}
                    aria-label="Close menu"
                >
                    <HugeiconsIcon icon={Cancel01Icon} size={28} />
                </button>
            </div>

            <nav className="flex flex-col items-center gap-8">
                {navLinks.map((link, index) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className={cn(
                            "text-xl font-bold text-foreground hover:text-primary transition-all duration-300",
                            isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                        )}
                        style={{ transitionDelay: `${index * 50}ms` }}
                        onClick={onClose}
                    >
                        {link.name}
                    </a>
                ))}
                <Button
                    size="lg"
                    className={cn(
                        "rounded-full mt-4 px-8 py-6 text-lg transition-all duration-500",
                        isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                    )}
                    style={{ transitionDelay: `${navLinks.length * 50}ms` }}
                    onClick={onClose}
                    asChild
                >
                    <a href="#contact">Let&apos;s Talk</a>
                </Button>
            </nav>

            {/* Decorative background element in menu */}
            <div className="absolute bottom-10 left-10 right-10 flex justify-center opacity-20">
                <p className="text-sm font-mono tracking-widest text-muted-foreground uppercase">
                    Innovative Solutions • 2024
                </p>
            </div>
        </div>
    );
};

export default MobileMenu;
