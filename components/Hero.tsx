import Image from "next/image";
import { Button } from "@/components/ui/button";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  DownloadSquare01Icon,
  ArrowRight01Icon,
  Mail01Icon,
  GithubIcon,
  Linkedin01Icon,
  NewTwitterIcon,
} from "@hugeicons/core-free-icons";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background py-10 md:py-0 mt-20">
      {/* Background Gradients */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-30 animate-pulse" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] opacity-30 animate-pulse delay-1000" />

      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

          {/* Text Content */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            <div>
              <h2 className="text-xl text-muted-foreground">Hi, I'm</h2>
              <h1 className="text-5xl md:text-7xl font-bold">
                Arfin Noor Rahman
              </h1>
              <h2 className="text-3xl font-semibold text-primary">
                Frontend Software Engineer
              </h2>
            </div>

            <p className="text-lg text-muted-foreground max-w-xl">
              Crafting high-performance, pixel-perfect web experiences with modern technologies.
            </p>

            {/* Tech Stack */}
            <div className="flex items-center justify-center md:justify-start gap-4">
              <Image src="https://www.svgrepo.com/show/452092/react.svg" alt="reactjs" width={40} height={40} />
              <Image src="https://www.svgrepo.com/show/354113/nextjs-icon.svg" alt="nextjs" width={40} height={40} />
              <Image src="https://www.svgrepo.com/show/354431/tailwindcss-icon.svg" alt="tailwindcss" width={40} height={40} />
              <Image src="https://www.svgrepo.com/show/349540/typescript.svg" alt="typescript" width={40} height={40} />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button size="lg" className="rounded-full">
                View Projects
                <HugeiconsIcon icon={ArrowRight01Icon} size={18} className="ml-2" />
              </Button>

              <Button size="lg" variant="outline" className="rounded-full">
                Contact Me
                <HugeiconsIcon icon={Mail01Icon} size={18} className="ml-2" />
              </Button>

              <Button size="lg" variant="ghost" className="rounded-full">
                Download Resume
                <HugeiconsIcon icon={DownloadSquare01Icon} size={18} className="ml-2" />
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center md:justify-start pt-6">
              <HugeiconsIcon icon={GithubIcon} size={24} />
              <HugeiconsIcon icon={Linkedin01Icon} size={24} />
              <HugeiconsIcon icon={NewTwitterIcon} size={24} />
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 max-w-md relative">
            <div className="relative aspect-square rounded-full overflow-hidden border-4 shadow-xl">
              <Image
                src="/profile_placeholder.webp"
                alt="Arfin Noor Rahman"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;