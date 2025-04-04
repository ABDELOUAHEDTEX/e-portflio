
import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-12">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
        
        <div className="border border-white p-6 rounded-lg hover:border-darkBlue transition-colors duration-300 max-w-3xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="bg-darkBlue rounded-full p-3 flex-shrink-0">
              <Briefcase size={24} />
            </div>
            
            <div>
              <h3 className="text-xl font-bold">SmartFactory Internship</h3>
              <p className="text-gray-400 mb-3">Mohammedia, Morocco (Jun 2024 - Sep 2024)</p>
              
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-darkBlue rounded-full mt-2.5"></div>
                  <p>Developed an intern management platform using Angular (front-end) and Node.js (back-end)</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-darkBlue rounded-full mt-2.5"></div>
                  <p>Designed a REST API for data management</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-darkBlue rounded-full mt-2.5"></div>
                  <p>Collaborated with a team of developers</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-darkBlue rounded-full mt-2.5"></div>
                  <p>Used Git for version control</p>
                </li>
              </ul>
              
              <p className="italic text-gray-400">
                This experience enhanced my ability to work in a team and deliver under deadlines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
