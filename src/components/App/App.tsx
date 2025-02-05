import React, { useEffect } from 'react';
import { BrowserRouter as Router, useNavigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './App.scss';
import AppNavbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import AboutSection from '../About/About';
import DownloadSection from '../Download/Download';
import CssDevelopment from '../CssDevelopment/CssDevelopment';
import ContactSection from '../Contact/Contact';

const sections = [
  { id: 'home', component: <Hero />, offset: 0 },
  { id: 'about', component: <AboutSection />, offset: 0 },
  { id: 'download', component: <DownloadSection />, offset: 0 },
  { id: 'css-development', component: <CssDevelopment />, offset: 5 },
  { id: 'contact', component: <ContactSection />, offset: 0 },
];

const ScrollSpy = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = 'home';

      sections.forEach(({ id, offset }) => {
        const sectionElement = document.getElementById(id);
        if (sectionElement) {
          const rect = sectionElement.getBoundingClientRect();
          const adjustedTop = rect.top - offset;
          const adjustedBottom = rect.bottom - offset;

          if (adjustedTop <= window.innerHeight / 2 && adjustedBottom >= window.innerHeight / 2) {
            currentSection = id;
          }
        }
      });

      const newPath = currentSection === 'home' ? '/' : `/${currentSection}`;

      if (location.pathname !== newPath) {
        navigate(newPath, { replace: true });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navigate, location]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Helmet>
          <title>ezspaceCSS - Bootstrap 3 Spacing Utility</title>
          <meta name="description" content="Quickly adjust padding and margins with ezspaceCSS—a powerful utility package designed for seamless integration with Bootstrap 3." />
          <meta name="keywords" content="CSS, Bootstrap, spacing, utility classes, frontend, web development" />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="ezspaceCSS - Bootstrap 3 Spacing Utility" />
          <meta property="og:description" content="Quickly adjust padding and margins with ezspaceCSS for Bootstrap 3." />
          <meta property="og:url" content="https://ezspacecss.com" />
          <meta property="og:type" content="website" />
        </Helmet>

        <AppNavbar />
        <ScrollSpy />

        <main>
          {sections.map(({ id, component }) => (
            <section key={id} id={id} className="page-section">
              {component}
            </section>
          ))}
        </main>
      </div>
    </Router>
  );
};

export default App;
