import "./App.css";
import { Routes, Route } from "react-router-dom";

import { useEffect } from "react";
import { useDispatch } from "react-redux"

import {
  onAuthStateChangedListner,
  createUserDocumentFromAuth,
} from "../src/Utils/Firebase/firebase.utils";

import Navigation from "./Routes/Navigation/Navigation.Component";
import Home from "./Routes/Home/Home.Component";
import Authentication from "./Routes/authentication/Authentication.Component";
import Checkout from "./Routes/Checkout/Checkout.Component";
import Shop from "./Routes/Shop/Shop.Component";
import { setCurrentUser } from "./Store/User/user.action";
// import Footer from "./Components/Footer/Footer.Component";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListner((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, [dispatch]);




  return (
    <div className="App">
      <Routes>
          <Route path="/" Component={Navigation}>
            <Route index Component={Home}></Route>
            <Route path="/buy-products/*" Component={Shop}></Route>
            <Route path="/auth" Component={Authentication}></Route>
            <Route path="/checkout" Component={Checkout}></Route>
          </Route>
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
