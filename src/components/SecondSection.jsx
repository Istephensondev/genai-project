// src/components/SecondSection.js
import React from 'react';
import './SecondSection.css';  // Import the styling file for the section

const SecondSection = () => {
  return (
    <section className="second-section">
      <div className="container">
        <div className="text-content">
          <h2>Our Expertise</h2>
          <p>We offer tailored solutions to help your business grow, focusing on efficiency and scalability.</p>
        </div>
        <div className="image-content">
          <img src="./public/staircase.jpg" alt="Our Expertise" />
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
