import React from 'react';
import { ArrowDown, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { TypeAnimation } from 'react-type-animation';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
import { useCallback } from 'react';

const Hero: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-wild-blue-yonder">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: ["#F3DCA7", "#EE9387", "#A08AC5"],
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
        className="absolute top-0 left-0 w-full h-full"
      />
      
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
          <TypeAnimation
            sequence={[`Hi, I'm ${personalInfo.name}`]}
            wrapper="span"
            speed={60}
            className="block"
          />
          <TypeAnimation
            sequence={[
              'Junior Software Engineer',
              2000,
              'Full-Stack Developer',
              2000,
              'AI Enthusiast',
              3000,
            ]}
            wrapper="span"
            speed={70}
            className="block mt-2 text-shadow text-deep-champagne"
            repeat={Infinity}
          />
        </h1>
        
        <p className="mt-6 text-xl text-white/80 max-w-2xl mx-auto italic">
          Specializing in {personalInfo.specialization}
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a 
            href="#projects" 
            className="px-8 py-3 bg-dark-salmon text-white font-medium rounded-md hover:bg-opacity-80 transform hover:scale-105 transition-all duration-300 flex items-center justify-center shadow-lg"
          >
            View My Work
          </a>
          <a 
            href="#contact"
            className="px-8 py-3 border border-deep-champagne text-deep-champagne font-medium rounded-md hover:bg-deep-champagne hover:text-white transform hover:scale-105 transition-all duration-300 flex items-center justify-center shadow-lg"
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