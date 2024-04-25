import React from "react";
import { addItemToCart } from "../../Store/Cart/cart.action";
import { selectCartItems } from "../../Store/Cart/cart.selector";
import { useDispatch, useSelector } from "react-redux";

const Card = ({ product }) => {
  const dispatch = useDispatch();
  const { img, name, category, price } = product;

  const cartItems = useSelector(selectCartItems)

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <div product={product} className="my-8 cursor-pointer drop-shadow-4xl">
      <img
        className="h-94 w-full object-cover object-center"
        src={img}
        alt={`${name}`}
      />
      <div className=" flex justify-between items-center h-20 p-2">
        <div className="w-3/5">
          <p className="text-xs text-left font-light uppercase">{category}</p>
          <h3 className="text-left font-bold">{name}</h3>
          <h4 className="text-left">#{price}.00</h4>
        </div>
        <div
          className="w-1/5 h-10 rounded-full text-center flex justify-evenly items-center hover:bg-pink-200 transition ease-in duration-300"
          onClick={addProductToCart}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Card;
