// eslint-disable-next-line no-unused-vars
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
const EditorInsigthsCol = ({ img }) => {
  return (
    <Row xs={1} className="g-4 mb-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col key={idx}>
          <Card className="border-0">
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default EditorInsigthsCol;
