import { useEffect, useState } from 'react';

interface VideoEnhancerProps {
  videoRef: React.RefObject<HTMLVideoElement>;
  canPlay: boolean;
}

export default function VideoEnhancer({ videoRef, canPlay }: VideoEnhancerProps) {
  const [videoTime, setVideoTime] = useState(0);
  const [isInitialPhase, setIsInitialPhase] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !canPlay) return;

    const handleTimeUpdate = () => {
      const currentTime = video.currentTime;
      setVideoTime(currentTime);
      
      // Consider first 3 seconds as initial dark phase
      setIsInitialPhase(currentTime < 3);
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    
    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [videoRef, canPlay]);

  // Calculate dynamic brightness boost for initial seconds
  const getBrightnessBoost = () => {
    if (!isInitialPhase) return 0;
    
    // Gradually reduce brightness boost from 0.3 to 0 over first 3 seconds
    const boost = Math.max(0, 0.3 - (videoTime / 3) * 0.3);
    return boost;
  };

  const brightnessBoost = getBrightnessBoost();

  return (
    <>
      {/* Dynamic brightness overlay for initial dark seconds */}
      {canPlay && isInitialPhase && (
        <div 
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(ellipse at center, 
              rgba(255,255,255,${brightnessBoost * 0.4}) 0%, 
              rgba(255,255,255,${brightnessBoost * 0.2}) 30%, 
              rgba(255,255,255,${brightnessBoost * 0.1}) 60%, 
              transparent 80%)`,
            mixBlendMode: 'screen',
            opacity: brightnessBoost > 0 ? 1 : 0
          }}
        />
      )}
      
      {/* Additional clarity enhancement for initial seconds */}
      {canPlay && isInitialPhase && (
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(45deg, 
              rgba(255,255,255,${brightnessBoost * 0.05}) 0%, 
              transparent 50%, 
              rgba(255,255,255,${brightnessBoost * 0.05}) 100%)`,
            mixBlendMode: 'overlay',
            opacity: brightnessBoost > 0.1 ? 0.8 : 0,
            transition: 'opacity 0.5s ease-out'
          }}
        />
      )}
    </>
  );
}