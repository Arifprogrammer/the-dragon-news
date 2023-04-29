// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider/AuthProvider";

const News = () => {
  const selectedNews = useLoaderData();
  const { image_url, title, details, category_id } = selectedNews;
  return (
    <div>
      <h1 className="mb-3">Dragon News</h1>
      <Card style={{ padding: "1rem" }}>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to={`/categories/${category_id}`}>
            <Button variant="danger">
              <FaArrowLeft /> All news in this category
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default News;
