import { Pill, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-12 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <div className="absolute inset-0 bg-[var(--hero-gradient)] opacity-5"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="flex items-center space-x-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-2xl shadow-lg animate-pulse">
              <Pill className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-secondary">
              MK Pharmacy AI
            </h1>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
            आपका विश्वसनीय मेडिकल सहायक - दवाइयों और स्वास्थ्य की जानकारी AI के साथ
          </p>
          
          <div className="flex items-center space-x-2 text-accent bg-accent/10 px-4 py-2 rounded-full">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-medium">AI-Powered Medical Information</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;