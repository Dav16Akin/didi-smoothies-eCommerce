import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Card from "../../Components/Cards/Card.Component";
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../Store/Categories/category.selector";
import Spinner from "../../Components/Spinner/Spinner.Component";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  const [product, setproduct] = useState(categoriesMap[category]);

  useEffect(() => {
    setproduct(categoriesMap[category]);
  }, [categoriesMap, category]);

  return (
    <>
      <div className="mx-40">
        <h2 className="mx-auto text-3xl font-bold pt-9 uppercase">
          {category}
        </h2>
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="container mx-auto p-8 pt-0 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
            {product &&
              product.map((item) => <Card key={item.id} product={item}></Card>)}
          </div>
        )}
      </div>
    </>
  );
};

export default Category;
