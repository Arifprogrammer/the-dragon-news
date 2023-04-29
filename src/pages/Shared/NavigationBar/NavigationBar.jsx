// eslint-disable-next-line no-unused-vars
import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Navbar bg="body" expand="lg" className="my-4">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto fw-bold gap-4">
          <Link to="/" className="text-decoration-none text-secondary">
            Home
          </Link>
          <Link className="text-decoration-none text-secondary">About</Link>
          <Link className="text-decoration-none text-secondary">Career</Link>
        </Nav>
        <Nav className="d-none d-lg-block justify">
          <FaUserCircle className="fs-1" />
          <Link to="/login">
            <Button variant="secondary" className="px-4 ms-3">
              Login
            </Button>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
