import Image from "next/image";
import { heroData } from "@/data/hero";
import { HugeiconsIcon } from "@hugeicons/react";
import { DashboardCircleEditFreeIcons, Layers01Icon, RocketIcon, SparklesIcon } from "@hugeicons/core-free-icons";

const floatingCards = [
    {
        title: "Modern UI Systems",
        subtitle:
            "Designing responsive and intuitive interfaces focused on real user experience.",
        icon: DashboardCircleEditFreeIcons,
        position:
            "top-0 -right-2/3 -translate-x-1/2 -translate-y-1/2",
    },
    {
        title: "Scalable Architecture",
        subtitle:
            "Building clean and maintainable systems optimized for long-term growth.",
        icon: Layers01Icon,
        position:
            "bottom-0 left-36 -translate-x-1/2 translate-y-1/2",
    },
    {
        title: "Performance First",
        subtitle:
            "Creating fast digital products with efficient frontend and backend logic.",
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
            "-right-24 bottom-2/3 top-1/2 translate-x-1/2 -translate-y-1/2",
    },
];

const HeroImage = () => {
    return (
        <div className="relative flex items-center justify-center order-1 lg:order-2">
            {/* Floating Cards */}
            {/* Floating Cards */}
            {floatingCards.map((card, index) => {
                return (
                    <div
                        key={index}
                        className={`absolute ${card.position} z-20 hidden md:block`}
                    >
                        <div className="w-[320px] rounded-2xl border border-white/20 bg-white/80 backdrop-blur-md shadow-xl p-4">
                            <div className="flex items-center justify-center mb-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                    <HugeiconsIcon icon={card.icon} size={24} />
                                </div>
                            </div>

                            <h3 className="text-primary text-center text-xl font-bold">
                                {card.title}
                            </h3>

                            <p className="mt-1 text-xs lg:text-sm text-center text-gray-600 leading-relaxed">
                                {card.subtitle}
                            </p>
                        </div>
                    </div>
                );
            })}

            {/* Glow Effect */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-[320px] w-[320px] sm:h-[380px] sm:w-[380px] rounded-full bg-linear-to-tr from-primary/20 via-pink-400/10 to-blue-400/20 blur-3xl" />
            </div>

            {/* Profile Image */}
            <div className="relative z-10 max-w-md">
                <div className="w-full p-3 lg:p-0">
                    <Image
                        src="/arfin.jpg"
                        alt={heroData.name}
                        width={500}
                        height={500}
                        priority
                        className="object-cover rounded-full border-4 border-white shadow-2xl"
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroImage;