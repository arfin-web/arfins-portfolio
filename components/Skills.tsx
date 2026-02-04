import { Badge } from "@/components/ui/badge";
import { skillCategories } from "@/data/skills";
import { HugeiconsIcon } from "@hugeicons/react";
import { cn } from "@/lib/utils";

const Skills = () => {
    return (
        <section className="py-24 bg-background relative border-t border-border/40 overflow-hidden" id="skills">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 opacity-50"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 opacity-50"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Technical Toolbox
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                        Core Technical Skills
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        A deep dive into the technologies, frameworks, and architectural patterns I leverage to build state-of-the-art digital products.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category) => (
                        <div
                            key={category.title}
                            className="group relative p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 flex flex-col h-full"
                        >
                            {/* Icon & Title */}
                            <div className="flex items-start justify-between mb-6">
                                <div className={cn("p-4 rounded-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3", category.bg, category.color)}>
                                    <HugeiconsIcon icon={category.icon} size={32} />
                                </div>
                                <div className="text-xs font-mono text-muted-foreground/50 opacity-0 group-hover:opacity-100 transition-opacity">
                                    // skill_category
                                </div>
                            </div>

                            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                {category.title}
                            </h3>

                            <p className="text-sm text-muted-foreground leading-relaxed mb-8 grow">
                                {category.description}
                            </p>

                            {/* Skills List */}
                            <div className="flex flex-wrap gap-4 mt-auto">
                                {category.skills.map((skill) => (
                                    <Badge
                                        key={skill}
                                        variant="secondary"
                                        className="bg-primary/10 text-base hover:text-primary transition-colors py-1.5 px-3 rounded-xl border border-border/20 font-medium"
                                    >
                                        {skill}
                                    </Badge>
                                ))}
                            </div>

                            {/* Decorative line on hover */}
                            <div className="absolute bottom-0 left-8 right-8 h-1 bg-linear-to-r from-transparent via-primary/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 rounded-full"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
