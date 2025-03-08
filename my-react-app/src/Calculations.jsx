
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

const getRecommendations = () => {
  const recommendations = [];
  
  if (formData.carMiles > 0 && formData.carEfficiency < 30) {
    recommendations.push({
      title: "Consider a more fuel-efficient vehicle",
      description: "Upgrading to a vehicle with 40 MPG could reduce your carbon footprint by approximately " + 
        Math.round((formData.carMiles / formData.carEfficiency * 8.91) - (formData.carMiles / 40 * 8.91)) + " kg CO₂ per month."
    });
  }
  
  if (formData.carMiles > 100) {
    recommendations.push({
      title: "Reduce car travel or use public transportation",
      description: "If you reduced your car travel by 20% and switched to public transport, you could save approximately " + 
        Math.round((formData.carMiles * 0.2 / formData.carEfficiency * 8.91) - (formData.carMiles * 0.2 * emissionFactors.publicTransport)) + " kg CO₂ per month."
    });
  }
  
  if (formData.electricityUsage > 0) {
    recommendations.push({
      title: "Switch to LED lighting and energy-efficient appliances",
      description: "Replacing conventional bulbs with LEDs can reduce lighting electricity use by 75%, saving approximately " + 
        Math.round(formData.electricityUsage * 0.15 * 0.75 * emissionFactors.electricity) + " kg CO₂ per month (assuming 15% of electricity is used for lighting)."
    });
  }
  
  if (formData.dietType === 'meat-heavy' || formData.dietType === 'average') {
    const currentDietEmissions = emissionFactors.diet[formData.dietType] * 30;
    const veggieEmissions = emissionFactors.diet['vegetarian'] * 30;
    recommendations.push({
      title: "Consider reducing meat consumption",
      description: "Switching to a vegetarian diet could reduce your food emissions by approximately " + 
        Math.round(currentDietEmissions - veggieEmissions) + " kg CO₂ per month."
    });
  }
  
  if (formData.shoppingLevel === 'frequent') {
    recommendations.push({
      title: "Practice mindful consumption",
      description: "Reducing your shopping to average levels could save approximately " + 
        Math.round(emissionFactors.shopping.frequent - emissionFactors.shopping.average) + " kg CO₂ per month."
    });
  }
  
  if (recommendations.length === 0) {
    recommendations.push({
      title: "Keep up the good work!",
      description: "Your carbon footprint is already relatively low. Consider offsetting your remaining emissions through verified carbon credit programs."
    });
  }
  
  return recommendations;
};

const getGeneralRecommendations = () => {
  return [
    {
      title: "Drive less, walk or bike more",
      description: "For short trips, consider walking or biking instead of driving. It's not only good for the planet but also for your health.",
      source: "UN ActNow",
      link: "https://www.un.org/en/actnow/ten-actions"
    },
    {
      title: "Use renewable energy",
      description: "Switch to a renewable energy provider or consider installing solar panels if possible.",
      source: "Wisconsin Sustainability",
      link: "https://sustainability.wisc.edu/14-ways-to-reduce-your-carbon-footprint/"
    },
    {
      title: "Reduce food waste",
      description: "Plan meals, use shopping lists, buy local and in-season, and store food properly to reduce waste.",
      source: "UN ActNow",
      link: "https://www.un.org/en/actnow/ten-actions"
    },
    {
      title: "Adjust your thermostat",
      description: "Lower your thermostat in winter and raise it in summer. Even a 1-2°F adjustment can reduce energy consumption by 5-10%.",
      source: "Massachusetts.gov",
      link: "https://www.mass.gov/info-details/reduce-your-carbon-footprint-at-home"
    },
    {
      title: "Insulate and seal your home",
      description: "Proper insulation can reduce heating and cooling needs by up to 20%. Check for drafts around doors and windows.",
      source: "Massachusetts.gov",
      link: "https://www.mass.gov/info-details/reduce-your-carbon-footprint-at-home"
    },
    {
      title: "Choose quality over quantity",
      description: "Buy fewer, higher-quality items that will last longer rather than cheaper items that need frequent replacement.",
      source: "Wisconsin Sustainability",
      link: "https://sustainability.wisc.edu/14-ways-to-reduce-your-carbon-footprint/"
    },
    {
      title: "Embrace the 5 Rs: Refuse, Reduce, Reuse, Repurpose, Recycle",
      description: "Follow this hierarchy for more sustainable consumption habits.",
      source: "Wisconsin Sustainability",
      link: "https://sustainability.wisc.edu/14-ways-to-reduce-your-carbon-footprint/"
    },
    {
      title: "Save water",
      description: "Install water-efficient fixtures, fix leaks promptly, and only run full loads in your dishwasher and washing machine.",
      source: "UN ActNow",
      link: "https://www.un.org/en/actnow/ten-actions"
    },
    {
      title: "Unplug electronics when not in use",
      description: "Many appliances draw power even when turned off. Unplug them or use power strips to cut power completely.",
      source: "Massachusetts.gov",
      link: "https://www.mass.gov/info-details/reduce-your-carbon-footprint-at-home"
    },
    {
      title: "Spread awareness and take action",
      description: "Talk to friends and family about climate change and sustainable living. Support sustainable businesses and policies.",
      source: "UN ActNow",
      link: "https://www.un.org/en/actnow/ten-actions"
    }
  ];
};