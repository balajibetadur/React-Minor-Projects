import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'

function Header() {
  return (
    <div className="header">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand to = '/'>ChatApp</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to = '/'><Nav.Link >Home</Nav.Link></LinkContainer>
              <LinkContainer to = '/login'><Nav.Link >Login</Nav.Link></LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
