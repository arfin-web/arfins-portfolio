import Image from "next/image";
import { heroData } from "@/data/hero";

const HeroImage = () => {
    return (
        <div className="max-w-md order-1 lg:order-2">
            <div className="w-full p-3 lg:p-0">
                <Image
                    src="/arfin.jpg"
                    alt={heroData.name}
                    width={500}
                    height={500}
                    className="object-cover rounded-full"
                    priority
                />
            </div>

        </div>
    );
};

export default HeroImage;
