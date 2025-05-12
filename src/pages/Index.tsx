
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import MastersSection from "@/components/MastersSection";
import StylesSection from "@/components/StylesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-dark-bg text-white">
      <Navbar />
      <HeroSection />
      <PortfolioSection />
      <MastersSection />
      <StylesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
