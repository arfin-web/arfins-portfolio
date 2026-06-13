import { DashboardCircleEditFreeIcons, Layers01Icon, RocketIcon, SparklesIcon } from "@hugeicons/core-free-icons";

export const heroData = {
    greeting: "Hi, I'm",
    name: "Arfin Noor Rahman",
    role: "Full-Stack Engineer",
    description: "I design and build AI-powered products that transform complex business workflows into scalable, high-impact software.",
    techStackPartOne: [
        { src: "https://www.svgrepo.com/show/349419/javascript.svg", alt: "javascript" },
        { src: "https://www.svgrepo.com/show/452092/react.svg", alt: "reactjs" },
        { src: "https://www.svgrepo.com/show/354113/nextjs-icon.svg", alt: "nextjs" },
        { src: "https://www.svgrepo.com/show/354431/tailwindcss-icon.svg", alt: "tailwindcss" },
        { src: "https://www.svgrepo.com/show/349540/typescript.svg", alt: "typescript" },
    ],
    techStackPartTwo: [
        { src: "https://www.svgrepo.com/show/439238/nodejs.svg", alt: "nodejs" },
        { src: "https://www.svgrepo.com/show/439268/postgresql.svg", alt: "postgresql" },
        { src: "https://www.svgrepo.com/show/354238/python.svg", alt: "python" },
        { src: "https://www.svgrepo.com/show/330413/fastapi.svg", alt: "fastapi" },
        { src: "https://www.svgrepo.com/show/448266/aws.svg", alt: "aws" },
    ],
    floatingCards: [
        {
            title: "AI-Powered Products",
            subtitle:
                "Building intelligent SaaS applications with LLMs, AI agents, and automation workflows.",
            icon: SparklesIcon,
            position:
                "top-0 -right-10 -translate-x-1/2 -translate-y-1/2",
        },
        {
            title: "Product Engineering",
            subtitle:
                "Transforming business requirements into scalable software systems and user-centric products.",
            icon: DashboardCircleEditFreeIcons,
            position:
                "bottom-0 left-36 -translate-x-1/2 translate-y-1/2",
        },
        {
            title: "Scalable Architecture",
            subtitle:
                "Designing maintainable full-stack applications built for growth and long-term success.",
            icon: Layers01Icon,
            position:
                "left-0 right-120 bottom-0.5 top-1/2 -translate-x-1/2 -translate-y-1/2",
        },
        {
            title: "Automation & Efficiency",
            subtitle:
                "Leveraging AI and workflow automation to eliminate friction and create business leverage.",
            icon: RocketIcon,
            position:
                "right-16 top-1/2 translate-x-1/2 -translate-y-1/2",
        },
    ]

};
