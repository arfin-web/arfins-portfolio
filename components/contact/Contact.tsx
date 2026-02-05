import { contactData } from "@/data/contact";
import ContactInfo from "./ContactInfo";
import WorkProcess from "./WorkProcess";

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
                    <ContactInfo />
                    <WorkProcess />
                </div>
            </div>
        </section>
    );
};

export default Contact;
