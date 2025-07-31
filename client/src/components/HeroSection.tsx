import { useSmoothScroll } from "../hooks/use-smooth-scroll";
import { useLazyVideo } from "../hooks/use-lazy-video";

export default function HeroSection() {
  const { scrollToSection } = useSmoothScroll();
  const { videoRef, isLoading, canPlay } = useLazyVideo();

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {/* Poster image shows immediately */}
        <img 
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080" 
          alt="Dense forest with filtered sunlight" 
          className={`w-full h-full object-cover transition-opacity duration-1000 ${canPlay ? 'opacity-0' : 'opacity-100'}`}
          style={{ filter: 'brightness(0.7)' }}
        />
        
        {/* Video loads in background and fades in when ready */}
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          loop 
          playsInline
          preload="none"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${canPlay ? 'opacity-100' : 'opacity-0'}`}
          style={{ 
            filter: 'brightness(0.7)',
            transform: 'scale(1.05)',
            backfaceVisibility: 'hidden'
          }}
        >
          <source src="/WhatsApp Video 2025-07-29 at 20.11.10_ea18111b_1753803132576.mp4" type="video/mp4" />
        </video>
        
        {/* Loading indicator */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-pulse text-white/70 text-sm">Loading...</div>
          </div>
        )}
        
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 
          className="text-4xl md:text-6xl font-black mb-6 animate-fade-in-up tracking-tight hero-text-shadow whitespace-nowrap"
          style={{ fontFamily: 'Lexend Deca, sans-serif' }}
        >
          MYRISTIKA <span className="text-sky">SOLUTION</span>
        </h1>
        <p 
          className="text-xl md:text-2xl mb-4 animate-fade-in-up font-light tracking-wide hero-text-shadow" 
          style={{ animationDelay: '0.2s', fontFamily: 'Zain, sans-serif' }}
        >
          Innovating Forests & Wildlife with Technology
        </p>
        <p 
          className="text-lg md:text-xl mb-8 animate-fade-in-up opacity-90 font-light hero-text-shadow" 
          style={{ animationDelay: '0.4s', fontFamily: 'Zain, sans-serif' }}
        >
          Empowering environmental action through smart tools and AI
        </p>
        
        <button 
          onClick={() => scrollToSection('about')}
          className="bg-sky hover:bg-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 animate-fade-in-up shadow-lg"
          style={{ animationDelay: '0.6s' }}
        >
          Learn More
        </button>
        
        {/* Social Media Icons */}
        <div 
          className="flex justify-center space-x-6 mt-12 animate-fade-in-up" 
          style={{ animationDelay: '0.8s' }}
        >
          <a href="#" className="text-white hover:text-sky transition-colors transform hover:scale-110">
            <i className="fab fa-twitter text-2xl"></i>
          </a>
          <a href="https://www.linkedin.com/company/myristika-sustainable-solutions/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-sky transition-colors transform hover:scale-110">
            <i className="fab fa-linkedin text-2xl"></i>
          </a>
          <a href="#" className="text-white hover:text-sky transition-colors transform hover:scale-110">
            <i className="fab fa-instagram text-2xl"></i>
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <i className="fas fa-chevron-down text-white text-2xl opacity-70"></i>
      </div>
    </section>
  );
}
