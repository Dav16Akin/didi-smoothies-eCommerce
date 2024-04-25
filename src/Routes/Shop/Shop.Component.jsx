import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux"
import ProductPreview from "../ProductPreview/Products-Preview.Component";
import Category from "../Category/Category.Component";
import { useEffect } from "react";
import { getCollectionAndDocuments } from "../../Utils/Firebase/firebase.utils";
import { setCategories } from "../../Store/Categories/category.action";

const Shop = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCollectionAndDocuments();

      dispatch(setCategories(categoriesArray));
    };

    getCategoriesMap();
  }, [dispatch]);
  
  return (
    <Routes>
      <Route index element={<ProductPreview />} />
      <Route path=":category" element={<Category />}></Route>
    </Routes>
  );
};

export default Shop;
