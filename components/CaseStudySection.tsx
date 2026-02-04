import { Badge } from "@/components/ui/badge";
import { HugeiconsIcon } from "@hugeicons/react";

interface CaseStudySection {
    title: string;
    icon: any;
    content: string;
    badges?: string[];
}

const CaseStudySection = ({ section }: { section: CaseStudySection }) => {
    return (
        <>
            <div className="grid md:grid-cols-12 gap-6">
                <div className="md:col-span-4 lg:col-span-3">
                    <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                        <HugeiconsIcon icon={section.icon} size={20} />
                        {section.title}
                    </div>
                </div>
                <div className="md:col-span-8 lg:col-span-9 space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                        {section.content}
                    </p>
                    {section.badges && (
                        <div className="flex flex-wrap gap-2">
                            {section.badges.map((badge) => (
                                <Badge key={badge} variant="secondary">{badge}</Badge>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div className="h-px bg-border/50 w-full" />
        </>
    );
}

export default CaseStudySection;
