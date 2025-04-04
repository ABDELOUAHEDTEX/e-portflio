
import React from 'react';
import { Award } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    "IBM SkillsBuild: Artificial Intelligence Analyst",
    "Oracle Database Programming with SQL",
    "AWS Cloud Technology and Services Concepts",
    "Deep Reinforcement Learning in Python"
  ];

  return (
    <section id="certifications" className="bg-gray-900 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Certifications</h2>
        
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-4">
            {certifications.map((cert, index) => (
              <li key={index} className="flex items-center gap-4 p-3 border border-gray-700 rounded-lg hover:border-darkBlue transition-colors">
                <div className="bg-darkBlue rounded-full p-2 flex-shrink-0">
                  <Award size={20} />
                </div>
                <span className="text-lg">{cert}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Certifications;