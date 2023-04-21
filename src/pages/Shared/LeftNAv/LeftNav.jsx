// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      const response = await fetch("http://localhost:5000/categories");
      const data = await response.json();
      setCategories(data);
    };
    loadData();
  }, []);
  return (
    <div>
      <h4 className="text-center">All Categories</h4>
      <div className="categories my-4">
        {categories.map((category) => (
          <Link
            to={`/categories/${category.id}`}
            key={category.id}
            className="text-secondary text-center my-2 py-3 px-4 bg-light d-block fs-5 text-decoration-none"
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LeftNav;
