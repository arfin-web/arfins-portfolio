import { HugeiconsIcon } from "@hugeicons/react";
import {
    ArrowRight01Icon,
    Calendar03Icon,
    Time04Icon
} from "@hugeicons/core-free-icons";

interface Blog {
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    link: string;
}

const BlogCard = ({ post }: { post: Blog }) => {
    return (
        <div className="flex flex-col h-full bg-card border border-border/50 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-md group">
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

                <p className="text-muted-foreground text-sm leading-relaxed mb-6 grow">
                    {post.excerpt}
                </p>

                <div className="mt-auto pt-4 border-t border-border/40 flex items-center text-primary font-medium text-sm">
                    Under Construction
                    <HugeiconsIcon icon={ArrowRight01Icon} size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
            </div>
        </div>
    );
}

export default BlogCard;
