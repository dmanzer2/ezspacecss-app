import React from 'react';
import { Helmet } from 'react-helmet-async';
import './App.scss';
import AppNavbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import AboutSection from '../About/About';
import DownloadSection from '../Download/Download';
import CssDevelopment from '../CssDevelopment/CssDevelopment';
import ContactSection from '../Contact/Contact';

const App: React.FC = () => {
  return (
    <div className="App">
      {/* SEO Meta Tags */}
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
      <Hero />

      <main>
        <AboutSection />
        <DownloadSection />
        <CssDevelopment />
        <ContactSection />
      </main>
    </div>
  );
};

export default App;
