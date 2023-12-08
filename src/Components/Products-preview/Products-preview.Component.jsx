import React from "react";
import Card from "../Cards/Card.Component";
import { Link } from "react-router-dom";

const ProductsPreview = ({ title, products }) => {
  return (
    <div>
      <h2 className="text-left ml-16 mt-6 mb-0 font-bold text-3xl">
        <span><Link to={title}>{title.toUpperCase()}</Link></span>
      </h2>
      <div className="container mx-auto p-8 pt-0 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
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
