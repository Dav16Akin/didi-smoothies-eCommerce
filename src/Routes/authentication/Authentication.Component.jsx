import React from "react";

import SignUpForm from "../../Components/Sign-up/Sign-up-form.Component";
import SignInForm from "../../Components/Sign-In/Sign-In-form.Component";

const SignIn = () => {
  return (
    <div className="grid grid-cols-2 mt-8 text-left gap-0 justify-items-center">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default SignIn;
