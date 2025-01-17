import React from 'react';
import './App.scss';
import heroImage from '../../assets/images/ezspace-image-modern.jpg';
import AppNavbar from '../Navbar/Navbar';
import AboutSection from '../About/About';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

const App: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <AppNavbar />
      <section
        id="hero"
        style={{
          height: '100vh',
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div
          style={{
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff',
            textAlign: 'center',
            fontSize: '2rem',
          }}
        >
          <div className="container h-100 d-flex flex-column justify-content-center align-items-center text-center text-white">
            <div className="row">
              <div className="col">
                <h1 style={{marginBottom: '2rem'}}>
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
                <div className="npm-call-out mx-auto">
                  <a
                    href="https://www.npmjs.com/package/ez-space-css-repo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    $ npm install ez-space-css-repo
                  </a>
                </div>
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
      <main>
        <AboutSection />

        <section id="download" style={{ padding: '100px 0', textAlign: 'center' }}>
          <h1>Download</h1>
          <p>Get started by downloading our app.</p>
        </section>

        <section id="css-development" style={{ padding: '100px 0', textAlign: 'center' }}>
          <h1>CSS Development</h1>
          <p>Learn how we develop with CSS.</p>
        </section>

        <section id="contact" style={{ padding: '100px 0', textAlign: 'center' }}>
          <h1>Contact</h1>
          <p>Reach out to us anytime!</p>
        </section>
      </main>
    </div>
  );
};

export default App;
