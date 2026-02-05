import { builtWith } from "@/data/footer";

const TechStack = () => {
    return (
        <div>
            <h4 className="font-semibold mb-4">Built With</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                {builtWith.map((item) => (
                    <span key={item} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60"></span>
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default TechStack;
