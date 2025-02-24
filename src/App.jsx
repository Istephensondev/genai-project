import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import HeroSection from './HeroSection'; // Import the HeroSection component
import Chatbot from './components/Chatbot'; // Import the Chatbot component

function App() {
  return (
    <Router>
      <Header />
      <div className="content">
        <HeroSection />

        
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/mac" element={<h1>Mac Page</h1>} />
          <Route path="/ipad" element={<h1>iPad Page</h1>} />
          <Route path="/iphone" element={<h1>iPhone Page</h1>} />
          <Route path="/watch" element={<h1>Watch Page</h1>} />
          <Route path="/airpods" element={<h1>AirPods Page</h1>} />
          <Route path="/tv" element={<h1>TV Page</h1>} />
          <Route path="/search" element={<h1>Search Page</h1>} />
          <Route path="/cart" element={<h1>Cart Page</h1>} />
        </Routes>
        
        <Chatbot /> {/* Add the Chatbot here */}
      </div>
    </Router>
  );
}

export default App;
