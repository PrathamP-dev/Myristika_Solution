import { useSmoothScroll } from "../hooks/use-smooth-scroll";
import { useLazyVideo } from "../hooks/use-lazy-video";

export default function HeroSection() {
  const { scrollToSection } = useSmoothScroll();
  const { videoRef, isLoading, canPlay } = useLazyVideo();

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {/* Poster image shows immediately */}
        <img 
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080" 
          alt="Dense forest with filtered sunlight" 
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${canPlay ? 'opacity-0' : 'opacity-100'}`}
          style={{ 
            filter: 'brightness(1.3) contrast(1.1) saturate(1.2)',
            objectPosition: 'center center',
            imageRendering: 'crisp-edges' as const,
            transform: 'scale(1.1)'
          }}
        />
        
        {/* Video loads in background and fades in when ready */}
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          loop 
          playsInline
          preload="auto"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${canPlay ? 'opacity-100' : 'opacity-0'}`}
          style={{ 
            filter: 'brightness(1.4) contrast(1.2) saturate(1.2)',
            transform: 'scale(1.1)',
            backfaceVisibility: 'hidden',
            willChange: 'transform',
            objectPosition: 'center center',
            imageRendering: 'crisp-edges' as const
          }}
        >
          <source src="/forest-video.mp4" type="video/mp4" />
        </video>
        
        {/* Additional brightness overlay for better visibility */}
        <div 
          className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ${canPlay ? 'opacity-100' : 'opacity-0'}`}
          style={{
            background: 'radial-gradient(circle at center, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 40%, transparent 70%)',
            mixBlendMode: 'screen'
          }}
        ></div>
        
        {/* Loading indicator */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-pulse text-white/70 text-sm">Loading...</div>
          </div>
        )}
        
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/25"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <div className="animate-fade-in-up mb-8">
          <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 mx-auto inline-block border border-white/10 shadow-lg">
            <img 
              src="/images/myristika-logo.png" 
              alt="Myristika Sustainable Solutions" 
              className="mx-auto h-24 sm:h-32 md:h-36 lg:h-40 w-auto hover:scale-105 transition-transform duration-500"
              style={{ 
                imageRendering: 'crisp-edges',
                filter: 'brightness(0) invert(1) contrast(1.3) saturate(1.2) drop-shadow(0 2px 8px rgba(0,0,0,0.4))'
              }}
            />
          </div>
        </div>

        
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
          <a href="https://x.com/MyristikaS54480" target="_blank" rel="noopener noreferrer" className="text-white hover:text-sky transition-colors transform hover:scale-110">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/company/myristika-sustainable-solutions/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-sky transition-colors transform hover:scale-110">
            <i className="fab fa-linkedin text-2xl"></i>
          </a>
          <a href="https://www.instagram.com/myristikasustainablesolutions/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-sky transition-colors transform hover:scale-110">
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
