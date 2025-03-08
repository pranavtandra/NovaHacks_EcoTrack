import React, { useState } from 'react';

const GreenProducts = () => {
  const [activeCategory, setActiveCategory] = useState('home');
  
  const categories = [
    { id: 'home', name: 'Home & Energy' },
    { id: 'transport', name: 'Transportation' },
    { id: 'food', name: 'Food & Diet' },
    { id: 'lifestyle', name: 'Clothing & Lifestyle' },
    { id: 'waste', name: 'Waste Reduction' }
  ];
  
  const products = {
    home: [
      { 
        name: 'LED Light Bulbs', 
        description: 'Use 75% less energy and last up to 25 times longer than incandescent lighting.',
        amazonSearch: 'energy+efficient+LED+light+bulbs',
        icon: '💡'
      },
      { 
        name: 'Smart Thermostats', 
        description: 'Save up to 10-15% on heating and cooling by optimizing temperature settings.',
        amazonSearch: 'smart+thermostat+energy+efficient',
        icon: '🌡️'
      },
      { 
        name: 'Solar Panels & Home Batteries', 
        description: 'Generate and store renewable energy for your home.',
        amazonSearch: 'home+solar+panel+kit',
        icon: '☀️'
      },
      { 
        name: 'Energy-Efficient Appliances', 
        description: 'ENERGY STAR-rated devices use less electricity and water.',
        amazonSearch: 'energy+star+appliances',
        icon: '🏠'
      }
    ],
    transport: [
      { 
        name: 'Electric Vehicles (EVs)', 
        description: 'Reduce emissions with zero-emission electric vehicles.',
        amazonSearch: 'electric+vehicle+accessories',
        icon: '🚗'
      },
      { 
        name: 'E-Bikes & Scooters', 
        description: 'Eco-friendly alternatives for short-distance commuting.',
        amazonSearch: 'electric+bike',
        icon: '🚲'
      },
      { 
        name: 'Bike Accessories', 
        description: 'Gear to make cycling more convenient and comfortable.',
        amazonSearch: 'bike+commuting+accessories',
        icon: '🚴'
      },
      { 
        name: 'Public Transit Passes', 
        description: 'Reduce your carbon footprint by using public transportation.',
        amazonSearch: 'reusable+transit+card+holder',
        icon: '🚌'
      }
    ],
    food: [
      { 
        name: 'Plant-Based Meal Kits', 
        description: 'Delicious meat alternatives and vegetarian meal options.',
        amazonSearch: 'plant+based+meal+kit',
        icon: '🥗'
      },
      { 
        name: 'Reusable Containers & Bottles', 
        description: 'Reduce plastic waste with durable alternatives.',
        amazonSearch: 'reusable+food+containers',
        icon: '🍶'
      },
      { 
        name: 'Compost Bins', 
        description: 'Minimize food waste and create nutrient-rich soil.',
        amazonSearch: 'kitchen+compost+bin',
        icon: '♻️'
      },
      { 
        name: 'Local Farm Subscriptions', 
        description: 'Support local agriculture and reduce transportation emissions.',
        amazonSearch: 'indoor+herb+garden+kit',
        icon: '🌱'
      }
    ],
    lifestyle: [
      { 
        name: 'Sustainable Clothing Brands', 
        description: 'Eco-friendly fabrics and ethical manufacturing processes.',
        amazonSearch: 'sustainable+clothing',
        icon: '👕'
      },
      { 
        name: 'Reusable Shopping Bags', 
        description: 'Durable alternatives to single-use plastic bags.',
        amazonSearch: 'reusable+shopping+bags',
        icon: '🛍️'
      },
      { 
        name: 'Eco-Friendly Accessories', 
        description: 'Sustainable accessories made from recycled materials.',
        amazonSearch: 'recycled+accessories',
        icon: '👜'
      },
      { 
        name: 'Natural Fiber Bedding', 
        description: 'Organic cotton and other sustainable bedding options.',
        amazonSearch: 'organic+cotton+bedding',
        icon: '🛏️'
      }
    ],
    waste: [
      { 
        name: 'Bamboo Toothbrushes', 
        description: 'Biodegradable alternative to plastic toothbrushes.',
        amazonSearch: 'bamboo+toothbrush',
        icon: '🪥'
      },
      { 
        name: 'Shampoo Bars & Refillable Toiletries', 
        description: 'Minimize packaging waste from personal care products.',
        amazonSearch: 'zero+waste+shampoo+bar',
        icon: '🧴'
      },
      { 
        name: 'Biodegradable Cleaning Products', 
        description: 'Non-toxic cleaning solutions that break down naturally.',
        amazonSearch: 'biodegradable+cleaning+products',
        icon: '🧹'
      },
      { 
        name: 'Reusable Straws & Utensils', 
        description: 'Portable alternatives to single-use plastic items.',
        amazonSearch: 'reusable+straw+utensil+set',
        icon: '🥄'
      }
    ]
  };

  // Custom styles using provided color scheme
  const styles = {
    container: {
      backgroundColor: "#f3f7f0",
      borderRadius: "0.375rem",
      boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      padding: "2rem",
      margin: "1rem 0"
    },
    heading: {
      color: "#1a936f",
      fontSize: "1.875rem",
      fontWeight: "600",
      marginBottom: "1.5rem"
    },
    paragraph: {
      color: "#4a5568",
      marginBottom: "2rem"
    },
    activeTab: {
      backgroundColor: "#1a936f",
      color: "white"
    },
    inactiveTab: {
      backgroundColor: "#88d498",
      color: "#1a936f"
    },
    productCard: {
      border: "1px solid #e2e8f0",
      borderRadius: "0.375rem",
      padding: "1.25rem",
      transition: "border-color 0.2s ease"
    },
    productCardHover: {
      borderColor: "#1a936f"
    },
    productTitle: {
      color: "#1a936f",
      fontSize: "1.125rem",
      fontWeight: "500"
    },
    productDescription: {
      color: "#4a5568",
      fontSize: "0.875rem"
    },
    amazonButton: {
      backgroundColor: "#88d498",
      color: "#1a936f",
      padding: "0.5rem 1rem",
      borderRadius: "0.375rem",
      fontSize: "0.875rem",
      transition: "background-color 0.2s ease"
    },
    amazonButtonHover: {
      backgroundColor: "#6fc286"
    },
    infoBox: {
      backgroundColor: "#e6f2eb",
      borderLeftWidth: "4px",
      borderLeftColor: "#1a936f",
      padding: "1rem"
    },
    infoHeading: {
      color: "#1a936f",
      fontSize: "1.125rem",
      fontWeight: "500",
      marginBottom: "0.5rem"
    },
    infoParagraph: {
      color: "#2d6a4f"
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Green Products</h1>
      
      <p style={styles.paragraph}>
        Based on your carbon footprint of 372 kg CO<sub>2</sub>e per month, here are some recommended 
        products that can help you reduce your environmental impact and live more sustainably.
      </p>

      {/* Category Tabs */}
      <div style={{ display: "flex", overflowX: "auto", gap: "0.5rem", marginBottom: "1.5rem", paddingBottom: "0.5rem" }}>
        {categories.map(category => (
          <button
            key={category.id}
            style={{
              ...activeCategory === category.id ? styles.activeTab : styles.inactiveTab,
              padding: "0.5rem 1rem",
              borderRadius: "9999px",
              whiteSpace: "nowrap",
              transition: "background-color 0.2s ease, color 0.2s ease"
            }}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", 
        gap: "1.5rem", 
        marginBottom: "2rem" 
      }}>
        {products[activeCategory].map((product, index) => (
          <div 
            key={index} 
            style={{
              ...styles.productCard,
              ":hover": styles.productCardHover
            }}
            className="product-card" // For hover effect in CSS
          >
            <div style={{ display: "flex", alignItems: "flex-start", marginBottom: "0.75rem" }}>
              <span style={{ fontSize: "1.875rem", marginRight: "0.75rem" }} role="img" aria-label={product.name}>
                {product.icon}
              </span>
              <div>
                <h3 style={styles.productTitle}>{product.name}</h3>
                <p style={styles.productDescription}>{product.description}</p>
              </div>
            </div>
            <a 
              href={`https://www.amazon.com/s?k=${product.amazonSearch}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...styles.amazonButton,
                display: "inline-block",
                marginTop: "0.5rem",
                textDecoration: "none",
                ":hover": styles.amazonButtonHover
              }}
              className="amazon-button" // For hover effect in CSS
            >
              Find on Amazon
            </a>
          </div>
        ))}
      </div>

      {/* Information Box */}
      <div style={styles.infoBox}>
        <h3 style={styles.infoHeading}>Why These Products Matter</h3>
        <p style={styles.infoParagraph}>
          Making sustainable choices in your everyday purchases can significantly reduce your carbon footprint.
          The products listed here have been selected for their potential to decrease energy consumption,
          minimize waste, and support environmentally responsible practices. Every small change contributes to a greener future!
        </p>
      </div>

      {/* CSS for hover effects */}
      <style jsx>{`
        .product-card:hover {
          border-color: #1a936f;
        }
        
        .amazon-button:hover {
          background-color: #6fc286;
        }
      `}</style>
    </div>
  );
};

export default GreenProducts;