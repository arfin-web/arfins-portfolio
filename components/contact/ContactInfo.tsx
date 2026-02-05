import { HugeiconsIcon } from "@hugeicons/react";
import {
    Mail01Icon,
    Location01Icon,
    Message01Icon
} from "@hugeicons/core-free-icons";
import { contactData } from "@/data/contact";
import SocialLinks from "../shared/SocialLinks";

const ContactInfo = () => {
    return (
        <div className="flex flex-col gap-8">
            <div>
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                    I'm always open to discussing new projects, technical challenges, or the future of web development.
                </p>

                <div className="space-y-4">
                    <a
                        href={`mailto:${contactData.email}`}
                        className="flex items-center gap-3 text-sm lg:text-lg font-medium hover:text-primary transition-colors"
                    >
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                            <HugeiconsIcon icon={Mail01Icon} size={20} />
                        </div>
                        {contactData.email}
                    </a>

                    {contactData.whatsapp && (
                        <a
                            href={`https://wa.me/${contactData.whatsapp.replace(/\+/g, '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-sm lg:text-lg font-medium hover:text-primary transition-colors"
                        >
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                                <HugeiconsIcon icon={Message01Icon} size={20} />
                            </div>
                            {contactData.whatsapp}
                        </a>
                    )}

                    <div className="flex items-center gap-3 text-sm lg:text-lg font-medium text-muted-foreground">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                            <HugeiconsIcon icon={Location01Icon} size={20} />
                        </div>
                        {contactData.location}
                    </div>
                </div>
            </div>

            <div>
                <h3 className="text-xl text-center lg:text-left font-semibold mb-4">Follow Me</h3>
                <SocialLinks />
            </div>
        </div>
    );
};

export default ContactInfo;
