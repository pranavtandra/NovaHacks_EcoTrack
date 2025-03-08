import React, { useState } from 'react';
import './CarbonOffsets.css';

const CarbonOffsets = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Programs' },
    { id: 'individual', name: 'For Individuals' },
    { id: 'business', name: 'For Businesses' },
    { id: 'certified', name: 'Certified Standards' }
  ];
  
  const programs = {
    all: [
      { 
        name: 'TerraPass', 
        description: 'Offers carbon offsets for individuals and businesses through renewable energy, forestry, and methane capture projects.',
        url: 'https://terrapass.com/',
        icon: '🌍',
        category: 'both'
      },
      { 
        name: 'MyClimate', 
        description: 'International initiative offering carbon offset projects and climate education to reduce carbon footprints.',
        url: 'https://www.myclimate.org/en/',
        icon: '🌱',
        category: 'both'
      },
      { 
        name: 'Verra', 
        description: 'Operates the Verified Carbon Standard (VCS), the world\'s most widely used voluntary GHG program.',
        url: 'https://verra.org/programs/verified-carbon-standard/',
        icon: '✅',
        category: 'certified'
      },
      { 
        name: 'Cool Effect', 
        description: 'Nonprofit organization providing carbon reduction projects that are scientifically verified and monitored.',
        url: 'https://www.cooleffect.org/',
        icon: '❄️',
        category: 'individual'
      },
      { 
        name: 'Climate Impact Partners', 
        description: 'Delivers high-impact carbon reduction projects for climate action and sustainable development.',
        url: 'https://www.climateimpact.com/',
        icon: '🤝',
        category: 'business'
      }
    ],
    individual: [],
    business: [],
    certified: []
  };

  programs.all.forEach(program => {
    if (program.category === 'individual' || program.category === 'both') {
      programs.individual.push(program);
    }
    if (program.category === 'business' || program.category === 'both') {
      programs.business.push(program);
    }
    if (program.category === 'certified') {
      programs.certified.push(program);
    }
  });

  return (
    <div className="container">
      <h1 className="heading">Carbon Offset Programs</h1>
      
      <p className="paragraph">
        Carbon offset programs allow you to compensate for your carbon emissions by funding projects 
        that reduce greenhouse gas emissions elsewhere. Here are some reputable programs to consider.
      </p>

     
      <div className="category-tabs">
        {categories.map(category => (
          <button
            key={category.id}
            className={`category-tab ${activeCategory === category.id ? 'active' : 'inactive'}`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      
      <div className="program-grid">
        {programs[activeCategory].map((program, index) => (
          <div 
            key={index} 
            className="program-card"
          >
            <div className="program-header">
              <span className="program-icon" role="img" aria-label={program.name}>
                {program.icon}
              </span>
              <div>
                <h3 className="program-title">{program.name}</h3>
                <p className="program-description">{program.description}</p>
              </div>
            </div>
            <a 
              href={program.url}
              target="_blank"
              rel="noopener noreferrer"
              className="visit-button"
            >
              Visit Website
            </a>
          </div>
        ))}
      </div>

      
      <div className="info-box">
        <h3 className="info-heading">How Carbon Offsets Work</h3>
        <p className="info-paragraph">
          Carbon offsets finance projects that reduce greenhouse gas (GHG) emissions. These projects might 
          restore forests, update power plants, capture methane from landfills, or develop renewable energy. 
          When you purchase carbon offsets, you're funding these projects to compensate for your own emissions.
          Always look for verified and certified offsets to ensure your contribution makes a real impact.
        </p>
      </div>
    </div>
  );
};

export default CarbonOffsets;