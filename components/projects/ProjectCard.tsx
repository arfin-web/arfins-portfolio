import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { GithubIcon, LinkSquare02Icon } from "@hugeicons/core-free-icons";
import Image from "next/image";
import Link from "next/link";

export interface Project {
    id: string;
    title: string;
    description: string;
    problem: string;
    role: string;
    responsibilities: string;
    techStack: string[];
    challenges: string;
    outcome: string;
    liveLink: string;
    githubLink: string;
    image: string;
}

const ProjectCard = ({ project, index }: { project: Project, index: number }) => {
    return (
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            {/* Project Details */}
            <div className={`flex-1 order-2 ${index === 1 ? 'lg:order-2' : 'lg:order-1'} space-y-6`}>
                <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
                    <p className="text-lg text-muted-foreground">{project.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Problem</span>
                        <p className="text-sm text-muted-foreground">{project.problem}</p>
                    </div>
                    <div className="space-y-1">
                        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Role</span>
                        <p className="text-sm text-muted-foreground">{project.role}</p>
                    </div>
                    <div className="space-y-1">
                        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Challenge</span>
                        <p className="text-sm text-muted-foreground">{project.challenges}</p>
                    </div>
                    <div className="space-y-1">
                        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Outcome</span>
                        <p className="text-sm text-muted-foreground">{project.outcome}</p>
                    </div>
                </div>

                <div className="space-y-3">
                    <h4 className="text-sm font-medium text-foreground">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs py-1 px-3">
                                {tech}
                            </Badge>
                        ))}
                    </div>
                </div>

                <div className="flex items-center gap-4 pt-2">
                    <Button asChild size="sm" className="gap-2">
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                            View Live <HugeiconsIcon icon={LinkSquare02Icon} size={16} />
                        </a>
                    </Button>
                    <Button asChild variant="outline" size="sm" className="gap-2">
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                            Source Code <HugeiconsIcon icon={GithubIcon} size={16} />
                        </a>
                    </Button>
                </div>
            </div>

            {/* Project Visual/Card Placeholder */}
            <div className={`flex-1 order-1 ${index === 1 ? "lg:order-1" : "lg:order-2"} w-full`}>
                <Link href={`/projects/${project.id}`}>
                    <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border/50 bg-background/50 shadow-xl group">
                        <Image src={project.image} alt={project.title} fill className="object-fill hover:scale-105 transition-all duration-300 ease-in-out" />
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default ProjectCard;
