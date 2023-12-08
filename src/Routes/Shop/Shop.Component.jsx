import { Routes, Route } from "react-router-dom";
import ProductPreview from "../ProductPreview/Products-Preview.Component";
import Category from "../Category/Category.Component";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<ProductPreview/>}/>
      <Route path=":category" element={<Category/>}></Route>
    </Routes>
  );
};

export default Shop;
