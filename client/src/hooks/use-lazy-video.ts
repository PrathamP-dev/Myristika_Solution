import { useEffect, useRef, useState } from 'react';

export const useLazyVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [canPlay, setCanPlay] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      setCanPlay(true);
      setIsLoading(false);
    };

    const handleLoadStart = () => {
      setIsLoading(true);
    };

    const handleError = () => {
      setIsLoading(false);
      setCanPlay(false);
    };

    // Start loading immediately for hero video
    const loadTimer = setTimeout(() => {
      if (video.readyState === 0) {
        video.load();
      }
    }, 100);

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('loadstart', handleLoadStart);
    video.addEventListener('error', handleError);

    return () => {
      clearTimeout(loadTimer);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('loadstart', handleLoadStart);
      video.removeEventListener('error', handleError);
    };
  }, []);

  return { videoRef, isLoading, canPlay };
};