import { HugeiconsIcon } from "@hugeicons/react";
import { aboutMeData } from "@/data/aboutMe";
import { cn } from "@/lib/utils";

const AboutMe = () => {
    return (
        <section className="py-20 bg-secondary/20 relative overflow-hidden" id="about">
            {/* Subtle Background decoration */}
            <div className="absolute top-10 right-10 opacity-5 animate-pulse">
                <HugeiconsIcon icon={aboutMeData.features[0].icon} size={64} />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center space-y-8">

                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        {aboutMeData.badge}
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                        {aboutMeData.title}
                    </h2>

                    <div className="prose prose-lg dark:prose-invert mx-auto text-muted-foreground leading-relaxed text-left md:text-center max-w-3xl">
                        {aboutMeData.description.map((paragraph, index) => (
                            <p key={index} className={index > 0 ? "mt-4" : ""}>
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 pt-12">
                        {aboutMeData.features.map((feature, index) => (
                            <div key={index} className="flex flex-col items-center text-center p-6 rounded-2xl bg-background/50 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-md">
                                <div className={cn("p-3 rounded-xl bg-primary/5 mb-4", feature.color)}>
                                    <HugeiconsIcon icon={feature.icon} size={32} />
                                </div>
                                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutMe;
