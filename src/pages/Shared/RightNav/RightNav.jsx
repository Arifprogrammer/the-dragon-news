// eslint-disable-next-line no-unused-vars
import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaFacebookSquare,
  FaGithub,
  FaGoogle,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import QZone from "../QZOne/QZone";
import bg from "../../../assets/bg.png";

const RightNav = () => {
  return (
    <aside>
      <div className="login-part mb-4">
        <h4>Login with</h4>
        <Button variant="outline-info" className="w-100 my-2">
          <FaGoogle className="fs-4" />{" "}
          <span className="ms-2">Login with Google</span>
        </Button>
        <Button variant="outline-secondary" className="w-100">
          <FaGithub className="fs-4" />{" "}
          <span className="ms-2">Login with Github</span>
        </Button>
      </div>
      <div className="findus-part">
        <h4>Find Us On</h4>
        <ListGroup className="my-4">
          <ListGroup.Item>
            <FaFacebookSquare className="fs-3 text-primary" />{" "}
            <span className="ms-2 text-secondary">Facebook</span>{" "}
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitterSquare className="fs-3 text-info" />
            <span className="ms-2 text-secondary">Twitter</span>
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagramSquare className="fs-3 text-danger" />
            <span className="ms-2 text-secondary">Instagram</span>
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div className="q-zone py-4 px-3 bg-light rounded-2">
        <QZone />
      </div>
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="rightnavbar-banner my-4 text-white d-flex align-items-center rounded-2"
      >
        <div className="text-center">
          <h1>Create an Amazing Newspaper</h1>
          <p className="my-3">
            Discover thousands of options, easy to customize layouts, one-click
            to import demo and much more.
          </p>
          <Button variant="danger" className="px-4 py-2 mt-5 rounded-0 fs-4">
            Learn More
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default RightNav;
