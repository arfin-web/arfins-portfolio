import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background py-10 md:py-0 mt-20">
      {/* Background Gradients */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-30 animate-pulse" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] opacity-30 animate-pulse delay-1000" />

      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-12">
          <HeroContent />
          <HeroImage />
        </div>
      </div>
    </section>
  );
};

export default Hero;