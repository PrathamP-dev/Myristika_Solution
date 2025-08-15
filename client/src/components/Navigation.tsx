import { useState, useEffect } from "react";
import { useSmoothScroll } from "../hooks/use-smooth-scroll";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollToSection } = useSmoothScroll();

  // Function to handle mobile menu navigation
  const handleMobileNavigation = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 100) {
        setIsScrolled(true);
        setIsVisible(currentScrollY <= lastScrollY);
      } else {
        setIsScrolled(false);
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'navbar-blur shadow-lg' : 'navbar-blur-dark'
      } ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          <div className="flex items-center">
            <img 
              src="/images/myristika-logo.png" 
              alt="Myristika Sustainable Solutions" 
              className={`h-16 w-auto cursor-pointer transition-all duration-300 hover:scale-105 ${
                isScrolled 
                  ? 'drop-shadow-sm' 
                  : 'brightness-0 invert drop-shadow-lg'
              }`}
              onClick={() => scrollToSection('hero')}
              style={{ 
                imageRendering: 'crisp-edges',
                filter: isScrolled 
                  ? 'contrast(1.2) saturate(1.1) drop-shadow(0 1px 3px rgb(0 0 0 / 0.15))' 
                  : 'brightness(0) invert(1) contrast(1.3) saturate(1.2) drop-shadow(0 4px 8px rgb(0 0 0 / 0.2))'
              }}
            />
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('hero')} 
              className={`hover:text-sky transition-colors font-medium ${
                isScrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className={`hover:text-sky transition-colors font-medium ${
                isScrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              Who We Are
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className={`hover:text-sky transition-colors font-medium ${
                isScrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              What We Do
            </button>
            <button 
              onClick={() => scrollToSection('team')} 
              className={`hover:text-sky transition-colors font-medium ${
                isScrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              Our Team
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className={`hover:text-sky transition-colors font-medium ${
                isScrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              Contact
            </button>
          </div>
          
          <button 
            className={`md:hidden transition-colors ${
              isScrolled ? 'text-forest' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={`md:hidden border-t border-white/20 ${
          isScrolled ? 'navbar-blur' : 'navbar-blur-dark'
        }`}>
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-4">
            <button 
              onClick={() => handleMobileNavigation('hero')} 
              className={`block w-full text-left py-2 hover:text-sky transition-colors font-medium ${
                isScrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => handleMobileNavigation('about')} 
              className={`block w-full text-left py-2 hover:text-sky transition-colors font-medium ${
                isScrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              Who We Are
            </button>
            <button 
              onClick={() => handleMobileNavigation('services')} 
              className={`block w-full text-left py-2 hover:text-sky transition-colors font-medium ${
                isScrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              What We Do
            </button>
            <button 
              onClick={() => handleMobileNavigation('team')} 
              className={`block w-full text-left py-2 hover:text-sky transition-colors font-medium ${
                isScrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              Our Team
            </button>
            <button 
              onClick={() => handleMobileNavigation('contact')} 
              className={`block w-full text-left py-2 hover:text-sky transition-colors font-medium ${
                isScrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
