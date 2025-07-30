import { useState, useEffect } from "react";
import { useSmoothScroll } from "../hooks/use-smooth-scroll";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { scrollToSection } = useSmoothScroll();

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
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 flex items-center justify-center">
              <i className="fas fa-leaf text-forest text-xl"></i>
            </div>
            <span 
              className={`text-xl font-bold transition-colors ${
                isScrolled ? 'text-forest' : 'text-white'
              }`}
              style={{ fontFamily: 'Lexend Deca, sans-serif' }}
            >MYRISTIKA</span>
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
          
          <button className={`md:hidden transition-colors ${
            isScrolled ? 'text-forest' : 'text-white'
          }`}>
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </div>
    </nav>
  );
}
