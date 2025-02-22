// src/HeroSection.js
import React from 'react';
import './HeroSection.css'; // Import custom CSS for Hero Section

function HeroSection() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <video
          className="hero-video"
          src="https://videos.pexels.com/video-files/2314142/2314142-uhd_2560_1440_24fps.mp4"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.pexels.com/videos/2314142/free-video-2314142.jpg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200"
        />
        <div className="hero-content">
          <h1>GenAI Consulting</h1>
          <h2>Creating Future Ready companies through AI Consulting and AI Education.</h2>
          <h3>Are you a future-ready company?</h3>
          <div className="cta-buttons">
            <button className="cta-primary">Discover</button>
          </div>
        </div>
      </section>

    </>
  );
}

export default HeroSection;
