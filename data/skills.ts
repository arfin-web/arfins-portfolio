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
        title: "Frontend Development",
        icon: CodeCircleIcon,
        skills: ["React 19", "Next.js 16", "TypeScript", "ES6+", "Redux Toolkit", "Zustand", "React Query"],
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        description: "Building responsive, high-performance user interfaces."
    },
    {
        title: "Backend & Database",
        icon: Database01Icon,
        skills: ["Node.js", "Express.js", "Prisma", "PostgreSQL", "MongoDB", "Supabase"],
        color: "text-green-500",
        bg: "bg-green-500/10",
        description: "Designing scalable server-side logic and robust databases."
    },
    {
        title: "Styling & UI",
        icon: TouchInteraction01Icon,
        skills: ["Tailwind CSS 4", "Shadcn UI", "Minimal Animations", "Responsive Design"],
        color: "text-purple-500",
        bg: "bg-purple-500/10",
        description: "Crafting beautiful, interaction-rich web experiences."
    },
    {
        title: "Architecture & Tools",
        icon: Layers01Icon,
        skills: ["Clean Architecture", "Modular Design", "Git", "Vite", "Turbopack"],
        color: "text-orange-500",
        bg: "bg-orange-500/10",
        description: "Ensuring code maintainability and efficient workflows."
    },
    {
        title: "AI & Modern Tech",
        icon: AiScanIcon,
        skills: ["Gemini AI", "Vercel AI SDK", "Prompt Engineering", "PDF Processing"],
        color: "text-cyan-500",
        bg: "bg-cyan-500/10",
        description: "Integrating intelligent features and modern paradigms."
    },
    {
        title: "Deployment & Cloud",
        icon: CloudIcon,
        skills: ["Vercel", "Neon Serverless", "VPS", "Coolify", "Edge Functions"],
        color: "text-pink-500",
        bg: "bg-pink-500/10",
        description: "Automating deployments and managing cloud infrastructure."
    }
];
