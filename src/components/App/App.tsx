import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, useNavigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './App.scss';
import AppNavbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import AboutSection from '../About/About';
import DownloadSection from '../Download/Download';
import CssDevelopment from '../CssDevelopment/CssDevelopment';
import ContactSection from '../Contact/Contact';
import Loader from '../Loader/Loader';

const sections = [
  { id: 'home', component: <Hero />, offset: 0 },
  { id: 'about', component: <AboutSection />, offset: 0 },
  { id: 'download', component: <DownloadSection />, offset: 0 },
  { id: 'css-development', component: <CssDevelopment />, offset: 5 },
  { id: 'contact', component: <ContactSection />, offset: 0 },
];

const ScrollSpy = ({ setActiveSection }: { setActiveSection: (section: string) => void }) => {
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

      setActiveSection(currentSection);
      const newPath = currentSection === 'home' ? '/' : `/${currentSection}`;

      if (location.pathname !== newPath) {
        navigate(newPath, { replace: true });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navigate, location, setActiveSection]);

  return null;
};

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Hide the loader when the DOM fully loads
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  useEffect(() => {
    const { pathname } = window.location;
    const sectionId = pathname === '/' ? 'home' : pathname.slice(1);

    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <Router>
      <div className="App">
      {isLoading && <Loader />} {/* Show loader while loading */}
      {!isLoading && (
        <>
          <Helmet>
            <title>ezspaceCSS - Bootstrap 3 Spacing Utility</title>
            <meta name="description" content="Quickly adjust padding and margins with ezspaceCSS—a powerful utility package designed for seamless integration with Bootstrap 3." />
            <meta name="keywords" content="CSS, Bootstrap, spacing, utility classes, frontend, web development" />
            <meta name="robots" content="index, follow" />
            <meta property="og:title" content="ezspaceCSS - Bootstrap 3 Spacing Utility" />
            <meta property="og:description" content="Quickly adjust padding and margins with ezspaceCSS for Bootstrap 3." />
            <meta property="og:url" content="https://ezspacecss.com" />
            <meta property="og:type" content="website" />
            <link rel="canonical" href="https://ezspacecss.com/" />
            <script src="https://analytics.ahrefs.com/analytics.js" data-key="gRiuW2nqeeV9yeY7QYUIxQ" async></script>
            <script>
              {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-P45ZQL66');
              `}
            </script>
          </Helmet>

          <AppNavbar activeSection={activeSection} />
          <ScrollSpy setActiveSection={setActiveSection} />

          <main>
            {sections.map(({ id, component }) => (
              <section key={id} id={id} className="page-section">
                {component}
              </section>
            ))}
          </main>
        </>
        )}
      </div>
    </Router>
  );
};

export default App;
