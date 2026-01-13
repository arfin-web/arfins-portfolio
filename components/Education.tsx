import { Badge } from "@/components/ui/badge";
import { HugeiconsIcon } from "@hugeicons/react";
import {
    Mortarboard02Icon,
    Certificate01Icon,
    Tick02Icon
} from "@hugeicons/core-free-icons";

const educationData = [
    {
        type: "Degree",
        title: "BA in English",
        institution: "Prime University",
        year: "Graduated", // User didn't specify year, keeping generic
        icon: Mortarboard02Icon,
    }
];

const certificationsData = [
    {
        title: "Responsive Web Design Certification",
        issuer: "freeCodeCamp / Similar Provider", // Placeholder as specific name wasn't given
        year: "2023",
        icon: Certificate01Icon
    },
    {
        title: "Full Stack Development Bootcamp",
        issuer: "Udemy / Coursera", // Placeholder
        year: "2022",
        icon: Certificate01Icon
    }
];

const Education = () => {
    return (
        <section className="py-20 bg-background border-t border-border/40">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col mb-12 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium w-fit mx-auto md:mx-0 mb-4">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Credentials
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                        Education & Certifications
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl">
                        My academic background and professional certifications that support my technical expertise.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">

                    {/* Education Column */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold flex items-center gap-2">
                            <HugeiconsIcon icon={Mortarboard02Icon} size={24} className="text-primary" />
                            Formal Education
                        </h3>
                        <div className="bg-card border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-colors shadow-sm">
                            {educationData.map((edu, index) => (
                                <div key={index} className="flex gap-4">
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
                            ))}
                        </div>
                    </div>

                    {/* Certifications Column */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold flex items-center gap-2">
                            <HugeiconsIcon icon={Certificate01Icon} size={24} className="text-primary" />
                            Certifications
                        </h3>
                        <div className="space-y-4">
                            {certificationsData.map((cert, index) => (
                                <div key={index} className="bg-card border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-colors shadow-sm flex items-start gap-4">
                                    <div className="mt-1 bg-green-500/10 p-2 rounded-lg h-fit">
                                        <HugeiconsIcon icon={Tick02Icon} size={20} className="text-green-500" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-foreground">{cert.title}</h4>
                                        <p className="text-muted-foreground">{cert.issuer}</p>
                                        <span className="text-xs text-muted-foreground mt-1 block">{cert.year}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Education;
