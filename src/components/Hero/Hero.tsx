import React, { useState } from 'react';
import './Hero.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown, faClipboard } from '@fortawesome/free-solid-svg-icons';

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
          <div className="container h-100 d-flex flex-column justify-content-center align-items-center text-center text-white">
            <div className="row">
              <div className="col">
                <h1>
                  <span>ezspace</span>CSS<br />
                  spacing utility & helper classes<br />
                  for Bootstrap 3
                </h1>
              </div>
            </div>
            <div className="row justify-content-center px-3">
              <div className="col-12 col-md-8 call-out-bg">
                <h2 className="home-description">
                  Quickly adjust padding and margins with ezspaceCSS—a powerful utility package designed for seamless integration with Bootstrap 3
                </h2>
                <div className="row npm-call-out">
                  <div className="col-12 mx-auto">
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
                      <FontAwesomeIcon icon={faClipboard} />
                    </button>
                  </div>
                </div>
                {copyAlert && (
                  <div className="alert alert-primary mt-3 mb-0" role="alert">
                    Text copied to clipboard!
                  </div>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col">
                <button className="btn btn-circle-outline" onClick={scrollToAbout}>
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
