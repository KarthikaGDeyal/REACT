import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function Navbarcomp() {
  return (
    <Navbar style={{ backgroundColor: '#2f2f2f' }} expand="lg"> {/* Dark gray background */}
      <Container>
        {/* Left: Portfolio Heading */}
        <Navbar.Brand href="#home" className="fw-bold" style={{ color: '#b6d957' }}>
          Port<span style={{ color: '#b6d957' }}>Folio</span>
        </Navbar.Brand>

        {/* Center: Nav Links */}
        <Nav className="mx-auto">
          <Nav.Link href="#home" className="text-light" style={{color: '#b6d957'}}>Home</Nav.Link>
          <Nav.Link href="#about" className="text-light">About</Nav.Link>
          <Nav.Link href="#skills" className="text-light">Skills</Nav.Link>
          <Nav.Link href="#qualifications" className="text-light">Qualifications</Nav.Link>
          {/* <Nav.Link href="#portfolio" className="text-light">Portfolio</Nav.Link> */}
          <Nav.Link href="#contact" className="text-light">Contact</Nav.Link>
        </Nav>

        {/* Right: Hire Me Button */}
        <Button variant="success" href="#hire" className="fw-bold" style={{ backgroundColor: '#b6d957', border: 'none' ,color:'#000'}}>
          Hire Me
        </Button>
      </Container>
    </Navbar>
  );
}

export default Navbarcomp;
