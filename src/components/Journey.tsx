
import React from 'react';

const Journey = () => {
  return (
    <section id="journey" className="bg-gray-900 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">My Engineering Journey</h2>
        
        <div className="relative">
          {/* Timeline line (visible on desktop only) */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-darkBlue hidden md:block"></div>
          
          <div className="flex flex-col md:flex-row gap-6 justify-between">
            {/* Education Card */}
            <div className="border border-white p-6 rounded-lg bg-black md:w-1/3 z-10 hover:border-darkBlue transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 text-darkBlue">Education</h3>
              <p className="mb-4">
                Studying Software Engineering at National School of Computer Science and Systems Analysis 
                <span className="block text-gray-400 mt-1">(Sep 2023 - Present)</span>
              </p>
              <p>
                Completed Preparatory Classes at Lycée Reda Slaoui
                <span className="block text-gray-400 mt-1">(Sep 2021 - Jun 2023)</span>
              </p>
            </div>
            
            {/* Internship Card */}
            <div className="border border-white p-6 rounded-lg bg-black md:w-1/3 z-10 hover:border-darkBlue transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 text-darkBlue">Internship</h3>
              <p>
                Web Development Intern at SmartFactory, Mohammedia
                <span className="block text-gray-400 mt-1">(Jun 2024 - Sep 2024)</span>
              </p>
              <p className="mt-2">
                Built an intern management platform using modern web technologies.
              </p>
            </div>
            
            {/* Projects Card */}
            <div className="border border-white p-6 rounded-lg bg-black md:w-1/3 z-10 hover:border-darkBlue transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 text-darkBlue">Projects</h3>
              <p>Currently working on:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>AI-based plant detection system</li>
                <li>Mobile learning application</li>
                <li>Various web development projects</li>
              </ul>
              <p className="mt-2 text-gray-400 italic">
                Continuously sharpening my technical skills
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
