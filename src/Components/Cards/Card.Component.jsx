import React, { useContext } from "react";
import { CartContext } from "../../Contexts/Cart.Context";

const Card = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const { img, name, category, price } = product;

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="my-8 cursor-pointer">
      <img
        className="h-94 w-full object-cover object-center"
        src={img}
        alt={`${name}`}
      />
      <div className="p-2 flex justify-between h-20">
        <div className="w-4/5">
          <p className="text-xs text-left font-light uppercase">{category}</p>
          <h3 className="text-left font-bold">{name}</h3>
          <h4 className="text-left">#{price}.00</h4>
        </div>
        <div className="w-1/5 bg-black text-center flex justify-center items-center hover:bg-white transition ease-in duration-300" onClick={addProductToCart}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 stroke-white hover:stroke-black stroke-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Card;
