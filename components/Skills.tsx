import { Badge } from "@/components/ui/badge";

const skillCategories = [
    {
        title: "Languages",
        skills: ["JavaScript", "TypeScript"],
    },
    {
        title: "Frameworks",
        skills: ["React", "Next.js", "Astro"],
    },
    {
        title: "Styling",
        skills: ["Tailwind CSS", "CSS Modules", "SCSS"],
    },
    {
        title: "State & Data",
        skills: ["Zustand", "React Query", "Redux"],
    },
    {
        title: "Backend & APIs",
        skills: ["Supabase", "REST API", "Basic SQL"],
    },
    {
        title: "Tools",
        skills: ["Git", "Vercel", "Figma", "CI/CD"],
    },
    {
        title: "Performance & SEO",
        skills: ["Lighthouse", "SSR", "SSG", "Code Splitting"],
    },
];

const Skills = () => {
    return (
        <section className="py-20 bg-background relative border-t border-border/40">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col mb-12 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                        Core Skills
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl">
                        A comprehensive overview of my technical expertise and the tools I use to build modern, scalable web applications.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {skillCategories.map((category) => (
                        <div
                            key={category.title}
                            className="p-6 rounded-xl border border-border/50 bg-card hover:border-primary/50 transition-colors duration-300 group"
                        >
                            <h3 className="text-lg font-semibold mb-4 text-primary group-hover:text-primary/80 transition-colors">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <Badge
                                        key={skill}
                                        variant="secondary"
                                        className="bg-secondary/50 hover:bg-secondary text-sm font-normal px-3 py-1 rounded-md"
                                    >
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
