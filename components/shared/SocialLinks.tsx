import { contactData } from "@/data/contact";
import { HugeiconsIcon } from "@hugeicons/react";
import {
    Linkedin01Icon,
    GithubIcon
} from "@hugeicons/core-free-icons";

const SocialLinks = () => {
    return (
        <div className="flex items-center justify-center lg:justify-start gap-4">
            {contactData.socialLinks.map((link) => (
                <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-xl bg-secondary border border-border/50 hover:border-primary/50 hover:bg-primary/5 hover:text-primary transition-all duration-300 group"
                    aria-label={link.name}
                >
                    <HugeiconsIcon
                        icon={
                            link.name === "GitHub" ? GithubIcon : Linkedin01Icon
                        }
                        size={22}
                    />
                </a>
            ))}
        </div>
    )
}

export default SocialLinks