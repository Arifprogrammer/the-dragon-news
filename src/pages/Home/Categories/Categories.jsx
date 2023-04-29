// eslint-disable-next-line no-unused-vars
import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";

const Categories = () => {
  const selectedCategories = useLoaderData();
  return (
    <>
      {selectedCategories.map((selectedCategory) => (
        <NewsCard
          key={selectedCategory._id}
          selectedCategory={selectedCategory}
        />
      ))}
    </>
  );
};

export default Categories;
