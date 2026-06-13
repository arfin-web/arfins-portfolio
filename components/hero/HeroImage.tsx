import Image from "next/image";
import { heroData } from "@/data/hero";
import { HugeiconsIcon } from "@hugeicons/react";

const HeroImage = () => {
    return (
        <div className="relative flex items-center justify-center order-1 lg:order-2 min-h-[500px] w-full select-none">

            {/* 1. Dynamic Floating Cards */}
            {heroData?.floatingCards.map((card, index) => {
                // Alternates slight rotations for a natural, dynamic floating feel
                const rotationClass = index % 2 === 0 ? "hover:rotate-1" : "hover:-rotate-1";

                return (
                    <div
                        key={index}
                        className={`absolute ${card.position} z-20 hidden md:block transition-all duration-700 animate-float`}
                        style={{ animationDelay: `${index * 1.5}s` }}
                    >
                        <div
                            className={`group relative w-[300px] rounded-2xl p-[1px] bg-gradient-to-b from-white/30 to-white/5 backdrop-blur-xl shadow-[-10px_10px_30px_rgba(0,0,0,0.08)] transition-all duration-500 ease-out hover:-translate-y-3 ${rotationClass} hover:shadow-[-15px_20px_40px_rgba(0,0,0,0.15)]`}
                        >
                            {/* Inner Card Content */}
                            <div className="relative h-full w-full rounded-2xl bg-gradient-to-b from-white/90 via-white/80 to-white/40 p-5 dark:from-slate-900/90 dark:via-slate-900/80 dark:to-slate-900/40 backdrop-blur-xl">

                                {/* Top Interactive Glow Line */}
                                <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                                <div className="flex items-center gap-3.5 mb-2.5">
                                    {/* Futuristic Icon Wrapper */}
                                    <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-all duration-500 after:absolute after:inset-0 after:rounded-xl after:border after:border-primary/20 group-hover:bg-primary group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.4)]">
                                        <HugeiconsIcon
                                            icon={card.icon}
                                            size={22}
                                            className="text-primary transition-colors duration-500 group-hover:text-white"
                                        />
                                    </div>

                                    <div className="flex flex-col">
                                        <h3 className="text-gray-900 dark:text-white text-sm font-bold tracking-tight transition-colors duration-300 group-hover:text-primary">
                                            {card.title}
                                        </h3>
                                        <span className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">
                                            Verified Metric
                                        </span>
                                    </div>
                                </div>

                                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed transition-colors duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-300">
                                    {card.subtitle}
                                </p>
                            </div>
                        </div>
                    </div>
                );
            })}

            {/* 2. Premium Ambient Glow Effects */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none mix-blend-screen dark:mix-blend-normal">
                <div className="absolute h-[380px] w-[380px] rounded-full bg-primary/20 blur-[80px] animate-pulse duration-[6000ms]" />
                <div className="absolute h-[300px] w-[300px] rounded-full bg-secondary blur-[60px] translate-x-10 -translate-y-10" />
                <div className="absolute h-[250px] w-[250px] rounded-full bg-accent blur-[70px] -translate-x-10 translate-y-10" />
            </div>

            {/* 3. Sleek Profile Image Container */}
            <div className="relative z-10 group max-w-[360px] lg:max-w-[400px] p-4">

                {/* Outer Rotating/Gradient Tech Border */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary via-purple-500 to-blue-500 opacity-40 blur-sm scale-105 transition-all duration-700 group-hover:opacity-80 group-hover:blur-md group-hover:scale-110" />

                {/* Thin Animated Decorative Ring */}
                <div className="absolute inset-2 rounded-full border border-dashed border-white/40 z-20 animate-[spin_40s_linear_infinite]" />

                <div className="relative rounded-full overflow-hidden border-[6px] border-white dark:border-slate-900 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] bg-slate-100 transition-all duration-700 group-hover:scale-[1.02] group-hover:shadow-primary/30">
                    <Image
                        src="/arfin.jpg"
                        alt={heroData.name || "Profile Image"}
                        width={500}
                        height={500}
                        priority
                        className="object-cover w-full h-full scale-105 transition-all duration-700 ease-out group-hover:scale-100"
                    />
                </div>
            </div>

        </div>
    );
};

export default HeroImage;