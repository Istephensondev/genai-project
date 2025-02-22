import React, { useState } from 'react';
import './Chatbot.css'; // Import the CSS file for styling

const Chatbot = () => {
  const [userInput, setUserInput] = useState('');
  const [assistantResponse, setAssistantResponse] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const sendMessage = async () => {
    try {
      const response = await fetch('https://cdz2fp6ls1.execute-api.us-east-2.amazonaws.com/dev/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input_str: userInput }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setAssistantResponse(data.response);
    } catch (error) {
      setAssistantResponse('Error: ' + error.message);
    }
  };

  return (
    <div>
      {/* Chatbot container */}
      <div className={`chatbot-container ${isChatOpen ? "open" : "closed"}`}>
        <div className="chatbot-header">
          <h3>Chatbot</h3>
          <button className="close-button" onClick={toggleChat}>X</button>
        </div>
        <div className="chatbot-body">
          <div className="chatbot-message">{assistantResponse}</div>
        </div>
        <div className="chatbot-footer">
          <input
            type="text"
            id="userInput"
            placeholder="Ask a question..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <button id="sendButton" onClick={sendMessage}>Send</button>
        </div>
      </div>

      {/* Chat toggle button */}
      <button className="chatbot-toggle-button" onClick={toggleChat}>
        💬
      </button>
    </div>
  );
};

export default Chatbot;
