import React from "react";
import Card from "../Cards/Card.Component";
import { Link } from "react-router-dom";

const ProductsPreview = ({ title, products }) => {
  return (
    <div className="lg:mx-40 sm:mx-20 ">
      <h2 className="text-left ml-16 mt-6 mb-0 font-bold text-3xl">
        <span className="underline flex items-center">
          <Link to={title}>{title.toUpperCase()}</Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </h2>
      <div className="mx-auto p-8 pt-0 grid grid-cols-4 max-sm:grid-cols-2 max-sm:gap-2 lg:gap-4">
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <Card key={product.id} product={product}></Card>
          ))}
      </div>
    </div>
  );
};

export default ProductsPreview;
