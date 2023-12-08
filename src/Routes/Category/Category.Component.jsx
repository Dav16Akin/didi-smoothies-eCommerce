import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";

import { ProductContext } from "../../Contexts/Products.Context";
import Card from "../../Components/Cards/Card.Component";

const Category = () => {
  const { category } = useParams();
  const { products } = useContext(ProductContext);
  const [product, setproduct] = useState(products[category]);

  useEffect(() => {
    setproduct(products[category]);
  }, [products, category]);

  console.log(
    product &&
      product.map((product) => <Card key={product.id} product={product}></Card>)
  );

  return (
    <>
      {" "}
      <h2 className="mx-auto text-3xl font-bold pt-9 uppercase">{category}</h2>
      <div className="container mx-auto p-8 pt-0 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
        {product &&
          product.map((item) => <Card key={item.id} product={item}></Card>)}
      </div>
    </>
  );
};

export default Category;
