import { cn } from "@/lib/utils";
import Link from "next/link";

interface LogoProps {
    className?: string;
    onClick?: () => void;
}

const Logo = ({ className, onClick }: LogoProps) => {
    return (
        <Link
            href="/"
            className={cn("text-xl font-bold tracking-tight shrink-0", className)}
            onClick={onClick}
        >
            Arfin<span className="text-primary">.</span>
        </Link>
    );
};

export default Logo;
