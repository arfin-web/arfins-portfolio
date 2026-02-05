import { HugeiconsIcon } from "@hugeicons/react";
import {
    Search01Icon,
    Layers01Icon,
    BrowserIcon,
    RocketIcon
} from "@hugeicons/core-free-icons";

const workSteps = [
    {
        title: "Discovery & Strategy",
        description: "Deep dive into your goals, audience, and functional requirements to build a solid roadmap.",
        icon: Search01Icon,
        color: "text-blue-500",
        bg: "bg-blue-500/10"
    },
    {
        title: "Design & Architecture",
        description: "Crafting a scalable architecture and pixel-perfect design system tailored for performance.",
        icon: Layers01Icon,
        color: "text-purple-500",
        bg: "bg-purple-500/10"
    },
    {
        title: "Agile Development",
        description: "Iterative building with transparency, regular updates, and high-quality clean code.",
        icon: BrowserIcon,
        color: "text-emerald-500",
        bg: "bg-emerald-500/10"
    },
    {
        title: "Deployment & Success",
        description: "Final optimization, deployment to production, and ensuring everything scales seamlessly.",
        icon: RocketIcon,
        color: "text-orange-500",
        bg: "bg-orange-500/10"
    }
];

const WorkProcess = () => {
    return (
        <div className="space-y-8">
            <div className="space-y-2">
                <h3 className="text-xl font-bold">How I Work</h3>
                <p className="text-muted-foreground text-sm">
                    A streamlined, transparent process designed to turn your vision into a high-impact digital reality.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-6">
                {workSteps.map((step, index) => (
                    <div
                        key={step.title}
                        className="group relative flex flex-col items-start gap-4 p-5 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300"
                    >
                        <div className={`p-3 rounded-xl ${step.bg} ${step.color} shrink-0`}>
                            <HugeiconsIcon icon={step.icon} size={24} />
                        </div>
                        <div className="space-y-1">
                            <h4 className="font-bold text-base group-hover:text-primary transition-colors">
                                {index + 1}. {step.title}
                            </h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WorkProcess;
