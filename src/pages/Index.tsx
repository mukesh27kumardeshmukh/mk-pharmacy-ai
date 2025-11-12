import Hero from "@/components/Hero";
import AIChat from "@/components/AIChat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <div data-chat-section>
        <AIChat />
      </div>
    </div>
  );
};

export default Index;