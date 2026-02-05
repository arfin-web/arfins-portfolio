import { caseStudyData } from "@/data/caseStudies";
import CaseStudySection from "@/components/CaseStudySection";

const CaseStudies = () => {
    return (
        <section className="py-20 bg-secondary/5 border-y border-border/40" id="case-studies">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col mb-12 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium w-fit mx-auto md:mx-0 mb-4">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Deep Dive
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                        Technical Case Study
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl">
                        A closer look at how I tackle complex engineering problems, from architectural decisions to performance optimization.
                    </p>
                </div>

                <div className="bg-card border border-border/50 rounded-2xl p-8 md:p-12 shadow-lg">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">{caseStudyData.title}</h3>
                    <p className="text-muted-foreground text-lg mb-8">{caseStudyData.subtitle}</p>

                    <div className="space-y-10">
                        {caseStudyData.sections.map((section, index) => (
                            <CaseStudySection key={index} section={section} />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CaseStudies;
