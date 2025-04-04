
import React from 'react';

const Languages = () => {
  const languages = [
    { name: "English", level: "Fluent", percentage: 100 },
    { name: "French", level: "Fluent", percentage: 100 },
    { name: "Arabic", level: "Native", percentage: 100 },
    { name: "Amazigh", level: "Native", percentage: 100 }
  ];

  return (
    <section id="languages" className="py-12">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Languages</h2>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {languages.map((lang, index) => (
            <div key={index} className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0">
              <div className="md:w-1/4">
                <h3 className="font-semibold text-lg">{lang.name}</h3>
                <p className="text-sm text-gray-400">{lang.level}</p>
              </div>
              
              <div className="md:w-3/4 flex items-center">
                <div className="w-full h-2 bg-gray-700 rounded">
                  <div 
                    className="h-full bg-darkBlue rounded" 
                    style={{ width: `${lang.percentage}%` }}
                  ></div>
                </div>
                <span className="ml-2 text-sm font-medium">{lang.percentage}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;
