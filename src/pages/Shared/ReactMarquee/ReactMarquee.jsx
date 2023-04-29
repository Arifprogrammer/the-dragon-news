// eslint-disable-next-line no-unused-vars
import React from "react";
import { Button } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const ReactMarquee = () => {
  return (
    <div className="marquee-part p-3 bg-light d-flex">
      <Button variant="danger">Latest</Button>
      <Marquee pauseOnHover={true} speed={80}>
        Match Highlights: Germany vs Spain — as it happened ! Match Highlights:
        Germany vs Spain as... Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Voluptatibus quam harum nihil ipsa vitae optio officia
        iste eaque tenetur id.
      </Marquee>
    </div>
  );
};

export default ReactMarquee;
