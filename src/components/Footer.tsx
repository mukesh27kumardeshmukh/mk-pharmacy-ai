import { Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary via-primary/95 to-secondary text-white py-8">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-3">
            <Youtube className="w-8 h-8 animate-pulse" />
            <div className="text-center">
              <h3 className="text-xl font-bold">MK Pharmacy</h3>
              <p className="text-sm text-white/80">हमारे YouTube चैनल पर जाएं</p>
            </div>
          </div>
          
          <a
            href="https://youtube.com/@mk_pharmacy?si=KEzSFGK9GF50l4ke"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-white text-primary px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <Youtube className="w-5 h-5" />
            <span>Subscribe करें</span>
          </a>
          
          <p className="text-sm text-white/70 text-center mt-4">
            © 2024 MK Pharmacy AI. सभी अधिकार सुरक्षित।
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
