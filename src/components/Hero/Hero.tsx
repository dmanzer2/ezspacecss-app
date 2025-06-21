import React, { useState } from 'react';
import './Hero.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown, faSatellite } from '@fortawesome/free-solid-svg-icons';

const App: React.FC = () => {
  const [copyAlert, setCopyAlert] = useState(false);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCopy = () => {
    const textToCopy = 'npm install ez-space-css-repo';
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopyAlert(true);
      setTimeout(() => setCopyAlert(false), 3000);
    });
  };

  return (
    <div className="Hero">
      <section id="hero" className="hero">
        <div className="hero-area">
          <div className="container h-100 d-flex flex-column justify-content-center align-items-center">
            <div className="row align-items-center hero-row">
              
              <div className="col-12 col-md-6 order-md-2 d-flex align-items-center position-relative">
                <img
                  src={require('../../assets/images/ez-astro-man.png')}
                  alt="EZ Astro Man"
                  className="img-fluid floating"
                />
                {copyAlert && (
                  <div className="copy-alert">
                    You copied the command! Enjoy!
                  </div>
                )}
              </div>
              <div className="col-12 col-md-6 order-md-1">
                <h1>
                  <span className="hero-name">ez space</span> CSS
                  <br />spacing utility for 
                  <br />Bootstrap 3
                </h1>
                <h2 className="home-description d-none d-md-block">
                  Quickly adjust padding and margins with ezspaceCSS<br />—a powerful utility package designed for seamless integration with Bootstrap 3 media queries
                </h2>
                <div className="npm-call-out mb-4 mb-md-0">
                  <div className="mx-auto">
                    <a
                      href="https://www.npmjs.com/package/ez-space-css-repo"
                      title="Check out the npm package"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      $ npm install ez-space-css-repo
                    </a>
                    <button
                      type="button"
                      className="btn btn-link ml-3"
                      title="Copy to clipboard"
                      onClick={(e) => {
                        e.preventDefault();
                        handleCopy();
                      }}
                    >
                      <FontAwesomeIcon icon={faSatellite} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <button className="btn btn-circle-outline mb-4 mb-md-0" onClick={scrollToAbout}>
                  <FontAwesomeIcon icon={faAngleDoubleDown} className="white-icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
