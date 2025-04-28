import React, { useEffect, useRef } from 'react';
import { ArrowDown, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Star properties
    const stars: {x: number, y: number, size: number, speedX: number, speedY: number}[] = [];
    const numStars = Math.floor(canvas.width * canvas.height / 10000);
    
    // Initialize stars
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: (Math.random() - 0.5) * 0.2
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw stars
      stars.forEach((star) => {
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Update star position
        star.x += star.speedX;
        star.y += star.speedY;
        
        // Wrap stars around edges
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <canvas 
        ref={canvasRef} 
        className="absolute top-0 left-0 w-full h-full"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-[#0f172a]/40 z-10"></div>
      
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
          <span className="block">Hi, I'm {personalInfo.name}</span>
          <span className="block mt-2">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00F7FF] to-[#1E3A8A]">
              {personalInfo.role}
            </span>
          </span>
        </h1>
        
        <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
          Specializing in {personalInfo.specialization}
        </p>
        
        <div className="mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a 
            href="#projects" 
            className="px-6 py-3 bg-[#1E3A8A] text-white font-medium rounded-md hover:bg-[#1E3A8A]/80 transition-colors duration-300 flex items-center justify-center"
          >
            View My Work
          </a>
          <a 
            href="#contact"
            className="px-6 py-3 border border-[#00F7FF] text-[#00F7FF] font-medium rounded-md hover:bg-[#00F7FF]/10 transition-colors duration-300 flex items-center justify-center"
          >
            <Mail className="mr-2 h-5 w-5" />
            Contact Me
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <a href="#about" className="text-white/60 hover:text-white transition-colors duration-300">
          <ArrowDown className="h-8 w-8" />
        </a>
      </div>
    </section>
  );
};

export default Hero;