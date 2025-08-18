import { useSmoothScroll } from "../hooks/use-smooth-scroll";

export default function Footer() {
  const { scrollToSection } = useSmoothScroll();

  return (
    <footer className="bg-nature-dark text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4 p-4 bg-white/10 rounded-lg inline-block">
              <img 
                src="/images/myristika-logo.png" 
                alt="Myristika Sustainable Solutions" 
                className="h-24 w-auto brightness-0 invert opacity-90 hover:opacity-100 transition-opacity duration-300"
                style={{ 
                  imageRendering: 'crisp-edges',
                  filter: 'brightness(0) invert(1) contrast(1.3) saturate(1.2) drop-shadow(0 3px 8px rgb(0 0 0 / 0.2))'
                }}
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Pioneering the future of environmental conservation through innovative technology solutions.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-sky transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-sky transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('team')}
                  className="text-gray-300 hover:text-sky transition-colors"
                >
                  Team
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-sky transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://x.com/MyristikaS54480" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-sky transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/myristika-sustainable-solutions/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-sky transition-colors">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="https://www.instagram.com/myristikasustainablesolutions/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-sky transition-colors">
                <i className="fab fa-instagram text-xl"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            &copy; 2025 Myristika Solution. All rights reserved. Protecting our planet through innovation.
          </p>
        </div>
      </div>
    </footer>
  );
}
