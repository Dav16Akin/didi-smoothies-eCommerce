import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Contexts/Cart.Context";
import CartItem from "../Cart-Item/Cart-Item.Component";

const CartSidebar = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();
  const goToCheckOutHandler = () => {
    toggleSidebar();
    navigate("./checkout");
  };

  const toggleSidebar = () => setIsCartOpen(!isCartOpen);

  return (
    <aside className="h-full w-96 absolute right-0">
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

        <div className="w-72 mx-auto mb-4">
          <button className="btn-inverse" onClick={goToCheckOutHandler}>
            Go to Cart
          </button>
        </div>
      </nav>
    </aside>
  );
};

export default CartSidebar;
