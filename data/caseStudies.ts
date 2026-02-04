import {
    Analytics01Icon,
    Settings01Icon,
    SafeIcon,
    Tap01Icon,
    CheckmarkCircle01Icon
} from "@hugeicons/core-free-icons";

export const caseStudyData = {
    title: "Scaling a Real-time Collaboration Engine",
    subtitle: "NexTask Enterprise Platform",
    sections: [
        {
            title: "Business Problem",
            icon: Analytics01Icon,
            content: "Users were experiencing significant data desynchronization when multiple team members edited tasks simultaneously. The existing polling-based architecture resulted in high variance latency (2-5s) and server load spikes during peak hours, leading to customer churn."
        },
        {
            title: "Technical Decisions",
            icon: Settings01Icon,
            content: "Migrated from HTTP polling to WebSockets (Socket.io) for bi-directional real-time communication. Implemented an Optimistic UI pattern with React Query to ensure immediate feedback for user actions.",
            badges: ["WebSockets", "Redis Pub/Sub", "Optimistic UI", "Operational Transformation"]
        },
        {
            title: "Trade-offs",
            icon: SafeIcon,
            content: "Moving to WebSockets introduced stateful connections, complicating scaling. We accepted the complexity of managing sticky sessions and connection recovery in exchange for the sub-100ms latency required for a seamless collaborative experience. We mitigated the complexity by using Redis as a dedicated adapter for socket events."
        },
        {
            title: "Performance",
            icon: Tap01Icon,
            content: "Reduced server load by 60% by eliminating redundant poll requests. Synchronisation latency dropped to <50ms. Optimistic updates improved perceived performance to 0ms for the active user."
        },
        {
            title: "Results",
            icon: CheckmarkCircle01Icon,
            content: "The new collaboration engine became a key selling point, contributing to a 15% increase in enterprise user acquisition in Q1. Customer support tickets related to \"data loss\" or \"sync issues\" dropped to near zero."
        }
    ]
};
