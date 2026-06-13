import {
    CodeCircleIcon,
    Layers01Icon,
    Database01Icon,
    AiScanIcon,
    TouchInteraction01Icon,
    CloudIcon,
} from "@hugeicons/core-free-icons";

export const skillCategories = [
    {
        title: "Product Engineering",
        icon: CodeCircleIcon,
        skills: [
            "Product Discovery",
            "PRD Analysis",
            "System Design",
            "Technical Planning",
            "Feature Architecture",
            "Agile Development"
        ],
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        description: "Transforming business requirements into scalable software products."
    },
    {
        title: "Frontend Systems",
        icon: TouchInteraction01Icon,
        skills: [
            "Next.js",
            "React",
            "TypeScript",
            "Redux Toolkit",
            "Zustand",
            "React Query"
        ],
        color: "text-purple-500",
        bg: "bg-purple-500/10",
        description: "Building fast, scalable, and user-focused application experiences."
    },
    {
        title: "Backend & Data",
        icon: Database01Icon,
        skills: [
            "FastAPI",
            "Node.js",
            "Express.js",
            "Prisma",
            "PostgreSQL",
            "MongoDB"
        ],
        color: "text-green-500",
        bg: "bg-green-500/10",
        description: "Designing APIs, services, and data architectures that scale."
    },
    {
        title: "AI & Automation",
        icon: AiScanIcon,
        skills: [
            "LLM Integrations",
            "AI Agents",
            "LangChain",
            "Vercel AI SDK",
            "n8n",
            "Prompt Engineering"
        ],
        color: "text-cyan-500",
        bg: "bg-cyan-500/10",
        description: "Creating intelligent systems that automate workflows and drive efficiency."
    },
    {
        title: "SaaS Architecture",
        icon: Layers01Icon,
        skills: [
            "Multi-Tenant Systems",
            "Authentication",
            "Role-Based Access",
            "API Design",
            "Clean Architecture",
            "Modular Systems"
        ],
        color: "text-orange-500",
        bg: "bg-orange-500/10",
        description: "Engineering maintainable platforms built for long-term growth."
    },
    {
        title: "Infrastructure & Deployment",
        icon: CloudIcon,
        skills: [
            "Docker",
            "AWS",
            "VPS",
            "Coolify",
            "Dokploy",
            "Vercel"
        ],
        color: "text-pink-500",
        bg: "bg-pink-500/10",
        description: "Deploying and managing production-ready applications with confidence."
    }
];