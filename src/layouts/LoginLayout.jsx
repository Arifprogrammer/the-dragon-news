// eslint-disable-next-line no-unused-vars
import React from "react";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import { Outlet } from "react-router-dom";

const LoginLayout = () => {
  return (
    <div>
      <ScrollToTop />
      <Outlet />
    </div>
  );
};

export default LoginLayout;
