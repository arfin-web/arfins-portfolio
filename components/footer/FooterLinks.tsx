import { footerLinks } from "@/data/footer";

const FooterLinks = () => {
    return (
        <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
                {footerLinks.map((link) => (
                    <a key={link.name} href={link.href} className="hover:text-primary transition-colors w-fit">{link.name}</a>
                ))}
            </nav>
        </div>
    );
};

export default FooterLinks;
