import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { addItemToCart } from "../../Store/Cart/cart.action";
import { selectCartItems } from "../../Store/Cart/cart.selector";
import { selectCartTotal } from "../../Store/Cart/cart.selector";
import { removeItemFromCart } from "../../Store/Cart/cart.action";
import { deleteItemFromCart } from "../../Store/Cart/cart.action";


const Checkout = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <div className="mx-56 my-14 text-left">
      <h1 className="text-3xl">Cart</h1>
      <div className="mt-4">
        <div className="grid grid-cols-5 border-b-2">
          <p>Product</p>
          <p>Description</p>
          <p>Quantity</p>
          <p>Price</p>
          <p>Remove</p>
        </div>

        {cartItems.map((item) => {
          return (
            <div
              key={item.id}
              className="grid grid-cols-5 items-center border-b-2"
            >
              <img
                className="h-28 w-28 my-5 object-cover object-center"
                src={item.img}
                alt={`${item.name}`}
              />

              <p>{item.name}</p>
              <p className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 stroke-2 cursor-pointer"
                  onClick={() => dispatch(removeItemFromCart(cartItems, item))}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
                {item.quantity}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 stroke-2 cursor-pointer"
                  onClick={() => dispatch(addItemToCart(cartItems, item))}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </p>
              <p>{item.price}</p>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 cursor-pointer stroke-black"
                  onClick={() => dispatch(deleteItemFromCart(cartItems, item))}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-5 flex flex-col items-end">
        <h1>Amount Total : #{cartTotal}</h1>
        <button className="btn-inverse w-72 mt-8">Go To Checkout</button>
      </div>
    </div>
  );
};

export default Checkout;
