import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import Footer from '../../Components/Footer/Footer.Component'

const Home = () => {
  return (
    <>
      <div className="w-full overflow-y-hidden">
        <div className=" banner w-full h-96 mx-auto mt-24 p-4">
          <div>
            <h1 className="font-extrabold text-7xl mb-8">
              Smoothies Prepared With Whole Fruits And Real Vegetables.
            </h1>
            <p className="text-2xl">
              No added fillers. 100% sorbet-free. Goodness in a glass.
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-36 h-10 bg-black rounded-full mt-4"
            >
              <Link className="text-white" to="/buy-products">
                shop now
              </Link>
            </motion.button>
          </div>
        </div>
      </div>
      <div className="banner2 w-full bg-pink-500 h-44 absolute bottom-8"></div>
      <div className="banner2 w-full bg-black h-24 absolute bottom-0"></div>
    </>
  );
};

export default Home;
