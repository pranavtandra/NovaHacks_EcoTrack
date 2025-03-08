import React from 'react';
import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

function Results({ results, formData, globalAverages }) {
  const realLifeEquivalents = {
    treesNeeded: 0.06, // One tree absorbs ~16.5 kg CO2 per year, so 0.06 trees per 1 kg CO2
    gallonsOfGasoline: 0.112, // 8.91 kg CO2 per gallon, so 0.112 gallons per 1 kg CO2
    milesDriven: 2.48, // 0.404 kg CO2 per mile, so 2.48 miles per 1 kg CO2
    smartphoneCharges: 121, // ~0.00825 kg CO2 per full charge, so 121 charges per 1 kg CO2
    beefBurgers: 0.36, // ~2.8 kg CO2 per quarter-pound beef burger, so 0.36 burgers per 1 kg CO2
    flightMiles: 4.17 // ~0.24 kg CO2 per passenger mile flown, so 4.17 miles per 1 kg CO2
  };

  const calculateRealLifeEquivalents = (footprint) => {
    return {
      treesNeeded: Math.round(footprint * realLifeEquivalents.treesNeeded * 10) / 10,
      gallonsOfGasoline: Math.round(footprint * realLifeEquivalents.gallonsOfGasoline * 10) / 10,
      milesDriven: Math.round(footprint * realLifeEquivalents.milesDriven),
      smartphoneCharges: Math.round(footprint * realLifeEquivalents.smartphoneCharges),
      beefBurgers: Math.round(footprint * realLifeEquivalents.beefBurgers * 10) / 10,
      flightMiles: Math.round(footprint * realLifeEquivalents.flightMiles)
    };
  };
  
  const COLORS = ['#1A936F', '#88D498', '#C6DABF', '#FF9F1C'];
  
  const pieChartData = [
    { name: 'Transportation', value: results.transportation },
    { name: 'Home Energy', value: results.home },
    { name: 'Food', value: results.food },
    { name: 'Consumption', value: results.consumption }
  ];
  
  const comparisonData = [
    { name: 'Your Footprint', value: results.totalFootprint },
    { name: 'Global Average', value: formData.timeframe === 'yearly' ? globalAverages.yearly : 
      formData.timeframe === 'monthly' ? globalAverages.monthly : 
      formData.timeframe === 'weekly' ? globalAverages.monthly / 4 : 
      globalAverages.monthly / 30 }
  ];

  const equivalents = calculateRealLifeEquivalents(results.totalFootprint);
  
  return (
    <div className="card results">
      <h2>Your Carbon Footprint</h2>
      <p>Based on your inputs, we've calculated your estimated carbon footprint:</p>
      <div className="footprint-value">
        {Math.round(results.totalFootprint)} kg CO₂e
        <span className="timeframe">
          per {formData.timeframe === 'daily' ? 'day' : formData.timeframe.slice(0, -2)}
        </span>
      </div>
      
      
      <div className="real-life-equivalents">
        <h3>What Does This Mean In Real Life?</h3>
        <p>Your carbon footprint of {Math.round(results.totalFootprint)} kg CO₂e is equivalent to:</p>
        
        <div className="equivalents-grid">
          <div className="equivalent-item">
            <div className="equivalent-icon">🌳</div>
            <div className="equivalent-value">{equivalents.treesNeeded}</div>
            <div className="equivalent-label">trees needed for a year to absorb this carbon</div>
          </div>
          
          <div className="equivalent-item">
            <div className="equivalent-icon">⛽</div>
            <div className="equivalent-value">{equivalents.gallonsOfGasoline}</div>
            <div className="equivalent-label">gallons of gasoline burned</div>
          </div>
          
          <div className="equivalent-item">
            <div className="equivalent-icon">🚗</div>
            <div className="equivalent-value">{equivalents.milesDriven}</div>
            <div className="equivalent-label">miles driven in an average car</div>
          </div>
          
          <div className="equivalent-item">
            <div className="equivalent-icon">📱</div>
            <div className="equivalent-value">{equivalents.smartphoneCharges}</div>
            <div className="equivalent-label">smartphone charges</div>
          </div>
          
          <div className="equivalent-item">
            <div className="equivalent-icon">🍔</div>
            <div className="equivalent-value">{equivalents.beefBurgers}</div>
            <div className="equivalent-label">quarter-pound beef burgers produced</div>
          </div>
          
          <div className="equivalent-item">
            <div className="equivalent-icon">✈️</div>
            <div className="equivalent-value">{equivalents.flightMiles}</div>
            <div className="equivalent-label">miles flown in a passenger aircraft</div>
          </div>
        </div>
      </div>
      
      <div className="chart-section">
        <h3>Breakdown by Category</h3>
        <div className="chart-container">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieChartData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                labelLine={false}
                label={false}
              >
                {pieChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend layout="horizontal" verticalAlign="bottom" align="center" />
              <Tooltip formatter={(value) => `${Math.round(value)} kg CO₂e`} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        <h3>Comparison to Global Average</h3>
        <div className="chart-container">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={comparisonData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis label={{ value: 'kg CO₂e', angle: -90, position: 'insideLeft' }} />
              <Tooltip formatter={(value) => `${Math.round(value)} kg CO₂e`} />
              <Legend />
              <Bar dataKey="value" name="Carbon Footprint" fill="#1A936F" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Results;