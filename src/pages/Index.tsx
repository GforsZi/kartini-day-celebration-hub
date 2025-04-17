
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EventsSection from "@/components/EventsSection";
import TimelineSection from "@/components/TimelineSection";
import ResourcesSection from "@/components/ResourcesSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <EventsSection />
        <TimelineSection />
        <ResourcesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
