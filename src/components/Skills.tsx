import React from 'react';
import { technicalSkills, specializations, languages } from '../data/portfolioData';

const Skills: React.FC = () => {
  const renderSkillBar = (skill: string, index: number) => {
    // Generate semi-random percent for visual interest (70-95%)
    const percent = 70 + (index % 7) * 4;
    
    return (
      <div key={skill} className="mb-4">
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm font-medium text-gray-300">{skill}</span>
          <span className="text-xs text-[#00F7FF]">{percent}%</span>
        </div>
        <div className="w-full bg-[#1e293b] rounded-full h-2.5">
          <div 
            className="bg-gradient-to-r from-[#00F7FF] to-[#1E3A8A] h-2.5 rounded-full" 
            style={{ width: `${percent}%`, transition: 'width 1.5s ease-in-out' }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-16 lg:py-24 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            My <span className="text-[#00F7FF]">Skills</span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-gradient-to-r from-[#00F7FF] to-[#1E3A8A] mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <div className="lg:col-span-2 space-y-8">
            {technicalSkills.map((category) => (
              <div 
                key={category.category} 
                className="bg-[#1e293b] rounded-xl p-6 shadow-lg transform transition-transform hover:scale-[1.02] duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-6">{category.category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                  {category.skills.map((skill, index) => renderSkillBar(skill, index))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Specializations and Languages */}
          <div className="space-y-8">
            <div className="bg-[#1e293b] rounded-xl p-6 shadow-lg transform transition-transform hover:scale-[1.02] duration-300">
              <h3 className="text-xl font-semibold text-white mb-6">Specializations</h3>
              <div className="space-y-4">
                {specializations.map((spec, index) => (
                  <div 
                    key={index} 
                    className="flex items-center p-3 bg-[#0f172a] rounded-lg transition-colors hover:bg-[#1E3A8A]/20"
                  >
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#00F7FF]"></div>
                    <span className="ml-3 text-gray-300">{spec}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-[#1e293b] rounded-xl p-6 shadow-lg transform transition-transform hover:scale-[1.02] duration-300">
              <h3 className="text-xl font-semibold text-white mb-6">Languages</h3>
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-300">{lang.language}</span>
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      lang.level === 'Native' 
                        ? 'bg-[#00F7FF]/20 text-[#00F7FF]' 
                        : 'bg-[#1E3A8A]/20 text-gray-300'
                    }`}>
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-[#1e293b] rounded-xl p-6 shadow-lg transform transition-transform hover:scale-[1.02] duration-300">
              <h3 className="text-xl font-semibold text-white mb-4">Learning Focus</h3>
              <p className="text-gray-300 mb-4">
                Currently expanding knowledge in:
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#1E3A8A]/20 text-gray-300 rounded-full text-sm">
                  Cloud Services
                </span>
                <span className="px-3 py-1 bg-[#1E3A8A]/20 text-gray-300 rounded-full text-sm">
                  Machine Learning
                </span>
                <span className="px-3 py-1 bg-[#1E3A8A]/20 text-gray-300 rounded-full text-sm">
                  React.js
                </span>
                <span className="px-3 py-1 bg-[#1E3A8A]/20 text-gray-300 rounded-full text-sm">
                  DevOps
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;