import { HugeiconsIcon } from "@hugeicons/react";
import {
    Briefcase01Icon,
    Calendar01Icon,
    ArrowRight01Icon
} from "@hugeicons/core-free-icons";

interface Experience {
    company: string;
    role: string;
    duration: string;
    achievements: string[];
}

const ExperienceItem = ({ exp, index }: { exp: Experience, index: number }) => {
    return (
        <div className="relative pl-8 md:pl-0">
            {/* Timeline Line (Hidden on mobile for simplicity or adjusted) */}
            <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-border -translate-x-1/2"></div>

            <div className={`md:flex items-start justify-between gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} group`}>

                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background -translate-x-[5px] md:-translate-x-1/2 mt-1.5 z-10 group-hover:scale-125 transition-transform"></div>

                {/* Date - Desktop */}
                <div className={`hidden md:block w-1/2 ${index % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'} pt-1`}>
                    <div className="inline-flex items-center gap-2 text-muted-foreground font-medium">
                        <HugeiconsIcon icon={Calendar01Icon} size={16} />
                        {exp.duration}
                    </div>
                </div>

                {/* Content Card */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'pl-12' : 'pr-12'}`}>
                    <div className="bg-card border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-colors shadow-sm">
                        {/* Date - Mobile */}
                        <div className="md:hidden flex items-center gap-2 text-sm text-muted-foreground mb-2">
                            <HugeiconsIcon icon={Calendar01Icon} size={14} />
                            {exp.duration}
                        </div>

                        <div className="flex items-center gap-2 mb-1">
                            <HugeiconsIcon icon={Briefcase01Icon} size={20} className="text-primary" />
                            <h3 className="text-xl font-bold text-foreground">{exp.company}</h3>
                        </div>
                        <h4 className="text-lg font-medium text-primary mb-4">{exp.role}</h4>

                        <ul className="space-y-3">
                            {exp.achievements.map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm leading-relaxed">
                                    <HugeiconsIcon icon={ArrowRight01Icon} size={16} className="mt-1 shrink-0 text-primary/60" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExperienceItem;
