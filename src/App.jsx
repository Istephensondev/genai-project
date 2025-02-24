import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import HeroSection from './HeroSection'; // Import the HeroSection component
import Chatbot from './components/Chatbot'; // Import the Chatbot component
import SecondSection from './components/SecondSection'; // Import the new SecondSection component
import ServiceSection from './components/FutureReadyServices'; // Import the new Service Section
import ImageSection from './components/ImageSection';  // Import the ImageSection component

function App() {
  return (
    <Router>
      <Header />  {/* Global Header */}
      <div className="content">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Second Section */}
        <SecondSection /> {/* Add the second section here */}

        {/* Service Section */}
        <ServiceSection /> {/* You can add this after the second section */}

        {/* Image Section */}
        <ImageSection /> {/* Add the Image Section after the service section */}

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

        {/* Chatbot */}
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;
