
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="hero" className="relative bg-gradient-to-b from-purple-50 to-white pt-20 pb-16 md:pt-24 md:pb-20">
      <div className="kartini-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-kartini-purple mb-4 animate-fade-in">
              Celebrating Kartini Day
            </h1>
            <p className="text-xl text-gray-700 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Honoring Raden Adjeng Kartini and her fight for women's education and emancipation in Indonesia.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button className="bg-kartini-purple hover:bg-purple-700 text-white">
                Learn About Kartini
              </Button>
              <Button variant="outline" className="border-kartini-gold text-kartini-brown hover:bg-kartini-gold hover:text-white">
                Explore Events
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <img 
                src="https://images.unsplash.com/photo-1648576134309-7d5f1d1ad38c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                alt="Traditional Batik fabric and patterns commemorating Kartini Day" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-kartini-gold text-white p-4 rounded-lg shadow-lg font-playfair animate-fade-in" style={{ animationDelay: "0.8s" }}>
              <p className="text-lg font-semibold">April 21st</p>
              <p className="text-sm">National Holiday</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-[-1] opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-kartini-purple rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-kartini-gold rounded-full filter blur-3xl"></div>
      </div>
    </section>
  );
};

export default HeroSection;
