import React from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { selectIsHamburgerOpen } from "../../Store/Hamburger/hamburger.selector";
import { setIsHamburgerOpen } from "../../Store/Hamburger/hamburger.action";

const HamburgerSidebar = () => {
  const isHamburgerOpen = useSelector(selectIsHamburgerOpen);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setIsHamburgerOpen(!isHamburgerOpen));
  };

  return (
    <AnimatePresence>
      {isHamburgerOpen && (
        <>
          <motion.div
            className="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={handleClick}
          />
          <motion.aside
            initial={{ x: -1000 }}
            animate={{ x: 1 }}
            exit={{ x: 1000, transition: { ease: "easeOut" } }}
            transition={{ duration: 0.5 }}
            className="h-full w-96 absolute left-0"
          >
            <div className="h-screen bg-white flex flex-col">
              <div className="flex justify-between items-center mx-4 py-5" >
                <Link onClick={handleClick} className="Logo" to="/">
                  <div className="text-2xl text-left font-bold">didi Smoothies</div>
                </Link>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 cursor-pointer stroke-black"
                    onClick={handleClick}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
              </div>

              <div className="mt-14 mx-4 space-y-4">
                <div onClick={handleClick}>
                  <Link className="text-3xl text-left underline" to="/buy-products">
                    <div>BUY-PRODUCTS</div>
                  </Link>
                </div>
                <div onClick={handleClick}>
                  <Link to="/contact" className="text-3xl text-left underline">
                    <div>CONTACT</div>
                  </Link>
                </div>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default HamburgerSidebar;
