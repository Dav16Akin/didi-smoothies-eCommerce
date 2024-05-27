import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import SignUpForm from "../../Components/Sign-up/Sign-up-form.Component";
import SignInForm from "../../Components/Sign-In/Sign-In-form.Component";

const SignIn = () => {
  const [showSignUp, setShowSignUp] = useState(false);

  const handleSignUpClick = () => {
    setShowSignUp(true);
  };

  return (
    <>
      <ToastContainer />
      <div className="grid grid-col-1 mt-8 text-left gap-0 justify-items-center">
        {!showSignUp ? (
          <>
            <SignInForm />
            <p onClick={handleSignUpClick} className="cursor-pointer mt-4">
              If you don't have an account, <span className="text-red-600">sign up here.</span> 
            </p>
          </>
        ) : (
          <SignUpForm />
        )}
      </div>
    </>
  );
};

export default SignIn;
