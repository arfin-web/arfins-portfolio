import Image from "next/image";
import { heroData } from "@/data/hero";
import { HugeiconsIcon } from "@hugeicons/react";
import { DashboardCircleEditFreeIcons, Layers01Icon, RocketIcon, SparklesIcon } from "@hugeicons/core-free-icons";

const floatingCards = [
    {
        title: "Modern UI Systems",
        subtitle:
            "Designing responsive and intuitive interfaces focused on real UX.",
        icon: DashboardCircleEditFreeIcons,
        position:
            "top-0 -right-2/3 -translate-x-1/2 -translate-y-1/2",
    },
    {
        title: "Scalable Architecture",
        subtitle:
            "Building clean and maintainable systems for better scalability.",
        icon: Layers01Icon,
        position:
            "bottom-0 left-36 -translate-x-1/2 translate-y-1/2",
    },
    {
        title: "Performance First",
        subtitle:
            "Ensuring fast interaction and smooth performance on the run.",
        icon: RocketIcon,
        position:
            "left-0 -right-20 bottom-0.5 top-1/2 -translate-x-1/2 -translate-y-1/2",
    },
    {
        title: "Continuous Innovation",
        subtitle:
            "Adapting modern technologies and best practices to stay ahead.",
        icon: SparklesIcon,
        position:
            "-right-16 top-1/2 translate-x-1/2 -translate-y-1/2",
    },
];

const HeroImage = () => {
    return (
        <div className="relative flex items-center justify-center order-1 lg:order-2">
            {/* Floating Cards */}
            {floatingCards.map((card, index) => {
                return (
                    <div
                        key={index}
                        className={`absolute ${card.position} z-20 hidden md:block`}
                    >
                        <div
                            className="group w-[320px] rounded-2xl border border-white/20 bg-white/80 backdrop-blur-md shadow-xl p-4 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-2xl hover:bg-white"
                        >
                            {/* Top Glow */}
                            <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                            <div className="relative flex items-center justify-center gap-2 mb-3">
                                <div
                                    className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 transition-all duration-500 group-hover:bg-primary group-hover:rotate-12 group-hover:scale-110"
                                >
                                    <HugeiconsIcon
                                        icon={card.icon}
                                        size={20}
                                        className="text-primary transition-colors duration-500 group-hover:text-white"
                                    />
                                </div>

                                <h3
                                    className="text-primary text-lg font-bold transition-all duration-300 group-hover:tracking-wide"
                                >
                                    {card.title}
                                </h3>
                            </div>

                            <p
                                className="relative mt-1 text-xs lg:text-sm text-center text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-gray-800"
                            >
                                {card.subtitle}
                            </p>
                        </div>
                    </div>
                );
            })}

            {/* Glow Effect */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-[320px] w-[320px] sm:h-[380px] sm:w-[380px] rounded-full bg-linear-to-tr from-primary/20 via-pink-400/10 to-blue-400/20 blur-3xl animate-pulse" />
            </div>

            {/* Profile Image */}
            <div className="relative z-10 max-w-md group">
                <div className="w-full p-3 lg:p-0">
                    <Image
                        src="/arfin.jpg"
                        alt={heroData.name}
                        width={500}
                        height={500}
                        priority
                        className="object-cover rounded-full border-4 border-white shadow-2xl transition-all duration-700 group-hover:scale-105 group-hover:shadow-primary/20"
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroImage;