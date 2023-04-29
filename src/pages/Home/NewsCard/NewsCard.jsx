// eslint-disable-next-line no-unused-vars
import React from "react";
import { Card } from "react-bootstrap";
import {
  FaEye,
  FaRegBookmark,
  FaRegStar,
  FaShareAlt,
  FaStar,
} from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const NewsCard = ({ selectedCategory }) => {
  const { _id, author, title, image_url, details, total_view, rating } =
    selectedCategory;
  const publishedDate = author?.published_date?.split(" ");
  return (
    <Card className="mb-4">
      <Card.Header className="d-flex justify-content-between align-items-center border-bottom-0 py-3">
        <div className="leftpart">
          <div className="d-flex gap-4 align-items-center">
            <Card.Img
              style={{ width: "40px", height: "40px" }}
              variant="top"
              src={author.img}
              className="rounded-circle"
            />
            <div>
              <p className="mb-0 fw-bold">{author.name}</p>
              <p className="mb-0">{publishedDate && publishedDate[0]}</p>
            </div>
          </div>
        </div>
        <div className="rightpart d-flex align-items-center fs-5 gap-2">
          <FaRegBookmark />
          <FaShareAlt />
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title className="fw-bold">{title}</Card.Title>
        <Card.Img variant="top" src={image_url} className="my-3" />
        <Card.Text>
          {details.length > 250 ? (
            <>
              {details.slice(0, 250)}.....{" "}
              <Link to={`/news/${_id}`}>Read More</Link>{" "}
            </>
          ) : (
            <>{details}</>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between">
        <div>
          <Rating
            placeholderRating={rating.number}
            emptySymbol={<FaRegStar className="text-warning" />}
            placeholderSymbol={<FaStar className="text-warning" />}
            fullSymbol={<FaStar className="text-warning" />}
          />{" "}
          {rating.number}
        </div>
        <div>
          <FaEye /> {total_view}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
