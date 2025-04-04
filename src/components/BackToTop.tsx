
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-black border border-neonCyan w-14 h-14 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(0,247,255,0.5)] hover:scale-110 transition-all duration-300 z-40 animate-float"
          aria-label="Back to top"
          style={{
            animation: 'glow 3s infinite, float 6s ease-in-out infinite'
          }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-darkBlue to-neonCyan opacity-30 blur-sm"></div>
          <ArrowUp size={22} className="text-white relative z-10" />
        </button>
      )}
    </>
  );
};

export default BackToTop;