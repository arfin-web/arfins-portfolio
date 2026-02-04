import ExperienceItem from "@/components/ExperienceItem";
import { experiences } from "@/data/experiences";

const Experience = () => {
    return (
        <section className="py-20 bg-background relative" id="experience">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col mb-12 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium w-fit mx-auto md:mx-0 mb-4">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Career Path
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                        Professional Experience
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl">
                        A timeline of my professional journey and key milestones in software engineering.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-8">
                    {experiences.map((exp, index) => (
                        <ExperienceItem key={index} exp={exp} index={index} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Experience;
