import { projects } from "@/data/projects";
import ProjectHero from "@/components/projects/ProjectHero";
import ProjectInfoGrid from "@/components/projects/ProjectInfoGrid";
import ProjectDetailsContent from "@/components/projects/ProjectDetailsContent";
import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon } from "@hugeicons/core-free-icons";
import Link from "next/link";

export default async function ProjectDetailsPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const project = projects.find((p) => p.id === id);
    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-2xl font-bold">Project not found</h1>
            </div>
        );
    }
    return (
        <div className="min-h-screen bg-background">
            <ProjectHero
                title={project.title}
                description={project.description}
                image={project.image}
                liveLink={project.liveLink}
                githubLink={project.githubLink}
                techStack={project.techStack}
            />

            <ProjectInfoGrid
                role={project.role}
                outcome={project.outcome}
            />

            <ProjectDetailsContent
                problem={project.problem}
                responsibilities={project.responsibilities}
                challenges={project.challenges}
            />

            {/* Bottom CTA */}
            <section className="py-24 bg-secondary/5 border-t border-border/40">
                <div className="container mx-auto px-4 md:px-6 text-center space-y-8">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                        Like what you see?
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        I&apos;m always open to discussing new projects and technical challenges.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button size="lg" className="rounded-full px-8" asChild>
                            <Link href="/#contact">Get In Touch</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}