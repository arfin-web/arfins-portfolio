import Image from "next/image";
import { heroData } from "@/data/hero";

const HeroImage = () => {
    return (
        <div className="flex-1 max-w-md relative">
            <div className="relative aspect-square rounded-full overflow-hidden border-4 shadow-xl">
                <Image
                    src="/arfin.jpg"
                    alt={heroData.name}
                    fill
                    className="object-cover"
                    priority
                />
            </div>
        </div>
    );
};

export default HeroImage;
