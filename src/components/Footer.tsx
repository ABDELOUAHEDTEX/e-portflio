import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-10 bg-gradient-to-b from-black to-darkBlue/60 border-t border-neonCyan/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gradient mb-2 animate-float">Abdelouahed Akabbab</h3>
            <p className="mb-6 text-gray-400 max-w-md mx-auto">
              Football enthusiast and aspiring content creator exploring tech trends and building the digital future.
            </p>
          </div>
          
          <div className="flex justify-center space-x-8 mb-8">
            <a 
              href="https://github.com/AAbdelouahed" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transform transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-darkBlue to-neonCyan p-0.5 animate-glow">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                  <Github size={24} className="text-white" />
                </div>
              </div>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/abdelouahed-akabbab" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transform transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-darkBlue to-neonCyan p-0.5 animate-glow">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                  <Linkedin size={24} className="text-white" />
                </div>
              </div>
            </a>
            
            <a 
              href="mailto:akabbababdelouahed@gmail.com"
              className="transform transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-darkBlue to-neonCyan p-0.5 animate-glow">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                  <Mail size={24} className="text-white" />
                </div>
              </div>
            </a>
          </div>
          
          <div className="pt-6 border-t border-gray-800/30">
            <div className="text-sm text-gray-500 flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <p>&copy; {new Date().getFullYear()} Abdelouahed Akabbab. All rights reserved.</p>
              <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-neonCyan animate-pulse"></div>
              <p>Building the future, one line of code at a time</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
