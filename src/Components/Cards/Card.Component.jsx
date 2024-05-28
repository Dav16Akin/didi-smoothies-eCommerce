import React from "react";
import { addItemToCart } from "../../Store/Cart/cart.action";
import { selectCartItems } from "../../Store/Cart/cart.selector";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

const Card = ({ product }) => {
  const dispatch = useDispatch();
  const { img, name, category, price } = product;

  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      product={product}
      className="my-8 cursor-pointer drop-shadow-4xl  relative overflow-hidden group group"
    >
      <div className=" absolute inset-0 text-center bg-black opacity-90 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-500">
        <div
          onClick={addProductToCart}
          className="flex flex-col my-32 max-sm:my-20 mx-1 py-2 font-medium text-white transition-all shadow-[0px_3px_0px_white] hover:shadow-none hover:translate-y-[3px]"
        >
          Add to Cart
        </div>
      </div>
      <div className="md:shrink-0  ">
        <img
          className="h-94 w-full object-cover object-center"
          src={img}
          alt={`${name}`}
        />
      </div>

      <div className="cart-info flex justify-between items-center relative h-20 p-2">
        <div className="w-3/5">
          <p className="text-xs text-left font-light uppercase">{category}</p>
          <h3 className="text-left font-bold">{name}</h3>
          <h4 className="text-left">#{price}.00</h4>
        </div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-1/5 h-10 rounded-full text-center flex justify-evenly items-center"
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
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Card;
