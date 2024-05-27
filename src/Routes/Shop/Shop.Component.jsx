import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import ProductPreview from "../ProductPreview/Products-Preview.Component";
import Category from "../Category/Category.Component";
import { useEffect } from "react";
import { fetchCategoriesStart } from "../../Store/Categories/category.action";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<ProductPreview />} />
      <Route path=":category" element={<Category />}></Route>
    </Routes>
  );
};

export default Shop;
