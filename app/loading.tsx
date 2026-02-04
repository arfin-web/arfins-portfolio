export default function Loading() {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-50"></div>

            <div className="relative flex flex-col items-center gap-6">
                {/* Spinner */}
                <div className="relative w-16 h-16">
                    <div className="absolute inset-0 border-4 border-primary/20 rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                    {/* Inner pulse */}
                    <div className="absolute inset-4 bg-primary/20 rounded-full animate-pulse"></div>
                </div>

                {/* Text animation */}
                <div className="flex flex-col items-center gap-2">
                    <p className="text-xl font-bold tracking-tight text-foreground animate-pulse">
                        Portfolio is loading
                    </p>
                    <div className="flex gap-1">
                        <span className="w-1.5 h-1.5 bg-primary/60 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                        <span className="w-1.5 h-1.5 bg-primary/60 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                        <span className="w-1.5 h-1.5 bg-primary/60 rounded-full animate-bounce"></span>
                    </div>
                </div>
            </div>

            {/* Corner decorations to match the site's aesthetic */}
            <div className="absolute top-10 left-10 w-32 h-32 border-t-2 border-l-2 border-primary/10 rounded-tl-3xl"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 border-b-2 border-r-2 border-primary/10 rounded-br-3xl"></div>
        </div>
    );
}
