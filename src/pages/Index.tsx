import { useState } from "react";
import Hero from "@/components/Hero";
import MedicineSearch from "@/components/MedicineSearch";
import AIChat from "@/components/AIChat";

const Index = () => {
  const [selectedMedicine, setSelectedMedicine] = useState<any>(null);

  const handleMedicineClick = (medicine: any) => {
    setSelectedMedicine(medicine);
    // Scroll to chat section
    const chatSection = document.querySelector('[data-chat-section]');
    if (chatSection) {
      chatSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Hero />
      <MedicineSearch onMedicineClick={handleMedicineClick} />
      <div data-chat-section>
        <AIChat />
      </div>
    </div>
  );
};

export default Index;