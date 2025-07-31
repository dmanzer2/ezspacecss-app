import React, { useEffect, useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, useNavigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './App.scss';
const AppNavbar = lazy(() => import('../Navbar/Navbar'));
const Hero = lazy(() => import('../Hero/Hero'));
const AboutSection = lazy(() => import('../About/About'));
const DownloadSection = lazy(() => import('../Download/Download'));
const CssDevelopment = lazy(() => import('../CssDevelopment/CssDevelopment'));
const ContactSection = lazy(() => import('../Contact/Contact'));
const Loader = lazy(() => import('../Loader/Loader'));

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
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
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
          ticking = false;
        });
        ticking = true;
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

  // Defer Google Tag Manager loading until first user interaction
  useEffect(() => {
    const win = window as any;
    let didInit = false;
    const loadGTM = () => {
      if (win.gtmDidInit || didInit) return;
      win.gtmDidInit = true;
      didInit = true;
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-P45ZQL66';
      document.head.appendChild(script);
    };

    const onFirstInteraction = () => {
      loadGTM();
      window.removeEventListener('scroll', onFirstInteraction);
      window.removeEventListener('click', onFirstInteraction);
      window.removeEventListener('keydown', onFirstInteraction);
    };

    window.addEventListener('scroll', onFirstInteraction);
    window.addEventListener('click', onFirstInteraction);
    window.addEventListener('keydown', onFirstInteraction);

    return () => {
      window.removeEventListener('scroll', onFirstInteraction);
      window.removeEventListener('click', onFirstInteraction);
      window.removeEventListener('keydown', onFirstInteraction);
    };
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
            <link rel="preload" as="image" href="/assets/images/ez-astro-man.webp" />
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
