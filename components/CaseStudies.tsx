import { Badge } from "@/components/ui/badge";
import { HugeiconsIcon } from "@hugeicons/react";
import {
    Analytics01Icon,
    Settings01Icon,
    SafeIcon,
    Tap01Icon,
    CheckmarkCircle01Icon
} from "@hugeicons/core-free-icons";

const CaseStudies = () => {
    return (
        <section className="py-20 bg-secondary/5 border-y border-border/40">
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
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">Scaling a Real-time Collaboration Engine</h3>
                    <p className="text-muted-foreground text-lg mb-8">NexTask Enterprise Platform</p>

                    <div className="space-y-10">

                        {/* Section 1 */}
                        <div className="grid md:grid-cols-12 gap-6">
                            <div className="md:col-span-4 lg:col-span-3">
                                <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                                    <HugeiconsIcon icon={Analytics01Icon} size={20} />
                                    Business Problem
                                </div>
                            </div>
                            <div className="md:col-span-8 lg:col-span-9">
                                <p className="text-muted-foreground leading-relaxed">
                                    Users were experiencing significant data desynchronization when multiple team members edited tasks simultaneously.
                                    The existing polling-based architecture resulted in high variance latency (2-5s) and server load spikes during peak hours,
                                    leading to customer churn.
                                </p>
                            </div>
                        </div>

                        <div className="h-px bg-border/50 w-full" />

                        {/* Section 2 */}
                        <div className="grid md:grid-cols-12 gap-6">
                            <div className="md:col-span-4 lg:col-span-3">
                                <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                                    <HugeiconsIcon icon={Settings01Icon} size={20} />
                                    Technical Decisions
                                </div>
                            </div>
                            <div className="md:col-span-8 lg:col-span-9 space-y-4">
                                <p className="text-muted-foreground leading-relaxed">
                                    Migrated from HTTP polling to <span className="text-foreground font-medium">WebSockets (Socket.io)</span> for bi-directional real-time communication.
                                    Implemented an <span className="text-foreground font-medium">Optimistic UI</span> pattern with React Query to ensure immediate feedback for user actions.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <Badge variant="secondary">WebSockets</Badge>
                                    <Badge variant="secondary">Redis Pub/Sub</Badge>
                                    <Badge variant="secondary">Optimistic UI</Badge>
                                    <Badge variant="secondary">Operational Transformation</Badge>
                                </div>
                            </div>
                        </div>

                        <div className="h-px bg-border/50 w-full" />

                        {/* Section 3 */}
                        <div className="grid md:grid-cols-12 gap-6">
                            <div className="md:col-span-4 lg:col-span-3">
                                <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                                    <HugeiconsIcon icon={SafeIcon} size={20} />
                                    Trade-offs
                                </div>
                            </div>
                            <div className="md:col-span-8 lg:col-span-9">
                                <p className="text-muted-foreground leading-relaxed">
                                    Moving to WebSockets introduced stateful connections, complicating scaling. We accepted the complexity of managing
                                    sticky sessions and connection recovery in exchange for the sub-100ms latency required for a seamless collaborative experience.
                                    We mitigated the complexity by using Redis as a dedicated adapter for socket events.
                                </p>
                            </div>
                        </div>

                        <div className="h-px bg-border/50 w-full" />

                        {/* Section 4 */}
                        <div className="grid md:grid-cols-12 gap-6">
                            <div className="md:col-span-4 lg:col-span-3">
                                <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                                    <HugeiconsIcon icon={Tap01Icon} size={20} />
                                    Performance
                                </div>
                            </div>
                            <div className="md:col-span-8 lg:col-span-9">
                                <p className="text-muted-foreground leading-relaxed">
                                    Reduced server load by 60% by eliminating redundant poll requests. Synchronisation latency dropped to <span className="text-foreground font-medium">&lt;50ms</span>.
                                    Optimistic updates improved perceived performance to 0ms for the active user.
                                </p>
                            </div>
                        </div>

                        <div className="h-px bg-border/50 w-full" />

                        {/* Section 5 */}
                        <div className="grid md:grid-cols-12 gap-6">
                            <div className="md:col-span-4 lg:col-span-3">
                                <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                                    <HugeiconsIcon icon={CheckmarkCircle01Icon} size={20} />
                                    Results
                                </div>
                            </div>
                            <div className="md:col-span-8 lg:col-span-9">
                                <p className="text-muted-foreground leading-relaxed">
                                    The new collaboration engine became a key selling point, contributing to a <span className="text-foreground font-medium">15% increase in enterprise user acquisition</span> in Q1.
                                    Customer support tickets related to "data loss" or "sync issues" dropped to near zero.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default CaseStudies;
