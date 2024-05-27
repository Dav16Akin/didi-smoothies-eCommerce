import React from "react";
import { useSelector } from "react-redux";
import ProductsPreview from "../../Components/Products-preview/Products-preview.Component";
import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "../../Store/Categories/category.selector";
import Spinner from "../../Components/Spinner/Spinner.Component";

const ProductPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <>
      <div className=" divide-x-2 h-screen relative">
        <div className="w-full">
          {isLoading ? (
            <Spinner />
          ) : (
            Object.keys(categoriesMap).map((title) => {
              const product = categoriesMap[title];
              return (
                <ProductsPreview
                  key={title}
                  products={product}
                  title={title}
                ></ProductsPreview>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default ProductPreview;
