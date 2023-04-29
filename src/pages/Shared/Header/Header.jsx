// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import logo from "../../../assets/logo.png";
import moment from "moment";
import NavigationBar from "../NavigationBar/NavigationBar";
import ReactMarquee from "../ReactMarquee/ReactMarquee";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState(true);
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname.indexOf("news/") > 0) {
      setShow(false);
    }
  }, [pathname]);

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
        {show && <ReactMarquee />}
        {show && <NavigationBar />}
      </Container>
    </div>
  );
};

export default Header;
