import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { GithubIcon, GlobeIcon } from "@hugeicons/core-free-icons";

interface ProjectHeroProps {
    title: string;
    description: string;
    image: string;
    liveLink: string;
    githubLink: string;
    techStack: string[];
}

const ProjectHero = ({ title, description, image, liveLink, githubLink, techStack }: ProjectHeroProps) => {
    return (
        <section className="relative pt-32 pb-16 overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full -z-10">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] opacity-50" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] opacity-50" />
            </div>

            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                                {title}
                            </h1>
                            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                                {description}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {techStack?.map((tech) => (
                                <Badge key={tech} variant="secondary" className="bg-primary/5 text-primary border-primary/10 px-3 py-1">
                                    {tech}
                                </Badge>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <Button size="lg" className="rounded-full px-8 group" asChild>
                                <a href={liveLink} target="_blank" rel="noopener noreferrer">
                                    Visit Live Site
                                    <HugeiconsIcon icon={GlobeIcon} size={20} className="ml-2 group-hover:rotate-12 transition-transform" />
                                </a>
                            </Button>
                            <Button size="lg" variant="outline" className="rounded-full px-8 group" asChild>
                                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                                    View Source
                                    <HugeiconsIcon icon={GithubIcon} size={20} className="ml-2 group-hover:scale-110 transition-transform" />
                                </a>
                            </Button>
                        </div>
                    </div>

                    <div className="relative aspect-video rounded-3xl overflow-hidden border border-border/50 shadow-2xl animate-in fade-in slide-in-from-right duration-700">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-fill"
                            priority
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-background/40 to-transparent" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectHero;
