import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.scss';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';

const AppNavbar: React.FC<{ activeSection: string }> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavLinkClick = (sectionId: string) => {
    navigate(`/${sectionId}`);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setExpanded(false);
  };

  return (
    <Navbar
      expand="lg"
      sticky="top"
      className={`navbar ${isScrolled ? 'scrolled' : 'transparent-navbar'}`}
      expanded={expanded}
    >
      <Container fluid>
        <Navbar.Brand
          as={Link}
          to="/"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            navigate('/');
            setExpanded(false);
          }}
        >
          <FontAwesomeIcon icon={faGithubAlt} /> EZSPACE
          <span className="highlighted-text">CSS</span>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/about" className={activeSection === 'about' ? 'active' : ''} onClick={() => handleNavLinkClick('about')}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/download" className={activeSection === 'download' ? 'active' : ''} onClick={() => handleNavLinkClick('download')}>
              Download
            </Nav.Link>
            <Nav.Link as={Link} to="/css-development" className={activeSection === 'css-development' ? 'active' : ''} onClick={() => handleNavLinkClick('css-development')}>
              CSS Development
            </Nav.Link>
            <Nav.Link href="https://www.npmjs.com/package/ez-space-css-repo" target="_blank" rel="noopener noreferrer">
              NPM Package
            </Nav.Link>
            <Nav.Link href="https://github.com/dmanzer2/ez-space-css-repo" target="_blank" rel="noopener noreferrer">
              GitHub repo
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className={activeSection === 'contact' ? 'active' : ''} onClick={() => handleNavLinkClick('contact')}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
