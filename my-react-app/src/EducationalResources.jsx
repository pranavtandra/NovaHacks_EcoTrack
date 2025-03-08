import React, { useState } from 'react';
import './EducationalResources.css';

const EducationalResources = () => {
  const [activeCategory, setActiveCategory] = useState('Videos');
  
  // Resource categories
  const categories = [
    { id: 'Videos', name: 'Videos' },
    { id: 'Articles', name: 'Articles' }
  ];
  
  // Educational resources data
  const resources = {
    Videos: [
      {
        title: "What is climate change",
        description: "An overview of climate change causes and effects",
        url: "https://www.youtube.com/watch?v=QlQ-MEZgRGY",
        icon: "🌍"
      },
      {
        title: "Carbon Cycle",
        description: "Learn how carbon moves through our ecosystem",
        url: "https://www.youtube.com/watch?v=yhlg9txl7yM",
        icon: "♻️"
      },
      {
        title: "How greenhouse gases work",
        description: "Understand the mechanics behind global warming",
        url: "https://www.youtube.com/watch?v=sTvqIijqvTg",
        icon: "🌡️"
      },
      {
        title: "Beef Carbon emissions",
        description: "The environmental impact of meat production",
        url: "https://www.youtube.com/watch?v=3lrJYTsKdUM",
        icon: "🐄"
      },
      {
        title: "Carbon cost of food waste",
        description: "How food waste contributes to emissions",
        url: "https://www.youtube.com/watch?v=ishA6kry8nc",
        icon: "🍎"
      },
      {
        title: "Carbon offsets",
        description: "How carbon offset programs work",
        url: "https://www.youtube.com/watch?v=v8vjbtAYqv4",
        icon: "🌱"
      }
    ],
    Articles: [
      {
        title: "Effects of Climate Change",
        description: "NASA's research on climate change impacts",
        url: "https://science.nasa.gov/climate-change/effects/",
        icon: "🔬"
      },
      {
        title: "The Ozone Layer",
        description: "Understanding ozone depletion and climate change",
        url: "https://uk-air.defra.gov.uk/research/ozone-uv/moreinfo?view=deleption-climate-change",
        icon: "🛡️"
      },
      {
        title: "Carbon footprint factsheet",
        description: "Key facts about carbon emissions",
        url: "https://css.umich.edu/publications/factsheets/sustainability-indicators/carbon-footprint-factsheet",
        icon: "👣"
      },
      {
        title: "Actions for a healthy planet",
        description: "UN recommendations for sustainable living",
        url: "https://www.un.org/en/actnow/ten-actions",
        icon: "🌟"
      }
    ]
  };

  return (
    <div className="container">
      <h1 className="heading">Educational Resources</h1>
      
      <p className="paragraph">
        Based on your interest in reducing your carbon footprint, here are some recommended resources that can 
        help you learn more about climate change and sustainable living.
      </p>

      {/* Category Tabs */}
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

      {/* Resource Grid */}
      <div className="resource-grid">
        {resources[activeCategory].map((resource, index) => (
          <div key={index} className="resource-card">
            <div className="resource-header">
              <span className="resource-icon" role="img" aria-label={resource.title}>
                {resource.icon}
              </span>
              <div>
                <h3 className="resource-title">{resource.title}</h3>
                <p className="resource-description">{resource.description}</p>
              </div>
            </div>
            <a 
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="visit-button"
            >
              View Resource
            </a>
          </div>
        ))}
      </div>

      {/* Information Box */}
      <div className="info-box">
        <h3 className="info-heading">Why Education Matters</h3>
        <p className="info-paragraph">
          Understanding the science behind climate change is crucial for making informed decisions about your carbon footprint. 
          These resources provide scientifically accurate information to help you learn about the causes and effects of climate 
          change, as well as practical steps you can take to reduce your impact on the environment.
        </p>
      </div>
    </div>
  );
};

export default EducationalResources;