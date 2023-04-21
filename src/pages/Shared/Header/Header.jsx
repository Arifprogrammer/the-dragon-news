// eslint-disable-next-line no-unused-vars
import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <Container className="py-4">
        <div className="logo-part text-center">
          <img src={logo} alt="" />
          <p className="text-center my-2 text-secondary">
            Journalism Without Fear or Favour
          </p>
          <p className="text-secondary">
            {moment().format("dddd, MMMM D, YYYY")}
          </p>
        </div>
        <div className="marquee-part p-3 bg-light d-flex">
          <Button variant="danger">Latest</Button>
          <Marquee pauseOnHover={true} speed={80}>
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as... Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Voluptatibus quam harum nihil ipsa
            vitae optio officia iste eaque tenetur id.
          </Marquee>
        </div>
        <Navbar bg="body" expand="lg" className="my-4">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto fw-bold">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <Nav.Link href="#link">Career</Nav.Link>
            </Nav>
            <Nav className="d-none d-lg-block justify">
              <FaUserCircle className="fs-1" />
              <Button variant="secondary" className="px-4 ms-3">
                Login
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;
