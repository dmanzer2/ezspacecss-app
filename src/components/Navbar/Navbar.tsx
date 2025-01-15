import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navbar.scss';
import logo from '../../assets/images/dummy_153x20_000000_6f5499.jpg';

const AppNavbar: React.FC = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        {/* Logo - Takes the user home */}
        <Navbar.Brand href="/">
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
