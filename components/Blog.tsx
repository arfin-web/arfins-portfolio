import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { News01Icon } from "@hugeicons/core-free-icons";
import { blogs } from "@/data/blogs";
import BlogCard from "@/components/BlogCard";

const Blog = () => {
    return (
        <section className="py-20 bg-background border-t border-border/40" id="blog">
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
                        <BlogCard key={index} post={post} />
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
