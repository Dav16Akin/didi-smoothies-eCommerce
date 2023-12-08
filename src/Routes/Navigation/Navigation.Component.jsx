import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import { UserContext } from "../../Contexts/User.Context";

import { signOutUser } from "../../Utils/Firebase/firebase.utils";

import CartIcon from "../../Components/Cart-Icon/Cart-Icon.Component";
import CartSidebar from "../../Components/Cart-sidebar/CartSidebar.Component.";
import { CartContext } from "../../Contexts/Cart.Context";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <div className="Nav-container flex bg-white justify-between items-center h-20 border-b-2 fixed top-0 bottom-0 w-screen z-50">
        <div className="Nav-links flex basis-2/6 text-xs pl-8">
          <Link className="Nav-link" to="/buy-products">
            <div>BUY-PRODUCTS</div>
          </Link>
          <Link className="Nav-link ml-5">
            <div>CONTACT</div>
          </Link>
        </div>
        <Link className="Logo basis-2/6" to="/">
          <div className="text-2xl font-bold underline decoration-gray-400 decoration-1 underline-offset-8">
            didi Smoothies
          </div>
          <p className="text-xl font-light">store</p>
        </Link>
        <div className="Auth basis-2/6 text-xs flex justify-end pr-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 mr-6 stroke-1 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          {currentUser ? (
            <span className="cursor-pointer" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link to="/auth" className="">
              <div className="mr-5">SIGN IN</div>
            </Link>
          )}

          <CartIcon />
        </div>
        {isCartOpen && <CartSidebar />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
