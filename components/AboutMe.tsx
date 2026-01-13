import { HugeiconsIcon } from "@hugeicons/react";
import {
    CodeCircleIcon,
    Layers01Icon,
    Rocket01Icon,
    Database01Icon
} from "@hugeicons/core-free-icons";

const AboutMe = () => {
    return (
        <section className="py-20 bg-secondary/20 relative overflow-hidden">
            {/* Subtle Background decoration */}
            <div className="absolute top-10 right-10 opacity-5 animate-pulse">
                <HugeiconsIcon icon={CodeCircleIcon} size={64} />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-3xl mx-auto text-center space-y-8">

                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Professional Summary
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                        About Me
                    </h2>

                    <div className="prose prose-lg dark:prose-invert mx-auto text-muted-foreground leading-relaxed">
                        <p>
                            With over <span className="text-foreground font-semibold">2+ years of experience</span> as a Frontend Software Engineer,
                            I specialize in building high-performance, scalable web applications. My expertise lies in the <span className="text-foreground font-semibold">React ecosystem</span>,
                            including Next.js and Tailwind CSS, where I craft intuitive user interfaces for <span className="text-foreground font-semibold">SaaS platforms, e-commerce solutions, and complex dashboards</span>.
                        </p>

                        <p className="mt-4">
                            I am deeply focused on delivering exceptional user experiences (UX) by ensuring pixel-perfect design implementation and optimizing application performance.
                            Beyond the frontend, I possess a solid understanding of <span className="text-foreground font-semibold">backend technologies</span>,
                            allowing me to collaborate effectively across the full development stack and architect robust, end-to-end solutions.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
                        <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-background/50 border border-border/50 hover:border-primary/50 transition-colors">
                            <HugeiconsIcon icon={CodeCircleIcon} size={32} className="text-blue-500" />
                            <span className="text-sm font-medium">Clean Code</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-background/50 border border-border/50 hover:border-primary/50 transition-colors">
                            <HugeiconsIcon icon={Rocket01Icon} size={32} className="text-orange-500" />
                            <span className="text-sm font-medium">Performance</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-background/50 border border-border/50 hover:border-primary/50 transition-colors">
                            <HugeiconsIcon icon={Layers01Icon} size={32} className="text-purple-500" />
                            <span className="text-sm font-medium">Scalability</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-background/50 border border-border/50 hover:border-primary/50 transition-colors">
                            <HugeiconsIcon icon={Database01Icon} size={32} className="text-green-500" />
                            <span className="text-sm font-medium">Backend Aware</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutMe;
