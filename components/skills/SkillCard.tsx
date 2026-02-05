import { Badge } from "@/components/ui/badge";
import { HugeiconsIcon } from "@hugeicons/react";
import { cn } from "@/lib/utils";

interface SkillCardProps {
    category: {
        title: string;
        icon: any;
        skills: string[];
        color: string;
        bg: string;
        description: string;
    };
}

const SkillCard = ({ category }: SkillCardProps) => {
    return (
        <div
            className="group relative p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 flex flex-col h-full"
        >
            {/* Icon & Title */}
            <div className="flex items-start justify-between mb-6">
                <div className={cn("p-4 rounded-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3", category.bg, category.color)}>
                    <HugeiconsIcon icon={category.icon} size={32} />
                </div>
                <div className="text-xs font-mono text-muted-foreground/50 opacity-0 group-hover:opacity-100 transition-opacity">
                    // skill_category
                </div>
            </div>

            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {category.title}
            </h3>

            <p className="text-sm text-muted-foreground leading-relaxed mb-8 grow">
                {category.description}
            </p>

            {/* Skills List */}
            <div className="flex flex-wrap gap-4 mt-auto">
                {category.skills.map((skill) => (
                    <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-primary/10 text-base hover:text-primary transition-colors py-1.5 px-3 rounded-xl border border-border/20 font-medium"
                    >
                        {skill}
                    </Badge>
                ))}
            </div>

            {/* Decorative line on hover */}
            <div className="absolute bottom-0 left-8 right-8 h-1 bg-linear-to-r from-transparent via-primary/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 rounded-full"></div>
        </div>
    );
};

export default SkillCard;
