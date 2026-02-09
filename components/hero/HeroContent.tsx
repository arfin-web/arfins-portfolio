import Image from "next/image";
import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import {
    DownloadSquare01Icon,
    ArrowRight01Icon,
    Mail01Icon,
} from "@hugeicons/core-free-icons";
import SocialLinks from "../shared/SocialLinks";
import { heroData } from "@/data/hero";

const HeroContent = () => {
    return (
        <div className="flex-1 space-y-6 text-center md:text-left">
            <div>
                <h2 className="text-xl text-muted-foreground">{heroData.greeting}</h2>
                <h1 className="text-5xl md:text-7xl font-bold">
                    {heroData.name}
                </h1>
                <h2 className="text-xl md:text-3xl font-semibold text-primary">
                    {heroData.role}
                </h2>
            </div>

            <p className="text-sm md:text-lg text-muted-foreground max-w-xl">
                {heroData.description}
            </p>

            {/* Tech Stack */}
            <div className="flex items-center justify-center md:justify-start gap-4">
                {heroData.techStack.map((tech) => (
                    <Image key={tech.alt} src={tech.src} alt={tech.alt} width={40} height={40} />
                ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Button size="lg" className="rounded-full" asChild>
                    <a href="#projects">
                        View Projects
                        <HugeiconsIcon icon={ArrowRight01Icon} size={18} className="ml-2" />
                    </a>
                </Button>

                <Button size="lg" variant="outline" className="rounded-full" asChild>
                    <a href="#contact">
                        Contact Me
                        <HugeiconsIcon icon={Mail01Icon} size={18} className="ml-2" />
                    </a>
                </Button>

                <a href="/ArfinNoorRahman.pdf" download="ArfinNoorRahman.pdf">
                    <Button size="lg" variant="ghost" className="rounded-full cursor-pointer">
                        Download Resume
                        <HugeiconsIcon icon={DownloadSquare01Icon} size={18} className="ml-2" />
                    </Button>
                </a>
            </div>

            {/* Social Links */}
            <SocialLinks />
        </div>
    );
};

export default HeroContent;
