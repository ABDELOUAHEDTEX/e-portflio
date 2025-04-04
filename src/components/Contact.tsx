import React from 'react';
import { Mail, Phone, Linkedin, Github, Download } from 'lucide-react';
import { Button } from './ui/Button';

const Contact = () => {
  // Function to handle CV download
  const handleDownloadCV = () => {
    // Create a URL to the CV file (this should be replaced with your actual CV file path)
    const cvUrl = '/public/Abdelouahed_AKABBAB_CV.pdf';
    
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Abdelouahed_AKABBAB_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="py-12 bg-gradient-to-b from-darkBlue/60 to-black backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-8 text-center animate-fade-in">
          <span className="text-gradient">Let's Connect!</span>
        </h2>
        
        <div className="max-w-3xl mx-auto bg-black/30 p-8 rounded-xl backdrop-blur-md border border-gray-800/50 shadow-xl animate-fade-in">
          <div className="flex flex-col items-center space-y-6">
            <div className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
              <Mail size={24} className="text-neonCyan" />
              <a href="mailto:akabbababdelouahed@gmail.com" className="text-lg hover:text-neonCyan transition-colors duration-300">
                akabbababdelouahed@gmail.com
              </a>
            </div>
            
            <div className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
              <Phone size={24} className="text-neonCyan" />
              <a href="tel:+212777928718" className="text-lg hover:text-neonCyan transition-colors duration-300">
                +212 777 928 718
              </a>
            </div>
            
            <div className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
              <Linkedin size={24} className="text-neonCyan" />
              <a 
                href="https://www.linkedin.com/in/abdelouahed-akabbab" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-lg hover:text-neonCyan transition-colors duration-300"
              >
                linkedin.com/in/abdelouahed-akabbab
              </a>
            </div>
            
            <div className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
              <Github size={24} className="text-neonCyan" />
              <a 
                href="https://github.com/ABDELOUAHEDTEX" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-lg hover:text-neonCyan transition-colors duration-300"
              >
                github.com/AAbdelouahed
              </a>
            </div>
            
            <div className="mt-8 flex gap-4">
              <Button 
                onClick={handleDownloadCV} 
                className="bg-gradient-to-r from-darkBlue to-neonCyan/80 text-white px-6 py-6 rounded-lg flex items-center gap-2 hover:shadow-[0_0_15px_rgba(0,247,255,0.5)] transition-all duration-300"
                variant="default"
                size="lg"
              >
                <Download size={20} />
                Download CV
              </Button>
              
              <a 
                href="https://github.com/AAbdelouahed" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-black text-white border border-neonCyan px-6 py-3 h-11 hover:bg-neonCyan/10 hover:shadow-[0_0_15px_rgba(0,247,255,0.3)] transition-all duration-300"
              >
                <Github size={20} />
                View GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
