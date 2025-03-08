import React, { useState, useEffect, useRef } from 'react';

function CarbonAssistant() {
  
  const [chatMessages, setChatMessages] = useState([
    { sender: 'bot', text: 'Hi there! I\'m your Carbon Footprint Assistant. How can I help you reduce your environmental impact today?' }
  ]);
  const [userInput, setUserInput] = useState('');
  const chatEndRef = useRef(null);


  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  const generateChatbotResponse = (userQuestion) => {
    const question = userQuestion.toLowerCase();
    
    if (question.includes('car') || question.includes('driving') || question.includes('commute') || question.includes('transportation')) {
      return "To reduce transportation emissions, consider:\n\n" +
        "1. Use public transportation when possible (saves ~65% emissions compared to driving alone)\n" +
        "2. Carpool with colleagues or neighbors\n" +
        "3. Choose fuel-efficient or electric vehicles (EVs produce ~50% less lifecycle emissions)\n" +
        "4. Combine errands to reduce trips\n" +
        "5. Consider biking or walking for short distances (good for health too!)";
    }
    
    else if (question.includes('electricity') || question.includes('energy') || question.includes('power') || 
             question.includes('home') || question.includes('heating') || question.includes('cooling')) {
      return "For reducing home energy emissions:\n\n" +
        "1. Switch to LED bulbs (uses 75% less energy than incandescent)\n" +
        "2. Use a programmable thermostat (can save 10-15% on heating/cooling)\n" +
        "3. Improve insulation and seal drafts\n" +
        "4. Choose energy-efficient appliances (look for ENERGY STAR ratings)\n" +
        "5. Consider renewable energy options like solar panels\n" +
        "6. Unplug electronics or use smart power strips to eliminate phantom power usage";
    }
    
    else if (question.includes('food') || question.includes('diet') ||  question.includes('eating') || 
             question.includes('meat') || question.includes('vegetarian') || question.includes('vegan')) {
      return "Food-related carbon reduction tips:\n\n" +
        "1. Reduce meat consumption (especially beef and lamb which have the highest emissions)\n" +
        "2. Try plant-based meals several times a week\n" +
        "3. Buy local, seasonal produce (reduced transportation emissions)\n" +
        "4. Minimize food waste (plan meals and use leftovers creatively)\n" +
        "5. Compost food scraps instead of sending to landfill\n" +
        "6. Choose foods with minimal packaging";
    }
    
    else if (question.includes('shopping') || question.includes('buying') || question.includes('consumption') || 
             question.includes('waste') || question.includes('plastic')) {
      return "For more sustainable consumption habits:\n\n" +
        "1. Follow the 5Rs: Refuse, Reduce, Reuse, Repurpose, Recycle\n" +
        "2. Buy quality items that last longer\n" +
        "3. Repair rather than replace when possible\n" +
        "4. Choose products with minimal/recyclable packaging\n" +
        "5. Borrow or rent items you use infrequently\n" +
        "6. Consider second-hand purchases before buying new";
    }
    
    else if (question.includes('offset') || question.includes('carbon credit') || 
             question.includes('neutralize') || question.includes('compensate')) {
      return "About carbon offsets:\n\n" +
        "Carbon offsets let you compensate for emissions by funding projects that reduce greenhouse gases elsewhere. Look for verified offset programs that are certified by standards like:\n\n" +
        "• Gold Standard\n" +
        "• Verified Carbon Standard (VCS)\n" +
        "• Climate Action Reserve\n\n" +
        "Remember that reducing your emissions should always be the first priority, with offsets used for unavoidable emissions.";
    }
    
    else if (question.includes('carbon footprint') || question.includes('reduce emissions') || 
             question.includes('climate change') || question.includes('global warming')) {
      return "The most effective ways to reduce your carbon footprint:\n\n" +
        "1. Transportation: Drive less, use public transit, fly less frequently\n" +
        "2. Home: Use renewable energy, improve energy efficiency\n" +
        "3. Diet: Reduce meat consumption, especially beef\n" +
        "4. Consumption: Buy less, choose durable products, avoid single-use items\n\n" +
        "Try our calculator to see where your biggest impact areas are!";
    }
    
    else if (question.includes('water') || question.includes('shower') || question.includes('laundry')) {
      return "Water conservation tips (which also save energy):\n\n" +
        "1. Take shorter showers (5 minutes saves ~10-15 gallons)\n" +
        "2. Install low-flow fixtures (can reduce water use by 30-50%)\n" +
        "3. Fix leaks promptly (a dripping faucet can waste 3,000+ gallons per year)\n" +
        "4. Run full loads of laundry and dishes\n" +
        "5. Collect rainwater for garden use\n" +
        "6. Choose drought-resistant plants for landscaping";
    }
    
    else if (question.includes('renewable') || question.includes('solar') || 
             question.includes('wind') || question.includes('clean energy')) {
      return "About renewable energy options:\n\n" +
        "1. Home solar panels: Can reduce emissions and save money long-term\n" +
        "2. Community solar: Join a local solar farm if you can't install your own panels\n" +
        "3. Green power programs: Many utilities offer renewable energy options\n" +
        "4. Renewable Energy Certificates (RECs): Purchase these to support clean energy\n\n" +
        "The average home solar system can eliminate 3-4 tons of carbon emissions annually.";
    }
    
    else if (question.includes('fly') || question.includes('flight') || 
             question.includes('airplane') || question.includes('travel') || 
             question.includes('vacation')) {
      return "Reducing air travel emissions:\n\n" +
        "1. Fly less frequently or combine trips when possible\n" +
        "2. Choose direct flights (takeoffs and landings use the most fuel)\n" +
        "3. Travel economy (business/first class has a larger carbon footprint)\n" +
        "4. Consider trains for shorter distances where available\n" +
        "5. Explore local destinations to reduce travel distances\n" +
        "6. When you must fly, consider high-quality carbon offsets";
    }
    
    else {
      return "I'm your Carbon Footprint Assistant here to help with specific questions about reducing your environmental impact. You can ask me about:\n\n" +
        "• Transportation emissions (cars, flights, commuting)\n" +
        "• Home energy efficiency\n" +
        "• Food choices and diet changes\n" +
        "• Sustainable shopping and consumption\n" +
        "• Water conservation\n" +
        "• Renewable energy options\n" +
        "• Carbon offsets\n\n" +
        "What specific area would you like advice on?";
    }
  
  };

  const handleChatSubmit = (e) => {
    e.preventDefault();
    
    if (userInput.trim() === '') return;
    
    const newUserMessage = { sender: 'user', text: userInput };
    
 
    setChatMessages(prevMessages => [...prevMessages, newUserMessage]);
    
    const currentInput = userInput;
    
    setUserInput('');
    
    setTimeout(() => {
      const botResponse = { 
        sender: 'bot', 
        text: generateChatbotResponse(currentInput) 
      };
      
      setChatMessages(prevMessages => [...prevMessages, botResponse]);
    }, 500);
  };
  
  return (
    <div className="carbon-assistant">
      <div className="chat-container">
        <h2>Carbon Assistant</h2>
        <p>Ask me about reducing your carbon footprint, and I'll provide personalized advice.</p>
        
        <div className="messages-container">
          {chatMessages.map((msg, index) => (
            <div 
              key={index}
              className={`message ${msg.sender}-message`}
            >
              {msg.text.split('\n').map((line, i) => (
                <div key={i}>{line === '' ? <br /> : line}</div>
              ))}
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>
        
        <form onSubmit={handleChatSubmit} className="input-form">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Ask a question about reducing your carbon footprint..."
            className="chat-input"
          />
          <button type="submit" className="send-button">
            Send
          </button>
        </form>
        
        <div className="sample-questions">
          <h3>Sample Questions:</h3>
          <div className="question-buttons">
            {[
              "How can I reduce my transportation emissions?",
              "What are some energy-saving tips?",
              "How does diet affect my footprint?",
              "What are more renewable options?",
              "How can I save water?"
            ].map((question, index) => (
              <button
                key={index}
                className="question-button"
                onClick={() => {
                  setUserInput(question);
                  document.querySelector('.chat-input').focus();
                }}
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarbonAssistant;