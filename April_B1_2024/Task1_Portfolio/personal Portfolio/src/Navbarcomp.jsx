import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbarcomp() {
  return (
    <div>
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">Home</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">About Us</Nav.Link>
        <Nav.Link href="#features">Services</Nav.Link>
        <Nav.Link href="#pricing">Skills</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  </div>
  )
}

export default Navbarcomp
