import React from "react";

const Footer = () => {
  return (
    <div className="container h-full bg-pink-200/50 mx-auto">
      <div className="flex flex-col p-8 items-center">
        <h2 className="font-bold capitalize">
          subsrcibe to get offers in your inbox
        </h2>
        <div className="flex flex-row items-center">
          <input
            className="p-2 mt-2 mr-5"
            type="text"
            placeholder="Your email address..."
          />
          <button className="btn bg-black px-5"> Subscribe</button>
        </div>
      </div>
      <div className="capitalize bg-black h-20 text-white flex flex-col justify-center">
        <p>copiright 2023 didi Smoothies | powered by didi smoothies</p>
      </div>
    </div>
  );
};

export default Footer;
