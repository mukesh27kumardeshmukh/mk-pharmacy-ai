import Hero from "@/components/Hero";
import AIChat from "@/components/AIChat";
import MedicineSearch from "@/components/MedicineSearch";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <div data-chat-section className="flex-1">
        <AIChat />
      </div>
      <MedicineSearch />
      <Footer />
    </div>
  );
};

export default Index;