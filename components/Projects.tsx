import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { GithubIcon, LinkSquare02Icon } from "@hugeicons/core-free-icons";

const projects = [
    {
        title: "NexTask - Enterprise Project Management SaaS",
        description: "A comprehensive project management solution designed for remote teams to streamline collaboration.",
        problem: "Existing tools were clunky and lacked real-time updates, leading to communication gaps in distributed teams.",
        role: "Lead Frontend Engineer",
        responsibilities: "Architected the frontend, implemented real-time features using WebSockets, and optimized state management.",
        techStack: ["Next.js", "TypeScript", "Redux Toolkit", "Socket.io", "Tailwind CSS"],
        challenges: "Handling real-time state synchronization across multiple users without performance degradation.",
        outcome: "Increased team productivity by 40% for beta users; reduced load times by 60% compared to legacy tool.",
        liveLink: "#",
        githubLink: "#",
        image: "/project-nextask.jpg" // Placeholder
    },
    {
        title: "ShopFlow - Headless E-commerce Platform",
        description: "A high-performance, headless e-commerce storefront built for speed and conversion optimization.",
        problem: "The client's previous monolithic site had slow page loads (3s+) and poor mobile UX, hurting sales.",
        role: "Frontend Developer",
        responsibilities: "Built the storefront using Astro for performance, integrated Stripe for payments, and headless CMS for content.",
        techStack: ["Astro", "React", "Stripe API", "Sanity CMS", "Vercel"],
        challenges: "Ensuring seamless cart state persistence across static pages and dynamic checkout flow.",
        outcome: "Achieved a perfect 100 Lighthouse Performance score; conversion rate increased by 25% post-launch.",
        liveLink: "#",
        githubLink: "#",
        image: "/project-shopflow.jpg" // Placeholder
    },
    {
        title: "DataViz - Analytics Dashboard",
        description: "An interactive analytics dashboard for visualizing complex datasets for financial institutions.",
        problem: "Users struggled to interpret raw data; existing charts were static and non-interactive.",
        role: "UI Engineer",
        responsibilities: "Developed reusable chart components, implemented data filtering logic, and ensured accessibility.",
        techStack: ["React", "D3.js", "TanStack Query", "Shadcn UI", "Tailwind"],
        challenges: "Rendering thousands of data points smoothly without freezing the UI.",
        outcome: "Enabled users to process 1M+ data points with sub-second interaction latency.",
        liveLink: "#",
        githubLink: "#",
        image: "/project-dataviz.jpg" // Placeholder
    },
];

const Projects = () => {
    return (
        <section className="py-20 bg-secondary/10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col mb-12 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium w-fit mx-auto md:mx-0 mb-4">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Featured Work
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl">
                        A selection of projects where I've delivered measurable results and solved complex engineering challenges.
                    </p>
                </div>

                <div className="space-y-16">
                    {projects.map((project, index) => (
                        <div key={project.title} className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">

                            {/* Project Details */}
                            <div className="flex-1 order-2 lg:order-1 space-y-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
                                    <p className="text-lg text-muted-foreground">{project.description}</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Problem</span>
                                        <p className="text-sm text-muted-foreground">{project.problem}</p>
                                    </div>
                                    <div className="space-y-1">
                                        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Role</span>
                                        <p className="text-sm text-muted-foreground">{project.role}</p>
                                    </div>
                                    <div className="space-y-1">
                                        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Challenge</span>
                                        <p className="text-sm text-muted-foreground">{project.challenges}</p>
                                    </div>
                                    <div className="space-y-1">
                                        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Outcome</span>
                                        <p className="text-sm text-muted-foreground">{project.outcome}</p>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <h4 className="text-sm font-medium text-foreground">Tech Stack</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.map((tech) => (
                                            <Badge key={tech} variant="outline" className="text-xs py-1 px-3">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 pt-2">
                                    <Button asChild size="sm" className="gap-2">
                                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                                            View Live <HugeiconsIcon icon={LinkSquare02Icon} size={16} />
                                        </a>
                                    </Button>
                                    <Button asChild variant="outline" size="sm" className="gap-2">
                                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                            Source Code <HugeiconsIcon icon={GithubIcon} size={16} />
                                        </a>
                                    </Button>
                                </div>
                            </div>

                            {/* Project Visual/Card Placeholder */}
                            <div className="flex-1 order-1 lg:order-2 w-full">
                                <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border/50 bg-background/50 shadow-xl group">
                                    {/* Placeholder for project image */}
                                    <div className="absolute inset-0 flex items-center justify-center bg-secondary/20 group-hover:bg-secondary/30 transition-colors">
                                        <span className="text-muted-foreground/50 font-medium">Project Preview: {project.title}</span>
                                    </div>
                                    {/* If real images exist: <Image src={project.image} alt={project.title} fill className="object-cover" /> */}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
