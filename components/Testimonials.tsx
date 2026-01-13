import { HugeiconsIcon } from "@hugeicons/react";
import { QuoteUpIcon, StarIcon } from "@hugeicons/core-free-icons";

const testimonials = [
    {
        quote: "Arfin is a rare breed of engineer who cares deeply about design details while writing rock-solid code. He transformed our clunky dashboard into a seamless experience.",
        name: "Sarah Jenkins",
        role: "Product Manager",
        company: "TechCorp Solutions"
    },
    {
        quote: "He delivered the e-commerce platform 2 weeks ahead of schedule. His understanding of performance optimization directly contributed to a 25% increase in our conversion rates.",
        name: "Michael Chen",
        role: "Founder",
        company: "ShopFlow Inc."
    },
    {
        quote: "Collaborating with Arfin was a breeze. He communicates clearly, asks the right questions, and solves problems proactively. Highly recommended for any complex frontend work.",
        name: "David Ross",
        role: "Lead Backend Developer",
        company: "NexTask"
    }
];

const Testimonials = () => {
    return (
        <section className="py-20 bg-secondary/5 relative overflow-hidden border-t border-border/40">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col mb-12 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium w-fit mx-auto md:mx-0 mb-4">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Recommendations
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                        What People Say
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl">
                        Feedback from colleagues and clients I've had the pleasure of working with.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((item, index) => (
                        <div key={index} className="bg-card border border-border/50 rounded-xl p-8 hover:border-primary/50 transition-colors shadow-sm flex flex-col justify-between">
                            <div>
                                <div className="mb-6 text-primary/40">
                                    <HugeiconsIcon icon={QuoteUpIcon} size={40} />
                                </div>
                                <p className="text-muted-foreground text-lg leading-relaxed italic mb-6">
                                    "{item.quote}"
                                </p>
                            </div>

                            <div>
                                <div className="flex items-center gap-1 mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <HugeiconsIcon key={i} icon={StarIcon} size={16} className="text-yellow-500 fill-yellow-500" />
                                    ))}
                                </div>
                                <h4 className="font-bold text-foreground">{item.name}</h4>
                                <p className="text-sm text-muted-foreground">{item.role}, {item.company}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Testimonials;
