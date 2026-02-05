import { skillCategories } from "@/data/skills";
import SkillCard from "./SkillCard";

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
                        <SkillCard key={category.title} category={category} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
