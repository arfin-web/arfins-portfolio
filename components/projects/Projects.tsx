import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

const Projects = () => {
    return (
        <section className="py-20 bg-secondary/10" id="projects">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col mb-12 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium w-fit mx-auto md:mx-0 mb-4">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Featured Work
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl">
                        A selection of projects where I've delivered measurable results and solved complex engineering challenges.
                    </p>
                </div>

                <div className="space-y-16">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
