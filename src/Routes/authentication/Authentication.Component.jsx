import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import SignUpForm from "../../Components/Sign-up/Sign-up-form.Component";
import SignInForm from "../../Components/Sign-In/Sign-In-form.Component";

const SignIn = () => {
  return (
    <>
      <ToastContainer/>
      <div className="grid grid-col-1 mt-8 text-left gap-0 justify-items-center">
        <SignInForm />
        
        {/* <SignUpForm /> */}
      </div>
    </>
  );
};

export default SignIn;
