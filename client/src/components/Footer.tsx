import { useSmoothScroll } from "../hooks/use-smooth-scroll";

export default function Footer() {
  const { scrollToSection } = useSmoothScroll();

  return (
    <footer className="bg-nature-dark text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-forest to-sky rounded-lg flex items-center justify-center">
                <i className="fas fa-leaf text-white text-sm"></i>
              </div>
              <span className="text-xl font-bold">MYRISTIKA</span>
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
            <h4 className="font-bold mb-4">Technologies</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="text-gray-300">AI & Machine Learning</span></li>
              <li><span className="text-gray-300">Drone Systems</span></li>
              <li><span className="text-gray-300">IoT Sensors</span></li>
              <li><span className="text-gray-300">Remote Sensing</span></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-sky transition-colors">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="https://www.linkedin.com/company/myristika-sustainable-solutions/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-sky transition-colors">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-sky transition-colors">
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
