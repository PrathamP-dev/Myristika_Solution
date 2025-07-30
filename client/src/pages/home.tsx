import { useEffect } from "react";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import TeamSection from "../components/TeamSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import { useScrollReveal } from "../hooks/use-scroll-reveal";

export default function Home() {
  useScrollReveal();

  useEffect(() => {
    // Add Font Awesome CSS
    const fontAwesome = document.createElement('link');
    fontAwesome.rel = 'stylesheet';
    fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    document.head.appendChild(fontAwesome);

    // Add Inter font
    const interFont = document.createElement('link');
    interFont.rel = 'stylesheet';
    interFont.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap';
    document.head.appendChild(interFont);

    return () => {
      // Cleanup
      if (document.head.contains(fontAwesome)) document.head.removeChild(fontAwesome);
      if (document.head.contains(interFont)) document.head.removeChild(interFont);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-sans overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
