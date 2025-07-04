import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import { ExternalLink, Code, ArrowRight } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const toggleProject = (index: number) => {
    setActiveProject(activeProject === index ? null : index);
  };

  return (
    <section id="projects" className="py-16 lg:py-24 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            My <span className="text-[#00F7FF]">Projects</span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-gradient-to-r from-[#00F7FF] to-[#1E3A8A] mx-auto"></div>
          <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
            A showcase of my latest work, highlighting my skills and expertise across different technologies and domains.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`group bg-[#1e293b] rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,247,255,0.3)] ${
                activeProject === index ? 'md:col-span-2' : ''
              }`}
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold text-white">{project.name}</h3>
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-3 py-1 bg-[#00F7FF]/10 text-[#00F7FF] rounded-full text-xs flex items-center"
                    >
                      <Code className="h-3 w-3 mr-1" />
                      {tech}
                    </span>
                  ))}
                </div>
                
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                {activeProject === index ? (
                  <div className="mt-4 text-gray-300 animate-fadeIn">
                    <h4 className="text-[#00F7FF] font-medium mb-2">What I Learned</h4>
                    <p>{project.learning}</p>
                  </div>
                ) : null}
                
                <button
                  onClick={() => toggleProject(index)}
                  className="mt-4 text-[#00F7FF] flex items-center group hover:text-white transition-colors duration-200"
                >
                  {activeProject === index ? "Show Less" : "Learn More"}
                  <ArrowRight className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                    activeProject === index ? 'rotate-90' : 'group-hover:translate-x-1'
                  }`} />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://github.com/ABDELOUAHEDTEX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-[#00F7FF] text-[#00F7FF] rounded-md hover:bg-[#00F7FF]/10 transition-colors duration-300"
          >
            <ExternalLink className="mr-2 h-5 w-5" />
            View More On GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;