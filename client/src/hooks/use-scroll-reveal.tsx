import { useEffect, useRef } from "react";

export function useScrollReveal() {
  const elementsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all elements with scroll-reveal class
    const scrollRevealElements = document.querySelectorAll('.scroll-reveal');
    scrollRevealElements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      scrollRevealElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return null;
}
