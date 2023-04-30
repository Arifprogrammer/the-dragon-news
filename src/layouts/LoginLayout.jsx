// eslint-disable-next-line no-unused-vars
import React from "react";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import { Outlet } from "react-router-dom";
import NavigationBar from "../pages/Shared/NavigationBar/NavigationBar";
import { Container } from "react-bootstrap";

const LoginLayout = () => {
  return (
    <div>
      <ScrollToTop />
      <Container>
        <NavigationBar />
        <div
          style={{ minHeight: "calc(100vh - 104px)" }}
          className="d-flex justify-content-center align-items-center"
        >
          <Outlet />
        </div>
      </Container>
    </div>
  );
};

export default LoginLayout;
