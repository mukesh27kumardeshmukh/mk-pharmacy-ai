import { useState } from "react";
import { Search, Pill } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Medicine {
  name: string;
  use: string;
  category: string;
}

const SAMPLE_MEDICINES: Medicine[] = [
  { name: "Paracetamol", use: "बुखार और दर्द के लिए", category: "Pain Relief" },
  { name: "Aspirin", use: "दर्द निवारक और खून पतला करने के लिए", category: "Pain Relief" },
  { name: "Amoxicillin", use: "बैक्टीरियल संक्रमण के लिए", category: "Antibiotic" },
  { name: "Omeprazole", use: "एसिडिटी और पेट की समस्याओं के लिए", category: "Digestive" },
  { name: "Metformin", use: "डायबिटीज नियंत्रण के लिए", category: "Diabetes" },
  { name: "Cetirizine", use: "एलर्जी के लिए", category: "Allergy" },
];

interface MedicineSearchProps {
  onMedicineClick: (medicine: Medicine) => void;
}

const MedicineSearch = ({ onMedicineClick }: MedicineSearchProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredMedicines = SAMPLE_MEDICINES.filter(medicine =>
    medicine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    medicine.use.includes(searchTerm)
  );

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-center mb-2">दवाइयाँ खोजें</h2>
          <p className="text-center text-muted-foreground">Search medicines and get instant information</p>
        </div>
        
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="दवाई का नाम खोजें..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 h-12 text-lg"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredMedicines.map((medicine, index) => (
            <Card 
              key={index} 
              className="hover:shadow-[var(--card-shadow)] transition-all cursor-pointer"
              onClick={() => onMedicineClick(medicine)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Pill className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{medicine.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">{medicine.use}</p>
                <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full">
                  {medicine.category}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MedicineSearch;