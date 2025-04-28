import React from 'react';
import { aboutMe, careerGoal, personalInfo, education } from '../data/portfolioData';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            About <span className="text-[#00F7FF]">Me</span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-gradient-to-r from-[#00F7FF] to-[#1E3A8A] mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="bg-[#1e293b] rounded-xl p-6 shadow-lg transform transition-transform hover:scale-[1.02] duration-300">
              <h3 className="text-xl font-semibold text-white mb-4">Professional Profile</h3>
              <p className="text-gray-300 leading-relaxed">
                {aboutMe}
              </p>
            </div>
            
            <div className="bg-[#1e293b] rounded-xl p-6 shadow-lg transform transition-transform hover:scale-[1.02] duration-300">
              <h3 className="text-xl font-semibold text-white mb-4">Career Goal</h3>
              <p className="text-gray-300 leading-relaxed">
                {careerGoal}
              </p>
            </div>
            
            <div className="bg-[#1e293b] rounded-xl p-6 shadow-lg transform transition-transform hover:scale-[1.02] duration-300">
              <h3 className="text-xl font-semibold text-white mb-4">Personal Interests</h3>
              <p className="text-gray-300 leading-relaxed">
                {personalInfo.interests}
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-[#1e293b] rounded-xl p-6 shadow-lg transform transition-transform hover:scale-[1.02] duration-300">
              <h3 className="text-xl font-semibold text-white mb-4">Education</h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-6 pb-4 border-l-2 border-[#00F7FF]">
                    <div className="absolute top-0 left-[-8px] w-4 h-4 rounded-full bg-[#00F7FF]"></div>
                    <h4 className="text-white font-medium">{edu.institution}</h4>
                    <p className="text-[#00F7FF]">{edu.degree}</p>
                    <p className="text-gray-400 text-sm">{edu.period}</p>
                    {edu.current && (
                      <span className="inline-block mt-1 px-2 py-1 bg-[#00F7FF]/20 text-[#00F7FF] text-xs rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-[#1e293b] rounded-xl p-6 shadow-lg transform transition-transform hover:scale-[1.02] duration-300">
              <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
              <div className="space-y-3 text-gray-300">
                <p><span className="text-[#00F7FF]">Email:</span> {personalInfo.email}</p>
                <p><span className="text-[#00F7FF]">Phone:</span> {personalInfo.phone}</p>
                <p>
                  <span className="text-[#00F7FF]">LinkedIn:</span>{' '}
                  <a 
                    href={`https://${personalInfo.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors duration-200"
                  >
                    {personalInfo.linkedin}
                  </a>
                </p>
                <p>
                  <span className="text-[#00F7FF]">GitHub:</span>{' '}
                  <a 
                    href={`https://${personalInfo.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors duration-200"
                  >
                    {personalInfo.github}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;