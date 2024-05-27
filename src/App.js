import "./App.css";
import { Routes, Route } from "react-router-dom";

import { useEffect } from "react";
import { useDispatch } from "react-redux"


// import SlideInNotifications from "./Components/Notification/Notification.Component";
import Navigation from "./Routes/Navigation/Navigation.Component";
import Home from "./Routes/Home/Home.Component";
import Authentication from "./Routes/authentication/Authentication.Component";
import Checkout from "./Routes/Checkout/Checkout.Component";
import Shop from "./Routes/Shop/Shop.Component";
import { checkUserSession } from "./Store/User/user.action";
import Contact from "./Routes/Contact/Contact.Component";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUserSession())
  });

  return (
    <div className="App">
      <Routes>
          <Route path="/" Component={Navigation}>
            <Route index Component={Home}></Route>
            <Route path="/buy-products/*" Component={Shop}></Route>
            <Route path="/auth" Component={Authentication}></Route>
            <Route path="/checkout" Component={Checkout}></Route>
            <Route path="/contact" Component={Contact}></Route>
          </Route>
      </Routes>
      {/* <SlideInNotifications/> */}
    </div>
  );
}

export default App;
