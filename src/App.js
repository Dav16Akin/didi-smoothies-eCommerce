import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './Routes/Navigation/Navigation.Component';
import Home from './Routes/Home/Home.Component';
import Authentication from './Routes/authentication/Authentication.Component'
import Products from './Routes/Products/Products.Component';
// import Footer from './Components/Footer/Footer.Component';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' Component={Navigation}>
          <Route index Component={Home}></Route>
          <Route path='/buy-products' Component={Products}></Route>
          <Route path='/auth' Component={Authentication}></Route>
        </Route>
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
