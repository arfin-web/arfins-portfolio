import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";

const ProjectsPage = () => {
    return (
        <section className="py-20 bg-secondary/10 mt-5">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center justify-center mb-12 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium w-fit mx-auto md:mx-0 mb-4">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        All Projects
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                        All Projects
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl">
                        Here are some of my projects that I have worked on.
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

export default ProjectsPage;
