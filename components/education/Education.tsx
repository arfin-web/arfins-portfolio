import { HugeiconsIcon } from "@hugeicons/react";
import {
    Mortarboard02Icon,
    Certificate01Icon,
} from "@hugeicons/core-free-icons";
import { education, certifications } from "@/data/education";
import { EducationCard, CertificationCard } from "./EducationCards";

const Education = () => {
    return (
        <section className="py-20 bg-background border-t border-border/40" id="education">
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
                            {education.map((edu, index) => (
                                <EducationCard key={index} edu={edu} />
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
                            {certifications.map((cert, index) => (
                                <CertificationCard key={index} cert={cert} />
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Education;
