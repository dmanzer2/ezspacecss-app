import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navbar.scss';
// import logo from '../../assets/images/dummy_153x20_000000_6f5499.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';

const AppNavbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false); // Track scroll state
  const [activeSection, setActiveSection] = useState<string>(''); // Track active section

  // Function to remove the active class from all Nav.Link elements
  const clearActiveClasses = () => {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link) => link.classList.remove('active'));
  };

  // Handle scroll event
  const handleScroll = () => {
    const scrollTop = window.scrollY;

    // Check if user scrolled past 50px
    setIsScrolled(scrollTop > 50);

    // Clear active section and remove active classes when at the very top
    if (scrollTop === 0) {
      setActiveSection('');
      clearActiveClasses();
      return;
    }

    // Update active section based on scroll position
    const sections = ['about', 'download', 'css-development', 'contact'];
    let currentSection = '';
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom > 0) {
          currentSection = section;
        }
      }
    });

    setActiveSection(currentSection);
  };

  // Attach scroll listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar
      expand="lg"
      sticky="top"
      className={`navbar ${isScrolled ? 'scrolled' : 'transparent-navbar'}`}
    >
      <Container>
        {/* Logo Click Resets Active Section */}
        <Navbar.Brand
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            setActiveSection(''); // Clear the active section immediately
            clearActiveClasses(); // Clear all active classes
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <FontAwesomeIcon icon={faGithubAlt} />  EZSPACE
          <span className="highlighted-text">CSS</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#about"
              className={activeSection === 'about' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                clearActiveClasses(); // Clear all active classes
                e.currentTarget.classList.add('active'); // Add active class to clicked item
                setActiveSection('about'); // Set the active section
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#download"
              className={activeSection === 'download' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                clearActiveClasses();
                e.currentTarget.classList.add('active');
                setActiveSection('download');
                document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Download
            </Nav.Link>
            <Nav.Link
              href="#css-development"
              className={activeSection === 'css-development' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                clearActiveClasses();
                e.currentTarget.classList.add('active');
                setActiveSection('css-development');
                document.getElementById('css-development')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              CSS Development
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className={activeSection === 'contact' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                clearActiveClasses();
                e.currentTarget.classList.add('active');
                setActiveSection('contact');
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
