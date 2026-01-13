import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import {
    News01Icon,
    ArrowRight01Icon,
    Calendar03Icon,
    Time04Icon
} from "@hugeicons/core-free-icons";

const blogs = [
    {
        title: "Mastering State Management in Next.js 14",
        excerpt: "A deep dive into Server Actions, React Query, and Zustand to build scalable and performant applications.",
        date: "Dec 12, 2024",
        readTime: "8 min read",
        link: "#"
    },
    {
        title: "Building Accessible Components with Radix UI",
        excerpt: "How to ensure your React components are usable by everyone, covering focus management, ARIA labels, and keyboard navigation.",
        date: "Nov 28, 2024",
        readTime: "6 min read",
        link: "#"
    },
    {
        title: "Optimizing Web Performance: Beyond the Basics",
        excerpt: "Practical techniques to improve Core Web Vitals, from advanced image optimization to code splitting strategies.",
        date: "Oct 15, 2024",
        readTime: "10 min read",
        link: "#"
    }
];

const Blog = () => {
    return (
        <section className="py-20 bg-background border-t border-border/40">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col mb-12 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium w-fit mx-auto md:mx-0 mb-4">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Writing
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                        Latest Articles
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl">
                        Thoughts on frontend development, performance patterns, and building better user experiences.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((post, index) => (
                        <div key={index} className="flex flex-col h-full bg-card border border-border/50 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-md group">
                            <div className="p-6 flex flex-col h-full">
                                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                                    <div className="flex items-center gap-1">
                                        <HugeiconsIcon icon={Calendar03Icon} size={14} />
                                        {post.date}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <HugeiconsIcon icon={Time04Icon} size={14} />
                                        {post.readTime}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                    <a href={post.link} className="focus:outline-none">
                                        <span className="absolute inset-0" aria-hidden="true" />
                                        {post.title}
                                    </a>
                                </h3>

                                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                                    {post.excerpt}
                                </p>

                                <div className="mt-auto pt-4 border-t border-border/40 flex items-center text-primary font-medium text-sm">
                                    Read Article
                                    <HugeiconsIcon icon={ArrowRight01Icon} size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center md:text-left">
                    <Button variant="outline" className="gap-2">
                        View All Articles
                        <HugeiconsIcon icon={News01Icon} size={16} />
                    </Button>
                </div>

            </div>
        </section>
    );
};

export default Blog;
