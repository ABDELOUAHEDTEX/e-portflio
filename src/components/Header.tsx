
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled state for header styling
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Journey', href: '#journey' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header 
      className={`sticky top-0 z-50 border-b transition-all duration-500 ${
        scrolled 
          ? 'py-2 backdrop-blur-xl bg-black/40 border-neonCyan/20 shadow-lg' 
          : 'py-4 bg-gradient-to-r from-black to-darkBlue/80 border-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Name and Tagline with animation */}
          <div className="text-center md:text-left">
            <h1 className="text-2xl md:text-4xl font-bold animate-fade-in">Abdelouahed Akabbab</h1>
            <p className="text-sm md:text-lg text-neonCyan/70 animate-fade-in">Junior Software Engineer | Web, Mobile & AI Enthusiast</p>
          </div>

          {/* Navigation for Desktop */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {navLinks.map((link) => (
                <li key={link.name} className="transform transition-transform duration-300 hover:scale-105">
                  <a 
                    href={link.href} 
                    className={`nav-link relative font-medium ${
                      activeSection === link.href.substring(1) 
                        ? 'text-neonCyan' 
                        : 'text-white hover:text-neonCyan/80'
                    } transition-all duration-300`}
                  >
                    {link.name}
                    {activeSection === link.href.substring(1) && (
                      <span className="absolute -bottom-1 left-0 h-0.5 bg-neonCyan w-full rounded-full animate-pulse"></span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white hover:text-neonCyan transition-colors duration-300" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X size={24} className="animate-fade-in" />
            ) : (
              <Menu size={24} className="animate-fade-in" />
            )}
          </button>
        </div>

        {/* Mobile Navigation with improved animation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 animate-fade-in">
            <ul className="flex flex-col space-y-3">
              {navLinks.map((link, index) => (
                <li 
                  key={link.name} 
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    opacity: 0,
                    animation: 'fade-in 0.5s ease-out forwards'
                  }}
                >
                  <a 
                    href={link.href} 
                    className={`block py-2 px-3 rounded-md transition-all duration-300 ${
                      activeSection === link.href.substring(1) 
                        ? 'bg-gradient-to-r from-darkBlue to-neonCyan/20 text-neonCyan border-l-2 border-neonCyan' 
                        : 'text-white hover:bg-black/40 hover:border-l-2 hover:border-neonCyan/50'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
