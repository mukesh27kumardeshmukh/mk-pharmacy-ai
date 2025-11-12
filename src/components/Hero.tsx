import { Pill, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 px-4">
      <div className="absolute inset-0 bg-[var(--hero-gradient)] opacity-10"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-3 bg-primary rounded-2xl">
              <Pill className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-[var(--hero-gradient)]">
              MK Pharmacy AI
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl">
            आपका विश्वसनीय मेडिकल सहायक - दवाइयों और स्वास्थ्य की जानकारी AI के साथ
          </p>
          
          <div className="flex items-center space-x-2 text-accent">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-medium">AI-Powered Medical Information</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;