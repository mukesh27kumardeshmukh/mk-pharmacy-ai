import { useState } from "react";
import { Search, Pill, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Medicine {
  name: string;
  use: string;
  category: string;
  hindiName?: string;
}

const MEDICINES_DATABASE: Medicine[] = [
  { name: "Paracetamol", hindiName: "पैरासिटामोल", use: "बुखार और दर्द के लिए", category: "Pain Relief" },
  { name: "Aspirin", hindiName: "एस्पिरिन", use: "दर्द निवारक और खून पतला करने के लिए", category: "Pain Relief" },
  { name: "Ibuprofen", hindiName: "इबुप्रोफेन", use: "सूजन और दर्द के लिए", category: "Pain Relief" },
  { name: "Diclofenac", hindiName: "डाइक्लोफेनाक", use: "जोड़ों के दर्द और सूजन के लिए", category: "Pain Relief" },
  { name: "Amoxicillin", hindiName: "एमोक्सीसिलिन", use: "बैक्टीरियल संक्रमण के लिए", category: "Antibiotic" },
  { name: "Azithromycin", hindiName: "एज़िथ्रोमाइसिन", use: "श्वसन संक्रमण के लिए", category: "Antibiotic" },
  { name: "Ciprofloxacin", hindiName: "सिप्रोफ्लोक्सासिन", use: "मूत्र और पेट संक्रमण के लिए", category: "Antibiotic" },
  { name: "Omeprazole", hindiName: "ओमेप्राजोल", use: "एसिडिटी और पेट की समस्याओं के लिए", category: "Digestive" },
  { name: "Pantoprazole", hindiName: "पैंटोप्राजोल", use: "गैस्ट्रिक अल्सर के लिए", category: "Digestive" },
  { name: "Ranitidine", hindiName: "रैनिटिडाइन", use: "पेट में जलन के लिए", category: "Digestive" },
  { name: "Metformin", hindiName: "मेटफॉर्मिन", use: "डायबिटीज नियंत्रण के लिए", category: "Diabetes" },
  { name: "Glimepiride", hindiName: "ग्लिमेपाइराइड", use: "रक्त शर्करा नियंत्रण के लिए", category: "Diabetes" },
  { name: "Cetirizine", hindiName: "सेटिरिज़िन", use: "एलर्जी के लिए", category: "Allergy" },
  { name: "Levocetirizine", hindiName: "लिवोसेटिरिज़िन", use: "खुजली और एलर्जी के लिए", category: "Allergy" },
  { name: "Montelukast", hindiName: "मोंटेलुकास्ट", use: "अस्थमा और एलर्जी के लिए", category: "Allergy" },
  { name: "Amlodipine", hindiName: "एम्लोडाइपिन", use: "उच्च रक्तचाप के लिए", category: "Cardiac" },
  { name: "Atenolol", hindiName: "एटेनोलोल", use: "हृदय रोग और बीपी के लिए", category: "Cardiac" },
  { name: "Atorvastatin", hindiName: "एटोर्वास्टेटिन", use: "कोलेस्ट्रॉल नियंत्रण के लिए", category: "Cardiac" },
  { name: "Vitamin D3", hindiName: "विटामिन डी3", use: "हड्डियों की मजबूती के लिए", category: "Vitamins" },
  { name: "Vitamin B12", hindiName: "विटामिन बी12", use: "थकान और कमजोरी के लिए", category: "Vitamins" },
  { name: "Iron + Folic Acid", hindiName: "आयरन + फोलिक एसिड", use: "खून की कमी के लिए", category: "Vitamins" },
  { name: "Calcium", hindiName: "कैल्शियम", use: "हड्डियों के लिए", category: "Vitamins" },
];

const CATEGORIES = ["All", "Pain Relief", "Antibiotic", "Digestive", "Diabetes", "Allergy", "Cardiac", "Vitamins"];

interface MedicineSearchProps {
  onMedicineClick?: (medicine: Medicine) => void;
}

const MedicineSearch = ({ onMedicineClick }: MedicineSearchProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredMedicines = MEDICINES_DATABASE.filter(medicine => {
    const matchesSearch = medicine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      medicine.use.includes(searchTerm) ||
      (medicine.hindiName && medicine.hindiName.includes(searchTerm));
    const matchesCategory = selectedCategory === "All" || medicine.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Pill className="w-5 h-5" />
            <span className="font-medium">Medicine Database</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            दवाइयाँ खोजें
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Search from our database of medicines and get instant information in Hindi
          </p>
        </div>
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="दवाई का नाम खोजें... (e.g., Paracetamol, पैरासिटामोल)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 h-14 text-lg rounded-2xl border-2 border-border focus:border-primary shadow-lg"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Results Count */}
        <p className="text-center text-muted-foreground mb-6">
          {filteredMedicines.length} medicines found
        </p>

        {/* Medicine Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredMedicines.map((medicine, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl hover:border-primary/50 transition-all duration-300 cursor-pointer hover:-translate-y-1"
              onClick={() => onMedicineClick?.(medicine)}
            >
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between gap-2">
                  <div className="p-2 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <Pill className="w-5 h-5 text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {medicine.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg mt-3 group-hover:text-primary transition-colors">
                  {medicine.name}
                </CardTitle>
                {medicine.hindiName && (
                  <p className="text-sm text-muted-foreground">{medicine.hindiName}</p>
                )}
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">{medicine.use}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredMedicines.length === 0 && (
          <div className="text-center py-12">
            <Pill className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground text-lg">No medicines found</p>
            <p className="text-muted-foreground text-sm">Try a different search term</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default MedicineSearch;
