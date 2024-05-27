import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import CartIcon from "../../Components/Cart-Icon/Cart-Icon.Component";
import CartSidebar from "../../Components/Cart-sidebar/CartSidebar.Component.";

import { selectCurrentUser } from "../../Store/User/user.selector";
import { selectIsCartOpen } from "../../Store/Cart/cart.selector";
import { signOutStart } from "../../Store/User/user.action";
import Hamburger from "../../Components/Hamburger/Hamburger.Component";
import HamburgerSidebar from "../../Components/Hamburger/Hamburger-Sidebar.Component";
import { selectIsHamburgerOpen } from "../../Store/Hamburger/hamburger.selector";

const Navigation = () => {
  const [activeLink, setActiveLink] = useState(null);
  const currentUser = useSelector(selectCurrentUser);

  const isCartOpen = useSelector(selectIsCartOpen);
  const isHamburgerOpen = useSelector(selectIsHamburgerOpen)

  const [isScrolled, setIsScrolled] = useState(false);

  const dispatch = useDispatch();

  const handleLinkClick = (link) => {
    setActiveLink(link); // Update state on button click
  };

  const signOutUser = () => dispatch(signOutStart());

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const isCurrentlyScrolled = scrollTop > 0;
      setIsScrolled(isCurrentlyScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`flex px-4 justify-between items-center h-16 fixed top-0 bottom-0 w-screen z-50 transition duration-300 ease-in-out delay-75 ${
          isScrolled ? "bg-white border-b-2 border-black" : "bg-transparent"
        }`}
      >
        <div className="w-10 lg:hidden md:hidden">
          <Hamburger />
        </div>
        <div className="Nav-links flex basis-2/6 max-sm:hidden  text-xs pl-8 max-sm:pl-0">
        <Link
            className={`Nav-link ${activeLink === 'buy-products' ? 'active' : ''}`}
            onClick={() => handleLinkClick('buy-products')}
            to="/buy-products"
          >
            <div>BUY-PRODUCTS</div>
          </Link>
          <Link
            className={`Nav-link ml-5 ${activeLink === 'contact' ? 'active' : ''}`}
            onClick={() => handleLinkClick('contact')}
            to="/contact"
          >
            <div>CONTACT</div>
          </Link>
        </div>
        <Link className="Logo basis-2/6 max-sm:basis-3/6" to="/">
          <div className="text-2xl font-bold">didi Smoothies</div>
        </Link>
        <div className="basis-2/6 max-sm:basis-2/6 text-xs flex space-x-6 max-sm:space-x-4 justify-end pr-8 max-sm:mr-2 max-sm:pr-0">
          {currentUser ? (
            <span className="cursor-pointer" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link to="/auth" className="">
              <div className="mr-5 max-sm:mr-0">SIGN IN</div>
            </Link>
          )}

          <CartIcon />
        </div>
        {isCartOpen && <CartSidebar />}
        {isHamburgerOpen && <HamburgerSidebar />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
