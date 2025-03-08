import React from 'react';

function InputForm({ formData, setFormData, calculateFootprint }) {
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: id === 'localFood' ? parseInt(value) : value
    });
  };
  
  return (
    <div className="card">
      <h2>Enter Your Data</h2>
      <form className="carbon-form">
        <div className="form-group">
          <label htmlFor="timeframe">Timeframe:</label>
          <select 
            id="timeframe" 
            value={formData.timeframe}
            onChange={handleInputChange}
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
        
        <h3>Transportation</h3>
        <div className="form-group">
          <label htmlFor="carMiles">Car miles traveled:</label>
          <input 
            type="number" 
            id="carMiles" 
            min="0" 
            value={formData.carMiles}
            onChange={handleInputChange}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="carEfficiency">Car fuel efficiency (MPG):</label>
          <input 
            type="number" 
            id="carEfficiency" 
            min="1" 
            value={formData.carEfficiency}
            onChange={handleInputChange}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="publicTransportMiles">Public transport miles:</label>
          <input 
            type="number" 
            id="publicTransportMiles" 
            min="0" 
            value={formData.publicTransportMiles}
            onChange={handleInputChange}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="flightMiles">Flight miles:</label>
          <input 
            type="number" 
            id="flightMiles" 
            min="0" 
            value={formData.flightMiles}
            onChange={handleInputChange}
          />
        </div>
        
        <h3>Home Energy</h3>
        <div className="form-group">
          <label htmlFor="electricityUsage">Electricity usage (kWh):</label>
          <input 
            type="number" 
            id="electricityUsage" 
            min="0" 
            value={formData.electricityUsage}
            onChange={handleInputChange}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="naturalGas">Natural gas usage (therms):</label>
          <input 
            type="number" 
            id="naturalGas" 
            min="0" 
            value={formData.naturalGas}
            onChange={handleInputChange}
          />
        </div>
        
        <h3>Diet</h3>
        <div className="form-group">
          <label htmlFor="dietType">Diet type:</label>
          <select 
            id="dietType" 
            value={formData.dietType}
            onChange={handleInputChange}
          >
            <option value="meat-heavy">Meat in most meals</option>
            <option value="average">Average (meat a few times a week)</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="vegan">Vegan</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="localFood">
            Percentage of locally-sourced food: {formData.localFood}%
          </label>
          <input 
            type="range" 
            id="localFood" 
            min="0" 
            max="100" 
            value={formData.localFood}
            onChange={handleInputChange}
          />
        </div>
        
        <h3>Consumption</h3>
        <div className="form-group">
          <label htmlFor="shoppingLevel">General shopping habits:</label>
          <select 
            id="shoppingLevel"
            value={formData.shoppingLevel}
            onChange={handleInputChange}
          >
            <option value="minimal">Minimal (essentials only)</option>
            <option value="average">Average consumer</option>
            <option value="frequent">Frequent shopper</option>
          </select>
        </div>
        
        <button 
          type="button" 
          className="calculate-btn"
          onClick={calculateFootprint}
        >
          Calculate My Footprint
        </button>
      </form>
    </div>
  );
}

export default InputForm;