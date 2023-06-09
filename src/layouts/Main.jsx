// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import RightNav from "../pages/Shared/RightNav/RightNav";
import LeftNav from "../pages/Shared/LeftNAv/LeftNav";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

const Main = () => {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <Container className="my-5">
        <Row>
          <Col lg={3}>
            <LeftNav />
          </Col>
          <Col lg={6} sm>
            <Outlet />
          </Col>
          <Col lg={3}>
            <RightNav />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Main;
