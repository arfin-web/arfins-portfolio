import { HugeiconsIcon } from "@hugeicons/react";
import { Brain01Icon, Task01Icon, AlertCircleIcon } from "@hugeicons/core-free-icons";

interface ProjectDetailsContentProps {
    problem: string;
    responsibilities: string;
    challenges: string;
}

const ProjectDetailsContent = ({ problem, responsibilities, challenges }: ProjectDetailsContentProps) => {
    return (
        <section className="py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-16">
                    <div className="space-y-12">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-500 text-sm font-medium">
                                <HugeiconsIcon icon={AlertCircleIcon} size={16} />
                                The Problem
                            </div>
                            <h2 className="text-3xl font-bold">What was missing?</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                                {problem}
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-sm font-medium">
                                <HugeiconsIcon icon={Task01Icon} size={16} />
                                Responsibilities
                            </div>
                            <h2 className="text-3xl font-bold">My Contribution</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {responsibilities}
                            </p>
                        </div>
                    </div>

                    <div className="bg-card border border-border/50 rounded-3xl p-8 lg:p-12 shadow-sm space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-sm font-medium">
                            <HugeiconsIcon icon={Brain01Icon} size={16} />
                            Key Challenges
                        </div>
                        <h2 className="text-3xl font-bold">Overcoming Hurdles</h2>
                        <div className="prose prose-p:text-muted-foreground prose-p:text-lg max-w-none">
                            <p className="whitespace-pre-line italic border-l-4 border-amber-500/30 pl-6 leading-relaxed">
                                "{challenges}"
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectDetailsContent;
