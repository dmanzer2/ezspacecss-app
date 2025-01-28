import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';

const AppNavbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false); // Track scroll state
  const [activeSection, setActiveSection] = useState<string>(''); // Track active section
  const [expanded, setExpanded] = useState(false); // Track navbar expanded state

  const clearActiveClasses = () => {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link) => link.classList.remove('active'));
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsScrolled(scrollTop > 50);

    if (scrollTop === 0) {
      setActiveSection('');
      clearActiveClasses();
      return;
    }

    const sections = [
      { id: 'about', offset: 0 },
      { id: 'download', offset: 5 },
      { id: 'css-development', offset: 5 },
      { id: 'contact', offset: 5 },
    ];

    let currentSection = '';
    sections.forEach(({ id, offset }) => {
      const element = document.getElementById(id);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= offset && rect.bottom > 0) {
          currentSection = id;
        }
      }
    });

    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNavLinkClick = (sectionId: string) => {
    clearActiveClasses();
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setExpanded(false); // Close the navbar menu
  };

  const handleOutsideClick = (e: MouseEvent) => {
    const navbar = document.querySelector('.navbar-collapse');
    if (navbar && !navbar.contains(e.target as Node)) {
      setExpanded(false);
    }
  };

  useEffect(() => {
    if (expanded) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [expanded]);

  return (
    <Navbar
      expand="lg"
      sticky="top"
      className={`navbar ${isScrolled ? 'scrolled' : 'transparent-navbar'}`}
      expanded={expanded} // Control the expanded state
    >
      <Container fluid>
        <Navbar.Brand
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            setActiveSection('');
            clearActiveClasses();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setExpanded(false);
          }}
        >
          <FontAwesomeIcon icon={faGithubAlt} /> EZSPACE
          <span className="highlighted-text">CSS</span>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="navbar-nav"
          onClick={() => setExpanded(!expanded)} // Toggle the expanded state
        />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#about"
              className={activeSection === 'about' ? 'active' : ''}
              onClick={() => handleNavLinkClick('about')}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#download"
              className={activeSection === 'download' ? 'active' : ''}
              onClick={() => handleNavLinkClick('download')}
            >
              Download
            </Nav.Link>
            <Nav.Link
              href="#css-development"
              className={activeSection === 'css-development' ? 'active' : ''}
              onClick={() => handleNavLinkClick('css-development')}
            >
              CSS Development
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className={activeSection === 'contact' ? 'active' : ''}
              onClick={() => handleNavLinkClick('contact')}
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
