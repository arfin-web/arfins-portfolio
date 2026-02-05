import { Badge } from "@/components/ui/badge";
import { HugeiconsIcon } from "@hugeicons/react";
import {
    Certificate01Icon,
    Tick02Icon
} from "@hugeicons/core-free-icons";

interface Education {
    type: string;
    title: string;
    institution: string;
    year: string;
    icon: any;
}

interface Certification {
    title: string;
    issuer: string;
    year: string;
    icon: any;
}

export const EducationCard = ({ edu }: { edu: Education }) => {
    return (
        <div className="flex gap-4">
            <div className="mt-1 bg-primary/10 p-2 rounded-lg h-fit">
                <HugeiconsIcon icon={edu.icon} size={24} className="text-primary" />
            </div>
            <div>
                <h4 className="text-lg font-bold text-foreground">{edu.title}</h4>
                <p className="text-muted-foreground font-medium">{edu.institution}</p>
                <Badge variant="secondary" className="mt-2 text-xs font-normal">
                    {edu.year}
                </Badge>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                    Developed strong communication and analytical skills, which translate effectively into writing clean documentation and collaborating with cross-functional teams.
                </p>
            </div>
        </div>
    );
}

export const CertificationCard = ({ cert }: { cert: Certification }) => {
    return (
        <div className="bg-card border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-colors shadow-sm flex items-start gap-4">
            <div className="mt-1 bg-green-500/10 p-2 rounded-lg h-fit">
                <HugeiconsIcon icon={Tick02Icon} size={20} className="text-green-500" />
            </div>
            <div>
                <h4 className="text-lg font-bold text-foreground">{cert.title}</h4>
                <p className="text-muted-foreground">{cert.issuer}</p>
                <span className="text-xs text-muted-foreground mt-1 block">{cert.year}</span>
            </div>
        </div>
    );
}
