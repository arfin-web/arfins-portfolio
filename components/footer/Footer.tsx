import FooterLinks from "./FooterLinks";
import TechStack from "./TechStack";
import ScrollToTop from "./ScrollToTop";
import Logo from "../shared/Logo";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-background border-t border-border/40 py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-12">
                    {/* Brand & Copyright */}
                    <div className="md:col-span-1">
                        <Logo />
                        <p className="text-muted-foreground text-sm leading-relaxed my-6 max-w-xs">
                            Crafting digital experiences with precision and passion.
                            Focused on building accessible, performant, and beautiful web applications.
                        </p>
                        <p className="text-xs text-muted-foreground">
                            &copy; {currentYear} All rights reserved.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <FooterLinks />

                    {/* Tech Stack & Credits */}
                    <TechStack />
                </div>

                {/* Bottom Bar */}
                <ScrollToTop />
            </div>
        </footer>
    );
};

export default Footer;
