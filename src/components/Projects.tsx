
import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Correspondence Management System",
      tech: "HTML, CSS, JavaScript, PHP (Laravel)",
      description: "Built to manage company mail. I designed the UI and backend for tracking mail status and generating reports.",
      reflection: "This project taught me how to integrate front-end and back-end technologies effectively.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=300&h=200"
    },
    {
      title: "SmartFactory Intern Platform",
      tech: "Angular, Node.js, REST API",
      description: "Developed during my internship. I collaborated with a team to manage intern data.",
      reflection: "I learned the importance of teamwork and API design in a real-world setting.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=300&h=200"
    },
    {
      title: "AI Plant Detection",
      tech: "Python, TensorFlow, Flutter",
      description: "A mobile application that uses AI to identify plant species from photos.",
      reflection: "This ongoing project is helping me explore the intersection of AI and mobile development.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=300&h=200"
    },
    {
      title: "Learning Management System",
      tech: "React, Node.js, MongoDB",
      description: "A platform to facilitate remote learning with interactive content.",
      reflection: "This project is expanding my knowledge of modern JavaScript frameworks and databases.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=300&h=200"
    }
  ];

  return (
    <section id="projects" className="bg-gray-900 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="border border-white p-6 rounded-lg bg-black hover:scale-105 hover:border-darkBlue transition-transform duration-300"
            >
              <div className="w-full h-48 mb-4 overflow-hidden rounded">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="text-xl font-bold mb-1">{project.title}</h3>
              <p className="text-darkBlue font-medium mb-2">{project.tech}</p>
              <p className="mb-3">{project.description}</p>
              <p className="mt-2 italic text-gray-400">{project.reflection}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
