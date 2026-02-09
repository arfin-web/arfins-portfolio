import { HugeiconsIcon } from "@hugeicons/react";
import { UserIcon, ChampionIcon } from "@hugeicons/core-free-icons";

interface ProjectInfoGridProps {
    role: string;
    outcome: string;
}

const ProjectInfoGrid = ({ role, outcome }: ProjectInfoGridProps) => {
    return (
        <section className="py-12 border-y border-border/40 bg-secondary/5">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border/50 shadow-sm">
                        <div className="p-3 rounded-xl bg-primary/10 text-primary">
                            <HugeiconsIcon icon={UserIcon} size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-1">My Role</h3>
                            <p className="text-muted-foreground">{role}</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border/50 shadow-sm md:col-span-1 lg:col-span-2">
                        <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-500">
                            <HugeiconsIcon icon={ChampionIcon} size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-1">Outcome & Results</h3>
                            <p className="text-muted-foreground">{outcome}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectInfoGrid;
