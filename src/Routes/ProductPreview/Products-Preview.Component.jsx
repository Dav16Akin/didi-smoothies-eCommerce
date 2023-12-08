import React, { useContext } from "react";
import { ProductContext } from "../../Contexts/Products.Context";
import ProductsPreview from "../../Components/Products-preview/Products-preview.Component";

const ProductPreview = () => {
  const { products } = useContext(ProductContext);

  return (
    <>
      {" "}
      <div className=" divide-x-2 h-screen relative">
        <div className="w-full">
          {Object.keys(products).map((title) => {
            const product = products[title];
            return <ProductsPreview key={title} products={product} title={title}></ProductsPreview>;
          })}
        </div>
      </div>
    </>
  );
};

export default ProductPreview;
