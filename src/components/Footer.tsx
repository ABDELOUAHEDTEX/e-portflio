import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Code, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0f172a] border-t border-[#1e293b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center">
              <Code className="h-8 w-8 text-[#00F7FF]" />
              <span className="ml-2 text-white font-bold text-xl">ABDELOUAHED</span>
            </div>
            <p className="mt-3 text-gray-300 max-w-md">
              A motivated software engineering student with a passion for creating innovative solutions and exploring new technologies.
            </p>
            <div className="mt-4 flex space-x-4">
              <a
                href={`https://${personalInfo.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#00F7FF] transition-colors duration-200"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={`https://${personalInfo.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#00F7FF] transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-gray-300 hover:text-[#00F7FF] transition-colors duration-200"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-300 hover:text-[#00F7FF] transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Rabat, Morocco</li>
              <li>{personalInfo.email}</li>
              <li>{personalInfo.phone}</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;