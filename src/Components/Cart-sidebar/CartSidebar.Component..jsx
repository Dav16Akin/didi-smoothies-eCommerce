import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  selectCartItems,
  selectIsCartOpen,
} from "../../Store/Cart/cart.selector";
import { setIsCartOpen } from "../../Store/Cart/cart.action";
import CartItem from "../Cart-Item/Cart-Item.Component";
import { useDispatch, useSelector } from "react-redux";

const CartSidebar = () => {
  const dispatch = useDispatch();

  const isCartOpen = useSelector(selectIsCartOpen);
  const cartItems = useSelector(selectCartItems);

  const navigate = useNavigate();
  const goToCheckOutHandler = () => {
    toggleSidebar();
    navigate("./checkout");
  };

  const toggleSidebar = () => {
    dispatch(setIsCartOpen(!isCartOpen));
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            className="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={toggleSidebar}
          />
          <motion.aside
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            exit={{ x: 1000, transition: { ease: "easeOut" } }}
            transition={{ duration: 0.5 }}
            className="h-full w-96 absolute right-0"
          >
            <nav className=" h-screen flex flex-col justify-between border-l shadow-sm  bg-white">
              <div className="flex flex-col justify-between overflow-y-scroll">
                <div className="flex p-6 pb-2 border-b-2 justify-between items-center fixed w-96 bg-opacity-95 bg-white">
                  <h1>Shopping Cart</h1>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 cursor-pointer stroke-black"
                    onClick={toggleSidebar}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>

                <div className="font-bold pt-16">
                  {cartItems.map((item) => {
                    return <CartItem key={item.id} CartItem={item} />;
                  })}
                </div>
              </div>

              <div className="w-72 mx-auto mb-12">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="btn-inverse rounded-full"
                  onClick={goToCheckOutHandler}
                >
                  Go to Checkout
                </motion.button>
              </div>
            </nav>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;
