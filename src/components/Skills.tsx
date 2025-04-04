
import React from 'react';

const Skills = () => {
  const technicalSkills = [
    "JavaScript", "Python", "Java", "PHP", "SQL", "C", "C++", "HTML/CSS", 
    "Angular", "Node.js", "Laravel", "TensorFlow/PyTorch", "Android SDK", 
    "Git", "Docker", "MySQL", "Android Studio", "Oracle Apex"
  ];

  const highlightAreas = [
    "Full Stack Development", "Mobile Development (Android)", "AI"
  ];

  return (
    <section id="skills" className="py-12">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        
        {/* Technical Skills Grid */}
        <div className="mb-10">
          <h3 className="text-xl font-bold mb-4">Technical Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {technicalSkills.map((skill, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-darkBlue"></div>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Highlight Areas */}
        <div>
          <h3 className="text-xl font-bold mb-4">Specialized In</h3>
          <div className="flex flex-wrap gap-3">
            {highlightAreas.map((area, index) => (
              <span 
                key={index} 
                className="bg-darkBlue text-white px-4 py-2 rounded-full inline-block"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
