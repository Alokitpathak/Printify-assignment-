import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import "./Navbar.css";

const Navigation = () => {
  return (
    <nav className="navbar">
      <Navbar bg="light" expand="lg">
        <div className="site-head">
          <img
            src="https://printify.com/pfh/media/logo-old-B5JY5YNQ.svg"
            alt="Logo"
            className="Logo"
          />
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#">Catalog</Nav.Link>
            <Nav.Link href="#">How it works</Nav.Link>
            <Nav.Link href="#">Pricing</Nav.Link>
            <Nav.Link href="#">Blog</Nav.Link>
            <Nav.Link href="#">Services</Nav.Link>
            <Nav.Link href="#">Use-cases</Nav.Link>
            <Nav.Link href="#">Need help?</Nav.Link>
            <div className="side-btns">
              <Button variant="outline-success" className="mx-2">
                Log in
              </Button>
              <Button variant="success">Sign up</Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
};

export default Navigation;
