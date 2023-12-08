import React from "react";


const CartItem = ({ CartItem }) => {
  const { name, quantity, img, price } = CartItem;

  const newPrice = quantity > 1 ? price * quantity : price;

  return (
    <div className="p-3 flex justify-evenly">
      <img
        className=" h-20 w-20 object-cover object-center"
        src={img}
        alt={`${name} smoothie`}
      />

      <div className="text-left w-3/6 ">
        <h1>{name}</h1>
        <span>{`${quantity} x ${price}`}</span>
        <h1>#{quantity > 1 ? newPrice : price}</h1>
      </div>
    </div>
  );
};

export default CartItem;
