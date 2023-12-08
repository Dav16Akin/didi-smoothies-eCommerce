import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Routes/Navigation/Navigation.Component";
import Home from "./Routes/Home/Home.Component";
import Authentication from "./Routes/authentication/Authentication.Component";
import Checkout from "./Routes/Checkout/Checkout.Component";
import Shop from "./Routes/Shop/Shop.Component";
// import Footer from "./Components/Footer/Footer.Component";

function App() {
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
