import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-12">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-2/3">
            <p className="text-lg mb-4">
              I'm a motivated software engineering student at the National School of Computer Science and Systems Analysis (Rabat, Morocco) with a strong foundation in web development (Angular, Node.js, Laravel), mobile development (Android, Java), and AI (Python, TensorFlow). I'm passionate about creating innovative solutions and collaborating on impactful projects.
            </p>
            <p className="text-lg">
              My goal is to join a dynamic tech team where I can contribute to cutting-edge projects in full-stack development and AI, while continuously growing my expertise as a software engineer.
            </p>
          </div>
          
          <div className="md:w-1/3 flex justify-center">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-darkBlue">
              <img 
                src="public\abdlwahed.jpeg" 
                alt="Abdelouahed Akabbab" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
