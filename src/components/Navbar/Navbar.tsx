import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navbar.scss';
import logo from '../../assets/images/dummy_153x20_000000_6f5499.jpg';

const AppNavbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>(''); // This tracks active section

  // Function to handle scroll event and update active section
  const handleScroll = () => {
    const sections = ['about', 'download', 'css-development', 'contact']; // Section IDs
    let currentSection = '';

    // Loop through sections and find the one in view
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom > 0) {
          currentSection = section;
        }
      }
    });

    // Update state with active section
    setActiveSection(currentSection);
  };

  // Listen to scroll events
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <Navbar bg="dark" expand="lg" sticky="top">
      <Container>
        {/* Logo - Takes the user home */}
        <Navbar.Brand href="#hero">
          <img
            src={logo}
            alt="Logo"
            height="20"
          />
        </Navbar.Brand>

        {/* Navbar Toggle for Mobile */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Navbar Links */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#download">Download</Nav.Link>
            <Nav.Link href="#css-development">CSS Development</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
