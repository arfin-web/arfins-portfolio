import { HugeiconsIcon } from "@hugeicons/react";
import {
    Briefcase01Icon,
    Calendar01Icon,
    ArrowRight01Icon
} from "@hugeicons/core-free-icons";

const experiences = [
    {
        company: "TechCorp Solutions",
        role: "Senior Frontend Engineer",
        duration: "Jan 2024 - Present",
        achievements: [
            "Spearheaded the migration of a legacy jQuery dashboard to Next.js, reducing technical debt by 40%.",
            "Improved page load time by 40% (from 3.2s to 1.9s) using SSR, code splitting, and image optimization.",
            "Established a comprehensive CI/CD pipeline using GitHub Actions, cutting deployment time by 50%.",
            "Mentored 3 junior developers and introduced code review guidelines to ensure code quality."
        ]
    },
    {
        company: "Creative Web Agency",
        role: "Frontend Developer",
        duration: "Jun 2022 - Dec 2023",
        achievements: [
            "Built and maintained 10+ responsive client websites using React, Tailwind CSS, and Astro.",
            "Collaborated with backend and design teams to deliver pixel-perfect UIs for high-traffic e-commerce sites.",
            "Built reusable component library (Storybook) used across 5 projects, speeding up development cycles by 30%.",
            "Integrated third-party APIs (Stripe, Contentful) to enable dynamic content and secure payments."
        ]
    },
    // Add more as needed
];

const Experience = () => {
    return (
        <section className="py-20 bg-background relative">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col mb-12 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium w-fit mx-auto md:mx-0 mb-4">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Career Path
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                        Professional Experience
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl">
                        A timeline of my professional journey and key milestones in software engineering.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-8">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative pl-8 md:pl-0">
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
                                                    <HugeiconsIcon icon={ArrowRight01Icon} size={16} className="mt-1 flex-shrink-0 text-primary/60" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Experience;
