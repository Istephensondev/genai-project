import React from "react";
import "./FutureReadyServices.css"; // Import the CSS file

const FutureReadyServices = () => {
  return (
    <section className="future-ready-section">
      <div className="content-wrapper">
        <h2>Future Ready Services</h2>
        <p>
          Our services are designed to help you prepare for the future and
          ensure that your business stays ahead of the curve.
        </p>

        {/* Add an image inside the section */}
        <img src="/images/your-image.jpg" alt="Future Services" className="section-image" />

        <button className="cta-button">Learn More</button>
      </div>
    </section>
  );
};

export default FutureReadyServices;
