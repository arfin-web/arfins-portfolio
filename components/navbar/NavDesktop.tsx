import { navLinks } from "@/data/navbar";

const NavDesktop = () => {
    return (
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
    );
};

export default NavDesktop;
