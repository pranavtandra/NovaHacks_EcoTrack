import React, { useState } from 'react';
import './App.css';
import InputForm from './InputForm';
import Results from './Results';
import Recommendations from './Recommendations';
import CarbonAssistant from './CarbonAssistant';
import GreenProducts from './GreenProducts';
import CarbonOffsets from './CarbonOffsets';
import EducationalResources from './EducationalResources';

function App() {
  const [activeTab, setActiveTab] = useState('input');
  const [formData, setFormData] = useState({
    timeframe: 'monthly',
    carMiles: 0,
    carEfficiency: 25,
    publicTransportMiles: 0,
    flightMiles: 0,
    electricityUsage: 0,
    naturalGas: 0,
    dietType: 'average',
    localFood: 20,
    shoppingLevel: 'average'
  });
  
  const [results, setResults] = useState({
    totalFootprint: 0,
    transportation: 0,
    home: 0,
    food: 0,
    consumption: 0
  });
  
  const [showResults, setShowResults] = useState(false);
  
  
  const globalAverages = {
    monthly: 900, 
    yearly: 10800 
  };

 
  const emissionFactors = {
    car: 0.404, 
    publicTransport: 0.14, 
    flight: 0.24, 
    electricity: 0.92, 
    naturalGas: 5.3,
    diet: {
      'meat-heavy': 3.3,
      'average': 2.5,
      'vegetarian': 1.7,
      'vegan': 1.5
    },
    shopping: {
      'minimal': 100,
      'average': 300,
      'frequent': 600
    }
  };

  const calculateFootprint = () => {

    const carEmissions = (formData.carMiles / formData.carEfficiency) * 8.91; 
    const publicTransportEmissions = formData.publicTransportMiles * emissionFactors.publicTransport;
    const flightEmissions = formData.flightMiles * emissionFactors.flight;
    const transportationTotal = carEmissions + publicTransportEmissions + flightEmissions;
    
    
    const electricityEmissions = formData.electricityUsage * emissionFactors.electricity;
    const gasEmissions = formData.naturalGas * emissionFactors.naturalGas;
    const homeTotal = electricityEmissions + gasEmissions;
    
    
    const dietEmissions = emissionFactors.diet[formData.dietType] * 30; 
    const localFoodReduction = dietEmissions * (formData.localFood / 100) * 0.2; 
    const foodTotal = dietEmissions - localFoodReduction;
    
    
    const consumptionEmissions = emissionFactors.shopping[formData.shoppingLevel];
    
    const total = transportationTotal + homeTotal + foodTotal + consumptionEmissions;
    
    let timeFactor = 1;
    if (formData.timeframe === 'daily') timeFactor = 1/30;
    if (formData.timeframe === 'weekly') timeFactor = 7/30;
    if (formData.timeframe === 'yearly') timeFactor = 12;
    
    const timeAdjustedResults = {
      totalFootprint: total * timeFactor,
      transportation: transportationTotal * timeFactor,
      home: homeTotal * timeFactor,
      food: foodTotal * timeFactor,
      consumption: consumptionEmissions * timeFactor
    };
    
    setResults(timeAdjustedResults);
    setShowResults(true);
    setActiveTab('results');
  };
  
  return (
    <div className="App">
      <header className="header">
        <h1>EcoTrack</h1>
        <p>Track, reduce, and make a difference</p>
      </header>
      
      <div className="container">
        <div className="tabs">
          <button 
            className={`tab ${activeTab === 'input' ? 'active' : ''}`} 
            onClick={() => setActiveTab('input')}
          >
            Input Data
          </button>
          <button 
            className={`tab ${activeTab === 'results' ? 'active' : ''}`} 
            onClick={() => showResults && setActiveTab('results')}
            disabled={!showResults}
          >
            Results
          </button>
          <button 
            className={`tab ${activeTab === 'recommendations' ? 'active' : ''}`} 
            onClick={() => showResults && setActiveTab('recommendations')}
            disabled={!showResults}
          >
            Recommendations
          </button>
          <button 
            className={`tab ${activeTab === 'assistant' ? 'active' : ''}`} 
            onClick={() => setActiveTab('assistant')}
          >
            Carbon Assistant
          </button>
          <button 
            className={`tab ${activeTab === 'products' ? 'active' : ''}`} 
            onClick={() => setActiveTab('products')}
          >
            Green Products
          </button>
          <button 
            className={`tab ${activeTab === 'offsets' ? 'active' : ''}`} 
            onClick={() => setActiveTab('offsets')}
          >
            Carbon Offsets
          </button>
          <button 
            className={`tab ${activeTab === 'education' ? 'active' : ''}`} 
            onClick={() => setActiveTab('education')}
          >
            Learn More
          </button>
        </div>
        
        <div className={`tab-content ${activeTab === 'input' ? 'active' : ''}`}>
          <InputForm 
            formData={formData} 
            setFormData={setFormData} 
            calculateFootprint={calculateFootprint} 
          />
        </div>
        
        <div className={`tab-content ${activeTab === 'results' ? 'active' : ''}`}>
          <Results 
            results={results} 
            formData={formData}
            globalAverages={globalAverages}
          />
        </div>
        
        <div className={`tab-content ${activeTab === 'recommendations' ? 'active' : ''}`}>
          <Recommendations 
            formData={formData} 
            results={results}
            emissionFactors={emissionFactors}
          />
        </div>
        
        <div className={`tab-content ${activeTab === 'assistant' ? 'active' : ''}`}>
          <CarbonAssistant 
            formData={formData}
            results={showResults ? results : null}
          />
        </div>
        
        <div className={`tab-content ${activeTab === 'products' ? 'active' : ''}`}>
          <GreenProducts />
        </div>
        
        <div className={`tab-content ${activeTab === 'offsets' ? 'active' : ''}`}>
          <CarbonOffsets />
        </div>
        
        <div className={`tab-content ${activeTab === 'education' ? 'active' : ''}`}>
          <EducationalResources />
        </div>
      </div>
    </div>
  );
}

export default App;