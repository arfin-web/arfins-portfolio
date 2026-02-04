import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { HugeiconsIcon } from "@hugeicons/react";
import {
    Mail01Icon,
    Linkedin01Icon,
    GithubIcon,
    NewTwitterIcon,
    SentIcon,
    Location01Icon,
    Message01Icon
} from "@hugeicons/core-free-icons";
import { contactData } from "@/data/contact";

const Contact = () => {
    return (
        <section className="py-20 bg-background relative border-t border-border/40" id="contact">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col mb-12 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium w-fit mx-auto md:mx-0 mb-4">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        {contactData.badge}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                        {contactData.title}
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl">
                        {contactData.description}
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
                    {/* Contact Info & Socials */}
                    <div className="flex flex-col gap-8">
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                I'm always open to discussing new projects, technical challenges, or the future of web development.
                            </p>

                            <div className="space-y-4">
                                <a
                                    href={`mailto:${contactData.email}`}
                                    className="flex items-center gap-3 text-lg font-medium hover:text-primary transition-colors"
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
                                        className="flex items-center gap-3 text-lg font-medium hover:text-primary transition-colors"
                                    >
                                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                                            <HugeiconsIcon icon={Message01Icon} size={20} />
                                        </div>
                                        {contactData.whatsapp}
                                    </a>
                                )}

                                <div className="flex items-center gap-3 text-lg font-medium text-muted-foreground">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                                        <HugeiconsIcon icon={Location01Icon} size={20} />
                                    </div>
                                    {contactData.location}
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
                            <div className="flex items-center gap-4">
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
                                                link.name === "GitHub" ? GithubIcon :
                                                    link.name === "LinkedIn" ? Linkedin01Icon :
                                                        NewTwitterIcon
                                            }
                                            size={22}
                                        />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-card border border-border/50 rounded-2xl p-6 md:p-8 shadow-sm">
                        <form className="flex flex-col gap-5">
                            <div className="grid md:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                                    <Input id="name" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                                    <Input id="email" type="email" placeholder="john@example.com" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">Message</label>
                                <Textarea
                                    id="message"
                                    placeholder="Tell me about your project..."
                                    className="min-h-[150px] resize-none"
                                />
                            </div>

                            <Button className="w-full relative overflow-hidden group">
                                <span className="flex items-center gap-2 relative z-10">
                                    Send Message
                                    <HugeiconsIcon icon={SentIcon} size={18} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
