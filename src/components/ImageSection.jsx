import React from 'react';
import './ImageSection.css';  // Import the CSS file

const ImageSection = () => {
  return (
    <section className="image-section">
      <div className="image-wrapper">
        <img src="/public/code.jpg" alt="Section Image" className="section-image" />
      </div>
    </section>
  );
};

export default ImageSection;
