import React from 'react';
import './About.scss';

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
    >
      <div className="container">
        <div className="row">
          {/* First Column */}
          <div className="col-md-6 d-flex align-items-center">
            <div>
              <h3>About Us</h3>
              <p>
                Discover the power of ezspaceCSS—a lightweight utility package designed to make
                padding and margin adjustments effortless. Whether you're prototyping or building
                production-ready designs, our library seamlessly integrates with Bootstrap 3 for
                quick and consistent results.
              </p>
            </div>
          </div>
          {/* Second Column */}
          <div className="col-md-6">
            <img
              src="https://via.placeholder.com/500x300" // Replace with your image
              alt="About us"
              className="img-fluid rounded" // Ensures responsiveness and rounded corners
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
