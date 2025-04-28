import React from 'react';
import { experience, certifications } from '../data/portfolioData';
import { Briefcase, Award } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 lg:py-24 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Experiences & <span className="text-[#00F7FF]">Certifications</span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-gradient-to-r from-[#00F7FF] to-[#1E3A8A] mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Work Experience */}
          <div className="bg-[#1e293b] rounded-xl p-6 shadow-lg">
            <div className="flex items-center mb-8">
              <Briefcase className="h-6 w-6 text-[#00F7FF]" />
              <h3 className="ml-3 text-2xl font-semibold text-white">Experiences</h3>
            </div>
            
            {experience.map((exp, index) => (
              <div 
                key={index} 
                className="relative pl-8 pb-8 mb-8 border-l-2 border-[#00F7FF]/30 last:mb-0 last:pb-0"
              >
                <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-[#00F7FF]"></div>
                
                <div className="bg-[#0f172a] p-5 rounded-lg transform transition-transform hover:scale-[1.02] duration-300">
                  <h4 className="text-xl font-medium text-white">{exp.position}</h4>
                  <div className="flex flex-wrap items-center mt-1 text-gray-300">
                    <span className="mr-2">{exp.company},</span>
                    <span>{exp.location}</span>
                  </div>
                  <div className="mt-1 text-[#00F7FF] text-sm">{exp.period}</div>
                  
                  <div className="mt-4">
                    <h5 className="text-white font-medium mb-2">Key Responsibilities:</h5>
                    <ul className="list-disc pl-5 space-y-1 text-gray-300">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-4">
                    <h5 className="text-white font-medium mb-1">Impact:</h5>
                    <p className="text-gray-300">{exp.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Certifications */}
          <div className="bg-[#1e293b] rounded-xl p-6 shadow-lg">
            <div className="flex items-center mb-8">
              <Award className="h-6 w-6 text-[#00F7FF]" />
              <h3 className="ml-3 text-2xl font-semibold text-white">Certifications</h3>
            </div>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="bg-[#0f172a] p-5 rounded-lg transform transition-all hover:scale-[1.02] hover:shadow-[0_0_10px_rgba(0,247,255,0.2)] duration-300"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-[#1E3A8A] rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold">{index + 1}</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-white">{cert}</h4>
                      {index === 0 && (
                        <span className="inline-block mt-1 px-2 py-1 bg-[#00F7FF]/20 text-[#00F7FF] text-xs rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-5 bg-[#0f172a] rounded-lg border border-dashed border-[#00F7FF]/30">
              <h4 className="text-lg font-medium text-white mb-2">Continuing Education</h4>
              <p className="text-gray-300">
                Constantly improving skills through online courses, workshops, and self-directed learning to stay current with the latest technologies and best practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;