import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsHamburgerOpen } from "../../Store/Hamburger/hamburger.selector";
import { setIsHamburgerOpen } from "../../Store/Hamburger/hamburger.action";

const Hamburger = () => {
    const isHamburgerOpen = useSelector(selectIsHamburgerOpen)
    const dispatch = useDispatch()

    const HandleClick = () => {
        dispatch(setIsHamburgerOpen(!isHamburgerOpen))
    }

  return (
    <div onClick={HandleClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6 cursor-pointer"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </div>
  );
};

export default Hamburger;
