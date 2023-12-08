import React, { createContext, useEffect, useState } from "react";

// eslint-disable-next-line
import SHOP_DATA from "../Data/ProductsData/SHOP_DATA";
// eslint-disable-next-line
import { getCollectionAndDocuments } from "../Utils/Firebase/firebase.utils";
// import product from "./../Data/ProductsData/product-data.json"

export const ProductContext = createContext({
  productData: {},
});

export const ProductProvider = ({ children }) => {
  // eslint-disable-next-line
  const [products, setproducts] = useState({});
  const value = { products };

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesMap = await getCollectionAndDocuments();
      console.log(categoriesMap);
      setproducts(categoriesMap)
    };

    getCategoriesMap();
  }, []);

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
