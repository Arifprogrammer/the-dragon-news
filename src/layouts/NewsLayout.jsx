// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import RightNav from "../pages/Shared/RightNav/RightNav";
import { Outlet } from "react-router-dom";
import EditorInsigthsRow from "../pages/Shared/EditorInsigthsRow/EditorInsigthsRow";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

const NewsLayout = () => {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <Container className="my-5">
        <Row>
          <Col lg={9} sm>
            <Outlet />
            <EditorInsigthsRow />
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

export default NewsLayout;
